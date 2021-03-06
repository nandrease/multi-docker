import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    index: '',
    seenIndexes: [],
    values: {}
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <h1>Calc Fibonacci number</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index</label>
          <input value={index} onChange={(event) => this.setState({ index: event.target.value })} />
          <button>Submit</button>
        </form>

        <h3>Indexes I have seen</h3>
        {this.renderSeenIndexes()}

        <h3>Calculated values</h3>
        {this.renderValues()}
      </div>
    );
  }

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const seenIndexes = await axios.get('/api/values/all');
    this.setState({
      seenIndexes: seenIndexes.data
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index
    });
    this.setState({ index: '' });
  };

  renderSeenIndexes() {
    const { seenIndexes } = this.state;
    return seenIndexes.map(({ number }) => number).join(', ');
  }

  renderValues() {
    const { values } = this.state;
    return Object.keys(values).map((key) => (
      <div key={key}>
        For index {key} I calculated {values[key]}
      </div>
    ));
  }
}

export default Fib;
