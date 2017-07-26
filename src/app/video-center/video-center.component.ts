import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from '../video.service'; 

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos : Array<Video>;

  constructor(private videoService : VideoService) { }

  ngOnInit() {
    this.videoService.getVideos().subscribe((resVideoData) => this.videos = resVideoData);
  }

  selectedVideo : Video;
  private hiddenNewVideo :boolean = true;

  captureVideo(vid : Video){
    this.hiddenNewVideo = true;
    this.selectedVideo = vid;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video : Video){
    this.videoService.addVideo(video).subscribe((resNewVideo) => {
      this.videos.push(resNewVideo);
      this.hiddenNewVideo = true;
      this.selectedVideo  = resNewVideo;
    });
  }

  newVideo(){
    this.hiddenNewVideo = false;
  }

  onUpdateVideoEvent(video : any){
    this.videoService.updateVideo(video).subscribe(resUpdateVideo => video = resUpdateVideo);
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video : any){
    let videoArray = this.videos;
    this.videoService.deleteVideo(video).subscribe(resDeleteVideo => {
      for(let i = 0 ; i < videoArray.length; i++){
        if(videoArray[i]._id === video._id){
          videoArray.splice(i ,1);
        }
      }
    });
    this.selectedVideo = null;
  }
}
