import {banner} from './globalVariabel.js';
import {prompt} from './globalVariabel.js';
import {menuRegistrasi} from './menuRegistrasi.js';
import {menuLogin} from "./menuLogin.js"
import chalk from 'chalk';

// banner();
export function main() {
    console.clear();
    banner();
    console.log("[1] Registrasi")
    console.log("[2] Login")
    console.log("[3] Exit")
    let pilihan = prompt("Pilih Menu: ")
    if (pilihan == "1") {
        return menuRegistrasi()
    } else if (pilihan == "2") {
        menuLogin()
    } else if (pilihan == "3") {
        console.log(chalk.blue("Exit..."))
        prompt("Tekan Enter untuk melanjutkan");
        console.clear();
        process.exit()
    } else {
        console.log(chalk.red("=> Inputan tidak valid"));
        prompt("Tekan Enter untuk melanjutkan");
        console.clear();
        main()
    }
}

main()