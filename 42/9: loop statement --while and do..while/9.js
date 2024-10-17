function padIt(str,n){
	let res = str;
	while(n > 0){
	 if(n % 2 !== 0){
	   res = '*' + res   ;
	 }else{
	   res =   res +  '*';
	 }
	  n-- // Чтобы не было бесконечного цикла
	  }
	return res
  }