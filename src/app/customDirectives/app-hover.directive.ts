import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {
  // backColor:string='black';

  constructor(private element:ElementRef, private renderer:Renderer2) { 

  }
  @HostBinding('style.backgroundColor') backgroundColor:string='black';
  @HostBinding('style.color') color:string='cyan';
  @HostBinding('style.border') border:String='none';

  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor='red';
    this.color='blue';
    this.border='green 2px solid'
  }
  @HostListener('mouseout') ONMouseOut(){
    this.backgroundColor='black';
    this.color='cyan';
    this.border='none';
  }
}
