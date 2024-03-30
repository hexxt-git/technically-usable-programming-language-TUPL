import fs from 'fs';
import fsp from 'fs/promises';

if(process.argv.length < 3) console.error('please provide a .tupl file as argument')
const file_name = process.argv[2]

let program_text;

program_text = await fsp.readFile(file_name, 'utf8');


let program_instructions = program_text.split('\n').
    map(line => line.replaceAll(/^\s*|\s*&|\r|\s*#.*/g, '').replaceAll(/\s+/g, ' ')).
    map(line => line == '' ? 'pss' : line)

let labels = program_instructions.reduce((labels, line, i) =>
    line.slice(-1) == ':' ? [...labels, [line, i]] : labels, []
)

let registers = {global: 0}
let instruction_pointer = 0;

while(instruction_pointer < program_instructions.length){
    let instruction = program_instructions[instruction_pointer].split(' ')[0]
    let args = program_instructions[instruction_pointer].split(' ').slice(1)

    if (instruction == 'mov') registers[args[1]] = registers[args[0]]
    if (instruction == 'set') registers[args[0]] = args.slice(1).join(' ')
    
    if (instruction == 'jmp') instruction_pointer =  labels.find(label => label[0] == args[0]+':')[1]
    if (instruction == 'if' ) if(registers.global) instruction_pointer += args[0]

    if (instruction == 'add' ) registers.global = registers.global/1 + registers[args[0]]/1
    if (instruction == 'mult') registers.global = registers.global/1 * registers[args[0]]/1

    if (instruction == 'et') registers.global = registers.global == registers[args[0]]
    if (instruction == 'gt') registers.global = registers.global  > registers[args[0]]

    if (instruction == 'log') console.log(registers.global)
    if (instruction == 'read') {
        let buf = Buffer.alloc(256);
        let len = fs.readSync(0, buf, 0, 256);
        let input = buf.toString('utf8', 0, len - 1); // -1 to remove the newline character
        registers.global = input;
    }
    
    if (instruction == 'hlt') instruction == program_instructions.length + 1

    instruction_pointer++
}