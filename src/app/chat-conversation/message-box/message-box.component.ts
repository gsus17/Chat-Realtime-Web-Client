import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input()
  public message: string;

  @Input()
  public date: Date = new Date();

  @Input()
  public sentByMe: boolean;

  // @Input()
  // public status: boolean;

  constructor() { }

  ngOnInit() {
  }

  public entranceSent(): boolean {
    return this.sentByMe;
    // return this.sentByMe && this.lastItem;
  }

  public entranceRecive(): boolean {
    return !this.sentByMe;
    // return !this.sentByMe && this.lastItem;
  }
}
