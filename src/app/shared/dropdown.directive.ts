import { Directive, Input, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: '[ngDropdown]'
})

export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean;
  @HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit() {
    this.isOpen = false;
  }
}