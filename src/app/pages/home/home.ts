import { Component } from '@angular/core';
import { CategoryFilter } from '../../components/category-filter/category-filter';
import { BondCardComponent } from '../../components/bond-cards/bond-cards';
import { StepsSection } from '../../components/steps-section/steps-section';
import { FaqSection } from '../../components/faq-section/faq-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryFilter, BondCardComponent, StepsSection, FaqSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
