import { Component, OnInit,Input } from '@angular/core';
import { ILead } from '../../models/ILead';
import { ActivatedRoute } from '@angular/router';
import { LeadsService } from '../../services/leads.service';

@Component({
  selector: 'app-lead-card',
  templateUrl: './lead-card.component.html',
  styleUrls: ['./lead-card.component.scss']
})
export class LeadCardComponent implements OnInit{
  duplicateFlag!:boolean
  leadID:string=''
  @Input() lead!:ILead 
  constructor(private _ActivatedRoute:ActivatedRoute,private _leadServices:LeadsService){}
  ngOnInit(): void {
     this.leadID = this._ActivatedRoute.snapshot.paramMap.get('id')!;
     this.duplicateFlag = this.lead.duplicate_of === this.leadID 
  }
  markAsDuplicated(checked:boolean)
  {
    this.duplicateFlag = checked
    if (checked) {
      console.log('if',checked);
      this._leadServices.markLeadAsDuplicate(this.lead,this.leadID).subscribe((res)=>{
        console.log(res);
        
      })
      
    }
    else
    {
      console.log('else',checked);
      this._leadServices.markLeadAsDuplicate(this.lead,null).subscribe((res)=>{
        console.log(res);
        
      })
    }
  }
}
