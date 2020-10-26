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
  selected = [];
  options = [
    { value: 'val1', label: 'Item 1' },
    { value: 'val2', label: 'Item 2' }
  ]

  onDropdownSelected(event?: CustomEvent) {
    // Just to test if method calls gets through...
    this.selected = event.detail[0];
  }

  onDropdownOpen(event?: CustomEvent) {
    // Just to test if method calls gets through...
    console.log('Open event!');
  }
}
