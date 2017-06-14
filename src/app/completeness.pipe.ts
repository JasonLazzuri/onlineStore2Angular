import { Pipe, PipeTransform } from '@angular/core';
import { Listing } from './listing.model';


@Pipe({
  name: 'completeness'
})



export class CompletenessPipe implements PipeTransform {
  transform(input: Listing[]){
    var output: Listing[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === "For Sale") {
        output.push(input[i]);
      } else if (input[i].category === "Housing"){
        output.push(input[i]);

      }


    }
    return output;
  }
}
