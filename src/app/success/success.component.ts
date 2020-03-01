import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'success.component.html',
    styleUrls: ['success.component.scss']
})
export class SuccessComponent implements OnInit{
    ngOnInit() {
        localStorage.clear();
    }
}
