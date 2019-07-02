const spin = "|/-\\|";

let time = 0;
let spinWNewLine = spin + "\n";
for (const char of spinWNewLine) {
  setTimeout(function() {
    process.stdout.write("\r" + char);
  }, time);
  time += 200;
}