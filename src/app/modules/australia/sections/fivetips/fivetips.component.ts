import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-fivetips',
  templateUrl: './fivetips.component.html',
  styleUrls: ['./fivetips.component.css']
})
export class FivetipsComponent implements OnInit {

  title: string = '5 tips';
  link: string = 'https://www.youtube.com/watch?v=TkcLN95R0VA';
  notes: Note[] = [];

  constructor() { }

  ngOnInit(): void {
    this.notes.push({
      title: 'Set up your project with lazy-loading modules',
      body: 'App-routing (module) -> loadChildren() => import(example.module).then( m => m.example)'
    });
    this.notes.push({
      title: 'Restric the functions in your component to those that deal with display logic',
      body: 'Keep data manipulation and computation inside service'
    });
    this.notes.push({
      title: 'You can and should use external component classes',
      body: 'Ex: OnDestroy to unsuscribe'
    });
    this.notes.push({
      title: 'Know when to use the input decorator and when to use a service',
      body: 'IMG'
    });
    this.notes.push({
      title: 'Use inheritance to simplify',
      body: ''
    });
    this.notes.push({
      title: 'Suscribers',
      body: '1 - Setting up. 2.- Suscribe them. 3.- Unsiscribe them.'
    });
  }

}
