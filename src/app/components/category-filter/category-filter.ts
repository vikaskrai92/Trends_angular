import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-filter.html',
  styleUrl: './category-filter.css',
})
export class CategoryFilter {
  selected: string | null = null;

  categories: Category[] = [
    { id: '1', label: 'High Returns', icon: 'assets/icon3.png' },
    { id: '2', label: 'High Rated', icon: 'assets/frame1.png' },
    { id: '3', label: 'Short Tenure', icon: 'assets/icon2.png' },
    { id: '4', label: 'Invest With ₹1k', icon: 'assets/icon1.png' }
  ];

  selectCategory(id: string) {
    this.selected = this.selected === id ? null : id;
  }
  viewAll() {
  console.log('View All clicked');
}

}
