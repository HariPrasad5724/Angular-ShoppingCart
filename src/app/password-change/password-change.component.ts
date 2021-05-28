import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {

  form =new FormGroup(
      {
        old_password:new FormControl('',[Validators.required,PasswordValidators.shouldBeSame]),
        new_password:new FormControl('',[Validators.required]),
        current_password:new FormControl('',[Validators.required,PasswordValidators.shouldBeEqual])
      });

  changePassword(){
     this.form.setErrors({
       invalidLogin:true
     });
     console.log("Submitted");
  }
  get old_password(){
    return this.form.get('old_password');
  }

  get new_password(){
    return this.form.get('new_password');
  }

  get current_password(){
    return this.form.get('current_password');
  }
}
