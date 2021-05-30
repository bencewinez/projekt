import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsageconsumptionreportComponent } from './components/add-usageconsumptionreport/add-usageconsumptionreport.component';
import { UsageconsumptionreportDetailsComponent } from './components/usageconsumptionreport-details/usageconsumptionreport-details.component';
import { UsageconsumptionreportsListComponent } from './components/usageconsumptionreports-list/usageconsumptionreports-list.component';
import { UsageconsumptionreportService } from './services/usageconsumptionreport.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddUsageconsumptionreportComponent,
    UsageconsumptionreportDetailsComponent,
    UsageconsumptionreportsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [UsageconsumptionreportService],
  bootstrap: [AppComponent]
})
export class AppModule { }