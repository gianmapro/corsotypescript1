import { askInput } from './input';

async function main() {
    let cmd = "";
    while (true) {
        // todo: print the UI
        cmd = await askInput("Command: ");
        switch (cmd) {
            case "q":
                process.exit();
                break;
            default:
                console.log(cmd);
        }
    }
}

main();

