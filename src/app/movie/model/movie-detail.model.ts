import { Movie } from "./movie.model";

export interface MovieDetail extends Movie  {
    poster: string;
    summary: string;
    box_office: string;
    producers: string[];
    cinematographers: string[];
}