/*
*Author: Tamara Basbuyuk and Annalivia Martin-Straw
*Created: 04.27.2022
*License: Public Domain
*Program written to take user input and sort it
*/

//sortUserName - a function that takes user input and sorts the
//letters of their name
["Foo", "bar"].sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
function sortUserName() {
  var userName = window.prompt("Hi. Please tell me your name so that I can fix it.");
  console.log("userName =", userName);
  //split string into array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();

  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);



  return nameSorted;
}
//output
document.writeln("Hey! I fixed your name: ",
  sortUserName(), "</br>");
