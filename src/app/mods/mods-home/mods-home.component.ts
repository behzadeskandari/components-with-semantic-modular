import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    { title: 'why is the sky blue?', content: 'The sky is blue because it is' },
    { title: 'what does an orage taste like', content: 'An Orage tase like an apple',},
    { title: 'What color is that cat', content: 'The cat is orange color',},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
  CloseClick() {

  }
}
