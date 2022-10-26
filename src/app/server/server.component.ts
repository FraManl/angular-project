import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // Select by class
  templateUrl: './server.component.html',
  //   template: '<app-server></app-server>', // either templateUrl or template, one of the two has to be present - can be served inline
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
