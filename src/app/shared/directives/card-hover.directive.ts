import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appCardHover]',
})
export class CardHoverDirective{
  
  constructor(private elementoTokenInjecao: ElementRef, private rendereDOM: Renderer2) {
  }

  //add event listenner
  @HostListener('mouseenter') onMouseEnter() {
    this.rendereDOM.setStyle(this.elementoTokenInjecao.nativeElement, 'cursor', 'pointer')

    this.rendereDOM.addClass(this.elementoTokenInjecao.nativeElement, 'mat-mdc-elevation-specific');

    this.rendereDOM.addClass(this.elementoTokenInjecao.nativeElement, 'mat-elevation-z3')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rendereDOM.removeClass(this.elementoTokenInjecao.nativeElement, 'mat-mdc-elevation-specific');

    this.rendereDOM.removeClass(this.elementoTokenInjecao.nativeElement, 'mat-elevation-z3');
  }
}