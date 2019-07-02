import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppRoutingModule } from '../app/app-routing.module';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppRoutingModule],
  providers: [AuthService],
  exports: [...fromComponents.components]
})
export class LayoutModule {}
