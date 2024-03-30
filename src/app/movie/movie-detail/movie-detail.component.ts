import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MovieDetail } from '../model/movie-detail.model';
import { MilionRangePipe } from "../../shared/milion-range.pipe";
import { HourMinutePipe } from "../../shared/hour-minute.pipe";
import { SpaceArrayPipe } from "../../shared/space-array.pipe";

@Component({
    selector: 'app-movie-detail',
    standalone: true,
    templateUrl: './movie-detail.component.html',
    styleUrl: './movie-detail.component.css',
    imports: [CommonModule, MilionRangePipe, HourMinutePipe, SpaceArrayPipe, RouterLink]
})
export class MovieDetailComponent implements OnInit {
  movieDetail$!: Observable<MovieDetail | undefined>;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieDetail$ = this.movieService.getMovieById(id);
  }
}
