import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "<f48f98ce3696eff01e2389a65a0a4745>";

  bannerApiData(): Observable<any> {
    return this.http.get('${this.baseUrl}/trending/all/week?api key=${this.apikey}&language=pt-BR'); 
  }
}
