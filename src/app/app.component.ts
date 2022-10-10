import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  refMorse = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    ".-":"a",
    "-...":"b",
    "-.-.":"c",
    "-..":"d",
    ".":"e",
    "..-.":"f",
    "--.":"g",
    "....":"h",
    "..":"i",
    ".---":"j",
    "-.-":"k",
    ".-..":"l",
    "--":"m",
    "-.":"n",
    "---":"o",
    ".--.":"p",
    "--.-":"q",
    ".-.":"r",
    "...":"s",
    "-":"t",
    "..-":"u",
    "...-":"v",
    ".--":"w",
    "-..-":"x",
    "-.--":"y",
    "--..":"z",
    "/":" ",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
  };

  typeView: number = 0;
  resultData;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        if(params.regularExpressionDivisible) {
          this.typeView = 1;
          this.resultData = JSON.stringify({Result: this.regularExpressionDivisible(params.regularExpressionDivisible)});
        } else if (params.decodeTheMorseCode) {
          this.typeView = 2;
          this.resultData = JSON.stringify({Result: this.decodeTheMorseCode(params.decodeTheMorseCode)});
        }
      }
    );
  }

  regularExpressionDivisible(binary) {
    if(/^-{0,1}\d+$/g.test(binary)) {
      const decimalNumber = parseInt(binary, 2);
      return decimalNumber % 7 === 0;
    }

    return false;
  }

  decodeTheMorseCode(morseCode) {
    return morseCode.trim().split('   ').map(word => word.split(' ').map(symbol => this.refMorse[symbol]).join('')).join(' ');
  }
}
