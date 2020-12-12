import React, { Component } from 'react';
import { createPortal } from 'react-dom'
import "../style/DropdownMenu.css"
import { CSSTransition } from 'react-transition-group'
import store from '../store/index'

class DropdownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        const dom = window.document
        this.node = dom.createElement("div")
        dom.body.appendChild(this.node)
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node)
    }

    render() {
        return createPortal((
            <div
                className="menuContainer"
            >
                <CSSTransition
                    in={this.props.isActive}
                    timeout={200}
                    classNames={{
                        enter: "menuEnter",
                        enterActive: "menuEnterActive",
                        enterDone: "menuEnterDone",
                        exit: "menuExit",
                        exitActive: "menuExitActive",
                        exitDone: "menuExitDone",
                    }}
                >
                    <div className="dropDownMenu"></div>
                </CSSTransition>
            </div>
        ), this.node);
    }
}

export default DropdownMenu;