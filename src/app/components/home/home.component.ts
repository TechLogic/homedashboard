import { Component, OnInit } from "@angular/core";

import { MdButtonModule, MdCheckboxModule } from "@angular/material";

@Component({
  selector: "app-home",
  styleUrls: ["./home.component.scss"],
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() {}

  ngOnInit() {}
}
