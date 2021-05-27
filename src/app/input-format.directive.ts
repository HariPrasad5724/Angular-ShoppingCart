import { Directive,ElementRef,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format:string='lowercase';
 constructor(private el:ElementRef) {

  }
  @HostListener('blur') onBlur(){
    let value=this.el.nativeElement.value;
    if(this.format=='lowercase')
      this.el.nativeElement.value=value.toLowerCase();
    else
      this.el.nativeElement.value=value.toUpperCase();
  }
}