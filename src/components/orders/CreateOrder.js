import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form/immutable';
import Typography from '@material-ui/core/Typography';
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
import Button from '@material-ui/core/Button';

const renderInputComponent = ({ input: { name, onChange, value } }) => {
	let text;
	let fieldName;

	switch (name) {
		case 'name':
			text = 'Restaurant Name';
			fieldName = 'item';
      break;
      
    case 'url': 
      text = 'Menu Link';
      fieldName = 'url';
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
  <React.Fragment>
  <Typography variant="h5" style={{marginBottom: 20, marginTop: 30}}>
    Create a new order
  </Typography>
	<form onSubmit={handleSubmit(validateForm)}>
    <div className="register-form">
      <div>
        <Field
          name="name"
          type="text"
          component={renderInputComponent}
        />
      </div>
      <div>
        <Field
        name="url"
        type="text"
        component={renderInputComponent}
        />
      </div>
      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
			{formHasErrors &&
				<div className="register-form__form-errors">{listFormErrors(errors)}</div>
			}
		</div>
  </form>
  </React.Fragment>
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
	onSubmitSuccess: (values, dispatch) => {
    dispatch(formSubmitSucceededAction(values));
    dispatch(reset('createOrderForm'));
  }
})(CreateOrderForm));

export default CreateOrder;
