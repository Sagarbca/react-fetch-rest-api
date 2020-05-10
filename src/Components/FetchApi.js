import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class FetchApi extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch("https://peaceful-stream-79793.herokuapp.com/api/v1/user_detail")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ todos: data.success });
        console.log(this.state.todos);
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1></h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">List of FetchApi</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* jquery validation */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Fetch Api lists<small></small>
                    </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <br />
                  <br />
                  {/* here my codes start  */}

                  {/* here my code ends */}
                  {/* here my new codes  */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Fixed Header Table</h3>

                          <div className="card-tools">
                            <div className="input-group input-group-sm">
                              <div className="input-group-append">
                                <Link
                                  to="/createUser"
                                  className="btn btn-primary"
                                >
                                  <i className="fa fa-plus" />
                                  <p>Create</p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="card-body table-responsive p-0">
                          <table className="table table-head-fixed text-nowrap">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Mobile Number</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.todos.map((todo) => (
                                <tr>
                                  <td>{todo.id}</td>
                                  <td>{(todo.first_name, todo.last_name)}</td>
                                  <td>{todo.email}</td>
                                  <td>
                                    <span className="tag tag-success">
                                      Active
                                    </span>
                                  </td>
                                  <td>{todo.mobile_number}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6"></div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    );
  }
}
