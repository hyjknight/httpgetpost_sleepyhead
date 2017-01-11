import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HTTPTestComponent} from './http.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Http Get & Post by SleepyHead</h1>
	    <http-test></http-test>
    `,
    directives:[HTTPTestComponent]
})

export class AppComponent {
    
}
