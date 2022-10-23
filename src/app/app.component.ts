import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h1 {
        color: grey;
      }
    `,
  ], // will override app.component.css; should one, either styleUrls or styles, same goes for templateUrls or template
})
export class AppComponent {
  title = 'Francois Application';
  name = 'Feifei';
}
