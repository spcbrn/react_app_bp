import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }

    testMethod = () => {
        this.setState((ps, p) => ({ list: [...ps.list, 'Another one.'] }))
    }

    render() {
        const renderList = () => {
            return this.state.list.length
                ? this.state.list.map((c, i) => <p>{c}</p>)
                : null;
        }

        return (
            <main>
                <h1>Hello world...</h1>
                <button onClick={this.testMethod}>Test</button>
                { renderList() }
            </main>
        )
    }
}

export default App;