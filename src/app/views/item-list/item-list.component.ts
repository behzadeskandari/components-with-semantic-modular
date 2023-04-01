import { Component, OnInit ,Input,OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit ,OnChanges{
  @Input() items :ItemList[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }
}

interface ItemList  { image: string, title: string, description:string }
