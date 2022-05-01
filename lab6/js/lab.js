// Summary. Lab 6- modified from lab 5
// Description. myTransport lab
// @author annalivia martin-straw,
// @since  4.27.22

//defined variables from last lab
//var make = "Kia";
//var model = "Seltos";
//var color = "Steel Grey";
//var year = 2020;
//var currentYear = 2022;

//myTransport string array
myTransport = [" bus", " walking", " my imaginary car"
    ];

//boolean
//let ownIt = false

myImaginaryCar = {
  make: "a space car",
  model: "one that flies",
  color: "the shade of magenta that humans aren't able to percive",
  year: 1990,
  age: function() {
      return 2022 - age;
}
}


//console.log ("My Main Ride:", myMainRide);
//document.writeln("Model: "+model + "<br>")
//document.writeln("Age: "+carAge + "<br>")
//document.writeln("Own It?: "+ownIt + "<br>")


document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myImaginaryCar, null, '\t'), "</pre>");
