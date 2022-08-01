import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VehicleData } from 'src/app/shared/models/vehicle-data';

const API = environment.apiUrl;
const ENDPOINT = "vehiclesData";

@Injectable({
  providedIn: 'root'
})
export class VehicleDataService {

  vehicleData: BehaviorSubject<VehicleData> = new BehaviorSubject<VehicleData>({} as VehicleData);

  constructor(private httpClient: HttpClient) { }


  setVehicleData(id: string | number): void {
    this.httpClient.get<VehicleData>(`${API}/${ENDPOINT}/${id}`).subscribe(
      vehicleData => this.vehicleData.next(vehicleData)
    );
  }

  getVehicleData(): Observable<VehicleData> {
    return this.vehicleData.asObservable();
  }

}
