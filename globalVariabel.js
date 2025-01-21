import PromptSync from 'prompt-sync'
import chalk from 'chalk'
import { menuUtama } from './mainMenu.js'

export function banner() {
    console.log("+==========================+")
    console.log("|                          |")
    console.log("|                          |")
    console.log("|        To Do List        |")
    console.log("|                          |")
    console.log("|                          |")
    console.log("+==========================+")
}

export const prompt = PromptSync()
export let planned = [];

const header = `|${"No".padEnd(2)}| ${"Activity".padEnd(30)} | ${"Date".padEnd(21)} | ${"Time".padEnd(5)} |`;
const separator = "-".repeat(header.length);

export function displayPlanned() {
    console.log(separator);
    console.log(header);
    console.log(separator);
    for (let i = 0; i < planned.length; i++) {
        console.log(chalk.green(`|${(i + 1).toString().padEnd(2)}| ${String(planned[i][0].padEnd(30))} | ${String(planned[i][1].padEnd(2))}/${String(planned[i][2].padEnd(13))}/${String(planned[i][3].padEnd(4))} | ${String(planned[i][4].padEnd(5))} |`));
    }
    console.log(separator);
}

// Data User
export var dataUser = [];
export var status = false;
export var sectionUser = {}

export var userCurrent

export function sectionLogin() {
    if (Object.keys(sectionUser).length != 0) {
        status = true
        userCurrent = sectionUser.user
        menuUtama()
    }
    else {
        status = false
        userCurrent = null
    }
}