function padIt(str,n){
	let res = str; //Делаем новую переменную где храним накапливаемые изменения строки. Тк строки неизменяемые 
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