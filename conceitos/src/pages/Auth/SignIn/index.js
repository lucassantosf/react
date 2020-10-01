import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "../../../store/ducks/auth";

import { Container, SignForm } from "../styles";
import Button from "../../../styles/components/Button";

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas Vindas</h1>

          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />

          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />

          <button type="submit">Entrar</button>
          <Button size="big" type="submit">
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);
