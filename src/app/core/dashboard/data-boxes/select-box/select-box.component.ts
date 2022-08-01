import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Vehicles } from 'src/app/shared/models/vehicle';
import { VehicleService } from '../../services/vehicle.service';

const INITIAL_OPTION = "1";

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {

  @Input() dataTitle: string = "Veículo";

  vehicleOptions : FormControl = new FormControl(INITIAL_OPTION);

  vehicleList !: Vehicles;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getVehiclesList();
    this.listenForSelectedVehicle();
  }

  private listenForSelectedVehicle() : void {
    this.vehicleOptions.valueChanges.subscribe(
      vehicleId => {
        this.vehicleService.setCurrentVehicleById(vehicleId)
      }
    );
  }

  private getVehiclesList() : void {
    this.vehicleService.getVehicles().subscribe(
      vehicles => this.vehicleList = vehicles
    );
  }

}
