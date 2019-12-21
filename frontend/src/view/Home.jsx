import React from 'react';
import Button from '../components/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    const teachers = [
      {
        name: 'Jan Kowalski',
      },
      {
        name: 'John Smith',
      },
      {
        name: 'Jan Kowalski',
      },
    ];

    this.setState({ teachers });
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
          { teachers.map((teacher, i) => <Button key={encodeURI(`${teacher.name}_${i}`)} redirect={`/teacher/${teacher.name}`}>{ teacher.name }</Button>)}
        </div>
      </div>
    );
  }
}

export default Home;
