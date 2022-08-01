import { DonutGraphComponent } from './components/donut-graph/donut-graph.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuContentComponent } from './components/menu-content/menu-content.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormErrorMessageComponent } from './components/form-error-message/form-error-message.component';


@NgModule({
  declarations: [
    MenuContentComponent,
    MenuComponent,
    MenuBarComponent,
    DonutGraphComponent,
    FormErrorMessageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuComponent,
    DonutGraphComponent,
    FormErrorMessageComponent
  ]
})
export class SharedModule { }
