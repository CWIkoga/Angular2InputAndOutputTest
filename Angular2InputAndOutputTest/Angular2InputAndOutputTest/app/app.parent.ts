import {Component} from '@angular/core';
import {AppChildComponent} from './app.child';
import {Msg}from './msg';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.parent.html',
    styleUrls: ['app/app.parent.css'],
     directives: [AppChildComponent]
})
export class AppParentComponent {
    msgs = MSGS;
    selectedMsg: Msg;
    onSelect(msg: Msg) { this.selectedMsg = msg; }

    childReply: string;
    onChecking(event) {
        this.childReply = '「'+ event + '」のメッセージが確認されました。';
    }
}

var MSGS: Msg[] = [
    { id: 1, text: '飯食べたか' },
    { id: 2, text: '風呂入ったか' },
    { id: 3, text: '元気でやってるか' },
    { id: 4, text: '風邪ひくなよ' },
];

