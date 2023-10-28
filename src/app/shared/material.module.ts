import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
const material = [
  ButtonModule,
  RippleModule,
  InputTextModule,
  CardModule,
  CheckboxModule
];

@NgModule({
  declarations: [],
  imports: material,
  exports: material,
})
export class MaterialModule {}
