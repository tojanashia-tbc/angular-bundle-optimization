import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {Router} from '@angular/router';
import {Transfer, TransferService} from "../../../../../../shared/src/lib/transfers.service";
import {NgForOf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.css',
  imports: [
    NgForOf,
    TranslatePipe
  ]
})
export class TransferListComponent implements OnInit {
  private transferService = inject(TransferService);
  transfers: WritableSignal<Transfer[]> = signal([]);

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.transfers.set(this.transferService.getTransfers());
  }

  newTransfer(): void {
    this.router.navigate([`transfers/new-transfer`]);
  }

  trackByFn(index: number, item: Transfer){
    return item.id;
  }
}
