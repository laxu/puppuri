import {
	formatTemplate, 
	getRandomInt, 
	getRandomWord, 
	getTemplateKey, 
	getKeysFromTemplate, 
	isValidForm,
	toggleElement,
	setElementDisabled
} from './helpers';
import templates from './data/templates.json';
import words from './data/words.json';
import images from './data/images.json';

const assetsPath = '/assets/';

let state = {
	formData: null
};

export function setRandomBackground() {
	const el = document.getElementById('stock-photo');
	el.style.backgroundImage = `url("${assetsPath + images[getRandomInt(0, images.length)]}")`;
}

export function onSubmitForm(event) {
	event.preventDefault();
	const formData = new FormData(document.forms.namedItem("job-form"));
	if (!isValidForm(formData)) return false;
	state = { formData };
	createJobApplication();
	return false;
}

export function createJobApplication() {
	let template = (' ' + templates[getRandomInt(0, templates.length)]).slice(1).trim();
	template = formatTemplate(template);
	template = replaceFormValues(template);

	const keys = getKeysFromTemplate(template);
	template = replaceKeys(template, keys);

	renderTemplate(template);
	showTemplate();
}

export function replaceFormValues(template) {
	const {formData} = state;
	const randomTitle = formData.get('randomTitle');
	if (!randomTitle) {
		const jobTitle = formData.get('jobTitle');
		template = template.replace(`{{A1}} {{B1}} {{C1}}`, jobTitle);
	}

	return template.replace(new RegExp(getTemplateKey('company'), 'gm'), formData.get('company'));
}

export function replaceKeys(template, keys) {
	const usedWords = [];
	const wordsUsedInGroup = {};

	return keys.reduce((tmpl, key) => {
		let chosenWord = getRandomWord(key);
		const group = words[key];
		while(wordsUsedInGroup[key] !== group.length && usedWords.includes(chosenWord)) {
			chosenWord = getRandomWord(key);
		}
		usedWords.push(chosenWord);
		wordsUsedInGroup[key] += 1;
		return tmpl.replace(getTemplateKey(key), chosenWord)
	}, template);
}

export function renderTemplate(template) {
	const templateEl = document.getElementById('result');
	templateEl.innerHTML = template;
}

export function showTemplate() {
	const formEl = document.getElementById('job-form');
	const resultEl = document.getElementById('result-container');
	toggleElement(formEl, false);
	toggleElement(resultEl, true);
}

export function showForm() {
	const formEl = document.getElementById('job-form');
	const resultEl = document.getElementById('result-container');
	toggleElement(resultEl, false);
	toggleElement(formEl, true);
}

export function init() {
	setRandomBackground();

	const formEl = document.getElementById('job-form');
	formEl.addEventListener('submit', onSubmitForm, false);
	formEl.addEventListener('input', event => {
		const formData = new FormData(document.forms.namedItem("job-form"));
		const submitButton = document.getElementById('submit-button');
		setElementDisabled(submitButton, !isValidForm(formData));
	}, false);


	const randomTitleCheckbox = document.getElementById('random-title');
	randomTitleCheckbox.addEventListener('click', function(event) {
		setElementDisabled(document.getElementById('job-title'), this.checked);
	});

	const resetButton = document.getElementById('reset-button');
	resetButton.addEventListener('click', event => {
		event.preventDefault(); 
		showForm();
	});

	const refreshButton = document.getElementById('refresh-button');
	refreshButton.addEventListener('click', event => {
		event.preventDefault(); 
		createJobApplication();
	});
}

document.addEventListener('DOMContentLoaded', init);
