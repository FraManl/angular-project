import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  // selector: '[app-servers]', // Select by attribute
  // selector: '.app-servers', // Select by class
  templateUrl: './server.component.html',
  //   template: '<app-server></app-server>', // either templateUrl or template, one of the two has to be present - can be served inline
})
export class ServerComponent {}