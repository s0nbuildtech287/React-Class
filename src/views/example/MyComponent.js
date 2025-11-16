import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
  state = {
    name: '',
    age: '',
    address: '',
    arrJobs: [
      { id: 'job1', title: 'Developer', salary: '500' },
      { id: 'job2', title: 'Tester', salary: '400' },
      { id: 'job3', title: 'Project', salary: '1000' },
    ],
  };

  updateField = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    return (
      <div className="my-component">
        <AddComponent updateField={this.updateField} />
        <ChildComponent
          name={this.state.name}
          age={this.state.age}
          address={this.state.address}
          arrJobs={this.state.arrJobs}
        />
      </div>
    );
  }
}

export default MyComponent;
