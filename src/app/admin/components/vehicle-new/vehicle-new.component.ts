import { checkErrorExists } from 'src/app/shared/utils/inputError.verifier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { VehicleNewService } from '../../services/vehicle-new.service';

@Component({
  selector: 'app-vehicle-new',
  templateUrl: './vehicle-new.component.html',
  styleUrls: ['./vehicle-new.component.scss']
})
export class VehicleNewComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehicleNewService: VehicleNewService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  onSubmit() {
    console.log(this.form.value);
    const vehicleForm = this.form.value;
    if (this.form.valid) {
      this.vehicleNewService.createNewVehicle(vehicleForm);
      this.form.reset();
    }
  }

  vehicleStatusChange(event: any) {
    this.form.get("vehicleData")?.get("vehicleStatus")?.setValue(event.target.value);
  }

  batteryStatusChange(event: any) {
    this.form.get("vehicleData")?.get("batteryStatus")?.setValue(event.target.value);
  }

  hasError(errorName: string, controlName: string[]): boolean {
    return checkErrorExists(this.form, errorName, controlName);
  }

  private initializeForm(): void {
    this.form = this.formBuilder.group({
      vehicle: this.formBuilder.group({
        model: ['', Validators.required],
        totalVolume: ['', [Validators.required, Validators.min(0)]],
        connected: ['', [Validators.required, Validators.min(0)]],
        softwareUpdates: ['', [Validators.required, Validators.min(0)]],
      }),
      vehicleData: this.formBuilder.group({
        vinCode: ['', [Validators.required, Validators.minLength(20)]],
        odometer: ['', [Validators.required, Validators.min(0)]],
        tirePressure: ['', [Validators.required, Validators.pattern("[0-9]{2},[0-9]{2},[0-9]{2},[0-9]{2}")]],
        vehicleStatus: ['', Validators.required],
        batteryStatus: ['', Validators.required],
        fuelLevel: ['', Validators.required],
        lat: ['', [Validators.required, Validators.pattern("(^(\\+|\\-)?)(([0-9])+)?(\\.|,)?(([0-9])+)$")]],
        lon: ['', [Validators.required, Validators.pattern("(^(\\+|\\-)?)(([0-9])+)?(\\.|,)?(([0-9])+)$")]]
      })
    });
  }
}
