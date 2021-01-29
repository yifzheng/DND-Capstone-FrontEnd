import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/reducers";

import "../css/login-form.css";
class LoginPage extends React.Component {
	state = {
		loginInfo: {
			username: "",
			email: "",
			password: "",
		},
		redirect: false,
	};

	handleLoginFormChange = (e) => {
		this.setState({
			loginInfo: {
				...this.state.loginInfo,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleLoginFormSubmit = async (e) => {
		e.preventDefault();
		await this.props
			.loginUser(this.state.loginInfo)
			.then(() => {
				if (this.props.currentLoggedInUserInfo) {
					this.setState({
						redirect: true,
					});
				} else {
					alert("Incorrect credentials!");
				}
			})
			.catch((err) => {
				console.err(err);
			});
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to="/" />;
		}
		return (
			<div id="login-form-container">
				{/* LOGIN FORM */}
				<div id="login-form">
					<form
						onSubmit={(e) => this.handleLoginFormSubmit(e)}
					>
						<div id="login-username">
							<label>Username</label>
							<br />
							<input
								type="text"
								name="username"
								value={this.state.username}
								required
								onChange={(e) => this.handleLoginFormChange(e)}
							/>
						</div>
						<div id="login-email">
							<label>Email</label>
							<br />
							<input
								type="email"
								name="email"
								value={this.state.email}
								required
								onChange={(e) => this.handleLoginFormChange(e)}
							/>
						</div>
						<div id="login-password">
							<label>Password</label>
							<br />
							<input
								type="password"
								name="password"
								value={this.state.password}
								required
								onChange={(e) => this.handleLoginFormChange(e)}
							/>
						</div>
						<input id="login-btn" type="submit" value="Login" />
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentLoggedInUserInfo: state.currentLoggedInUserInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (loginInfo) => dispatch(loginUser(loginInfo)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
