import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'poo';

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Afficher le spinner uniquement au chargement initial
    this.loadingService.show();
    
    // Cacher le spinner après que la page soit complètement chargée
    setTimeout(() => {
      this.loadingService.hide();
    }, 1500);
  }
}
