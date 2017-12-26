import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'pipesearch'
})
export class PipesearchPipe implements PipeTransform {

  transform(students:any, name2:string){
        if(!name2) 
          return students;

        return students.filter(function (studentsfiltered) {
          return studentsfiltered.name.toLowerCase().indexOf(name2.toLowerCase()) > -1;
        })  
}
}
