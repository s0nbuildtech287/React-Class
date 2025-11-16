import React from 'react';

class ChildComponent extends React.Component {
  render() {
    console.log('Child Component props:', this.props);
    let { name, age, address, arrJobs } = this.props;
    return (
      <div className="child-component">
        Hello I am {name} - {age} years old - from {address}
        <br />
        Here are my job experiences:
        <br />
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {index + 1} - {item.title} : {item.salary} $
            </div>
          );
        })}
      </div>
    );
  }
}

export default ChildComponent;
