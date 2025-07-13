function firstNonRepeatedChar(str) {
 // Write your code here
	for(int i=0; i<str.length; i++){
		if(str.includes(str[i])){
			continue;
		}else{
			console.log(str[i]);
			return;
		}
	}
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
