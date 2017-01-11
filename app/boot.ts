import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {FORM_PROVIDERS}     from 'angular2/common';
import {HTTP_PROVIDERS}     from 'angular2/http';

bootstrap(AppComponent, [FORM_PROVIDERS, HTTP_PROVIDERS]).catch(err => console.error(err));