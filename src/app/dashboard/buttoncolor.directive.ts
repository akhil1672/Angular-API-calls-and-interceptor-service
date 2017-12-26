import { Directive ,Input, ElementRef, Renderer,OnInit} from '@angular/core';

@Directive({
  selector: '[appButtoncolor]'
})
export class ButtoncolorDirective {

  constructor(public el: ElementRef, public renderer: Renderer) { }
  
  @Input()
  percent:number;

  ngOnInit() {
      //console.log(this.percent);
    if (this.percent > 90) {
      //console.log('changing color of button');
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'green');
    }
    if (this.percent > 76 && this.percent <= 90) {
     // console.log('changing color of button');
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'blue');
    }
    if (this.percent > 50 && this.percent <= 76) {
      //console.log('changing color of button');
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'black');
    }
    if (this.percent > 26 && this.percent <= 50) {
        this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'orange');
    }
    if(this.percent <26){
      this.renderer.setElementStyle(this.el.nativeElement, 'background-color', 'red');
    }
  }

}
