
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    let reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
        current = 0;
        next = 1;
    }
  }
}



function getFib(n){
	let sequence = fibonacci();
	for(let i=0; i<n; i++){
		sequence.next();
	}
	return sequence.next().value;
}

module.exports = {getFib: getFib};
