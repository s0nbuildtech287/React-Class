import React from 'react';
import axios from 'axios';
import { withRouter } from '../withRouter.js';

class DetailUser extends React.Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const { id } = this.props.router.params;

    let res = await axios.get(`https://reqres.in/api/users/${id}`, {
      headers: {
        'x-api-key': 'reqres-free-v1', // thêm API key ở đây
        'Content-Type': 'application/json',
      },
    });

    this.setState({
      user: res.data.data,
    });
  }

  render() {
    let { user } = this.state;

    return (
      <div>
        <h2>User Detail</h2>

        {!user ? (
          <div>Loading...</div>
        ) : (
          <div>
            <p>ID: {user.id}</p>
            <p>
              Name: {user.first_name} {user.last_name}
            </p>
            <img src={user.avatar} alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(DetailUser);
