import { Component, OnInit } from '@angular/core';
const {ipcRenderer: ipc} = require('electron');
@Component({
  selector: 'app-title-top',
  templateUrl: './title-top.component.html',
  styleUrls: ['./title-top.component.scss']
})
export class TitleTopComponent implements OnInit {

  constructor() { }

  handleclick(type:string){

    ipc.send(type);
    
  }

  ngOnInit() {
    
  }

}
