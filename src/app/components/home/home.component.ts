import { Component, OnInit } from "@angular/core";

import { MdButtonModule, MdCheckboxModule } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor() {}

  ngOnInit() {}
}
