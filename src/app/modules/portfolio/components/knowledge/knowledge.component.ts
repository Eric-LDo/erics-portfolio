//Imports
import { Component, signal } from '@angular/core';
//Interfaces
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de HTML5',
      title: 'HTML5'
    },
    {
      src: '/assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de CSS3',
      title: 'CSS3'

    },
    {
      src: '/assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de AngularJs',
      title: 'AngularJs'
    },
    {
      src: '/assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de Javascript',
      title: 'Javascript'
    },
    {
      src: '/assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de NodeJS',
      title: 'NodeJS'
    },
    {
      src: '/assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de SASS',
      title: 'SASS'
    },
    {
      src: '/assets/icons/knowledge/react.svg',
      alt: 'Ícone de conhecimento de Reactjs',
      title: 'Reactjs'
    },
  ])
}
