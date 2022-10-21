/**
 * The program uses the RodasStack
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-04
 */

import RodasStack from './rodasStack'
import promptSync from 'prompt-sync'

// this function uses the RodasStack
const prompt = promptSync()
const stackNumber = new RodasStack()

try {
  // input
  const userInput = Number(prompt('Enter an integer: '))
  stackNumber.pushClass(userInput)

  if (isNaN(userInput)) {
    throw new Error('\nThat is an invalid number.')
  }
} catch (e) {
  console.log('\nThat is an invalid input.')
}

let poppedStack = stackNumber.StackArray()
stackNumber.popClass()
poppedStack = stackNumber.StackArray()
console.log(poppedStack)

console.log('\nDone.')
