import { VehicleData } from './../../shared/models/vehicle-data';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { VehicleForm } from './../../shared/models/vehicle-form';
import { Injectable } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

const API = environment.apiUrl;
const VEHICLES_ENDPOINT = "vehicles";
const VEHICLE_DATA_ENDPOINT = "vehiclesData";

@Injectable({
  providedIn: 'root'
})
export class VehicleNewService {

constructor(private httpClient: HttpClient) { }

createNewVehicle(vehicleForm: VehicleForm) : void {
  const vehicle = vehicleForm.vehicle;
  const vehicleData = vehicleForm.vehicleData;

  this.createVehicle(vehicle);
  this.createVehicleData(vehicleData);
}

private createVehicle(vehicle: Vehicle) {
  this.httpClient.post(`${API}/${VEHICLES_ENDPOINT}`, vehicle).subscribe(
    data => console.log(data),
    error => console.log(error)
  );
}

private createVehicleData(vehicleData: VehicleData) {
  this.httpClient.post(`${API}/${VEHICLE_DATA_ENDPOINT}`, vehicleData).subscribe(
    data => console.log(data),
    error => console.log(error)
  );
}

}
