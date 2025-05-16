import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class AudioService {
  private startSound = new Audio('assets/sounds/start.wav');

  constructor() {
    this.startSound.load(); // Preload immediately
  }

  playStartSound() {
    this.startSound.play().catch(err => console.error('Playback error:', err));
  }
}
