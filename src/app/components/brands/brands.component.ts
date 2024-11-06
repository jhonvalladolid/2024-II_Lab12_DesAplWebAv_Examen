import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Brand {
  image: string;
  description: string;
  animation: string;
}

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands: Brand[] = [
    {
      image: 'assets/img/marcas/sangsin2-1-768x156.png',
      description: `Fabricante líder en la industria Coreana de piezas y partes para frenos de fricción, cuenta con más de 6 plantas a nivel mundial. Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, SSangyong y Renault Samsung.`,
      animation: 'fade-right'
    },
    {
      image: 'assets/img/marcas/HANSANG-26032-768x248.png',
      description: `La marca HANSANG maneja una amplia gama de repuestos de parte de caja como son: Piñón y corona, Deslizante, Piñones, Trenfijo, Satélites, Planetarios, Propulsor, Bronces, etc.`,
      animation: 'zoom-in'
    },
    {
      image: 'assets/img/marcas/mando2-1-768x208.png',
      description: `Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores. La visión de Mando Corporation es crear productos seguros, ecológicos y de fácil uso.`,
      animation: 'zoom-in'
    },
    {
      image: 'assets/img/marcas/TCIC-e1646945558616.png',
      description: `Tae Chul Industrial Co. fabricante de piezas de automóviles con más de 70 años de experiencia en la producción de bombas y bombines de freno y embrague de la mejor calidad. Cuenta con 5 plantas en Asia.`,
      animation: 'fade-left'
    },
    {
      image: 'assets/img/marcas/valeo-1-e1646949714959.jpg',
      description: `Valeo Pyeong Hwa International es una compañía que cuenta con más de 90 años de creación y se ha convertido en socio de los principales fabricantes de automóviles, con operaciones en 33 países, diseñando tecnologías y sistemas innovadores para que los futuros automóviles sean más intuitivos, autónomos y amigables con el medio ambiente.`,
      animation: 'fade-left'
    },
    {
      image: 'assets/img/marcas/YULIM-1-768x236.png',
      description: `Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea. Produce y exporta piezas para sistemas de suspensión y dirección.`,
      animation: 'fade-right'
    }
  ];
}
