import {banner} from './globalVariabel.js';  
import {prompt} from './globalVariabel.js'
import {menuPlanned} from './menuPlanned.js';
import chalk from 'chalk'

// function menuUtama() {
//     console.log("[+] Selamat datang User")
//     console.log("[1] Planned")
//     console.log("[2] Task")
//     console.log("[3] Profile")
//     console.log("----------------------------")
// }

export function menuUtama() {
    console.clear();
    while (true) {
        banner();
        console.log("[+] Selamat datang User")
        console.log("[1] Planned")
        console.log("[2] Task")
        console.log("[3] Profile")
        console.log("----------------------------")

        let pilihan = prompt("Pilih menu: ")

        if (pilihan == "1") {
            menuPlanned()
        }
        else if (pilihan == "2") {
            break
        }
        else if (pilihan == "3") {
            break
        }
        else {
            console.log(chalk.red("=> Inputan tidak valid"));
            prompt("Tekan Enter untuk melanjutkan")
            console.clear()
        }
    }
};
menuUtama()