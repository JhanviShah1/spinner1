//process.stdout.write('hello from spinner1.js....\rheyy\n');
setTimeout(()=>{
  process.stdout.write('\r|    ');
}, 500);

setTimeout(()=>{
  process.stdout.write('\r/    ');
}, 1000);

setTimeout(()=>{
  process.stdout.write('\r-    ');
}, 1500);

setTimeout(()=>{
  process.stdout.write('\r\\    ');
}, 2000);

setTimeout(()=>{
  process.stdout.write('\r|    ');
}, 2500);

setTimeout(()=>{
  process.stdout.write('\r/    ');
}, 3000);

setTimeout(()=>{
  process.stdout.write('\r-    ');
},3500);
setTimeout(()=>{
  process.stdout.write('\r\\     ');
},4000);
setTimeout(()=>{
  process.stdout.write('\r|    ');
},4500);
