import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public stack = 'Full-Stack Javascript | Angular | Reactjs | NodeJS | NestJs | MySQL'.split(' | ');
}
