import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  requiredRating = '';

  formRating = '';

  comment = '';

  handleRequiredSubmit(event: Event) {
    event.preventDefault();
    console.log(`Rating selezionato: ${this.requiredRating}`);
    alert(`Rating selezionato: ${this.requiredRating}`);
  }

  handleReviewSubmit(event: Event) {
    event.preventDefault();
    console.log(`Form inviato! Rating: ${this.formRating} Commento: ${this.comment}`);
    alert(`Form inviato! Rating: ${this.formRating} Commento: ${this.comment}`);
  }

  handleReviewReset() {
    this.formRating = '';
    this.comment = '';
  }

  onRatingChange(event: Event, type: 'required' | 'form') {
    const target = event.target as HTMLElement;
    const value = target.getAttribute('value') || '';
    if (type === 'required') {
      this.requiredRating = value;
    } else {
      this.formRating = value;
    }
  }
}
