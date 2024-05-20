import chalk from "chalk"
import logSymbols from 'log-symbols';

console.log(chalk.blue.bgCyan.italic('Olá mundo!'))
console.log(logSymbols.success, chalk.green.italic('Servidor iniciado'));

console.log(logSymbols.error, chalk.red.italic('Erro no servidor'));