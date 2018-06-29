import { Directive, Input, ElementRef, Renderer} from '@angular/core';


@Directive({
    selector: '[sexColor]'
})

export class ColorDirective {
    @Input() sexColor: string;

    constructor(private element: ElementRef,
        private render: Renderer){
            debugger;
            if (this.sexColor == "femenino"){
                this.element.nativeElement.style.backgroundColor = '#771061';
            }
            
    }




}