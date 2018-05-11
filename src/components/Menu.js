import React from 'react';
import { Component } from 'react';
import '../styles/menu.css'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <nav id="navbar">
                    <div className="logo">
                        <a href="">STEM</a>
                    </div>
                    <div className="menu toggle-menu">
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Student Projects</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a class="resources" href="#">Resources&#9662;</a>
                            <div className="resource-menu">
                                <ul>
                                <li><a href="">STEM Summit</a></li>
                                <li><a href="">STEMatics Grant</a></li>
                                <li><a href="">Bergen's website</a></li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="toggle-button">
                        <div className="patty"></div>
                        <div className="patty"></div>
                    </div>  
                </nav>
            </div>
        );
    }
}