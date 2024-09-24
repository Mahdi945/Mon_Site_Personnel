import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  projects = [
    {
      name: 'CNC Service',
      description: 'Site pour une société CNC service utilisant Angular, Node.js, et MongoDB.',
      image: 'assets/cnc.png',
      link: 'https://projet-murex-delta.vercel.app/',
      languages: [
        { name: 'Angular', iconClass: 'fab fa-angular' },
        { name: 'Node.js', iconClass: 'fab fa-node-js' },
        { name: 'MongoDB', iconClass: 'fas fa-database' }
      ],
     
    },
    {
      name: 'Maryouli E-commerce',
      description: 'Site de vente de maillots de football, développé avec Symfony et Twig.',
      image: 'assets/maryouli.png',
      languages: [
        { name: 'Symfony', iconClass: 'fab fa-symfony' },
        { name: 'Twig', iconClass: 'fas fa-leaf' }, 
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' }
      ],
      
    },
    {
      name: 'ISET Rades PFE',
      description: 'Site pour la gestion des sujets de PFE de l’ISET Rades, développé en PHP.',
      image: 'assets/iset.png',
      languages: [
        { name: 'PHP', iconClass: 'fab fa-php' },
        { name: 'MySQL', iconClass: 'fas fa-database' },
        { name: 'HTML/CSS', iconClass: 'fab fa-html5' }
      ],
      
    }
  ];
}
