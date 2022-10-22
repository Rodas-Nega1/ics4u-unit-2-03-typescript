/**
 * This class creates an integer stack
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-10-04
 */

class RodasStack {
  private readonly stackAsList: number[] = []

  public pushClass(pushedNumber: number): void {
    this.stackAsList.push(pushedNumber)
  }

  public popClass(): number | undefined {
    return this.stackAsList.pop()
  }

  public peekClass(): number | undefined { 
    return this.stackAsList[this.stackAsList.length - 1]
  }

  StackArray(): void {
    console.log(this.stackAsList)
  }
}

export = RodasStack

