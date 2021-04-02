import { Component, OnInit, ɵɵclassMapInterpolate4 } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.css']
})
export class BufferTimeComponent implements OnInit {

  title = 'buffer-time'
  apuntes = []
  logs = []

  constructor() { }

  ngOnInit(): void {
    const timer = interval(500)
    const buffer = timer.pipe(
      bufferTime(2000, 1000)
    )
    const subs = buffer.subscribe((val) => {
      console.log('buffer: ', val)
      this.logs.push(val)
    })
    

    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "buffer-time"
    apunte.cuerpo = "El operador buffer sirve para almacenar métodos en un búffer y "
    apunte.cuerpo += "acceder a ellos cada cierto tiempo y almacenar cada ciertos tiempos."
    apunte.cuerpo += " Tiene dos parámetros (x, y) x representa la cantidad de tiempo que estará almacenando datos el buffer"
    apunte.cuerpo += " e y representa cada cuánto tiempo se accederá a la información del buffer. El ejemplo está construido"
    apunte.cuerpo += " con x = 2000 (ms) e y = 1000 (ms), esto está dentro de un pipe de  un interval de (500)."
    this.apuntes.push(apunte)
  }

}
