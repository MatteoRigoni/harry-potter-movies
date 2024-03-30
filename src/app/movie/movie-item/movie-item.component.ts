import { Component, Input } from '@angular/core';
import { Movie } from '../model/movie.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HourMinutePipe } from '../../shared/hour-minute.pipe';
import { MilionRangePipe } from '../../shared/milion-range.pipe';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [RouterModule, CommonModule, HourMinutePipe, MilionRangePipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
@Input() movie!: Movie;

}
