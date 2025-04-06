import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/img/projects/jelpooth.png',
      alt: 'Site institucional da Jelpooth',
      title: 'Vida FullStack',
      width: '100px',
      height: '51px',
      description:'<p>Conheça a empresa jelpooth que procura gerar soluções inovadoras para empresas para ajudar a mante-las relevantes no mercado!</p>',
      links: [
        {
          name: 'Conheça o nosso site',
          href: 'https://jelpooth.netlify.app'
        },
      ]
    }
  ])
}
