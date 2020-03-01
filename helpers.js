
import words from './data/words.json';

export const delimiters = ['{{', '}}'];
export const keySearchRegExp = new RegExp(delimiters[0] + '(\\w+)' + delimiters[1], 'gm');
export const requiredFormFields = ['company', 'jobTitle'];

export function getRandomInt(min, max) {
	//The maximum is exclusive and the minimum is inclusive
  	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min)) + min; 
}

export function getRandomWord(key) {
	const group = words[key];
	if (!group) throw new Error(`Invalid word group "${key}"`);
	return group[getRandomInt(0, group.length)];
}

export function toggleElement(el, state) {
	el.style.display = state ? 'block' : 'none';
}

export function setElementDisabled(el, state) {
	if (state) {
		el.setAttribute('disabled', true);
	} else {
		el.removeAttribute('disabled');
	}
}

export function isValidForm(formData) {
	return requiredFormFields.every(field => {
		const value = formData.get(field);
		if (field === 'jobTitle' && formData.get('randomTitle')) return true;
		return value && value.length > 0;
	});
}

export function formatTemplate(template) {
	return template.replace(/(\\r|\\n|\\t)/g, '');
}

export function getTemplateKey(key) {
	if (!key) throw new Error(`Invalid template key "${key}"`);
	return delimiters[0] + key.trim() + delimiters[1];
}

export function getKeysFromTemplate(template) {
	return template
		.match(keySearchRegExp)
		.map(key => 
			key.replace(delimiters[0], '').replace(delimiters[1], '')
		);
}
