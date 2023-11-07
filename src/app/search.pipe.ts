import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}


// transform(products: products[], searchTerm :string)Product[] {
//   return ProductService.filter((product)=> product.title.ToLowerCase() include(searchTerm .ToLowerCase()))
// }