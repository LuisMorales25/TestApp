import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import {Rest} from './interface/rest';
import {Comment} from './interface/comment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

  api = 'https://jsonplaceholder.typicode.com/posts';

  loadInfo(){
    const path= `${this.api}`;
    return this.http.get<Rest[]>(path);
  }

  loadTopic(id:string){

    const path= `${this.api}/${id}`;
    console.log('el id que entra es', id);
    return this.http.get<Rest>(path);
  }

  loadComments(id:string){
    const path= `${this.api}/${id}/comments`;
    return this.http.get<Comment[]>(path);
  }
}
