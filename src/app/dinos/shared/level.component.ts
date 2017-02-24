import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-level',
    templateUrl: './level.component.html',
    styleUrls: ['./level.component.css']
})

export class LevelComponent implements OnChanges {
    @Input() level: number;
    public CatLevel: any = {
        1: 'novice',
        2: 'hero',
        3: 'god',
    };
    currentLevel = 'novice';
    ngOnChanges() {
        this.currentLevel = this.CatLevel[this.level];
    }

};
