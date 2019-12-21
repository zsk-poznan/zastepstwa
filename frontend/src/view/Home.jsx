import React from 'react';
import Button from '../components/Button';

/* const Home = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div style={{ maxWidth: '500px' }}>
      <Button>Test</Button>
      <Button>Test</Button>
      <Button>Test</Button>
    </div>
  </div>
); */

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
          { teachers.map((teacher) => <Button redirect={`/teacher/${teacher.name}`}>{ teacher.name }</Button>)}
        </div>
      </div>
    );
  }
}

export default Home;
