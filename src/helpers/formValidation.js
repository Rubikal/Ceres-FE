import { SubmissionError } from 'redux-form/immutable';

const validateForm = (values) => {
	const stringPattern = /^[A-Za-z]+$/;
  const numberPattern = /^[0-9]+$/;
  const numberAndLettersPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
	const errors = {};
	const item = values.get('item');
  
	if (!item) {
		errors.name = 'field "Item" can\'t be empty';
	} else if (!numberAndLettersPattern.test(item)) {
		errors.name = 'field "Item" can have letters and numbers only';
	}

	if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
	}

	return values;
};

export default validateForm;
