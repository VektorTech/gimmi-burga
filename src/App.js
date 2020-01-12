import React, { Component } from 'react';

import Header from './containers/header';

import { FoodSection } from './components/foodSection';
import { Body } from './components/bodyWrapper';
import { BodyMain } from './components/bodyMain';
import { CategorySection } from './components/categorySection';
import { CategoryList } from './components/categoryList';

class App extends Component {
    render(){
        return( 
            <>
                <Header />
                <Body>
                    <BodyMain>
                        <CategorySection>
                            <CategoryList />
                        </CategorySection>
                        <FoodSection>
                            
                        </FoodSection>
                    </BodyMain>
                    
                    <div>
                    </div>
                </Body>
            </> 
        );
    }
}

export default App;