import React from 'react';

class AddComponent extends React.Component {
  handleChange = (event, field) => {
    this.props.updateField(field, event.target.value);
  };

  render() {
    return (
      <form>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) =>
            this.handleChange(event, 'name')
          }
        />
        <label> Age:</label>
        <input
          type="text"
          onChange={(event) =>
            this.handleChange(event, 'age')
          }
        />

        <label> Address:</label>
        <input
          type="text"
          onChange={(event) =>
            this.handleChange(event, 'address')
          }
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddComponent;
