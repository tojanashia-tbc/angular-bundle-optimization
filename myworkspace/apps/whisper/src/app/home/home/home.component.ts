import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    TranslatePipe
  ]
})
export class HomeComponent {
  constructor(private router: Router) {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'en-EN';

    recognition.onresult = async (event: any) => {
      const voiceCommand = event.results[0][0].transcript.toLowerCase();
      this.navigateTo(voiceCommand);
    };

    recognition.start();
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }

  speak(text: string) {
    const voices = speechSynthesis.getVoices();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('TTS not supported in this browser.');
    }
  }
}
