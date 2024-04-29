// 1
var hello;
console.log(hello);
hello = "world";

// 2
var needle;
needle = "haystack";
function test() {
  needle;
  needle = "magnet";
  console.log(needle);
}
test();

// 3
var brendan;
brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);

// 4
var food = "chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";
}
console.log(food);
eat();

// 5
var mean = function () {
  var food;
  food = "chicken";
  console.log(food);
  food = "fish";
  console.log(food);
};
mean();
console.log(food);
console.log(food);

// 6
var genre;
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
genre = "disco";
rewind();
console.log(genre);

// 7
var dojo;
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);

// 8
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));