import {Routes} from '@angular/router';

export const TRANSFER_ROUTES: Routes = [
  {
    path: '', loadComponent: () => import('./transfer-list/transfer-list.component').then(m => m.TransferListComponent)
  },
  {
    path: 'new-transfer',
    loadComponent: () => import('./new-transfer/new-transfer.component').then(m => m.NewTransferComponent)
  }
]
