import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILead } from 'src/app/shared/models/ILead';
import { LeadsService } from 'src/app/shared/services/leads.service';

@Component({
  selector: 'app-potential-duplicates',
  templateUrl: './potential-duplicates.component.html',
  styleUrls: ['./potential-duplicates.component.scss']
})
export class PotentialDuplicatesComponent implements OnInit {
  potentialDuplicatesList:ILead[]=[]
  leadID:string=''
  constructor(private _ActivatedRoute:ActivatedRoute,private _leadServices:LeadsService){
     this.leadID = this._ActivatedRoute.snapshot.paramMap.get('id')!;
  }
  ngOnInit(): void {
    this.getPotentialDuplicatesList()
  }
  getPotentialDuplicatesList()
  {
    this._leadServices.getPotentialDuplicates(this.leadID).subscribe((ids)=>{
      this._leadServices.getLeadsDetails(ids).subscribe((res)=>{
        this.potentialDuplicatesList=res
      })
      
    })

  }
}
