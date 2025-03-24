import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css'],
  standalone: false
})
export class NewTransferComponent {
  transfer = {
    amount: null,
    recipient: '',
    method: ''
  };
  transferStatus: string | null = null;

  onSubmit() {
    if (this.transfer.amount && this.transfer.recipient && this.transfer.method) {
      // Mocking a successful transfer submission
      this.transferStatus = `Transfer of $${this.transfer.amount} to ${this.transfer.recipient} using ${this.transfer.method} is successful!`;

      // Reset the form after submission
      this.transfer = { amount: null, recipient: '', method: '' };
    } else {
      this.transferStatus = 'Please fill in all fields before submitting.';
    }
  }
}
