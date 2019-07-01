import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: '', component: fromComponents.HomeLayoutComponent }
];

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, RouterModule.forChild(ROUTES)]
})
export class HomeModule {}
