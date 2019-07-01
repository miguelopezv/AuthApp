import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '../layout/layout.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [BrowserModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [...fromComponents.components]
})
export class AppModule {}
