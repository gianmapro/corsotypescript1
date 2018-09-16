import { createInterface } from "readline";

const readline = createInterface(process.stdin, process.stdout, null, false);

export const askInput = (question: string): Promise<string> => {
    const p = new Promise<string>((resolve, reject) => {
        readline.question(question, (result) => {
            resolve(result);
        });
    });
    return p;
};