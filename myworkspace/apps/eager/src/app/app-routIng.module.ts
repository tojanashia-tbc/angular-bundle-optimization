import {RouterModule, Routes} from '@angular/router';
import {TRANSFER_ROUTES} from "./transfers/transfers.module";
import {HOME_ROUTES} from "./home/home.module";
import {LOAN_ROUTES} from "./loans/loans.module";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  ...HOME_ROUTES,
  ...LOAN_ROUTES,
  ...TRANSFER_ROUTES,
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutIngModule {
}

