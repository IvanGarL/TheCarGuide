import React from 'react';
import { Grid, Form, Header, Message } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { Container, Col, Row, Image } from "react-bootstrap";
import store from 'store';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.setState({ error: false });

    if (!(username === 'george' && password === 'foreman')) {
      return this.setState({ error: true });
    }

    console.log("you're logged in. yay!");
    store.set('loggedIn', true);
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    return (
        <div>
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="logo-wrap">
                <img id="logo" src="Signin.jpg" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="register-wrap">
                <h1 className="text-center">Registrarse</h1>
                <div className="modal-body">
                  {error.length > 0 ? (
                    <div className="alert alert-danger fade in">{error}</div>
                  ) : (
                    ""
                  )}
                  <form
                    id="register-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        id="register-username"
                        className="form-control input-lg"
                        placeholder="usuario"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="register-name"
                        className="form-control input-lg"
                        placeholder="nombres y apellidos"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        id="register-age"
                        className="form-control input-lg"
                        placeholder="edad"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="register-email"
                        className="form-control input-lg"
                        placeholder="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="register-password"
                        className="form-control input-lg"
                        placeholder="password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="hidden"
                        id="register-role"
                        className="form-control input-lg"
                        value="User"
                      />
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        id="register-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Ingresar"
                      />
                    </div>
                    <div className="form-group text-center">
                      <p className="text-center">
                        ¿No tienes una cuenta? Regístrate{" "}
                        <Link to="/signup">aquí</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
