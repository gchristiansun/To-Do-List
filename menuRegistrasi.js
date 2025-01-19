import { banner } from "./globalVariabel.js";
import chalk from "chalk";

const users = [];

function register(username, email, password) {
  const userExists = users.some(
    (user) => user.username === username || user.email === email
  );

  if (userExists) {
    return chalk.red.bold(
      "The username or email already exists. Please use a different one."
    );
  } else {
    users.push({ username, email, password });
    return chalk.green.bold(
      `Registration successful! Welcome, ${chalk.cyan(username)}.`
    );
  }
}

export { register, users };

banner();