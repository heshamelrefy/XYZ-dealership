import { Component,OnInit } from '@angular/core';
import { LeadsService } from './../../shared/services/leads.service';
import { ILead } from 'src/app/shared/models/ILead';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leads-list',
  templateUrl: './leads-list.component.html',
  styleUrls: ['./leads-list.component.scss']
})
export class LeadsListComponent implements OnInit {
  leadsList:ILead[]=[]
  
  constructor(private _leadServices:LeadsService,private _Router:Router){}
  ngOnInit(): void {
    this._leadServices.getLeadsList().subscribe((res)=>{
      console.log(res);
      this.leadsList = res
      
    })
  }
  getPotentialDuplicatesID(leadID:string)
  {
    this._Router.navigate([`leads/${leadID}/potential-duplicates`])
  }
}
