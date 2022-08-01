import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-boxes-wrapper',
  templateUrl: './vehicle-boxes-wrapper.component.html',
  styleUrls: ['./vehicle-boxes-wrapper.component.scss']
})
export class VehicleBoxesWrapperComponent implements OnInit {

  vehicle$ : Observable<Vehicle> = this.vehicleService.getVehicle();

  constructor(private vehicleService: VehicleService) { 
    this.vehicleService.setCurrentVehicleById(1);
  }

  ngOnInit(): void {
  }

}
