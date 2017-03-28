import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class HelperService {
    isNullOrUndefined(value: any): boolean {
        return _.isUndefined(value) || _.isNull(value);
    };

    isNullOrEmpty(value: string): boolean {
        return value == null || value === '';
    };
}