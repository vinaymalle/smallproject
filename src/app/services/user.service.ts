import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAlbums(){
   return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
}
