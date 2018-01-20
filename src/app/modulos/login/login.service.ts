import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class LoginService {
    token: string;

    constructor(private router: Router) { }

    registrarUsuario(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log('registrado', response);
            }
        )
        .catch(
                error => console.log('eroror', error)
            );
    }
    logarUsuario(email: string, password: string) {
        console.log('logar', this.token);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log('dentro', response);
                firebase.auth().currentUser.getToken()
                    .then(
                        (token: string) => this.token = token
                    );
            }
        )
        .catch(
                error => console.log('eroror', error)
            );
    }
}
