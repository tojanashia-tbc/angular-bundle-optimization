import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {Routes} from "@angular/router";
import {HomeService} from "../../../../../shared/src/lib/home.service";

export const HOME_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {
}
