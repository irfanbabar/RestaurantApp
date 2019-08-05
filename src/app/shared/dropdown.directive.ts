import { Directive, Input, HostBinding, HostListener, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: '[ngDropdown]'
})

export class DropdownDirective implements OnInit {
  // this will toggle open class when click dropdown
  // @HostBinding('class.open') isOpen: boolean;
  // @HostListener('click') toggleClass() {
  //   this.isOpen = !this.isOpen;
  // }

  // this will open dropdown on clicking it and close it if we click to anywhere in document
  @HostBinding('class.open') isOpen: boolean;
  @HostListener('document:click', ['$event']) toggleClass() {
    this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elemRef: ElementRef) {}

  ngOnInit() {
    this.isOpen = false;
  }
}