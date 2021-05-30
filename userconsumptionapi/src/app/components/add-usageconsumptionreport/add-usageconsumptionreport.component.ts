import { Component, OnInit } from '@angular/core';
import { Usageconsumptionreport } from 'src/app/models/usageconsumptionreport.model';
import { UsageconsumptionreportService } from 'src/app/services/usageconsumptionreport.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-usageconsumptionreport',
  templateUrl: './add-usageconsumptionreport.component.html',
  styleUrls: ['./add-usageconsumptionreport.component.css']
})
export class AddUsageconsumptionreportComponent implements OnInit {

  usageconsumptionreport: Usageconsumptionreport = new Usageconsumptionreport();
  submitted = false;

  constructor(private usageconsumptionreportService: UsageconsumptionreportService, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
  }

  saveUsageconsumptionreport(message: string, action: string): void {
    this.usageconsumptionreportService.create(this.usageconsumptionreport).then(() => {
      console.log('New report created!');
      this.submitted = true;
    });
    this.openSnackBar(message, action);
  }

  newUsageconsumptionreport(): void {
    this.submitted = false;
    this.usageconsumptionreport = new Usageconsumptionreport();
  }

}
