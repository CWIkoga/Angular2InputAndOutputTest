import {Component,Input,Output,EventEmitter} from '@angular/core';
import {AppParentComponent} from './app.parent';
import {Msg}from './msg';

@Component({
    selector: 'my-app-child',
    templateUrl: 'app/app.child.html',
    events: ['checkingMsg']
})
export class AppChildComponent {
    @Input('child-name') childName: string;
    @Input()msg: Msg;

    @Output('checking') checkingMsg = new EventEmitter();
    checking(msgText:string) {
        this.checkingMsg.next(msgText);
    }
}
