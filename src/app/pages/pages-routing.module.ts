import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/routers/appRoutes';

const routes: Routes = [
  {
    path: '', redirectTo:AppRoutes.leads.base,pathMatch:'full'
  },
  {
    path: AppRoutes.leads.base,
    loadChildren: () =>
      import('./leads-list/leads-list.module').then((m) => m.LeadsListModule),
  },
  {
    path: AppRoutes.leads.PotentialDuplicates,
    loadChildren: () =>
      import('./potential-duplicates/potential-duplicates.module').then((m) => m.PotentialDuplicatesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
