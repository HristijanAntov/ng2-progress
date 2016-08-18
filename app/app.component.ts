import { Component } from '@angular/core';
import { ProgressUploadComponent } from './progress-upload.component' 

@Component({
    selector: 'my-app',
    styles:[`  
        .upload-container {
            width: 40%;
            height: 300px;
            background-color: #eaf1f0; 
        }
        .test-input {
           border-bottom-left-radius:5px;
           border-bottom-right-radius:5px;
           outline:none;
           border:none;
           border:2px solid #00a19a;
           width: 40%;
           height:40px;
           font-size:20px;
           padding-left:10px;
        }
    `],
    template: `
        <div class="upload-container">    
             <progress-upload [percents]="uploadPercents"></progress-upload>
        </div>
        <input class="test-input" min="0" max="100" [(ngModel)]="uploadPercents" type="number" placeholder="Vnesi brojce od 0 do 100 da go testiras"/>
    `
})

export class AppComponent {
     
    uploadPercents: number
    
 }
