import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { TwitterMessageEntity } from '../entities/twitter-message-entity/twitter-message-entity';

@Injectable({
  providedIn: 'root'
})
export class TwitterSearchClientService {
  apiUrl = "https://localhost:44377/v1/TwitterMessages";

  response: TwitterMessageEntity;

  constructor(private http: HttpClient) { }

  async requestTwitterMessagesFromApi(hashtag: any) {
    return await this.http.post<TwitterMessageEntity>(this.apiUrl, hashtag).toPromise();
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

  handleResponse(response: any): void {
    this.response = new TwitterMessageEntity();
    this.response.statuses = response;
  }
}
