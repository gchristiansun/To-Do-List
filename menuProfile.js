import {banner} from './globalVariabel.js';
import {sectionUser} from './globalVariabel.js';
import {prompt} from './globalVariabel.js';
import {sectionLogout} from './globalVariabel.js';
import {menuUtama} from './mainMenu.js';
import {dataUser} from './globalVariabel.js';
import {indexUserCurrent} from './menuLogin.js';
import {editProfil} from './globalVariabel.js'
import chalk from 'chalk'



export function profile() {
    console.clear()
    banner()
    console.log("~ Profile")
    console.log("+--------------------------+")
    console.log(`- Username: ${sectionUser.user}`)
    console.log(`- Email   : ${sectionUser.email}`)
    console.log(`- Password: ${chalk.cyan("********")}`)
    console.log("+--------------------------+")
    console.log("[>] Kembali")
    console.log("[1] Edit profil")
    console.log("[2] Logout")
    let choice = prompt("Pilih Menu: ")
    if (choice == 1) {
        while (true) {
            console.clear();
            banner();
            console.log("Menu Edit Profil")
            console.log("[>] Kembali")
            var username = prompt("- Masukkan username: ");
            if (username.includes(" ")) {
              console.log(chalk.red("Username tidak boleh mengandung spasi!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
            }
            else if (username == ">") {
              console.clear();
              profile()
            }
            else if (username.length == 0) {
              console.log(chalk.red("Username tidak boleh kosong!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
            }
            else if (typeof username == "string") {
              break;
            }
            else {
              console.log(chalk.red("Username harus berupa string!"));
              console.log("Tekan Enter untuk melanjutkan");
              console.clear();
            }
        }
        
        while (true) {
            var email  = prompt("- Masukkan email: ");
            if (email.includes(" ")) {
              console.log(chalk.red("Username tidak boleh mengandung spasi!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
        
            }
            else if (username == ">") {
              console.clear();
              profile()
            }
            else if (email.length == 0) {
              console.log(chalk.red("Username tidak boleh kosong!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
            }
            else if (typeof email == "string") {
              break;
            }
            else {
              console.log(chalk.red("Username harus berupa string!"));
              console.log("Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
            }
        }
        
        while (true) {
            var password = prompt("- Masukkan password: ");
            if (password.includes(" ")) {
              console.log(chalk.red("Username tidak boleh mengandung spasi!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
              console.log("- Masukkan email: " + email);
            }
            else if (password == ">") {
              console.clear();
              profile()
            }
            else if (password.length == 0) {
              console.log(chalk.red("Password tidak boleh kosong!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
              console.log("- Masukkan email: " + email);
            }
            else if (password.length < 8) {
              console.log(chalk.red("Password harus memiliki minimal 8 karakter!"));
              prompt("=> Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
              console.log("- Masukkan email: " + email);
            }
            else if (typeof password == "string") {
              break;
            }
            else {
              console.log(chalk.red("Password tidak valid!"));  
              console.log("Tekan Enter untuk melanjutkan");
              console.clear();
              banner();
              console.log("Menu Edit Profil")
              console.log("[>] Kembali")
              console.log("- Masukkan username: " + username);
              console.log("- Masukkan email: " + email);
            }
        }
    } else if (choice == 2) {
        sectionLogout();
    } else if (choice == ">") {
        return menuUtama()
    }
    else {
        console.log(chalk.red("=> Inputan tidak valid"));
        prompt("Tekan Enter untuk melanjutkan");
        console.clear();
        profile()
    }
    editProfil(username, email, password)
    profile();
}

