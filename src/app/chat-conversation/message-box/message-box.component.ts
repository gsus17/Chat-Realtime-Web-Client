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

  constructor() { }

  ngOnInit() {
  }

}
