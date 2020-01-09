import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const url = 'http://localhost:5000';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${url}/api/teacher`)
      .then(({ data }) =>
        this.setState({ teachers: data.data.map((name) => ({ name })) })
      );
  }

  render() {
    const { teachers } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '500px' }}>
          {teachers.map((teacher, i) => (
            <Button
              key={encodeURI(`${teacher.name}_${i}`)}
              redirect={`/teacher/${teacher.name}`}
            >
              {teacher.name}
            </Button>
          ))}
        </div>
        <Link to="/all">Wszystkie zastępstwa</Link>
      </div>
    );
  }
}

export default Home;
