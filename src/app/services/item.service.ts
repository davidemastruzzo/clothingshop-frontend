import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../entities/item';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private BASE_URI = 'http://localhost:8080/rest/';

  constructor(private http: HttpClient) { }

  public getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.BASE_URI + 'item');
  }
}
