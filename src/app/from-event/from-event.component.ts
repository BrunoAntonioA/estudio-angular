import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

import { Apunte } from '../shared/modelos/apunte.model'; 

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {
  
  title = "fromEvent"
  apuntes = []
  posicion = {
    x: 0,
    y: 0
  }

  @ViewChild('element') element: ElementRef;
  elementSubcription

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.agregarApuntes()
    this.mouseMovement()

  }

  mouseMovement(){
    this.elementSubcription = fromEvent(this.element.nativeElement, 'mousemove')
      .subscribe((e: MouseEvent) => {
        console.log('Coords: X:' + e.clientX + " Y: " + e.clientY)
        this.posicion.x = e.clientX
        this.posicion.y = e.clientY
      })
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "fromEvent"
    apunte.cuerpo = "Algo"
    this.apuntes.push(apunte)
  }
}
