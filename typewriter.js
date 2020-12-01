const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  for (const char in sentence) {
    setTimeout(() => process.stdout.write(sentence[char]), char*50)
  }
}

typewriter(sentence);

// const sentence = "hello there from lighthouse labs\n";

// let delay = 0
// for (let char of sentence) {
//   setTimeout(() => process.stdout.write(char), delay)
//   delay += 50 
// }