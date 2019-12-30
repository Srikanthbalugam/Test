import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private httpclient:HttpClient) {
    
   }
   getData()
   {
     return this.httpclient.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");
   }
}
