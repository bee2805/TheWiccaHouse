import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

// this makes it a service
@Injectable({
  providedIn: 'root'
})
export class InventorydbService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/inventory'

  inventory: Item[] = []

  // CRUD FUNCTIONALITY
  // READ
  getAllItems(): Observable<Item[]>{
    return this.http.get<Item[]>(this.url)
  }

  // UPDATE
  updateQuantity(_id: string, quantity: number): Observable<Item>{
    return this.http.put<Item>(`${this.url}/${_id}`, {quantity})
  }
}
