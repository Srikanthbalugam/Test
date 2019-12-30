import { Component } from '@angular/core';
import { GetdataService } from './getdata.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project3';
  httpdata:any
  jsonRawData:any
  constructor(private getservice:GetdataService)
  {
    var time=timer(0,10000)
    var x=time.subscribe(val=>{
    this.getservice.getData().subscribe(data=>{
      this.httpdata=data['hits']
      console.log(this.httpdata)
    })
  })
  }
  getRawData(x)
  {
    this.jsonRawData=x;
  }
}
