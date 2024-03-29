import { Component } from "react";
import { nanoid } from "nanoid";

class Form extends Component {
  state = {
    name: "",
    tag: "",
    expirients: "junior",
    licence: false,
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenceChange = (event) => {
    console.log(event.currentTarget.checked);
    this.setState({ licence: event.currentTarget.checked });
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Surname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        <p>Your level developer</p>
        <label>
          Junior
          <input
            type="radio"
            name="expirients"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.expirients === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="expirients"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.expirients === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="expirients"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.expirients === "senior"}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          Agree with licence
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;
