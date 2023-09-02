import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighttext]',
})
export class HighlighttextDirective {
  //! Attribute directive
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'purple';
  }
}
