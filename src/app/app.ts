import { Component, signal } from '@angular/core';
import { Nav } from "./components/navbar/nav";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";

@Component({
  selector: 'app-root',
  imports: [Nav, Home, About, Skills],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');
}
