import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

images=['./assets/images/pic1.png','./assets/images/pic2.png','./assets/images/pic3.png'
  ,'./assets/images/pic1.png','./assets/images/pic2.png','./assets/images/pic3.png'
]


  isHovered: boolean = false;
  onMouseEnter(e:MouseEvent) {
    console.log(e.target);
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
  
}
