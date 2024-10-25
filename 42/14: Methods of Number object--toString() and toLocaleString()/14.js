function colorOf(r,g,b){
	//coding here
	let rr = r.toString(16).padStart(2, '0');
	let gg = g.toString(16).padStart(2, '0');
	let bb = b.toString(16).padStart(2, '0');
	
	return "#"+rr+gg+bb;
  }
  