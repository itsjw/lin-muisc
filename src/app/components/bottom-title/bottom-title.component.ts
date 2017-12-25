declare var window;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-title',
  templateUrl: './bottom-title.component.html',
  styleUrls: ['./bottom-title.component.scss']
})
export class BottomTitleComponent implements OnInit {
  public audio: any = document.querySelector('#audio');
  public play: any;
  public value: number;
  public duration: any;
  public currentTime: any = '00:00';
  public progress: any;
  public endtime: any = '00:00';
  public volinit: any;
  public typeid: any;
  constructor() { }





  next() {





  }

  voice() {
    let img: any = document.querySelector('.voice img');
    let vol: any = document.querySelector('.vol');
    if (this.audio.volume != 0) {
      this.volinit = this.audio.volume;
      this.audio.volume = 0;
      img.src = 'assets/images/jingyin.png';
      vol.style.width = '0';
    } else {
      this.audio.volume = this.volinit;
      vol.style.width = this.volinit * 100 + '%';
      img.src = 'assets/images/volume.png';

    }
  }
  volumeLength(event) {
    let vol: any;
    vol = event.offsetX / 107
    this.audio.volume = vol
    let vollength: any = document.querySelector('.vol');
    vollength.style.width = vol * 100 + '%';
  }

  playPause() {
    this.play = document.querySelector('.controller-play');
    if (this.audio.paused) {
      this.audio.play();
      this.play.src = 'assets/images/run.png';
    } else {
      this.audio.pause();
      this.play.src = 'assets/images/rungo.png';
    }
  }

  ngOnInit() {

    window.addEventListener("storage",function(e){
        console.log(e)
    },false);






    this.play = document.querySelector('.controller-play');
    this.audio.volume = '0.5';


    if (this.audio.paused) {
      this.play.src = 'assets/images/run.png';

    }
    let _this = this;
    let times: any;
    this.audio.addEventListener('timeupdate', function () {

      this.value = this.currentTime / this.duration;//baifengbi
      this.progress = document.querySelector('.progress');
      this.progress.style.width = this.value * 100 + '%';
      // _this.duration =  this.duration / 60;
      // _this.duration = _this.duration.toString().split('.') ;
      // times = +'0'+_this.duration[0]+':'+_this.duration[1].substr(0,2);
      _this.endtime = formatTime(this.duration);//结束时间

      function formatTime(second) {
        let a: any = second / 60 % 60;
        let b: any = second % 60;
        return [parseInt(a), parseInt(b)].join(":")
          .replace(/\b(\d)\b/g, "0$1");
      }

      _this.currentTime = formatTime(this.currentTime);//每秒的进度

    }, false);


  }

}
