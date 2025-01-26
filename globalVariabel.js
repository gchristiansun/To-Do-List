import PromptSync from 'prompt-sync'
import chalk from 'chalk'
import { menuUtama } from './mainMenu.js'
import { indexUserCurrent } from './menuLogin.js'
import {main} from "./main.js"

export function banner() {
    console.log("+--------------------------+")
    console.log("|                          |")
    console.log("|                          |")
    console.log("|        To Do List        |")
    console.log("|                          |")
    console.log("|                          |")
    console.log("+--------------------------+")
}

export const prompt = PromptSync()
export let planned = [];

const header = `|${"No".padEnd(2)}| ${"Activity".padEnd(30)} | ${"Date".padEnd(21)} | ${"Time".padEnd(5)} |`;
const separator = "-".repeat(header.length);

const headerTask = `|${"No".padEnd(2)}| ${"Tugas".padEnd(30)} | ${"Deadline".padEnd(25)} | ${"Status".padEnd(8)} |`;
const separatorTask = "-".repeat(headerTask.length)

// Data User
export var dataUser = [];
export var status = false;
export var sectionUser = {}

export var userCurrent = null

export function sectionLogin() {
    if (Object.keys(sectionUser).length != 0) {
        status = true
        userCurrent = sectionUser.user
        menuUtama()
    }
}

export function sectionLogout() {
    if (userCurrent.length != null) {
        sectionUser = {}
        status = false
        userCurrent = null
        main()
    }
}

export function displayPlanned() {
    console.log(separator);
    console.log(header);
    console.log(separator);
    for (let i = 0; i < dataUser[indexUserCurrent].planned.length; i++) {
        // console.log(chalk.green(`|${(i + 1).toString().padEnd(2)}| ${String(dataUser[indexUserCurrent].planned[0].padEnd(30))} | ${String(dataUser[indexUserCurrent].planned[1].padEnd(2))}/${String(dataUser[indexUserCurrent].planned[2].padEnd(13))}/${String(dataUser[indexUserCurrent].planned[3].padEnd(4))} | ${String(dataUser[indexUserCurrent].planned[4].padEnd(5))} |`))
        console.log(chalk.green(`|${(i + 1).toString().padEnd(2)}| ${String(dataUser[indexUserCurrent].planned[i][0]).padEnd(30)} | ${String(dataUser[indexUserCurrent].planned[i][1]).padEnd(2)}/${String(dataUser[indexUserCurrent].planned[i][2]).padEnd(13)}/${String(dataUser[indexUserCurrent].planned[i][3]).padEnd(4)} | ${String(dataUser[indexUserCurrent].planned[i][4]).padEnd(5)} |`))

    }
    console.log(separator);
}

export function displayTask() {
    console.log(separatorTask);
    console.log(headerTask);
    console.log(separatorTask);
    for (let i = 0; i < dataUser[indexUserCurrent].task.length; i++) {
        console.log(`|${(i + 1).toString().padEnd(2)}| ${String(dataUser[indexUserCurrent].task[i][0]).padEnd(30)} | ${String(dataUser[indexUserCurrent].task[i][1]).padEnd(3)}/${String(dataUser[indexUserCurrent].task[i][2]).padEnd(10)}/${String(dataUser[indexUserCurrent].task[i][3]).padEnd(4)}/${String(dataUser[indexUserCurrent].task[i][4]).padEnd(5)} | ${String(dataUser[indexUserCurrent].task[i][5]).padEnd(8)} |`)
    }
    console.log(separatorTask)
}

export function editProfil(username, email, password) {
    sectionUser.user = dataUser[indexUserCurrent].username = username;
    sectionUser.email = dataUser[indexUserCurrent].email = email;
    sectionUser.password = dataUser[indexUserCurrent].password = password;
    userCurrent = sectionUser.user
}