import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-estudio-view-child',
  templateUrl: './estudio-view-child.component.html',
  styleUrls: ['./estudio-view-child.component.css']
})
export class EstudioViewChildComponent implements OnInit {

  constructor() { }

  @ViewChild("informacion") informacion
  
  ngOnInit(){
    console.log(this.informacion)
  }

  ngAfterViewInit(){
    console.log(this.informacion)
  }

}
