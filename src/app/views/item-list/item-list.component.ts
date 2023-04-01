import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() items :ItemList[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

interface ItemList  { image: string, title: string, description:string }
