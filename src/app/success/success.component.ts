import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'success.component.html',
    styleUrls: ['success.component.scss']
})
export class SuccessComponent implements OnInit {
    constructor(
        private route: Router
    ) {}
    ngOnInit() {
        localStorage.clear();
    }
    goHome() {
        this.route.navigate(['home']);
    }
}
