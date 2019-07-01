import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppRoutingModule } from '../app/app-routing.module';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppRoutingModule],
  exports: [...fromComponents.components]
})
export class LayoutModule {}
