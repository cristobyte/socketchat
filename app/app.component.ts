import { Component } from '@angular/core';
import {ChatService} from './services/chat.services';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [ ChatService ]
})
export class AppComponent { }
