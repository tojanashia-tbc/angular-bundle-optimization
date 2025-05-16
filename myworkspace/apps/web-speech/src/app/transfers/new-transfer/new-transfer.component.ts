import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {SpeakDirective} from "../../core/directive/appSpeak";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {VoiceCommandService} from "../../core/services/voice-command.service";

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css'],
  imports: [
    FormsModule,
    RouterLink,
    NgIf,
    SpeakDirective,
    TranslatePipe
  ]
})
export class NewTransferComponent implements OnInit {
  private translate = inject(TranslateService);
  private voiceService = inject(VoiceCommandService);

  transfer = {
    amount: null,
    recipient: '',
    method: ''
  };
  transferStatus: string | null = null;

  ngOnInit() {
    this.voiceService.command$.subscribe(cmd => {
      if (cmd) {
        const active = document.activeElement as HTMLInputElement;

        if (active && active.tagName === 'INPUT') {
          const inputValue = active.value;
          const newValue = cmd.toString();
          active.value = newValue;

          // Dispatch an input event so Angular updates ngModel
          active.dispatchEvent(new Event('input'));
        }
      }
    })
  }

  onSubmit() {
    if (this.transfer.amount && this.transfer.recipient && this.transfer.method) {
      // Mocking a successful transfer submission
      this.transferStatus = `Transfer of $${this.transfer.amount} to ${this.transfer.recipient} using ${this.transfer.method} is successful!`;
      setTimeout(() => {
        if (this.transferStatus) {
          const utterance = new SpeechSynthesisUtterance(this.transferStatus);
          window.speechSynthesis.speak(utterance);
        }
      }, 1000)
      // Reset the form after submission
      this.transfer = {amount: null, recipient: '', method: ''};
    } else {
      this.transferStatus = 'Please fill in all fields before submitting.';
    }
  }

  onChange($event: any) {
    if ($event) {
      const translatedText = this.translate.instant('SELECT.' + $event.toUpperCase());
      const utterance = new SpeechSynthesisUtterance(translatedText);
      window.speechSynthesis.speak(utterance);
    }
  }
}
