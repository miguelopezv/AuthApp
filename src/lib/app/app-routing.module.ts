import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from '../layout/components';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('../prices/prices.module').then(m => m.PricesModule)
  },
  {
    path: 'protected',
    loadChildren: () =>
      import('../protected/protected.module').then(m => m.ProtectedModule)
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
