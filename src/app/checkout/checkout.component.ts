import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    public pay: FormGroup;
    constructor(
        private fb: FormBuilder
    ) {}
    ngOnInit() {
        this.pay = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            rut: ['', [Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9Kk]{1}$')]],
            cardNumber: ['', Validators.required],
            cvv: ['', Validators.required]
        });
    }
    payItems(payForm, btn) {
        const btnContent = btn.textContent;
        btn.textContent = 'Realizando pago....';
        btn.disabled = true;
        if (this.pay.invalid) {
            return;
        }
        console.log(payForm);
    }
}
