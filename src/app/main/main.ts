import { Component } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'app-main',
  imports: [Hero],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {}
