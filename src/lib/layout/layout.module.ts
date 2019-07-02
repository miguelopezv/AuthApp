import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromComponents from './components';
import { AppRoutingModule } from '../app/app-routing.module';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, AppRoutingModule],
  providers: [AuthService, AuthGuard],
  exports: [...fromComponents.components]
})
export class LayoutModule {}
