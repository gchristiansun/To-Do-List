import PromptSync from 'prompt-sync'

export function banner() {
    console.log("+==========================+")
    console.log("|                          |")
    console.log("|                          |")
    console.log("|        To Do List        |")
    console.log("|                          |")
    console.log("|                          |")
    console.log("+==========================+")
}

const prompt = PromptSync()
let planned = [];
export {planned}
export {prompt}