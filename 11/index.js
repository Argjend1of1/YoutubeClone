//console.log(`Hello`);//me shkru ne console
//console.log(`I like pizza!`);

//window.alert(`this is an alert`);//used to alert the user something
//window.alert(`I like pizza!`);

//document.getElementById("myH1").textContent = `Hello`;//me qit menyr id qe ja kemi jep ne html e bajm target edhe shkrujm
//document.getElementById("myP").textContent = `I like pizza`;
//let age = 25;
//let price = 10.99;
//let gpa = 2.1;
//let firstname = "BroCode"
//let email = "Bro123@gmail.com" 
//console.log(`You are ${age} years old`);
//console.log(`The price is $${price}`)//${} perdoret kur don me mor ni value brenda ni text, ndersa $ e dyt doket n console
//console.log(typeof firstname )//typeof used for knowin a osht var,string etj.
//console.log(firstname)
//console.log(`Your email is ${email}`)

//let fullname = `Bro Code`;
//let age = 25;
//let isstudent = true;
//document.getElementById("p1").textContent = `Your name is ${fullname}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled: ${isstudent}`;

// let students = 30;
//students = students ** 3;//(**)power of
//students =students %3;// pjeston me 3 edhe e show n console mbetjen
//students *=2//students shumzu me 
//students /= 3;//students pjestu me 
//students **=2//students powered by
//students %=20// ta kthen mbetjen masi t pjestosh me ni vler
//let username = window.prompt("Whats your username? ");
//console.log(username);//tash qata qe e shkrun ta run n username

//let username;
//document.getElementById("mySubmit").onclick = function()//kur klikohet 
//butoni me id mySubmit e krijojme ni funksion edhe tek variabla username
// qe e kemi kriju specifikisht per qet arsyje e marrim tekstin qe useri
//e bon input edhe ja bajm assign username-it edhe na kthen qata n console
//pra kjo perdoret per me mor user input
//{
  //username = document.getElementById("myText").value;
  //console.log(username);
  //document.getElementById("myH1").textContent = `Hello ${username}`;
//}

//ndrrimi value psh string to number, numer to boolean etj, shume important
//kur bon accept user input, its a string datatype, kaniher na vyn me kthy
//ne number nese na vyn me kry operacione matematikore, boolean nese qaai
//user input osht ba completed
//let x;
//let y;
//let z;
//x=Number(x);
//y = String(y);
//z = Boolean(z);
//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

//const pi = 3.14159// used to not let myself or any user change the value 
//as it is const., perpos kur o String tonshi normalisht qe nuk munesh
//let radius;
//let circumference;

//document.getElementById("mySubmit").onclick = function()
//{
  //radius = document.getElementById("myText").value;
  //radius=Number(radius);
  //circumference = 2 * pi * radius; 
  //document.getElementById("myH3").textContent = circumference + " cm";
//}

//let x=3;
//let y= 2;
//let z=1
//z=Math.round(x);
//z=Math.floor(x)
//z=Math.ceil(x)
//console.log(z);
//let max=Math.max(x,z,y);
//console.log(max)//njejt edhe per min
//const min =50;
//const max=100;
//let random = Math.floor(Math.random() *(max-min)) + min;
//console.log(random);

//let purchaseamount = 100;
//let discount = purchaseamount >100 ? 10 : 0;
//console.log(`Your total is $${purchaseamount 
 // - purchaseamount * (discount/100)}`);

 //let testScore = 33;
 //let lettergrade;
 //switch(true)
 //{
  //case testScore >=90: 
     //lettergrade = "A";
 // break;
 // case testScore>=80:
 //   lettergrade = "B";
 //   break;
 //   case testScore >=70: 
 //   lettergrade = "C";
 //break;
 //case testScore >=60: 
 //lettergrade = "D";
//break;
//case testScore >=50: 
//lettergrade = "E";
//break;
//default: 
//lettergrade = "F";
 //}
 //console.log(lettergrade);

 //let username = " BroCode";
 //console.log(username.charAt(2));
 //console.log(username.lastIndexOf("o"));
 //console.log(username.length);
 //username = username.trim();
 //username =username.toUpperCase();
 //username =username.repeat(3);
 //let result =username.startsWith/endsWith/includes(" ");
 //if(result)
 //{
 // console.log("Your username cant begin with ' '");
 //}
 //else
 //{
 // console.log(username);
 //}

 //string slicing 
 //const fullname = "Bro Code";
 //let firstname = fullname.slice(0,3);
 //let lastname = fullname.slice(4, 8);
 //let firstchar = fullname.slice(0,1);
 //let lastchar = fullname.slice(-1);
//let firstname = fullname.slice(0, fullname.
  //indexOf(" "));
  // console.log(firstname);
//let lastname = fullname.slice(fullname.
  //indexOf(" ") +1)
  //console.log(lastname);
  //const email = "Bro1@gmail.com";
  //let username = email.slice(0, email.indexOf("@"));
  //console.log(username);
  //let extensions = email.slice
  //(email.indexOf("@") +1);
  //console.log(extensions);

  //MEthod chaining = calling a method after another, in one 
  //continous line of code
  //let username = window.prompt("Enter your username: ");
  //username = username.trim();
  //let letter = username.charAt(0);
  //letter =letter.toUpperCase();
  //let extrachars = username. slice(1);
  //extrachars = extrachars.toLowerCase();
  //username = letter + extrachars;
  //console.log(username);
  //all this code translated to this is method chaining.
  //usernamee = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
  //username ndaje karakterin te 0 bone uppercase + apet ndaje edhe prej 1 e andej boni lowercase
  //console.log(usernamee)//tonshi kthema n usernamee

  //while loop
  //let loggedin = false;
  //let username;
  //let password;
  //while(!loggedin)
  //{
  //  username = window.prompt(`Enter your username: `);
  //  password = window.prompt(`Enter your password: `);
  //  if(username === "Argjend" && password === "Nimanaj")
  //  {
  //    loggedin = true;
   //   console.log("You are logged in!")
   // }
   // else{
   //   console.log("Invalid credentials. Please try again!")
   // }
 // }

 //function = a section of reusable code.
//Declare code once, use it whenever you want.
//Call the function to execute the code
//function happybirthday(username,age)
//{
// console.log("Happy birthday to you!")
//console.log("Happy birthday to you!")
// console.log(`Happy birthday dear ${username}!`)
// console.log("Happy birthday to you!")
// console.log(`You are ${age} years old`)
//}
//happybirthday("BroCode", 25);
//happybirthday("SpongeBob", 30)
//function isEven(number)
//{
//  return number %2 == 0  ? true:false; 
//}
//console.log(isEven(14));
//function isvalid(email)
//{
//  return email.includes("@") ? true : false;
//}
//console.log(isvalid("nimanajargjend@gmail.com"));

//arrays
//let fruits = ["apple","orange","banana","coconut"]
//for(let fruit of fruits)
//{
//  console.log(fruit);
//}

//spread operator = ... allows an iterable such as an
//array or string to be expanded into separate elements
///let numbers = [1,2,3,4,5];
///let max = Math.max(...numbers);
//let min = Math.min(...numbers);
//console.log(min);
//let username = "Bro code";
//let letters = [... username].join("-");
//console.log(letters);
//let fruits = ["apple", "oranges"];
//let vegetables = ["carrots", "potatoes"];
//let foods = [...fruits, ...vegetables, "eggs", "milk"];
//console.log(foods);

//spread = expands an array into separate elements, 
//rest = bundles separate elemnts into an array
//function openfridge(...foods)//rest
//{
//  console.log(...foods);
//  //spread, so they cancel each other logically opposites
//}
//const food1 = "pizza";
//const food2 = "hamburger";
//openfridge(food1, food2);





























