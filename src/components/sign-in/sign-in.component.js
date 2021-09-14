import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer
} from './sign-in.styles';

/** 
 * @createdOn 4-Aug-2021 
 * @modifiedOn 14-Sep-2021 
 */
class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart(email, password);
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;

		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						label="Email"
						handleChange={this.handleChange}
						required
					/>

					<FormInput
						name="password"
						type="password"
						value={password}
						label="Password"
						handleChange={this.handleChange}
						required
					/>

					<ButtonsBarContainer>
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn
						>
							Sign In with google
						</CustomButton>
					</ButtonsBarContainer>
				</form>
			</SignInContainer>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);