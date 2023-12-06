import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CodeRequestObject, RequestObject } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  generateCode(object: CodeRequestObject): Observable<any> {
    const generateCodeURL = this.url + 'generate-code';
    return this.http.post(generateCodeURL, object, { observe: 'response' });
  }

  
  generateImage(object: RequestObject): Observable<any> {
    const generateImageURL = this.url + 'generate-image';
    return this.http.post(generateImageURL, object, { observe: 'response' });
  }


  helloWorld(): Observable<any> {
    const helloWord = this.url + 'hello';
    return this.http.get(helloWord, { observe: 'response' });
  }

}
