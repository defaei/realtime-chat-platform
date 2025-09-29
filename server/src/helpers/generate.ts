export class CustomGenerate {
  static replacePreZeroInStringWith(string: string, replaceNumber: number): string {
    if (string[0] === "0") {
      return `${replaceNumber}${string.slice(1)}`;
    }
    return string;
  }

  static generateRandomDigitsCodeByLength(codeLength: number): string {
    let code = "";
    for (let i = 0; i < codeLength; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return this.replacePreZeroInStringWith(code, 1);
  }
}
