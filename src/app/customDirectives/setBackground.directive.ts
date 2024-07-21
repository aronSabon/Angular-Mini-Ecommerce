import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})
export class SetBackground implements OnInit {
    // @Input ('setBackground')backgroundColor:string="red";
    // @Input() color:string='black';
    @Input() title:string='';

   @Input('setBackground') setBackgroundColorAndTextColor:{backgroundColor:string,colorr:string};

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        // this.element.nativeElement.style.color='green';
        // this.element.nativeElement.style.backgroundColor='gray';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.setBackgroundColorAndTextColor.backgroundColor);
        this.renderer.setStyle(this.element.nativeElement, 'color', this.setBackgroundColorAndTextColor.colorr);
        this.renderer.setAttribute(this.element.nativeElement, 'title', this.title);

    }

}