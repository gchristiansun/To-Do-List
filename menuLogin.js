import {banner} from "./globalVariabel.js";
import {dataUser} from "./globalVariabel.js"
import {main} from "./main.js";
import {prompt} from "./globalVariabel.js"
import {sectionUser} from "./globalVariabel.js";
import {sectionLogin} from "./globalVariabel.js";
import chalk from "chalk";

function login(username, email, password, dataUser) {
  var user = dataUser.find(
    (user) => user[0] === username && user[1] === email && user[2] === password
  );

  if (user) {
    console.clear()
    banner()
    console.log("\n")
    console.log(`=> Login successful! \n   Welcome ${chalk.cyan(username)}`)
    console.log("\n")
    prompt("Tekan Enter untuk melajutkan")
    console.clear()
    sectionUser.user = username
    sectionUser.email = email
    sectionUser.password = password
    sectionLogin()
  } else {
    console.log(chalk.red("=> Username or password incorrect"))
    prompt("Tekan Enter untuk melanjutkan")
    console.clear()
    return menuLogin()
  }
}


export function menuLogin() {
  console.clear()
  banner()
  console.log("Menu Login")
  console.log("[>] Kembali")
  var username = prompt("- Masukan Username: ")
  if (username == ">") {
    return main();
  }

  var email = prompt("- Masukan Email: ")
  if (email == ">") {
    return main();
  }

  var password = prompt("- Masukan Password: ");
  if (password == ">") {
    return main();
  }
  login(username, email, password, dataUser)

}

// menuLogin()
