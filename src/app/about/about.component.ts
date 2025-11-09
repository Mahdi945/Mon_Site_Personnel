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
      link: 'https://github.com/Mahdi945/Maryouli-Symfony-',
      languages: [
        { name: 'Symfony', iconClass: 'fab fa-symfony' },
        { name: 'Twig', iconClass: 'fas fa-leaf' }, 
        { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' }
      ],
      
    },
    {
      name: 'Site Web 3awen',
      description: '3awen est une plateforme collaborative qui facilite l organisation et la participation à des événements de volontariat pour promouvoir l entraide et la solidarité.',
      image: 'assets/image3.JPG',
      link: 'https://3awen.vercel.app/accueil',
      languages: [
        { name: 'Angular', iconClass: 'fab fa-angular' },
        { name: 'Node.js', iconClass: 'fab fa-node-js' },
        { name: 'MongoDB', iconClass: 'fas fa-database' }
      ],
      
    },
    {
      name: 'ISET Rades PFE',
      description: 'Site pour la gestion des sujets de PFE de l’ISET Rades, développé en PHP.',
      image: 'assets/iset.png',
      link: 'https://github.com/Mahdi945/projet_integration',
      languages: [
        { name: 'PHP', iconClass: 'fab fa-php' },
        { name: 'MySQL', iconClass: 'fas fa-database' },
        { name: 'HTML/CSS', iconClass: 'fab fa-html5' }
      ],
      
    },
    {
      name: 'Carbotack',
      description: 'Système de gestion complete de station service , développé avec Angular, Node.js, et MySQL.',
      image: 'assets/dashboard.JPG',
      link: 'https://github.com/Mahdi945/PFE_Frontend',
      languages: [
        { name: 'Angular', iconClass: 'fab fa-angular' },
        { name: 'Node.js', iconClass: 'fab fa-node-js' },
        { name: 'MySQL', iconClass: 'fas fa-database' }
      ],
    },
    {
  name: 'ERP de Transport & Logistik',
  description: 'Système ERP complet pour la gestion des opérations de transport et logistique, développé avec Angular, NestJS, PostgreSQL et Keycloak.',
  image: 'assets/velosi.JPG',
  link: 'https://velosi-front.vercel.app/',
  languages: [
    { name: 'Angular', iconClass: 'fab fa-angular' },
    { name: 'NestJS', iconClass: 'fas fa-server' },
    { name: 'PostgreSQL', iconClass: 'fas fa-database' },
    { name: 'Keycloak', iconClass: 'fas fa-lock' }
  ],
}

  ];
}
