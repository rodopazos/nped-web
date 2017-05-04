import { Router } from '@angular/router';
import { Component } from '@angular/core';

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

    constructor(private router: Router) {
        this.initializeProperties();
    }

    private initializeProperties(): void {
        this.notifications = new Array<any>();
    }

    public login(): void {
        if (this.user === 'user' && this.password === 'pass') {
            this.router.navigate(['/home']);
        }
        else {
            this.loginFailNotification();
        }
    }

    private loginFailNotification(): void {
        this.notifications.push({
            severity: 'error',
            summary: 'Credential Error',
            detail: 'Your user name or password is incorrect'
        });
    }

}
