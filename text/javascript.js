//for part 2, we'll deal with input validation
console.log('start');
var scoresArray4 = 'The speepy dog ';
console.log(scoresArray4);
var scoresArray5 = [76, 83, '90'];
var scoresArray6 = [88, 73, 'bob', 100];

//  function calculateSum goes here
function calculateSum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr == 'string') {
			return 'The variable is a string';
			console.log('string');
		} else if (typeof arr[i] == 'string') {
			return 'At least one element of the array is a string.';
			console.log('string');
		} else if (typeof arr[i] === undefined) {
			return 'Undefined value!';
		} else if (typeof arr[i] == 'undefined') {
			return 'An element of the array is not a number.';
			console.log('string');
		} else {
			sum += arr[i];
		}
	}
	return sum;
}

document.getElementById('sum4').innerHTML = calculateSum(scoresArray4);
document.getElementById('sum5').innerHTML = calculateSum(scoresArray5);
document.getElementById('sum6').innerHTML = calculateSum(scoresArray6);
