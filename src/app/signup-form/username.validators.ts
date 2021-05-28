import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control:AbstractControl):ValidationErrors|null{
        if((control.value as string).indexOf(' ')>=0 )
            return {  cannotContainSpace:true  };
        return null;
    }

        static shouldBeUnique(control:AbstractControl):ValidationErrors|null{
          return new Promise((res,rej)=>{
          setTimeout(() =>  {
              if(control.value ==='hari')
                  res({shouldBeUnique:true});
              else
                  res(null);
          },2000);
          return null;
          })
        }
}
