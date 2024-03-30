import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from './model/movie.model';
import { MovieDetail } from './model/movie-detail.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseApiUrl = '';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseApiUrl}/movies`);
  }

  getMovieById(id: string | null): Observable<MovieDetail | undefined> {
    return this.http.get<MovieDetail>(`${this.baseApiUrl}/movies/${id}`);
  }
}
