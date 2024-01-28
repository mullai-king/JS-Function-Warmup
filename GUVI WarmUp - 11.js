/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	//fps 60 for seconds
	//num1 total frames num2 min of each frames
	let noOfFrames = (num1) * (num2 * 60);
	return noOfFrames;
	
	
	
	///Your code Ends here
}
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/