import { PasswordChangeComponent } from './password-change.component';
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators{
        static shouldBeSame(control:AbstractControl):ValidationErrors|null{
          console.log(control.value);
          if(control.value !== '1234' )
            return {
              shouldBeSame:true
            }
         return null;
          }
         static shouldBeEqual(control:AbstractControl):ValidationErrors|null{
          let np=control.get('new_password');
          let cp=control.get('current_password')
          console.log(np+"  "+cp);
          if(np!==cp)
            return {
              shouldBeEqual:true
            }
            else
                return null;
          }
}
