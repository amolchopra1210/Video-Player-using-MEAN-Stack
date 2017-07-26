import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Video } from './video';
import 'rxjs/add/operator/map';
@Injectable()
export class VideoService {

  private getUrl = "/api/videos";
  private postUrl = '/api/video';
  private putUrl = '/api/video/';
  private deleteUrl = '/api/video/';
  constructor(private http : Http) { }

  getVideos(){
    return this.http.get(this.getUrl).map((response : Response) => response.json());
  }
  addVideo(video : Video){
    let headers = new Headers({'Content-Type' : "application/json"});
    let options = new RequestOptions({headers : headers});
    return this.http.post(this.postUrl, JSON.stringify(video), options).map((response : Response) => response.json());
  }

  updateVideo(video : Video){
    let headers = new Headers({'Content-Type' : "application/json"});
    let options = new RequestOptions({headers : headers});
    return this.http.put(this.putUrl + video._id, JSON.stringify(video), options).map((response : Response) => response.json());
  }

  deleteVideo(video : Video){
    return this.http.delete(this.deleteUrl + video._id).map((response : Response) => response.json());
  }

}
