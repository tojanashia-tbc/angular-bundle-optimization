import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TransferService} from "../../../../shared/src/lib/transfers.service";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";

const LANG_COOKIE = 'app_lang';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TranslatePipe],
  providers: [TransferService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lang: string;

  constructor(private translate: TranslateService) {
    const savedLang = this.getCookie(LANG_COOKIE);
    this.lang = savedLang || 'en';
    translate.use(this.lang);
    this.setCookie(LANG_COOKIE, this.lang, 365);
  }

  switchLang(lang: string) {
    this.lang = lang;
    this.translate.use(this.lang);
    this.setCookie(LANG_COOKIE, this.lang, 365);
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  getCookie(name: string): string | null {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))
      ?.split('=')[1] || null;
  }
}
