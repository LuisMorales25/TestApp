import { Component, OnInit } from '@angular/core';
import {RestService} from '../rest.service';
import {Rest} from '../interface/rest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items : any[]=[];
  constructor(private rest: RestService, private router: Router) {
    
  }

  ngOnInit(){
    this.rest.loadInfo().subscribe(data=>{
      console.log(data);
      this.items=data;
    
    })
    //this.loadInfo();
  }

  loadInfo(){
    console.log('entre ll');
    this.rest.loadInfo().subscribe((data)=>{
      this.items=data;
      console.log('la data es',data);
    });
  
  }

  openDetail(id){
    this.router.navigate(['/singlepost',id]);
  }

}
