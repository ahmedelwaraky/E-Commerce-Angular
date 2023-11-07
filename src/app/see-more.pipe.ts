import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(x: string,limit: number):string {
    return x.split(" ").slice(0,10).join("");
  }

}
