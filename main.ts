import {fatorial} from './fatorial'
import * as yargs from 'yargs'

const argv = yargs.demandOption('num').argv;
//demandOption acrescenta um parametro

const num = argv.num;
//const num = parseInt(process.argv[2]);

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);
