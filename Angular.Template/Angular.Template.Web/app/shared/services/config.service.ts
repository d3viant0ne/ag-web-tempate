import { Injectable } from '@angular/core';

declare var cfg: any;

export enum ConfigProperty {
}

@Injectable()
export class ConfigService {
    get(key: ConfigProperty): any {
        var val = cfg[ConfigProperty[key]];
        return val;
    };

    getNumber(key: ConfigProperty): number {
        var val = cfg[ConfigProperty[key]];
        return val;
    };

    getString(key: ConfigProperty): string {
        var val = cfg[ConfigProperty[key]];
        return val;
    };
}