"use strict";
//SCRIPT PARA CRIAÇÃO DE ARQUIVOS
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var yargs = require("yargs");
var argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, function (error) {
    if (error)
        throw error;
    console.log("Arquivo " + argv.filename + " foi salvo com sucesso.");
});
//# sourceMappingURL=save-file.js.map