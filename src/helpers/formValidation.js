import { SubmissionError } from 'redux-form/immutable';

const validateForm = (values) => {
	const stringPattern = /^[A-Za-z]+$/;
	const numberPattern = /^[0-9]+$/;
	const errors = {};
	const item = values.get('item');
  
	if (!item) {
		errors.name = 'field "Item" can\'t be empty';
	} else if (!stringPattern.test(item) && !numberPattern.test(item)) {
		errors.name = 'field "Item" can have letters and numbers only';
	}

	if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
	}

	return values;
};

export default validateForm;
