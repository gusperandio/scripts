"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fatorial_1 = require("./fatorial");
var yargs = require("yargs");
var argv = yargs.demandOption('num').argv;
//demandOption acrescenta um parametro
var num = argv.num;
//const num = parseInt(process.argv[2]);
console.log("O fatorial de " + num + " \u00E9 igual a " + fatorial_1.fatorial(num));
//# sourceMappingURL=main.js.map