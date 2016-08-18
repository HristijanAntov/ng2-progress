import { Component , Input } from '@angular/core'
@Component({
    selector: 'progress-upload',
    styles:[` 
    .progress-container {
        background-color:#ffffff;
        border-radius:15px;
        width:308px;
        height:177px;
        position:relative;
        margin:auto;
        top:50px;
    }
    .progress-round {
        transition:stroke-dashoffset 0.2s ease-in;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    } 
    .percents-text {
        font-size:30px; 
    }
    `],
    template: `
        <div class="progress-container"> 
            <svg width="100%" height="100%">
                <circle
                    cx="50%"  
                    cy="50%" 
                    attr.r="{{radius}}"
                    stroke-dasharray="628"  
                    stroke="#f0f0f0" 
                    stroke-width="7px" 
                    fill="white" />
                <circle class="progress-round"
                    cx="50%"  
                    cy="50%" 
                    attr.r="{{radius}}"
                    attr.stroke-dasharray="{{dashArray}}"
                    attr.stroke-dashoffset="{{invalidateProgress()}}"
                    attr.stroke="{{stroke}}" 
                    stroke-width="7px" 
                    fill="transparent" />
                
                <text class="percents-text" 
                   x="50%"
                   y="50%"
                   text-anchor="middle" 
                   alignment-baseline="central"
                   attr.fill="{{stroke}}">{{percents || 0}}%</text>
            </svg>
        </div>
    `
})

export class ProgressUploadComponent {
 
    radius: number = 70
    perimeter: number = 2 * this.radius * Math.PI
    dashArray: number = this.perimeter
    dashOffset: number 
    stroke: string = '#00a19a'

    @Input()
    percents: number
    // Ovaa funkcija se povikuva sekogas koga kaj parent komponentata ke se promeni uploadPercents vrednosta
    invalidateProgress() { 
        this.dashOffset = this.perimeter - ( this.percents || 0 )  * this.perimeter / 100 
        return this.dashOffset
    }
 
 }
