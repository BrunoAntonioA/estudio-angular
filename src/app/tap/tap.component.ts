import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Apunte } from '../shared/modelos/apunte.model'

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
  title = "Tap"
  apuntes = []
  logs = []
  positions = []


  constructor() { }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click')
    const positions = clicks.pipe(
        tap(ev => {
          this.logs.push("Procesado: " + ev)
          console.log('Procesado: ' + ev)
        },
        err => {
          this.logs.push("err: ", err)
          console.log('err: ', err)
        },
        () => {
          this.logs.push('Completado')
          console.log('Completado')
        }
      )
    )
    positions.subscribe(pos => {
      this.positions.push(pos)
      console.log(pos)
    })
    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Tap"
    apunte.cuerpo = "Con el operador tap podemos espiar o visualizar los resultados a la subscripción de un evento, lo cual no se logra con una subscripción a fromEvent "
    apunte.cuerpo += "por si sola."
    this.apuntes.push(apunte)
  }

}
