import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class HomeService {
  constructor() {
  }

  showLoans() {
    console.log('showLoans')
  }

  showTransfers() {
    console.log('showTransfers');
  }

  showOffers() {
    console.log('showOffers')
  }
}
