import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit
{

  constructor() { }

  private selector(el: string , all = false): any
  {
    el = el.trim();
    if (all)
    {
      return Array.from(document.querySelectorAll(el));
    }
    else
    {
      return document.querySelector(el);
    }
  }



  ngOnInit(): void
  {

  }

  public mobileViewToggle(e): any
  {
    console.log(e);

    const mobile  = this.selector('.mobile-nav-toggle')
    this.selector('body').classList.toggle('mobile-nav-active')
    mobile.classList.toggle('fa-bars')
    mobile.classList.toggle('fa-xmark')
  }

}
