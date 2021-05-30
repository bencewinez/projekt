import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Usageconsumptionreport } from 'src/app/models/usageconsumptionreport.model';
import { UsageconsumptionreportService } from 'src/app/services/usageconsumptionreport.service';

@Component({
  selector: 'app-usageconsumptionreports-list',
  templateUrl: './usageconsumptionreports-list.component.html',
  styleUrls: ['./usageconsumptionreports-list.component.css']
})
export class UsageconsumptionreportsListComponent implements OnInit {

  usageconsumptionreports?: Usageconsumptionreport[];
  currentUsageconsumptionreport?: Usageconsumptionreport;
  currentIndex = -1;
  title = '';


  constructor(private usageconsumptionreportService: UsageconsumptionreportService) { }

  ngOnInit(): void {
    this.retrieveUsageconsumptionreports();
  }

  refreshList(): void {
    this.currentUsageconsumptionreport = undefined;
    this.currentIndex = -1;
    this.retrieveUsageconsumptionreports();
  }

  retrieveUsageconsumptionreports(): void {
    this.usageconsumptionreportService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.usageconsumptionreports = data;
    });
  }

  setActiveUsageconsumptionreport(usageconsumptionreport: Usageconsumptionreport, index: number): void {
    this.currentUsageconsumptionreport = usageconsumptionreport;
    this.currentIndex = index;
  }
}
