import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
    }

    testMethod = () => {
        console.log('This is test...');
    }

    render() {
        return (
            <main>
                <h1>Hello world...</h1>
                <button onClick={this.testMethod}>Test</button>
            </main>
        )
    }
}

export default App;