import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechControlService {
  private _isSpeakerEnabled = true;

  get isSpeakerEnabled(): boolean {
    return this._isSpeakerEnabled;
  }

  toggleSpeaker(enable: boolean): void {
    this._isSpeakerEnabled = enable;
  }
}
