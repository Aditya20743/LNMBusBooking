import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
    };
    this.wrapper = React.createRef();
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    this.props.loginUser({
      username: this.username.value,
      password: this.password.value,
    });
    console.log(this);
    event.preventDefault();
  }

  handleGoogleLogin(event) {
    this.toggleModal();
    this.props.googleLogin();
    event.preventDefault();
  }

  render() {
    return (
      <Modal
        className="modal-dialog-centered"
        isOpen={this.state.isModalOpen}
        toggle={this.toggleModal}
      >
        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleLogin}>
            <FormGroup>
              <Label htmlFor="username">Email</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (this.username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (this.password = input)}
              />
            </FormGroup>
            <Button type="submit" value="submit" color="primary">
              Login
            </Button>
          </Form>
          <p></p>
          <Button color="danger" onClick={this.handleGoogleLogin}>
            <span className="fa fa-google fa-lg"></span> Login with Google
          </Button>
        </ModalBody>
      </Modal>
    );
  }
}

export default Login;
