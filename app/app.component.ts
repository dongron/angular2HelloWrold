import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1> <h1>{{title}}</h1><h2>{{hero}} details!</h2>'
})
export class AppComponent { 
	title = 'komponent 1';
	hero = 'storm';
}
