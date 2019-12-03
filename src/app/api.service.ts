import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPokemonNames(language: string = 'en') {
    return this.http.get('/assets/data/pokemon/' + language + '.json');
  }
}
