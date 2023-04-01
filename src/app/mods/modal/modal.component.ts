import { Component, OnInit,ElementRef,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  @Output() get onCloseClick() : any{
    return this.close.emit();
  }

  onCloseClickinside() {
    return this.close.emit();
  }
  constructor(private el: ElementRef) {
      console.log(el.nativeElement)

   }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.el.nativeElement.remove();
    // document.body.removeChild(this.el.nativeElement);
  }

}

