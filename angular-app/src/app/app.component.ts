import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reci-angular-vue-components';
  msg = new FormControl('');
  open = false;

  onDropdownChange(event?: KeyboardEvent) {
    // Just to test if method calls gets through...
    console.log('event');
    this.open = true;
  }

  log(msg: String)  {
    // Just to test if method calls gets through...
    console.log(msg);
  }
}
