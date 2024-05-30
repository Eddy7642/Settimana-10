import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }

  getAll():Observable<iPost[]>{
    return this.http.get<iPost[]>(this.apiUrl)
  }
}
