import { Vehicle } from './../../../../shared/models/vehicle';
import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-image-graphs-holder',
  templateUrl: './image-graphs-holder.component.html',
  styleUrls: ['./image-graphs-holder.component.scss']
})
export class ImageGraphsHolderComponent implements OnInit {

  currentVehicle = this.vehicleService.getVehicle().subscribe(
    vehicle => this.setPercentageValues(vehicle)
  );

  softwareUpdatePercentage !: number;
  connectedVehiclePercentage !: number;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  private setPercentageValues(vehicle: Vehicle): void {

    const { totalVolume, connected, softwareUpdates} = vehicle;

    const connectedPercentage = this.calculatePercentage(totalVolume, connected, 100);

    const softwareUpdatesPercentage = this.calculatePercentage(totalVolume, softwareUpdates, 100);

    this.connectedVehiclePercentage = connectedPercentage;
    this.softwareUpdatePercentage = softwareUpdatesPercentage;
  
  }

  private calculatePercentage(
    totalAmount: string, 
    actualAmount: string, 
    percentage: number): number {

      const percentageString = (+actualAmount * percentage / +totalAmount).toFixed(2);

    return parseFloat(percentageString);
  }




}
