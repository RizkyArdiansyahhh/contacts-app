/* eslint-disable react/prop-types */
import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onTagChange = this.onTagChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }
  onTagChange(e) {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }
  render() {
    return (
      <form action="" className="contact-input" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="nama"
          value={this.state.name}
          onChange={this.onNameChange}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChange}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default ContactInput;
