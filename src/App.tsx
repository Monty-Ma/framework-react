import React, { Component } from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';

export class App extends Component<any, any> {
    state = {};

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }


    render() {
        return <div className="App">
            Appdfdf

            <Button variant="contained" color="primary">
                你好，世界
            </Button>
        </div>;
    }
    componentDidMount(...did: any) {
        console.log(did);

        const arr = ['1', '2', '3', '4', '5'];
        const arr2 = ['1', '3', '4', '5', '5'];


        console.log(arr.copyWithin(-4, -1, -4));
    }
}

export default App;
