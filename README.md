# tehcnically usable programming language TUPL
i made this programming language to see how fast i can make it in javascript cause i made one in C and it was torture so dont expect it to be good.

in this programming language you have unlimited registers that can store all javascript basic types.

global is a special register it is used by most instructions

## instruction set
lable:             starts a new label

mov     reg1 reg2  moves the content of reg1 **to** reg2
set     reg  val   sets a registry to a specified value

jmp     label      jumps to a label
jmb     val        jumps by val lines
jmt     val        jumps to a line

if      val        only preformes the next val lines if global is truthy

add     reg        adds a registry to global (parses to int)
sub     reg        subtracts a regisrtry from global
mult    reg        multiplies global by a registry
div     reg        divides global by a registry
mod     reg        remainder of global by a registry
inc     reg        increments a registries value by 1

cat     reg        concatinates a registry with global as strings

et      reg        sets global to sets global to true if global is equal to reg
gt      reg        sets global to true if global is greater than reg
lt      reg        sets global to true if global is lesser  than reg

and     reg        sets global to global and reg
or      reg        sets global to global or reg
not                sets global to not global

prt     reg        logs out the global registrys value to the command line
read    reg        reads user input from the command line
log     val        logs out a custom message to the command line
where              sets the global registers value to the current instruction's number

sleep   val        sleeps for val ms
sleer   reg        sleeps for a registries value in ms
halt               ends the program
pss                does nothing

final time was an hour and a half for the base then ~ another hour polishing and making examples