function cutIt(arr){
	const lengths = arr.map(str => str.length);
	 const min = Math.min(...lengths);
   return arr.map(str => str.slice(0, min));

 }