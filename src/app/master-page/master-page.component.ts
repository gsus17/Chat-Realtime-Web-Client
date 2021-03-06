import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.sass']
})
export class MasterPageComponent implements OnInit {

  public openedSideBar: boolean;

  public chatContact = new BehaviorSubject('');

  constructor(private router: Router,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointDetector();
  }

  /**
   * Redirecciona a la vista de login.
   */
  public logout() {
    this.router.navigate(['login']);
  }

  /**
   * Detecta el cambio de pantalla.
   */
  private breakpointDetector() {

    this.breakpointObserver.observe([Breakpoints.Small])
      .subscribe(() => {
        this.openedSideBar = false;
      });

    this.breakpointObserver.observe([Breakpoints.Web, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(() => {
        this.openedSideBar = true;
      });
  }

  /**
   * chatSelection
   */
  public chatSelect(chatContact: any) {
    console.log(`${MasterPageComponent.name}::chatSelection chatId %o`, chatContact);
    this.chatContact.next(chatContact);
  }
}
