import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/authentication/services/user.service';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAdmin = this.userService.getPermissions().includes("ADMIN");

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createNewVehicle() {
    this.router.navigateByUrl("/admin");
  }

}
