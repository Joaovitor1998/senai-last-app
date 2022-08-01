import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-image-holder',
  templateUrl: './image-holder.component.html',
  styleUrls: ['./image-holder.component.scss']
})
export class ImageHolderComponent implements OnInit {

  private vehicleImagePath: string = "../../../../../assets/images/";
  dashboardVehicleImage !: string;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getCurrentVehicleImage();
  }

  private getCurrentVehicleImage(): void {
    this.vehicleService.getVehicleImage().subscribe(
      imageName => this.dashboardVehicleImage = this.vehicleImagePath + imageName
    );
  }

}
