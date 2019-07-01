import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [BrowserModule, LayoutModule],
  providers: [],
  bootstrap: [...fromComponents.components]
})
export class AppModule {}
