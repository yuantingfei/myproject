import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageToPipe } from './language.pipe';
@NgModule({
    imports: [
        CommonModule
    ],
    exports:[
        LanguageToPipe
    ],
    declarations: [
        LanguageToPipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PipeModule { }
