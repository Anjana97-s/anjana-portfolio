import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit
{
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

  constructor() { }

  ngAfterViewInit(): void
  {
    const typed = this.selector('.typed')
    if (typed)
    {
    // let typed_strings = typed.getAttribute('data-typed-items')
    // typed_strings = typed_strings.split(',')
    // new Typed('.typed', {
    //   strings: typed_strings,
    //   loop: true,
    //   typeSpeed: 100,
    //   backSpeed: 50,
    //   backDelay: 2000
    // });
    }
  }

  ngOnInit(): void
  {
  }

}
