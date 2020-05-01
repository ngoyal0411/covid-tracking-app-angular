import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "displayName"
})
export class ConvertToDisplayName implements PipeTransform {
    transform(value: string): string {
        let updatedValue: string = value;
        let name: string[] = value.split(' ');

        if (name.length > 1) {
            updatedValue = name[1].concat(', ', name[0]);
        }
        return updatedValue;
    }
}