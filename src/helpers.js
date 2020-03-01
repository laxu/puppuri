
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

export function toggleElement(el, isVisible) {
	el.style.display = isVisible ? 'block' : 'none';
}

export function setElementValidity(el, isValid) {
	if (isValid) {
		el.className = el.className.replace('invalid', '')
	} else {
		el.className = el.className + ' invalid';
	}
	
}

export function setElementDisabled(el, isDisabled) {
	if (isDisabled) {
		el.setAttribute('disabled', true);
	} else {
		el.removeAttribute('disabled');
	}
}

export function isValidForm(formData) {
	const formFieldElements = Array.from(document.forms[0].elements).filter(el => el.tagName === 'INPUT');
	return requiredFormFields.every(field => {
		const value = formData.get(field);
		const el = formFieldElements.find(el => el.name === field);
		if (field === 'jobTitle' && formData.get('randomTitle')) {
			setElementValidity(el, true);
			return true;
		}
		
		const isValid = value && value.length > 0;
		setElementValidity(el, isValid);
		return isValid;
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
