//imports
import { Component, signal } from '@angular/core';
//Interfaces
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong:"Desenvolvedor web full-Stack.Jr",
        p:"Parça - Serviços financeiros | 07/2024 a 11/2024"
      },
      text:"<p>Trabalho desenvolvendo e gerando soluções utilizando ReactJS, NodeJS e MySQL.</p>"
    }
  ])
}
