import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServiceService} from './service.service';
import {AppModel} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: ServiceService ) {}

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    console.log('username:: ' + username);
    console.log('password:: ' + password);
    this.service.storeDemo(username + ' :::: ' + password).subscribe(
      (response) => {console.log(response); }
    );
  }


}
