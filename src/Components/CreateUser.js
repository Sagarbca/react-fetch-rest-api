import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNumber: "",
      userName: "",
    };
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }

  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeMobileNumber(e) {
    this.setState({
      mobileNumber: e.target.value,
    });
  }

  onChangeUserName(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    post(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password,
      this.state.mobileNumber,
      this.state.userName
    );
    async function post(
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      userName
    ) {
      try {
        // Create request to api service
        const req = await fetch(
          `https://peaceful-stream-79793.herokuapp.com/api/v1/signup`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },

            // format the data
            body: JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              email: email,
              mobileNumber: mobileNumber,
              password: password,
              username: userName,
            }),
          }
        );

        const res = await req.json();

        // Log success message
        console.log(res);
      } catch (err) {
        console.error(`ERROR: err`);
      }
    }

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    this.setState({
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        {/* // here my code start */}
        <div className="col-md-12">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Add User</h3>
            </div>

            <form role="form" onSubmit={this.onSubmit}>
              <div className="card-body">
                <div className="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.onChangeLastName}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.mobileNumber}
                    onChange={this.onChangeMobileNumber}
                  />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">UserName</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.userName}
                    onChange={this.onChangeUserName}
                  />
                </div>
              </div>

              <div className="card-footer">
                <div className="form-group">
                  <input
                    type="submit"
                    value="CreateUser"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
