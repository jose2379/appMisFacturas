import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) { }

    logarUsuario(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log('eroror', error)
            );
    }
}
