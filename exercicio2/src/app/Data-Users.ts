import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataUsersService {
  getData() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}