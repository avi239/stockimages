import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private REST_API_SERVER = "http://blogfordeveloper.com/react/admin/wp-json/wp/v2/";
  constructor(private httpClient: HttpClient) { }

  public sendGetRequestPhoto(){
    return this.httpClient.get(this.REST_API_SERVER+"posts");

    
  }
  
}
