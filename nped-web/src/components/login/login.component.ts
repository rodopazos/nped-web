import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginServiceGet } from './login.service.get';

@Component({
    selector: 'app-login-component',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    /**
     * Define a property for the user identification name
     *
     * @type {string}
     * @memberof LoginComponent
     */
    user: string;

    /**
     * Define a property for the user password
     *
     * @type {string}
     * @memberof LoginComponent
     */
    password: string;

        /**
     * Define a property to use by <p-growl> notification component.
     *
     * @type {Array<any>}
     * @memberOf TableComponent
     */
    notifications: Array<any>;

    constructor(private router: Router, private service: LoginServiceGet) {
        this.initializeProperties();
    }

    private initializeProperties(): void {
        this.notifications = new Array<any>();
    }

    public login(): void {
        this.service.getData().subscribe(
            data => {
                const result = data.json().data;

                if (this.user === result.user && this.password === result.password) {
                    this.router.navigate(['/home']);
                }
                else {
                    this.loginFailNotification();
                }
            }
        );
    }

    private loginFailNotification(): void {
        this.notifications.push({
            severity: 'error',
            summary: 'Error de credenciales',
            detail: 'Su nombre de usuario o contraseña son incorrectos'
        });
    }

}
