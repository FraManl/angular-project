import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // Select by class
  templateUrl: './servers.component.html',
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
}
