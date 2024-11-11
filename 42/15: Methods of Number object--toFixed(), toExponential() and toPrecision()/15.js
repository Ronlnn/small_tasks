function howManySmaller(arr,n){
	const roundedArr = arr.map(num => Number(num.toFixed(2)));

   // Count elements that are smaller than n
   let count = 0;
   for (let num of roundedArr) {
	   if (num < n) {
		   count++;
	   }
   }

   return count;

}
