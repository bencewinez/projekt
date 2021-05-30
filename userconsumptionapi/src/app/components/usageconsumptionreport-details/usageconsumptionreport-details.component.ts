import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Usageconsumptionreport } from 'src/app/models/usageconsumptionreport.model';
import { UsageconsumptionreportService } from 'src/app/services/usageconsumptionreport.service';

@Component({
  selector: 'app-usageconsumptionreport-details',
  templateUrl: './usageconsumptionreport-details.component.html',
  styleUrls: ['./usageconsumptionreport-details.component.css']
})
export class UsageconsumptionreportDetailsComponent implements OnInit, OnChanges {

  @Input() usageconsumptionreport?: Usageconsumptionreport;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentUsageconsumptionreport: Usageconsumptionreport = {
    href: '',
    id: '',
    product: '',
    status: '',
    published: false,
  };
  message = '';
  
  constructor(private usageconsumptionreportService: UsageconsumptionreportService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentUsageconsumptionreport = { ...this.usageconsumptionreport };
  }

  ngOnDestroy(): void {
    this.message = 'destroyed';
  }

  updatePublished(status: boolean): void {
    if (this.currentUsageconsumptionreport.id) {
      this.usageconsumptionreportService.update(this.currentUsageconsumptionreport.id, { published: status })
      .then(() => {
        this.currentUsageconsumptionreport.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateUsageconsumptionreport(): void {
    const data = {
      bucket: this.currentUsageconsumptionreport.bucket,
      href: this.currentUsageconsumptionreport.href,
      id: this.currentUsageconsumptionreport.id,
      product: this.currentUsageconsumptionreport.product,
      status: this.currentUsageconsumptionreport.status,
      published: this.currentUsageconsumptionreport.published
    };

    if (this.currentUsageconsumptionreport.id) {
      this.usageconsumptionreportService.update(this.currentUsageconsumptionreport.id, data)
        .then(() => this.message = 'The report was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteUsageconsumptionreport(): void {
    if (this.currentUsageconsumptionreport.id) {
      this.usageconsumptionreportService.delete(this.currentUsageconsumptionreport.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The report was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
