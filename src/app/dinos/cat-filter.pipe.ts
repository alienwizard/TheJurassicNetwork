import { Pipe, PipeTransform } from '@angular/core';
import { Cat } from './types';

@Pipe({
  name: 'catFilter'
})
export class CatFilterPipe implements PipeTransform {

  transform(value: Cat[], filterBy: string): Cat[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((cat: Cat) =>
      cat.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
