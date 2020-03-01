const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

const outputPath = '/data/words.json';

const papaConfig = {
	header: true,
	complete: writeData
}

function readCSV() {
	const fileName = process.argv[2];
	const fileContent = fs.readFileSync(path.join(__dirname, '..', fileName), 'utf8');
	Papa.parse(fileContent, papaConfig);
}

function writeData(results) {
	const rows = results.data;

	const fileData = rows.reduce((acc, row) => {
		Object.keys(row).forEach(key => {
			if (!acc[key]) {
				acc[key] = [];
			}
			if (!row[key].length) return false;
			acc[key].push(row[key]);
		});
		return acc;
	}, {});

	console.log('Going to write', fileData);

	fs.writeFileSync(path.join(__dirname, outputPath), JSON.stringify(fileData));
	console.log('Wrote ' + outputPath);
}

readCSV();
