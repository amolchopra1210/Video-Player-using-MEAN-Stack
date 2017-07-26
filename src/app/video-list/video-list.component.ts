import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Video } from './../video';
 
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
@Input('videos') videos : Video;
@Output() videoEmit : EventEmitter<Video> = new EventEmitter<Video>();
  constructor() { }

  ngOnInit() {
  }
  onSelect(video : Video){
    this.videoEmit.emit(video);
  }
}
