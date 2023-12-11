import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CodeRequestObject, RequestObject } from '../model';
import { Observable } from 'rxjs';
import { SessionCodeService } from './session-code.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.apiUrl;
  constructor(private http: HttpClient,
    private sessionCode: SessionCodeService) {}

  generateCode(object: CodeRequestObject): Observable<any> {
    const code = this.sessionCode.getCode();
    const headers = new HttpHeaders({
      'X-Session-Code': code!, 
    });
    const generateCodeURL = this.url + 'generate-code';
    return this.http.post(generateCodeURL, object, { observe: 'response', headers: headers },);
  }

  
  generateImage(object: RequestObject): Observable<any> {
    const code = this.sessionCode.getCode();
    const headers = new HttpHeaders({
      'X-Session-Code': code!, 
    });
    const generateImageURL = this.url + 'generate-image';
    return this.http.post(generateImageURL, object, { observe: 'response', headers: headers  });
  }


  helloWorld(): Observable<any> {
    const helloWord = this.url + 'hello';
    return this.http.get(helloWord, { observe: 'response' });
  }

}
