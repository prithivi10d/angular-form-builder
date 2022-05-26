import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  template: ``,
styles: []
})
export class DepositComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  coins(){
    this.router.navigate(['coins'], {relativeTo:this.route});
  }

  notes(){
    this.router.navigate(['notes'], {relativeTo:this.route});
  }

}
