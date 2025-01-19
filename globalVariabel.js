import PromptSync from 'prompt-sync'
import chalk from 'chalk'

export function banner() {
    console.log("+==========================+")
    console.log("|                          |")
    console.log("|                          |")
    console.log("|        To Do List        |")
    console.log("|                          |")
    console.log("|                          |")
    console.log("+==========================+")
}

const prompt = PromptSync()
let planned = [];
export {planned}
export {prompt}

const header = `|${"No".padEnd(2)}| ${"Activity".padEnd(30)} | ${"Date".padEnd(21)} | ${"Time".padEnd(5)} |`;
const separator = "-".repeat(header.length);

export function displayPlanned() {
    console.log(separator);
    console.log(header);
    console.log(separator);
    for (let i = 0; i < planned.length; i++) {
        console.log(chalk.green(`|${(i + 1).toString().padEnd(2)}| ${planned[i][0].padEnd(30)} | ${planned[i][1].padEnd(2)}/${planned[i][2].padEnd(13)}/${planned[i][3].padEnd(4)} | ${planned[i][4].padEnd(5)} |`));
    }
    console.log(separator);
}