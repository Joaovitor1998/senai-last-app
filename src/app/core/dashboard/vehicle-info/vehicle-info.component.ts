import { FormControl } from '@angular/forms';
import { VehicleData } from './../../../shared/models/vehicle-data';
import { VehicleDataService } from './../services/vehicle-data.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  vehicleData!: VehicleData;

  constructor(private vehicleDataService: VehicleDataService) { }

  ngOnInit() {
    this.vehicleDataService.getVehicleData().subscribe( vehicleData => {
      this.vehicleData =  vehicleData;
   });
  }

}
