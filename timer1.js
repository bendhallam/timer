//retrieve command line argument, extract relevent details and sort from smallest to biggest
const userInput = process.argv.slice(2).sort((a,b) => {
  return a - b;
});

//condense the beep to an easilly callable function
const beep = () => {
  process.stdout.write("\x07");
};

const timer = (inputs) => {
  //iterate through the inputs
  for (let input of inputs) {
  //ensure input is non-negative number
    if (input >= 0) {
      //convert input to milliseconds
      //NOTE: the beep sound seems to take slightly longer than one second so we'll make one second slightly longer
      //than a real second to accomodate and ensure no beeps are skipped over
      let inputToMilliseconds = input * 1050;
      setTimeout(() => {
        beep();
      }, inputToMilliseconds);
    }
  }
};

timer(userInput);
