import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test';

const Index = () => {
    return <div>WELCOME TO REACT APP NEW2 !</div>;
};
ReactDOM.render(
    <div>
        <Index />
        <Test />
        <h3>hello world</h3>
    </div>
    , document.getElementById('app')
);
