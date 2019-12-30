import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tabledata: any, searchdata: any): any {
    if(!searchdata)
    {
      return tabledata
    }
    return tabledata.filter(val=>{
      var a=val.title.toLocaleLowerCase();
      var b=val.title.toUpperCase();
      return (a.toLocaleLowerCase().includes(searchdata)||b.toUpperCase().includes(searchdata))
    })
  }
  
}
