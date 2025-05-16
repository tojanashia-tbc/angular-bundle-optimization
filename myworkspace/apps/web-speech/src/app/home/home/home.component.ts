import {Component, inject} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {Router} from "@angular/router";
import {SpeakDirective} from "../../core/directive/appSpeak";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    TranslatePipe,
    SpeakDirective
  ]
})
export class HomeComponent {
  private router = inject(Router);

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
