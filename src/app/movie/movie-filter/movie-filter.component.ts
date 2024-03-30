import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieFilter } from '../model/movie-filter.model';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css',
})
export class MovieFilterComponent {
  titleFilter: string | null = null;
  releaseYearFilter: number | null = null;

  @Output() filterChange: EventEmitter<MovieFilter> =
    new EventEmitter<MovieFilter>();

  onFilterChange(): void {
    if (
      !this.releaseYearFilter ||
      (this.releaseYearFilter > 1900 &&
        this.releaseYearFilter < new Date().getFullYear())
    ) {
      this.filterChange.emit({
        title: this.titleFilter,
        releaseYear: this.releaseYearFilter,
      } as MovieFilter);
    }
  }
}
