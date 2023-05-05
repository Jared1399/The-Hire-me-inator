import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

@Injectable()
export class LandingComponent implements OnInit{

  constructor(private http:HttpClient){

  }

  ngOnInit():void{
    this.http.get('http://localhost:3000/').subscribe(res => console.log(res))
  }
}
