import React from 'react';
import * as ReactDom from 'react-dom';
import './App.css';
import * as Material from "@material-ui/core";

class MyTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return <li id={'time'}>actual time: {this.state.date.toLocaleTimeString()}</li>;
    }
}

class error extends React.Component {
    constructor(number = -1, props) {
        super(props);
        if (number === -1) throw new Error('error number must != -1');
        this.number = number;
    }

    render() {
        return <div className='App'>
            <header className='App-error'>
                <h1>Fehler: {this.number}</h1>
            </header>
        </div>;
    }
}

function App() {
    const path = window.location.pathname.split('/');

    if (path.length === 2 && path[1] === 'app')
        return (
            <div className="App">
                <header className="App-header">
                    <p>Hallo!</p>
                    <p>
                        <ul>{path.map(x => x !== '' ? <li>{x}</li> : null)}</ul>
                    </p>
                    <Material.Button variant={"contained"} color={"primary"}>Na du</Material.Button>
                    <MyTime/>
                </header>
            </div>
        );

    if (path.length === 2 && path[1] === '')
        return (<div className="App">
            <header className="App-header">test</header>
        </div>);

    else return <div>{path.length}</div>;
//    else return new error(404);
}

export default App;
