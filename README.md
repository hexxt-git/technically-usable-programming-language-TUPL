# tehcnically usable programming language TUPL
i made this programming language to see how fast i can make it in javascript cause i made one in C and it was torture so dont expect it to be good.

in this programming language you have unlimited registers that can store all javascript basic types.

global is a special register it is used by most instructions

## instruction set
lable:             starts a new label

mov     reg1 reg2  moves the content of reg1 into reg2
set     reg  val   sets a registry to a specified value

jmp     label      jumps to a label
//jmb   val        jumps by val lines
//jmt   val        jumps to a line

if      val        only preformes the next val lines if global is truthy

add     reg        adds a registry to global (concats text)
//sub   reg        subtracts a regisrtry from global
mult    reg        multiplies global by a registry
//div   reg        divides global by a registry
//mod   reg        remainder of global by a registry

et      reg        sets global to sets global to true if global is equal to reg
gt      reg        sets global to true if global is greater than reg
//lt    reg        sets global to true if global is lesser  than reg

log                logs out the global registrys value to the command line
read               reads input from the command line

halt               ends the program
pss                does nothing