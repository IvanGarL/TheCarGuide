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
                <img id="logo" src="Signin.jpg" alt="imagen registro" />
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
                      <label>Nombre de usuario: <input
                        type="text"
                        id="register-username"
                        className="form-control input-lg"
                        placeholder="usuario"
                      /></label>
                    </div>
                    <div className="form-group">
                    <label>Nombres y apellidos: <input
                        type="text"
                        id="register-name"
                        className="form-control input-lg"
                        placeholder="nombres y apellidos"
                      /></label>
                    </div>
                    <div className="form-group">
                    <label>Edad: <input
                        type="number"
                        id="register-age"
                        className="form-control input-lg"
                        placeholder="edad"
                      /></label>
                    </div>
                    <div className="form-group">
                    <label>Correo electronico: <input
                        type="email"
                        id="register-email"
                        className="form-control input-lg"
                        placeholder="email"
                      /></label>
                    </div>
                    <div className="form-group">
                    <label>Contraseña: <input
                        type="password"
                        id="register-password"
                        className="form-control input-lg"
                        placeholder="password"
                      /></label>
                    </div>
                    <div className="form-group">
                    <label><input
                        type="hidden"
                        id="register-role"
                        className="form-control input-lg"
                        value="User"
                      /></label>
                    </div>
                    <div className="form-group text-center">
                    <label><input
                        type="submit"
                        id="register-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Ingresar"
                      /></label>
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
