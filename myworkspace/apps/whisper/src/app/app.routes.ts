import {Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {TransferListComponent} from './transfers/transfer-list/transfer-list.component';
import {LoanListComponent,} from './loans/loan-list/loan-list.component';

export const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home-routes').then((m) => m.HOME_ROUTES)},
  {path: 'transfers', loadChildren: () => import('./transfers/transfers-routes').then((m) => m.TRANSFER_ROUTES)},
  {path: 'loans', loadChildren: () => import('./loans/loans-routes').then((m) => m.LOAN_ROUTES)},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

