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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }
  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value; // the same but for typescript, stricter
  }
}
