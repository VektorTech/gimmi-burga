import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './containers/header';
import FoodCart from './containers/foodCart';
import { BodyMain } from './components/bodyMain';

const Body = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 1fr;
    grid-template-rows: 1fr;
`;

class App extends Component {
    render(){
        return( 
            <>
                <Header />
                <Body>
                    <BodyMain />
                    <FoodCart />
                </Body>
            </> 
        );
    }
}

export default App;