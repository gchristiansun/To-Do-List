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

export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const prompt = PromptSync()
export {prompt}