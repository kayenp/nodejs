// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./text.txt', 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// 	console.log("^async");
// });

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./text.txt', 'utf8');
// console.log(data);
// console.log("^sync");

// readFile() - Promise .then()
// fs.readFile('./text.txt', 'utf8')
// 	.then((data) => console.log(data))
//  .then(() => console.log("^promise"))
// 	.catch((err) => console.log(err));

// readFile() - async/await
const readFile = async () => {
	try {
		const data = await fs.readFile('./text.txt', 'utf8');
		console.log(data);
		console.log("^async/await");
	} catch (error) {
		console.log(error);
	};
};

// writeFile()
const writeFile = async () => {
	try {
		await fs.writeFile('./text.txt', 'Hello, I am writing to this file');
		console.log("File written to");
	} catch (err) {
		console.log(err);
	};
};

// appendFile()
const appendFile = async () => {
	try {
		await fs.appendFile('./text.txt', '\nThis is appended text');
		console.log('File appended to...');
	} catch (error) {
		console.log (error);
	};
};

writeFile();
readFile();
appendFile();
readFile();