import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

private editTitle : boolean = false;

@Input() video : Video

@Output() updateVideoEvent : EventEmitter<Video> = new EventEmitter<Video>();
@Output() deleteVideoEvent : EventEmitter<Video> = new EventEmitter<Video>();

  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    this.editTitle = false;
  }
  onTitleClick(){
    this.editTitle = true;
  }

  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo(){
    this.deleteVideoEvent.emit((this.video));
  }

}