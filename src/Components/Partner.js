import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";

export default class Partner extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeChainName = this.onChangeChainName.bind(this);
    this.onChangeCuurency = this.onChangeCuurency.bind(this);
    this.onChangetArea = this.onChangetArea.bind(this);
    this.onChangeWebsite = this.onChangeWebsite.bind(this);
    this.onChangeEstablishedOn = this.onChangeEstablishedOn.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      chain_name: "",
      currency: "",
      area: "",
      website: "",
      establishedOn: "",
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeChainName(e) {
    this.setState({
      chain_name: e.target.value,
    });
  }

  onChangeCuurency(e) {
    this.setState({
      currency: e.target.value,
    });
  }

  onChangetArea(e) {
    this.setState({
      area: e.target.value,
    });
  }

  onChangeWebsite(e) {
    this.setState({
      website: e.target.value,
    });
  }

  onChangeEstablishedOn(e) {
    this.setState({
      establishedOn: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`name: ${this.state.name}`);
    console.log(`chainName: ${this.state.chain_name}`);
    console.log(`currency: ${this.state.currency}`);
    console.log(`area: ${this.state.area}`);
    console.log(`website: ${this.state.website}`);
    console.log(`establishedOn: ${this.state.todo_priority}`);

    this.setState({
      name: "",
      chain_name: "",
      currency: "",
      area: "",
      website: "",
      established_on: "",
    });
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add Partner</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Add Partner</li>
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
                      Partner Registration Form <small></small>
                    </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <br />
                  <br />
                  <form role="form" id="quickForm" onSubmit={this.onSubmit}>
                    <div className="card card-default color-palette-box">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-tag" /> Partner details
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-4 col-md-4">
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder="Name"
                              value={this.state.name}
                              onChange={this.onChangeName}
                            />
                          </div>

                          <div className="col-sm-4 col-md-4">
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder="Chain Name"
                              value={this.state.chain_name}
                              onChange={this.onChangeChainName}
                            />
                          </div>

                          <div className="col-sm-4 col-md-4">
                            <select
                              className="form-control form-control-sm"
                              value={this.state.currency}
                              onChange={this.onChangeCurrency}
                            >
                              <option>Currency</option>
                              <option>option 2</option>
                              <option>option 3</option>
                              <option>option 4</option>
                              <option>option 5</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <br />
                        </div>
                        <div className="row">
                          <div className="col-sm-6 col-md-6">
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder="Area"
                              value={this.state.area}
                              onChange={this.onChangeArea}
                            />
                          </div>

                          <div className="col-sm-6 col-md-6">
                            <div
                              className="bootstrap-switch-container"
                              style={{ width: 129, marginLeft: "-43px" }}
                            >
                              <span
                                className="bootstrap-switch-handle-on bootstrap-switch-primary"
                                style={{ width: 43 }}
                              >
                                ON
                              </span>
                              <span
                                className="bootstrap-switch-label"
                                style={{ width: 43 }}
                              >
                                &nbsp;
                              </span>
                              <span
                                className="bootstrap-switch-handle-off bootstrap-switch-default"
                                style={{ width: 43 }}
                              >
                                OFF
                              </span>
                              <input
                                type="checkbox"
                                name="my-checkbox"
                                defaultChecked
                                data-bootstrap-switch
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    {/* A brief */}
                    <div className="card card-default color-palette-box">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-tag" /> A brief
                        </h3>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-6 col-md-6">
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder="Website"
                              value={this.state.website}
                              onChange={this.onChangeWebsite}
                            />
                          </div>

                          <div className="col-sm-6 col-md-6">
                            <input
                              type="date"
                              className="form-control form-control-sm"
                              id="reservation"
                              value={this.state.established_on}
                              onChange={this.onChangeEstablishedOn}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-2 col-md-2">
                            <label> Experiences </label>
                          </div>

                          <div className="col-sm-10 col-md-10">
                            <div className="form-group" data-select2-id={46}>
                              <select
                                className="select2 select2-hidden-accessible"
                                multiple
                                data-placeholder="Select a State"
                                style={{ width: "100%" }}
                                data-select2-id={7}
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <option data-select2-id={37}>Alabama</option>
                                <option data-select2-id={38}>Alaska</option>
                                <option data-select2-id={39}>California</option>
                                <option data-select2-id={40}>Delaware</option>
                                <option data-select2-id={41}>Tennessee</option>
                                <option data-select2-id={42}>Texas</option>
                                <option data-select2-id={43}>Washington</option>
                              </select>
                              <span
                                className="select2 select2-container select2-container--default select2-container--above select2-container--focus"
                                dir="ltr"
                                data-select2-id={8}
                                style={{ width: "100%" }}
                              >
                                <span className="selection">
                                  <span
                                    className="select2-selection select2-selection--multiple"
                                    role="combobox"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    tabIndex={-1}
                                    aria-disabled="false"
                                  >
                                    <ul className="select2-selection__rendered">
                                      <li
                                        className="select2-selection__choice"
                                        title="California"
                                        data-select2-id={63}
                                      >
                                        <span
                                          className="select2-selection__choice__remove"
                                          role="presentation"
                                        >
                                          ×
                                        </span>
                                        California
                                      </li>
                                      <li className="select2-search select2-search--inline">
                                        <input
                                          className="select2-search__field"
                                          type="search"
                                          tabIndex={0}
                                          autoComplete="off"
                                          autoCorrect="off"
                                          autoCapitalize="none"
                                          spellCheck="false"
                                          role="searchbox"
                                          aria-autocomplete="list"
                                          placeholder
                                          style={{ width: "0.75em" }}
                                        />
                                      </li>
                                    </ul>
                                  </span>
                                </span>
                                <span
                                  className="dropdown-wrapper"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Lets elaborate */}
                    <br />
                    <div className="card card-default color-palette-box">
                      <div className="card-header">
                        <h3 className="card-title">
                          <i className="fas fa-tag" /> Lets Elaborate
                        </h3>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
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
