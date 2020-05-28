import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  items : any;
  comments:any[]=[];
  constructor(private rest: RestService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id:string;
    id=this.route.snapshot.paramMap.get('id');
    console.log('el id es',id);
    this.rest.loadTopic(id).subscribe(data=>{
      console.log(data);
      this.items=data;
    
    })
    this.rest.loadComments(id).subscribe(comments=>{
      console.log(comments);
      this.comments=comments;
    })
  }

  dash(){
    this.router.navigate(['/post']);
  }

  

}
