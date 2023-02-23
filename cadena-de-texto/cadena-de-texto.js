//Create a JS file containing the following lines

//String with your name
name = "Angelika";

//String with your last name
lastname = "Chozas";

//String called "student" concatenating your first and last name with a space in between
student = name + " " + lastname;

//String called "studentUppercase" containing the string student but all uppercase
studentUppercase = student.upperCase();

//String called "studentLowercase" containing the string student but all uppercase
studentLowercase = student.toLowerCase();

//A variable that holds the number of letters in the string "student" counting the spaces
stringStudent = student.lenght();

//A variable containing the first letter of the ame
firstLetter = name.charAt(0);

//A variable containing the last letter of the LastName
lastLetter = lastname.charAt(5);

//A text string that removes spaces from the variable "student"
removesSpaces = student.replace(/\s/g, "");

//A boolean variable that tells if the Name is contained in the variable "student"
containsName = student.includes(name);
