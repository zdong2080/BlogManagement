import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    email: string = '';
    password: string = '';

    constructor(private auth: AuthService) { }

    ngOnInit(): void {
    }

    register() {
        
        if(this.email == '') {
            alert('Please enter email');
            return;
        }

        if(this.password == '') {
            alert('Please enter password');
            return;
        }

        this.auth.register(this.email, this.password);
        this.email = '';
        this.password = '';

    }

}
