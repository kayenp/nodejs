// argv
// console.log(process.argv);
// console.log(process.argv[1]);

// process.env
console.log(process.env.TEMP);

// pid
console.log(process.pid);

// cwd()
console.log(process.cwd());

//title
console.log(process.title);

// memoryUsage()
console.log(process.memoryUsage());

// uptime()
console.log(process.uptime());

// process on exit
process.on('exit', (code) => {
	console.log(`About to exit with code ${code}`);
})

// exit
process.exit(0);