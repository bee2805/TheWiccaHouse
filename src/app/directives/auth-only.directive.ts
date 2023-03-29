import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAuthOnly]'
})
export class AuthOnlyDirective {

  @Input() isVerified: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit (){
    this.updateVisibility();
  }

  private updateVisibility() {
    if(this.isVerified){
      this.el.nativeElement.style.display = ''
    } else {
      this.el.nativeElement.style.display = 'none'
    }
  }

}
