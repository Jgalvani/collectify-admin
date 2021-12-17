import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  @Output() public appClickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {

    const isClickedOutside = !this.elementRef.nativeElement.contains(event.target);
    
    if (isClickedOutside) {
      this.appClickOutside.emit(event);
    }
  }
}
