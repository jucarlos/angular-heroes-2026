import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { Sidemenu } from './components/sidemenu/sidemenu';

@NgModule({
  declarations: [
    Sidemenu,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
    Sidemenu,

  ]
})
export class SharedModule {}
