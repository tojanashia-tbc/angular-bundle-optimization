import {Component, inject, OnInit} from '@angular/core';
import {Loan, LoansService} from "../../../../../../shared/src/lib/loans.service";

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css',
  standalone: false,
})
export class LoanListComponent implements OnInit {
  private loansService = inject(LoansService);
  loans!: Loan[];

  ngOnInit() {
    this.loans = this.loansService.getLoans();
  }
}
