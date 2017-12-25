declare var Visualizer;
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public list:any;
  public audio:any;
  constructor(private http: HttpClient) { 
  }
  handelclick(ev){

    this.audio.ini(this.list[ev].audio)
  //  new Visualizer().ini(this.list[ev].audio);

  let li:any = document.querySelectorAll('.sidbar-main li');
  li.forEach(element => {
   element.style.background='';
   element.style.color='';
  });
  // document.querySelector('audio').src=this.list[ev].audio;
  li[ev].style.background = ' #242424';
  li[ev].style.color = ' #fff';
   
  }
  ngOnInit() {
    this.audio = new Visualizer();
    this.http.get('assets/data.json').subscribe(data => {
      // Read the result field from the JSON response.
     this.list = data;
    });





  }

}
