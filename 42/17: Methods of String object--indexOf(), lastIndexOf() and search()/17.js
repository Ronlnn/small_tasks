function firstToLast(str,c){
	const first = str.indexOf(c);
	 if(first === -1){
	   return -1;
	 }
	 const last = str.lastIndexOf(c);
	 if(first === last){
	   return 0;
	 }
	 return last - first;

   }