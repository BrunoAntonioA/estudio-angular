import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators'; 

import { Apunte } from '../shared/modelos/apunte.model';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  
  title = "Share"
  apuntes = []
  sharelessTimer = []
  sharedTimer = []

  constructor() { }

  ngOnInit(): void {
    const time = timer(1000)
    const obs = time.pipe(
        tap(() => console.log('Tap On'),
        mapTo('End')
      )
    )
    const subs01 = obs.subscribe(val => {
      this.sharelessTimer.push(val)
      console.log(val)
    })
    const subs02 = obs.subscribe(val => {
      this.sharelessTimer.push(val)
      console.log(val)
    })
    
    const shareObs = obs.pipe(share())
    console.log('Share on')

    const subs03 = shareObs.subscribe(val => {
      this.sharedTimer.push(val)
      console.log(val)
    })
    const subs04 = shareObs.subscribe(val => {
      this.sharedTimer.push(val)
      console.log(val)
    })
  
    this.agregarApuntes()
  }

  agregarApuntes(){
    let apunte = new Apunte()
    apunte.titulo = "Share"
    apunte.cuerpo = "El operador share nos permite compartir la subscripción de un observable, es decir, mediante distintas variables nos suscribiremos a "
    apunte.cuerpo += "una misma variable observable y desde cualquier variable los valores deberán ser los mismos."
    this.apuntes.push(apunte)
  }
}
