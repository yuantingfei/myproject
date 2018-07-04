import { Pipe, PipeTransform } from '@angular/core';
import { config } from './../../config';
import { word_zh_cn } from './../../i18n/zh-cn';
import { word_zh_tw } from './../../i18n/zh-tw';
import { word_zh_hk } from './../../i18n/zh-hk';
@Pipe({ name: 'languageTo' })
export class LanguageToPipe implements PipeTransform {
    transform(value: string): string {
        let data = value;
        let word_map;
        if (<string>config.language === 'zh_cn') {
            return value;
            // word_map = word_zh_cn;
        } else if (<string>config.language === 'zh_tw') {
            word_map = word_zh_tw;
        } else if (<string>config.language === 'zh_hk') {
            word_map = word_zh_hk;
        }
        word_map.forEach(function (values, key, map) {
            if (<String>key === value) {
                data = values;
            }
        });
        return data;
    }
}