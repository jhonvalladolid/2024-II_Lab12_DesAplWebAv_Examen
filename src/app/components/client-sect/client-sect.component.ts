import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-sect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-sect.component.html',
  styleUrls: ['./client-sect.component.css']
})
export class ClientSectComponent implements OnInit, OnDestroy {
  clients = [
    'assets/img/clients/client-1.png',
    'assets/img/clients/client-2.png',
    'assets/img/clients/client-3.png',
    'assets/img/clients/client-4.png',
    'assets/img/clients/client-5.png',
    'assets/img/clients/client-6.png',
    'assets/img/clients/client-7.png',
    'assets/img/clients/client-8.png'
  ];
  currentSlide = 0;
  intervalId: any;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambia cada 3 segundos
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % Math.ceil(this.clients.length / 3); // Cambia la cantidad de logos visibles
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    clearInterval(this.intervalId); // Pausa el auto-slide al cambiar manualmente
    this.startAutoSlide(); // Reinicia el auto-slide
  }
}
