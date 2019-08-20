import React, { Component } from 'react';
import ROUTES from './../constants/routes';

class Menu extends Component {

    displayLinks = () => {
        let data = ROUTES.map( route => route.path)
        alert(data);
    }
    render = () => {
        return (
            <div>
                <span onClick={this.displayLinks}>meow</span>
            </div>
        )
    }
}

export default Menu;