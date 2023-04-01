import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items :ModalItems[] = [];
  openItemIndex :number = 0;

  constructor() { }

  ngOnInit(): void {

  }
  onClick(index: number): void {
    //console.log(index, 'index');
    if (index === this.openItemIndex) {
      this.openItemIndex = -1;
    } else {
      this.openItemIndex = index;
    }
  }
}


interface ModalItems { title: string; content: string; }
