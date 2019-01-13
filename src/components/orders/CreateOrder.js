import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import InputField from '../forms/input';
import {
	formHasErrorsSelector,
	getFormErrorsSelector
} from '../../store/selectors/orders';
import {
	formSubmitFailedAction,
	formSubmitSucceededAction
} from '../../store/action-creators/orders';
import validateForm from '../../helpers/formValidation';
import listFormErrors from '../forms/listFormErrors';

const renderInputComponent = ({ input: { name, onChange, value } }) => {
	let text;
	let fieldName;

	switch (name) {
		case 'item':
			text = 'Order Item:';
			fieldName = 'item';
			break;

		default:
			text = '';
			fieldName = '';
	}

	return (
		<InputField
			value={value}
			onChange={onChange}
			text={text}
			fieldName={fieldName}
		/>
	);
};

const CreateOrderForm = ({ handleSubmit, errors, formHasErrors }) => (
  <>
  <h1>Create a new order</h1>
	<form onSubmit={handleSubmit(validateForm)}>
		<div className="register-form">
			<Field
				name="item"
				type="text"
				component={renderInputComponent}
			/>
			<button type="submit">Submit</button>
			{formHasErrors &&
				<div className="register-form__form-errors">{listFormErrors(errors)}</div>
			}
		</div>
  </form>
  </>
);


CreateOrderForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	formHasErrors: PropTypes.bool.isRequired,
	errors: PropTypes.shape({
		item: PropTypes.string,
	})
};

CreateOrderForm.defaultProps = {
	errors: {}
};

const mapStateToProps = state => ({
	formHasErrors: formHasErrorsSelector(state),
	errors: getFormErrorsSelector(state)
});

const CreateOrder = connect(
	mapStateToProps,
	null
)(reduxForm({
	destroyOnUnmount: false,
	form: 'createOrderForm',
	onSubmitFail: (errors, dispatch) => dispatch(formSubmitFailedAction()),
	onSubmit: values => values,
	onSubmitSuccess: (values, dispatch) => dispatch(formSubmitSucceededAction(values))
})(CreateOrderForm));

export default CreateOrder;
