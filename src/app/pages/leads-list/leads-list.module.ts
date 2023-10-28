import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadsListComponent } from './leads-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  {path:'',component:LeadsListComponent}
];

@NgModule({
  declarations: [
    LeadsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports:[RouterModule],
})
export class LeadsListModule { }
