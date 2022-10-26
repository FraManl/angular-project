import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // Select by class
  templateUrl: './assignments.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'testServer';
  userName = '';
  // resetButton = false;
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  toggleBoolean = false;
  eventArray: number[] = [];
  counter = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1400);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value; // the same but for typescript, stricter
  }

  // optional... use property binding directly in html template.. avoid writing this and declaring resetButton = false at the beginning...
  // onAssignInput(event: any) {
  //   event.target.value ? (this.resetButton = true) : (this.resetButton = false);
  // }
  resetInput() {
    this.userName = '';
    // this.resetButton = false;
  }

  logEvents(event: any) {
    console.log(event);
    // this.eventArray.push(event);
  }

  togglePassword(event: any) {
    this.toggleBoolean
      ? (this.toggleBoolean = false)
      : (this.toggleBoolean = true);

    this.eventArray.push(this.counter);
    this.counter += 1;
    console.log(this.eventArray);
  }
}
