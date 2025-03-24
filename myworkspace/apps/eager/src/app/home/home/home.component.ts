import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
