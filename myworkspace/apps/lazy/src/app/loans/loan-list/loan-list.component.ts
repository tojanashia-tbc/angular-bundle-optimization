import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Loan, LoansService} from "../../../../../../shared/src/lib/loans.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css',
  imports: [
    NgForOf
  ],
})
export class LoanListComponent implements OnInit {
  private loansService = inject(LoansService);
  loans: WritableSignal<Loan[]> = signal([]);

  ngOnInit() {
    this.loans.set(this.loansService.getLoans());
  }

  trackByFn(index: number, item: Loan) {
    return item.id;
  }
}

