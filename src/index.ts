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

// console.log("bye");

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
class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(newBlock);
  }
  public getBlock() {
    // return this.blocks;
    // 참조 데이터라 그대로 보내면 데이터를 받아서 변경할 수도 있음
    // 방지하기 위해 스프레드 연산자로 새 배열을 반환한다
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log("blockchain.getBlock()", blockchain.getBlock());
