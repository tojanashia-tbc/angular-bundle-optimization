import {NgModule} from '@angular/core';
import {LoanListComponent} from './loan-list/loan-list.component';
import {Routes} from "@angular/router";
import {NgForOf} from "@angular/common";


export const LOAN_ROUTES: Routes = [
  {path: 'loans', component: LoanListComponent},
]

@NgModule({
  imports: [
    NgForOf
  ],
  declarations: [LoanListComponent]
})
export class LoansModule {
}
