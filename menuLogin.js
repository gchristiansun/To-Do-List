import { banner } from "./globalVariabel.js";
import chalk from "chalk";

function login(username, password, users) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    return chalk.green.bold(
      `Login successful! Welcome, ${chalk.cyan(username)}.`
    );
  } else {
    return chalk.red.bold("Username or password incorrect.");
  }
}

banner();
