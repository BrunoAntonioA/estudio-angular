import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-ciclo-observable',
  templateUrl: './ciclo-observable.component.html',
  styleUrls: ['./ciclo-observable.component.css']
})
export class CicloObservableComponent implements OnInit {
  
  title = "Ciclo Observable"
  apuntes = []
  logs = []

  constructor() { }

  ngOnInit(): void {
    const myObservable = Observable.create(function (observer){
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.error('Error N 1')
      observer.complete()
    })

    const subs = myObservable.subscribe({
      next: x => {
        this.logs.push(x)
        console.log('El siguiente valor es: ' + x)
      },
      error: err => {
        this.logs.push(err)
        console.log('Error: ' + err)
      },
      complete: () => {
        this.logs.push('Subscripción completa')
        console.log('Subscripción completa')
      }
    })

    subs.unsubscribe()

    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Ciclo Observable"
    apunte.cuerpo = "El ciclo observable está definido para llamar una cierta cantidad de operadores o funciones secuenciales "
    apunte.cuerpo += "en los que queremos controlar su ejecución"
    this.apuntes.push(apunte)
  }

}
