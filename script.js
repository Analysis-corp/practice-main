console.log("mehran");
console.log("salam baba");

console.log("shayan", 125);

var candy = 10.2;
console.log(candy);

//function

function shomarande(first, second) {
  console.log("print : ", first);
  console.log("print : ", second);
}

const shomarande1 = shomarande("salam", "bia bala");

let user = {
  age: 20,
};

user.firstName = "mehran";
user.lastName = "satvat";
user.fullName = () => user.firstName + user.lastName;

console.log("salam", user.fullName());

const username = "Negar";
const text1 = new String("test1");
const text2 = new String("test2");
console.log(`salam ${username} khobi?`);

let text = "The quick brown fox jumps over the lazy dog";
console.log(text.length);
console.log(text.charAt(7));
console.log(text.at(9));

console.log(text.slice(4, 16));
console.log(text.substring(7, 20));

console.log(text.toUpperCase());
console.log(text.lastIndexOf());

console.log(text.search("fox"));
console.log(text.indexOf("over"));
console.log(text.startsWith("The"));

const array1 = [1, 2, 3, 4, 5];
const obj1 = {
  0: 1,
  1: 2,
  2: 3,
};

console.log(typeof array1);
console.log(Array.isArray(array1));

array1[2] = 10;
console.log(array1);

function isfour(value) {
  console.log("meghdar x==4 hast : ", value);

  if (value == 4) {
    return true;
  }

  if (value != 4) {
    return false;
  }
}
let counter = 0;
myarray = [15, 10, 6, 85, 94];
myarray.find(isTen);

function isTen(elem) {
  if (elem == 10) {
    console.log("find ten at :", counter);
  }

  if (elem != 10) {
  }

  counter += 1;
}

let mybool = true;

if (1 == true) {
  console.log("meghadr barabar");
}

if (1 === true) {
  console.log("ba yekdigar barabar");
}
if (!mybool) {
  console.log("if condition");
} else {
  console.log("else condition");
}

let target = 40;
switch (target) {
  case 0:
    {
      console.log("not found");
    }
    break;
  case 10:
    {
      console.log("not found");
    }
    break;
  case 20:
    {
      console.log("not found");
    }
    break;
  default: {
    console.log("target not found boroooo jelooo");
  }
}
