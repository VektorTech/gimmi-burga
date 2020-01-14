import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './containers/header';
import FoodCart from './containers/foodCart';
import { BrowserRouter, Route } from 'react-router-dom';
import { BodyMain } from './components/bodyMain';

import Signup from './pages/signup';
import Signin from './pages/signin';

const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
`;

const Body = () => <BodyDiv><BodyMain /><FoodCart /></BodyDiv>;

class App extends Component {
    render(){
        return( 
            <>
                <BrowserRouter>
                <Header />
                    <Route exact path="/" component={Body}/>
                    <Route path="/signin" component={Signin}/>
                    <Route path="/signup" component={Signup}/>
                </BrowserRouter>
            </> 
        );
    }
}

export default App;