import { VehicleDataService } from './vehicle-data.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Vehicle, Vehicles } from 'src/app/shared/models/vehicle';
import { environment } from 'src/environments/environment';
import { getImageFromVehicleName } from 'src/app/shared/utils/imageName.converter';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicleImage: BehaviorSubject<string> = new BehaviorSubject<string>("ranger.png");
  vehicle: BehaviorSubject<Vehicle> = new BehaviorSubject<Vehicle>({} as Vehicle);

  constructor(
    private httpCliente: HttpClient, 
    private vehicleDataService: VehicleDataService
  ) { }

  ngOnInit(): void {
  }

  private getVehicleById(id: string | number): Observable<Vehicle> {
    return this.httpCliente.get<Vehicle>(`${API}/vehicles/${id}`);
  }

  setCurrentVehicleById(id: string | number): void {

    this.getVehicleById(id).pipe(
      tap(
        vehicle => {
          const image = getImageFromVehicleName(vehicle.model, 'png');
          this.vehicleImage.next(image);
          this.vehicle.next(vehicle)
          this.vehicleDataService.setVehicleData(vehicle.id ?? 1);
        }
      )
    ).subscribe();
  }

  getVehicle(): Observable<Vehicle> {
    return this.vehicle.asObservable();
  }

  getVehicles(): Observable<Vehicles> {
    return this.httpCliente.get<Vehicles>(`${API}/vehicles`);
  }

  getVehicleImage(): Observable<string> {
    return this.vehicleImage.asObservable();
  }

}
