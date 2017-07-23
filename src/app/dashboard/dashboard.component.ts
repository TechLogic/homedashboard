import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../providers/settings.service";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  private gridSizeDefault: number = 6;

  private GRID_SIZE_PROPERTY = "dashboard.grid.size";

  private gridSize: number;

  private gridStyle: string;

  constructor(private settings: SettingsService) {
    console.log(settings);

    if (settings.has(this.GRID_SIZE_PROPERTY)) {
      this.gridSize = settings.get(this.GRID_SIZE_PROPERTY);
    } else {
      settings.set(this.GRID_SIZE_PROPERTY, this.gridSizeDefault);
      this.gridSize = this.gridSizeDefault;
    }
    this.gridStyle = "repeat(" + this.gridSize + ",1fr)";
  }

  ngOnInit() {}
}
