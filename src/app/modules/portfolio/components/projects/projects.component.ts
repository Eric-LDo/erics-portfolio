//Imports
import { Component, inject, signal } from '@angular/core';
//Matirial
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//Interface
import { IProjects } from '../../interface/IProjects.interface';
//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/img/projects/jelpooth.png',
      alt: 'Site institucional da Jelpooth',
      title: 'Jelpooth - Site institucional ',
      width: '100px',
      height: '51px',
      description:'<p>Conheça a empresa jelpooth que procura gerar soluções inovadoras para empresas para ajudar a mante-las relevantes no mercado! (em desenvolvimento)</p>',
      links: [
        {
          name: 'Conheça o nosso site',
          href: 'https://jelpooth.netlify.app'
        },
      ]
    },
    {
      src: '/assets/img/projects/jelpooth.png',
      alt: 'Projeto Home Work Flow',
      title: 'Home Work Flow',
      width: '100px',
      height: '51px',
      description:'<p>Ajusda para quem tem dificuldade de aprender usando analise de dados (em desenvolvimento)</p>',
      links: [
        {
          name: 'Conheça o nosso site',
          href: 'https://homeworkflow.netlify.app'
        },
      ]
    }
  ])
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
