import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { EstudioRxjsComponent } from './estudio-rxjs/estudio-rxjs.component';
import { EstudioViewChildComponent } from './estudio-view-child/estudio-view-child.component';
import { InicioComponent } from './inicio/inicio.component';
import { IntervalTimerComponent } from './interval-timer/interval-timer.component';
import { FromEventComponent } from './from-event/from-event.component';
import { MapFilterComponent } from './map-filter/map-filter.component';
import { ShareComponent } from './share/share.component';
import { ConcatComponent } from './concat/concat.component';
import { CicloObservableComponent } from './ciclo-observable/ciclo-observable.component';
import { BufferTimeComponent } from './buffer-time/buffer-time.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { MergeMapFlatMapComponent } from './merge-map-flat-map/merge-map-flat-map.component';
import { ScanComponent } from './scan/scan.component';
import { SubjectComponent } from './subject/subject.component';
import { TapComponent } from './tap/tap.component';
import { CvComponent } from './cv/cv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioRxjsComponent } from './inicio-rxjs/inicio-rxjs.component';

const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'Inicio', component: InicioComponent},
  { path: 'rxjs', 
    component: EstudioRxjsComponent,
    children: [
      {path: '', component: InicioRxjsComponent},
      {path: 'interval-timer', component: IntervalTimerComponent},
      {path: 'fromEvent', component: FromEventComponent},
      {path: 'map-filter', component: MapFilterComponent},
      {path: 'tap', component: TapComponent},
      {path: 'share', component: ShareComponent},
      {path: 'concat', component: ConcatComponent},
      {path: 'ciclo-observable', component: CicloObservableComponent},
      {path: 'buffer-time', component: BufferTimeComponent},
      {path: 'switchMap', component: SwitchMapComponent},
      {path: 'forkJoin', component: ForkJoinComponent},
      {path: 'concatMap', component: ConcatMapComponent},
      {path: 'mergeMap-flatMap', component: MergeMapFlatMapComponent},
      {path: 'scan', component: ScanComponent},
      {path: 'subject', component: SubjectComponent},
    ]
  },
  {path: 'viewchild', component: EstudioViewChildComponent},
  {path: 'cv', component: CvComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    EstudioRxjsComponent,
    EstudioViewChildComponent,
    InicioComponent,
    IntervalTimerComponent,
    FromEventComponent,
    MapFilterComponent,
    ShareComponent,
    ConcatComponent,
    CicloObservableComponent,
    BufferTimeComponent,
    SwitchMapComponent,
    ForkJoinComponent,
    ConcatMapComponent,
    MergeMapFlatMapComponent,
    ScanComponent,
    SubjectComponent,
    TapComponent,
    CvComponent,
    InicioRxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}// <-- debugging purposes only
    ),
    FontAwesomeModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
