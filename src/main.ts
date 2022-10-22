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
  while (true) {
    const userInput = Number(prompt('Enter an integer: '))

    if (isNaN(userInput)) {
      throw new Error('\nThat is an invalid number.')
    } else if (userInput == -1) {
        console.log(stackNumber.StackArray());
        console.log(stackNumber.popClass());
        console.log(stackNumber.StackArray());
        break;
    } else if (userInput == -2) {
        console.log(stackNumber.StackArray());
        console.log(stackNumber.peekClass());
        console.log(stackNumber.StackArray());
        break;
    } else {
        stackNumber.pushClass(userInput)
    }
  }
} catch (e) {
  console.log('\nThat is an invalid input.')
}

console.log('\nDone.')

