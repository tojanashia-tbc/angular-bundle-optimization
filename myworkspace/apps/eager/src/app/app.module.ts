import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HomeModule} from "./home/home.module";
import {LoansModule} from "./loans/loans.module";
import {TransfersModule} from "./transfers/transfers.module";
import {AppRoutIngModule} from "./app-routIng.module";
import {BrowserModule} from "@angular/platform-browser";
import {TransferService} from "../../../../shared/src/lib/transfers.service";

@NgModule({
  imports: [BrowserModule, AppRoutIngModule, HomeModule, LoansModule, TransfersModule],
  declarations: [AppComponent],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
