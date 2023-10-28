import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialDuplicatesComponent } from './potential-duplicates.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
const routes: Routes = [
  {path:'',component:PotentialDuplicatesComponent}
];

@NgModule({
  declarations: [
    PotentialDuplicatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[RouterModule],
})
export class PotentialDuplicatesModule { }
