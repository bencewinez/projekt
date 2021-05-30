import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsageconsumptionreportsListComponent } from './components/usageconsumptionreports-list/usageconsumptionreports-list.component';
import { AddUsageconsumptionreportComponent } from './components/add-usageconsumptionreport/add-usageconsumptionreport.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'usageconsumptionreports', pathMatch: 'full' },
  { path: 'usageconsumptionreports', component: UsageconsumptionreportsListComponent },
  { path: 'add', component: AddUsageconsumptionreportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
