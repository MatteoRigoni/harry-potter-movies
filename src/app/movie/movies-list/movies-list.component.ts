import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { MovieFilterComponent } from '../movie-filter/movie-filter.component';
import { MovieFilter } from '../model/movie-filter.model';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieItemComponent, MovieFilterComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] | null = [];
  filteredMovies: Movie[] | null = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadAllMovies();
  }

  loadAllMovies(): void {
    this.movieService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.filteredMovies = movies;      
    }, err => {
      console.log(err);
      this.movies = null;
      this.filteredMovies = null;      
    });
  }

  filterMovies(filter: MovieFilter) : void {
    if (this.movies) {
      this.filteredMovies = this.movies.filter(m => {
        return ((!filter.title || m.title.toLowerCase().includes(filter.title!.toLowerCase())) &&
        (!filter.releaseYear || new Date(m.release_date).getFullYear() === filter.releaseYear))
      });
    }
    
  }
}
