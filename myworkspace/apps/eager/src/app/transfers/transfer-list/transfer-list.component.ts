import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Transfer, TransferService} from "../../../../../../shared/src/lib/transfers.service";

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrl: './transfer-list.component.css',
  standalone: false
})
export class TransferListComponent implements OnInit {
  transfers!: Transfer[];

  constructor(private router: Router, private transferService: TransferService) {
  }

  ngOnInit() {
    this.transfers = this.transferService.getTransfers();
  }

  newTransfer(): void {
    this.router.navigate([`transfers/new-transfer`]);
  }
}
