import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icone'
})
export class IconePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Front-End' : return 'html';
      case 'Back-End' : return 'favorite'
    }
    return 'code';
  }

}
