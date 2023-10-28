import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadCardComponent } from './components/lead-card/lead-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LeadCardComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LeadCardComponent
  ],
})
export class SharedModule {}
