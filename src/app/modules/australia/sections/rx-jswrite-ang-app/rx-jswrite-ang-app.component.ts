import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-rx-jswrite-ang-app',
  templateUrl: './rx-jswrite-ang-app.component.html',
  styleUrls: ['./rx-jswrite-ang-app.component.css']
})
export class RxJSWriteAngAppComponent implements OnInit {

  title: string = 'RxJS, the easy way to write correct Angular applications';
  link: string = 'https://www.youtube.com/watch?v=DAGrVyKR_P4&t=1502s';
  notes: Note[] = [];

  constructor() { }

  ngOnInit(): void {
    this.notes.push({
      title: 'Working but not correct behind scene',
      body: 'If we know how to use observables and pipeline operators we can solve most of the problems that we encounter'
        + 'in our day-to-day angular lives'
    });
  }

}
