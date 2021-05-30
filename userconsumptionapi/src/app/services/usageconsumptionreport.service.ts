import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usageconsumptionreport } from '../models/usageconsumptionreport.model';

@Injectable({
  providedIn: 'root'
})
export class UsageconsumptionreportService {
  private dbPath = '/usageconsumptionreports';

  usageconsumptionreportsRef: AngularFirestoreCollection<Usageconsumptionreport>;
  
  constructor(private db: AngularFirestore) { 
    this.usageconsumptionreportsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Usageconsumptionreport> {
    return this.usageconsumptionreportsRef;
  }

  create(usageconsumptionreport: Usageconsumptionreport): any {
    return this.usageconsumptionreportsRef.add({ ...usageconsumptionreport });
  }

  update(id: string, data: any): Promise<void> {
    return this.usageconsumptionreportsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.usageconsumptionreportsRef.doc(id).delete();
  }
}
