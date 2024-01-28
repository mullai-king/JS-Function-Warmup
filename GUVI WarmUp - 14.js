/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	if (firstName !== undefined && lastName !== undefined) {
		if (firstName.length == 0 && lastName.length == 0) {
			
			return " " + " " + " ";
		} else {
			let fullName = firstName + " " + lastName;
			return fullName;
		}
	} else if (firstName === undefined && lastName !== undefined) {
		return lastName;
	} else if (lastName === undefined && firstName !== undefined) {
		return firstName;
	} else {
		
		return "";
	}
	///Your code Ends here
}
/*
Lines For TestCase
getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/