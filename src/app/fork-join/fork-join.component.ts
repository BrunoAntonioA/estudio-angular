import { Component, OnInit } from '@angular/core';
import { delay, take} from 'rxjs/operators';
import { forkJoin, of, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {
  title = "Fork join"
  apuntes = []

  constructor() { }

  ngOnInit(): void {
    this.agregarApuntes();
    const fork = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        ctmil: ajax.getJSON('https://api.github.com/users/ctmil')
      }
    )
    fork.subscribe(val => console.log(val))
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Fork Join"
    apunte.cuerpo = "Esta función sirve para unir observables, pero guardando y finalizando el join cuando todos los observables hayan finalizado"
    apunte.cuerpo += " Cabe a destacar que se guarda solamente el último valor de cada observable."
    this.apuntes.push(apunte)
  }

}
