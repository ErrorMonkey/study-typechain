import { init, exit } from "myPackage";

interface DevProp extends Company {
  name: string;
  language: string[];
  os: string[];
}

abstract class Company {
  constructor(companyName: string) {}
}

class Dev implements DevProp {
  name: string;
  language: string[];
  os: string[];
  companyName: string;
  constructor(name: string, language: string[], os: string[], companyName: string) {
    this.name = name;
    this.language = language;
    this.os = os;
    this.companyName = companyName;
  }
}

const devSeyun = new Dev("세윤", ["C#", "JAVA"], ["mac", "window"], "company");

console.log("bye");

import * as crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public prevHash: string;
  public height: number;
  public data: string;
  public hash: string;
  constructor(prevHash: string, height: number, data: string) {
    this.hash = Block.calculateHash(prevHash, height, data);
    this.prevHash = prevHash;
    this.height = height;
    this.data = data;
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}
