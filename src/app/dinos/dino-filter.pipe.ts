import { Pipe, PipeTransform } from '@angular/core';
//import { Cat } from './types';

@Pipe({
  name: 'dinoFilter'
})
export class DinoFilterPipe implements PipeTransform {

  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

    return filterBy ? value.filter((dino: any) =>
      dino.title.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
