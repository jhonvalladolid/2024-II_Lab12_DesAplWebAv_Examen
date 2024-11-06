import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counts.component.html',
  styleUrl: './counts.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class CountsComponent implements OnInit {
  counts = [
    { icon: 'bi bi-emoji-smile', endValue: 232, label: 'Clientes Satisfechos', currentCount: 0 },
    { icon: 'bi bi-journal-richtext', endValue: 521, label: 'Proyectos', currentCount: 0 },
    { icon: 'bx bxl-shopify bx-lg', endValue: 1463, label: 'Ventas', currentCount: 0 },
    { icon: 'bi bi-people', endValue: 15, label: 'Asesoría', currentCount: 0 },
  ];

  ngOnInit(): void {
    this.startCounting();
  }

  startCounting() {
    this.counts.forEach((item, index) => {
      this.animateCount(item, index);
    });
  }

  animateCount(item: { currentCount: number, endValue: number }, index: number) {
    const duration = 2000; // Duración de 2 segundos para cada contador
    const intervalTime = duration / item.endValue;
    let count = 0;
    const interval = setInterval(() => {
      count++;
      item.currentCount = count;
      if (count >= item.endValue) {
        clearInterval(interval);
      }
    }, intervalTime);
  }
}