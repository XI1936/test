import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bag=[
   {id:1,value:"Mango"},
   {id:2,value:"Apple"},
   {id:3,value:"Banana"},
   {id:4,value:"Coco"}
]
  constructor() { }

  ngOnInit(): void {
  }

}
