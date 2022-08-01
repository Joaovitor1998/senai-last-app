import { VehicleService } from './services/vehicle.service';
import { SharedModule } from './../../shared/shared.module';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { ImageHolderComponent } from './image-graphs/image-holder/image-holder.component';
import { ImageGraphsHolderComponent } from './image-graphs/image-graphs-holder/image-graphs-holder.component';
import { VehicleBoxesWrapperComponent } from './data-boxes/vehicle-boxes-wrapper/vehicle-boxes-wrapper.component';
import { DataBoxComponent } from './data-boxes/data-box/data-box.component';
import { SelectBoxComponent } from './data-boxes/select-box/select-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JwtInterceptor } from 'src/app/authentication/jwt.interceptor';


@NgModule({
  declarations: [
    DashboardComponent,
    SelectBoxComponent,
    DataBoxComponent,
    VehicleBoxesWrapperComponent,
    ImageGraphsHolderComponent,
    ImageHolderComponent,
    VehicleInfoComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    VehicleService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ]
})
export class DashboardModule { }
