import { banner } from "./globalVariabel.js";
import { prompt } from "./globalVariabel.js";
import { dataUser } from "./globalVariabel.js";
import { main } from "./main.js"; 
import chalk from "chalk";

function register(username, email, password, planned, task) {
  // var userExists = dataUser.some(
  //   (user) => user[0] === username || user[1] === email
  // );
  if (dataUser.length == 0) {
    dataUser.push({ username, email, password, planned, task });
    console.clear();
    banner();
    console.log("\n")
    console.log(`=> Registration successful! \n   Welcome, ${chalk.cyan(username)}`)
    console.log("\n")
    prompt("Tekan Enter untuk melanjutkan")
    console.clear()
    main()
  } else {
    for (let i = 0; i < dataUser.length; i++) {
      if (dataUser[i].username === username || dataUser[i].email === email) {
        console.clear();
        banner();
        console.log("\n")
        console.log(chalk.red.bold("=> The username or email \n   already exists. Please \n   use a different one."))
        console.log("\n")
        prompt("Tekan Enter untuk melanjutkan")
        console.clear()
        menuRegistrasi()
      } else {
        dataUser.push({ username, email, password, planned, task });
        console.clear();
        banner();
        console.log("\n")
        console.log(`=> Registration successful! \n   Welcome, ${chalk.cyan(username)}`)
        console.log("\n")
        prompt("Tekan Enter untuk melanjutkan")
        console.clear()
        main()
      }
    }
  }
}



banner();
export function menuRegistrasi() {
  while (true) {
    console.clear();
    banner();
    console.log("Menu Regsitrasi")
    console.log("[>] Kembali")
    var username = prompt("- Masukkan username: ");
    if (username.includes(" ")) {
      console.log(chalk.red("Username tidak boleh mengandung spasi!"));
      prompt("=> Tekan Enter untuk melanjutkan");
      console.clear();
    }
    else if (username == ">") {
      console.clear();
      main()
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
      console.log("Menu Regsitrasi")
      console.log("[>] Kembali")
      console.log("- Masukkan username: " + username);

    }
    else if (username == ">") {
      console.clear();
      main()
    }
    else if (email.length == 0) {
      console.log(chalk.red("Username tidak boleh kosong!"));
      prompt("=> Tekan Enter untuk melanjutkan");
      console.clear();
      banner();
      console.log("Menu Regsitrasi")
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
      console.log("Menu Regsitrasi")
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
      console.log("Menu Regsitrasi")
      console.log("[>] Kembali")
      console.log("- Masukkan username: " + username);
      console.log("- Masukkan email: " + email);
    }
    else if (password == ">") {
      console.clear();
      main()
    }
    else if (password.length == 0) {
      console.log(chalk.red("Password tidak boleh kosong!"));
      prompt("=> Tekan Enter untuk melanjutkan");
      console.clear();
      banner();
      console.log("Menu Regsitrasi")
      console.log("[>] Kembali")
      console.log("- Masukkan username: " + username);
      console.log("- Masukkan email: " + email);
    }
    else if (password.length < 8) {
      console.log(chalk.red("Password harus memiliki minimal 8 karakter!"));
      prompt("=> Tekan Enter untuk melanjutkan");
      console.clear();
      banner();
      console.log("Menu Regsitrasi")
      console.log("[>] Kembali")
      console.log("- Masukkan username: " + username);
      console.log("- Masukkan email: " + email);
    }
    else if (typeof password == "string") {
      var planned = [];
      var task = [];
      break;
    }
    else {
      console.log(chalk.red("Password tidak valid!"));  
      console.log("Tekan Enter untuk melanjutkan");
      console.clear();
      banner();
      console.log("Menu Regsitrasi")
      console.log("[>] Kembali")
      console.log("- Masukkan username: " + username);
      console.log("- Masukkan email: " + email);
    }
  }
  register(username, email, password, planned, task);
};
