import { TestBed, inject } from "@angular/core/testing";
import * as electron from "electron";
import * as fs from "fs";
import { SettingsService } from "./settings.service";

describe("SettingsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
  });

  it(
    "should be created",
    inject([SettingsService], (service: SettingsService) => {
      expect(service).toBeTruthy();
    })
  );
});
