import {banner} from './banner.js';  
import {sleep} from './banner.js'
import {prompt} from './banner.js'
import chalk from 'chalk'

// function menuUtama() {
//     console.log("[+] Selamat datang User")
//     console.log("[1] Planned")
//     console.log("[2] Task")
//     console.log("[3] Profile")
//     console.log("----------------------------")
// }

export function menuUtama() {
    async function choice() {
        while (true) {
            banner();
            console.log("[+] Selamat datang User")
            console.log("[1] Planned")
            console.log("[2] Task")
            console.log("[3] Profile")
            console.log("----------------------------")

            let pilihan = prompt("Pilih menu: ")

            if (pilihan == "1") {
                break
            }
            else if (pilihan == "2") {
                break
            }
            else if (pilihan == "3") {
                break
            }
            else {
                console.log(chalk.red("=> Inputan tidak valid"));
                await sleep(1000);
                console.clear()
            }
        }
    }
    choice()
};
menuUtama()