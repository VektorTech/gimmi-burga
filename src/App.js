import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './containers/header';

import { Body } from './hoc/bodyWrapper';
import { BodyMain } from './hoc/bodyMain';
import { CategorySection } from './hoc/categorySection';
import { FoodSection } from './hoc/foodSection';

import { CategoryList } from './components/categoryList';
import { FoodList } from './containers/foodList';


const HomeScreen = () => (
    <BodyMain>
        <CategorySection>
            <CategoryList />
        </CategorySection>
        <FoodSection>
            <FoodList />
        </FoodSection>
    </BodyMain>
);

class App extends Component {
    render(){
        return( 
            <>
                <Header />
                <Body>
                    <BrowserRouter>
                        <Route path="/" component={HomeScreen} />
                    </BrowserRouter>               
                    <div>
                    </div>
                </Body>
            </> 
        );
    }
}

export default App;