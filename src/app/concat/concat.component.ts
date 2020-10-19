import { Component, OnInit } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';


import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  title = "Concat"
  apuntes = []
  logs = []

  constructor() { }

  ngOnInit(): void {
    const timer = interval(1000).pipe(take(4))
    const rango = range(1, 10)

    const result = concat(timer, rango)
    result. subscribe( x => {
      this.logs.push(x)
      console.log(x)
    }) 


    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Concat"
    apunte.cuerpo = "El operador concat nos sirve para unir consecutivamente distintos observables, subscribiendonos solo "
    apunte.cuerpo += "una vez. En este caso unimos interval y range"
    this.apuntes.push(apunte)
  }

}
