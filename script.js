function indexOfIgnoreCase(s1, s2) {
  // write your code here
	  const lowerCaseStr = str.toLowerCase();
  const lowerCaseSubStr = subStr.toLowerCase();

  // Use indexOf to find the index of the substring in the lowercase string
  const index = lowerCaseStr.indexOf(lowerCaseSubStr);
  
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
