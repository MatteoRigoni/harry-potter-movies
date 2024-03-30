import { Routes } from '@angular/router';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./movie//movies-list/movies-list.component').then(mod => mod.MoviesListComponent)},
    { path: 'movie/:id', loadComponent: () => import('./movie//movie-detail/movie-detail.component').then(mod => mod.MovieDetailComponent)}
  ];
