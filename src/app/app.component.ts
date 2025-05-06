import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  display = '';
  theme = 1;

  @HostBinding('class')
  get themeClass() {
    return `theme-${this.theme}`;
  }

  append(value: string) {
    this.display += value;
  }

  delete() {
    this.display = this.display.slice(0, -1);
  }

  reset() {
    this.display = '';
  }

  calculate() {
    try {
      const result = eval(this.display.replace(/x/g, '*'));
      this.display = Number(result).toLocaleString();
    } catch {
      this.display = 'Error';
    }
  }

  switchTheme() {
    this.theme = this.theme < 3 ? this.theme + 1 : 1;
  }
}
