import { Injectable } from "@angular/core";
import * as electron from "electron";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class SettingsService {
  private SETTINGS_FILENAME = "settings";

  private filePath: string;

  private data: any;

  constructor() {
    const userDataPath = (electron.app || electron.remote.app)
      .getPath("userData");
    this.filePath = path.join(userDataPath, this.SETTINGS_FILENAME + ".json");
    console.debug("Settings file: " + this.filePath);
    this.data = this.parseDataFile();
  }

  public has(path: string): boolean {
    return this.getDescendantProp(path) !== undefined;
  }

  public get(path: string): any {
    return this.getDescendantProp(path);
  }

  public set(path: string, value: any) {
    this.createObjectFromDot(path, value);
    this.writeToFile();
  }

  private parseDataFile(): any {
    try {
      const buffer: any = fs.readFileSync(this.filePath);
      return JSON.parse(buffer);
    } catch (error) {
      // if there was some kind of error, return the passed in defaults instead.
      return this.initConfig();
    }
  }

  private getDescendantProp(path: string) {
    const objects: string[] = path.split(".");

    let currentObject: any = this.data;

    for (let object of objects) {
      currentObject = currentObject[object];
      if (currentObject === undefined) {
        return undefined;
      }
    }
    return currentObject;
  }

  private createObjectFromDot(path: string, value: any) {
    const objects: string[] = path.split(".");

    const lastObject = objects.pop();

    let currentObject: any = this.data;
    for (let object of objects) {
      console.log("Object: " + object);
      // check if object does not exists
      if (currentObject[object] === undefined) {
        currentObject[object] = {};
      }
      currentObject = currentObject[object];
    }
    currentObject[lastObject] = value;
  }

  private writeToFile() {
    const config = JSON.stringify(this.data);
    fs.writeFile(this.filePath, config);
  }

  private initConfig(): any {
    console.debug("Create inital setting file");
    const emptyJSON = {};

    const config = JSON.stringify(emptyJSON);
    fs.writeFile(this.filePath, config);
    return emptyJSON;
  }
}
