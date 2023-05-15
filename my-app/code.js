//this function does the math to tell you if the number you enter is divisable by 2
//the parameter is the number the user inputs 
//the return tells the user is the number is divisable by 2
function divisableByTwo(number) {
  var answer;
  var yesOrNo;
  answer = number%2;
  if (answer==0) {
    yesOrNo = "Your answer is divisable by 2!";
  } else {
    yesOrNo = "Your answer is not divisable by 2!";
  }
  return yesOrNo;
}
//console.log(divisableByTwo(6));
//this function has you input a list of numbers and it will answer yes or no whether its divisable by 2 or not
//the parameter is the list of numbers the user will input
//the return prints the list and if its divisable by 2
function listOfTwos(list) {
  var returnList = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i]%2==0) {
      appendItem(returnList, "yes");
    } else {
      appendItem(returnList, "no");
    }
  }
  return returnList;
}
//console.log(listOfTwos([3,4,10,5]));
