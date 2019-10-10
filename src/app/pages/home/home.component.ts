import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  movies = [
    {
      title: "Lord of the Rings: Fellowship of the Ring",
      year: 2001
    },
    {
      title: "Harry Potter",
      year: 2001
    },
    {
      title: "Ready Player One",
      year: 2018
    }
  ];

  // gets run before component
  constructor() {}

  // life cycle component similar to componentDidMount
  ngOnInit() {}
}
