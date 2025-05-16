import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Loan, LoansService} from "../../../../../../shared/src/lib/loans.service";
import {NgForOf, UpperCasePipe} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrl: './loan-list.component.css',
  imports: [
    NgForOf,
    TranslatePipe,
    UpperCasePipe
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

