import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('class') classNames = '';

  @Input() data : IData[] = [];
  @Input() headers : IHeader[] = [];

//: IData[]
  getheaderRecord(record:any, headerKey:any) {
    //console.log(record, 'record');
    //console.log(headerKey, 'headerKey');
    for (const key in record) {
      if (record.hasOwnProperty(key)) {
        //console.log(`${key}: key key ${record[key]`);
        return record[key];
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}

interface IHeader { key: string, label: string };

interface IData { name: string, age: number, job: string, employed: boolean };
