var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
]

// Check if every computer has a ram greater than 16
var canAllComputerRunProgram = computers.every((computer) => computer.ram > 16)

console.log(canAllComputerRunProgram)

// Check at leasst some has a ram greater than 16
var isThereAnyComputerthatCanRun = computers.some((computer) => computer.ram > 16)

console.log(isThereAnyComputerthatCanRun)


var names = [
  "Alexand",
  "Mattew",
  "Joe"
]

var doesEveryName = names.every(name => name.length > 4)

var atleastOneName = names.some(name => name.length > 4)

console.log(doesEveryName, atleastOneName )