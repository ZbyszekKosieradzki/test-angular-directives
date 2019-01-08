import { Directive, ElementRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSuperBorder]'
})
export class SuperBorderDirective implements OnInit, OnChanges {

  @Input() appSuperBorder = 'red';


  constructor(
    private $element: ElementRef

  ) {

  }
  applayBorderColor(){
    const $div = this.$element.nativeElement;
    $div.style.border = '5px solid ' + this.appSuperBorder;

    //console.log();
  }

  ngOnInit() {
    this.applayBorderColor();
  }


  ngOnChanges(changes: SimpleChanges) {

    this.appSuperBorder = changes.appSuperBorder.currentValue;
    console.log(changes.currentValue);
  }
}
