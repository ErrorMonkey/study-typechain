// import { init, exit } from "myPackage";

// interface DevProp extends Company {
//   name: string;
//   language: string[];
//   os: string[];
// }

// interface Company {
//   companyName: string;
// }

// class Dev implements DevProp {
//   constructor(name: string, language: string[], os: string[], companyName: string) {}
// }

// const devSeyun = new Dev("세윤", ["C#", "JAVA"], ["mac", "window"], "company");

console.log("bye");

import * as crypto from "crypto";

interface BlockShape {
  PrevHash: string;
  heigth: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(public prevHash: string, public height: string, public data: string) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
  }
}
