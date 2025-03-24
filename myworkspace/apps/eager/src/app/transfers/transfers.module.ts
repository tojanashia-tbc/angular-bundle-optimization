import {NgModule} from '@angular/core';
import {TransferListComponent} from './transfer-list/transfer-list.component';
import {FormsModule} from '@angular/forms';
import {NewTransferComponent} from './new-transfer/new-transfer.component';
import {RouterLink, Routes} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

export const TRANSFER_ROUTES: Routes = [
  {path: 'transfers', component: TransferListComponent},
  {path: 'transfers/new-transfer', component: NewTransferComponent},
]

@NgModule({
  imports: [FormsModule, RouterLink, NgIf, NgForOf],
  declarations: [TransferListComponent, NewTransferComponent],
})
export class TransfersModule {
}
