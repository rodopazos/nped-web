import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

import { LoginServiceGet } from '../../services/login.service.get';

@Component({
    selector: 'app-login-page',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss']
})
export class LoginPage {
    /**
     * Define a property for the user identification name
     *
     * @type {string}
     * @memberof LoginComponent
     */
    @Input() user: string;

    /**
     * Define a property for the user password
     *
     * @type {string}
     * @memberof LoginComponent
     */
    @Input() password: string;

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
            summary: 'Credential Error',
            detail: 'Your user name or password is incorrect'
        });
    }

}
