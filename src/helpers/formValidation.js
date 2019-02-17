import { SubmissionError } from 'redux-form/immutable';

const validateForm = (values) => {
	const stringPattern = /^[A-Za-z]+$/;
  const numberPattern = /^[0-9]+$/;
  const numberAndLettersPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])/;
	const errors = {};
	const name = values.get('name');
  
	if (!name) {
		errors.name = 'Restaurant Name can\'t be empty';
	}

	if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
	}

	return values;
};

export default validateForm;
