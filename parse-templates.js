const path = require('path');
const fs = require('fs');

const templatePath = '/data/templates';
const outputPath = '/data/templates.json';

function parseTemplates() {
	const templates = [];
	const fullTemplatePath = path.join(__dirname, templatePath);
	fs.readdirSync(fullTemplatePath).forEach(filename => {
		const content = fs.readFileSync(path.join(fullTemplatePath, filename), 'utf8');
		if (content)
        	templates.push(content);
	});

	console.log('Got templates', templates);

	fs.writeFileSync(path.join(__dirname, outputPath), JSON.stringify(templates));
}

parseTemplates();
