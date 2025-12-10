import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bond-card',
  standalone: true,
  templateUrl: './bond-cards.html',
  styleUrls: ['./bond-cards.css'],
})
export class BondCardComponent {

  @Input() logo!: string;
  @Input() name!: string;
  @Input() description!: string;
  @Input() minInvestment!: string;
  @Input() tenure!: string;
  @Input() returnYTM!: string;
}
