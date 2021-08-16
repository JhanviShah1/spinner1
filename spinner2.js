const spinning  = function(positions) {
  for (let i = 0; i < positions.length; i++) {
    setTimeout(()=>{
      process.stdout.write('\r' + positions[i] + '   ');
    }, (i + 1) * 500);
  }
};
console.log(spinning(['|' , '/' , '-' , '\\' , '|','/','-','\\','|']));
