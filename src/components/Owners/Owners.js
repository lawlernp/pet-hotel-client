import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";

class Owners extends Component {
  state = {
    newOwner: {
      first_name: "",
      last_name: "",
    },
  };

  handleChange = (event, eventType) => {
    this.setState({
      newOwner: {
        ...this.state.newOwner,
        [eventType]: event.target.value,
      },
    });
    console.log(this.state.newOwner);
  };

  handleSubmit = () => {
    console.log("handle submit");
    this.props.dispatch({ type: "PUSH_OWNERS", payload: this.state.newOwner });
  };

  render() {
    return (
      <div>
        <h2>Add Owner</h2>
        <input
          onChange={(event) => this.handleChange(event, "first_name")}
          placeholder="First name"
        />
        <input
          onChange={(event) => this.handleChange(event, "last_name")}
          placeholder="Last name"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Owners);
