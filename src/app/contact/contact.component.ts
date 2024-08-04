import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  showLabel(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    const label = input.previousSibling as HTMLLabelElement;
    if (input.value.length == 0) {
      label.style.visibility = 'hidden';
    } else {
      label.style.visibility = 'visible';
    }
  }

  
 
}
