import { AbstractControl, FormGroup } from "@angular/forms";

export function checkErrorExists(
  form: FormGroup,
  errorName: string, 
  controlName: string[]): boolean {

    let control: AbstractControl | null = form.get(controlName);
    
    const isDirty = control?.dirty;
    const isTouched = control?.touched;
    const hasError = control?.hasError(errorName) ;

    if( (isDirty || isTouched) && hasError ){
      return true;
    }

    return false;
    
  }