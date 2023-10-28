import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ILead } from "../models/ILead";
import { ApiRoutes } from './../routers/apiRoutes';
import { Observable, forkJoin } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private readonly url: string = 'http://localhost:3000/api/leads';
  constructor(private http: HttpClient) { }
  getLeadsList():Observable<ILead[]> {
    return this.http.get(this.url + ApiRoutes.leads.getleads) as Observable<ILead[]>
  }

  getPotentialDuplicates(lead_id: string) {
    return this.http.get(this.url +'/'+ lead_id + ApiRoutes.leads.getPotentialDuplicates) as Observable<string[]>
  }
  getLeadsDetails(ids: string[]): Observable<any> {
    const observables = ids.map(id => this.http.get(this.url +'/' + id));
    return forkJoin(observables);
  }
  markLeadAsDuplicate(lead: ILead, duplicate_of_lead_id: string|null) {
    let newLead = {
      ...lead,
      duplicate_of:duplicate_of_lead_id
    }
    return this.http.put(this.url + '/' + lead.lead_id , newLead ) as Observable<ILead[]>
  }
}
