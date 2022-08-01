import { FormControl } from '@angular/forms';
import { VehicleData } from './../../../shared/models/vehicle-data';
import { VehicleDataService } from './../services/vehicle-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  vehicleData!: VehicleData;

  vinCodeInput: FormControl = new FormControl();

  constructor(private vehicleDataService: VehicleDataService) { }

  ngOnInit() {
    this.vehicleDataService.getVehicleData().subscribe( vehicleData => {
      this.vehicleData =  vehicleData;
      this.vinCodeInput.setValue(vehicleData.vinCode);
   });
  }



}
