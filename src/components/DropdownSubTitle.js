import React, { Component } from 'react';
import "../style/DropdownTitle.css"
import { CSSTransition } from 'react-transition-group'
import store from '../store';

class DropdownSubTitle extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isActive:false
        // }
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

        this.handleSubMouseOver = this.handleSubMouseOver.bind(this)
        this.handleSubMouseOut = this.handleSubMouseOut.bind(this)
    }

    // handleSubMouseOver() {
    //     this.setState({
    //         isActive:true,
    //     })
    // }

    // handleSubMouseOut() {
    //     this.setState({
    //         isActive:false
    //     })
    // }

    handleSubMouseOver() {
        const action = {
            type: "open_isActive",
        }
        store.dispatch(action)
    }

    handleSubMouseOut() {
        const delayAction = () => (dispatch, getState) => {
            // setTimeout里用箭头函数调用dispatch函数，目的是绑定this，这里不能用bind方法，因为这样绑定的this是全局的，无效
            let timer = setTimeout(() => { dispatch({ type: "close_isActive_delay" }) }, 300)
            dispatch({ type: "add_timer", timer })
        }
        store.dispatch(delayAction())
    }

    storeChange() {
        this.setState(store.getState())
    }

    render() {
        const [...params] = this.props.params //解构赋值
        return (
            <div className="layout">
                {
                    params.map((item, index) => (
                        <CSSTransition
                            key={index + item}
                            // in={this.props.isActive}
                            in={this.state.isActive && this.props.index === this.state.id}
                            timeout={300}
                            classNames={{
                                enter: "subEnter",
                                enterActive: "subEnterActive",
                                enterDone: "subEnterDone",
                                exit: "subExit",
                                exitActive: "subExitActive",
                                exitDone: "subExitDone",
                            }}
                            onEnter={(el) => { el.style.display = "block" }} //el: HTMLElement
                            onExited={(el) => { el.style.display = "none" }}
                        >
                            <a
                                href={item.href}
                                key={item + index}
                                className="fontStyle"
                                onMouseOver={this.handleSubMouseOver}
                                onMouseOut={this.handleSubMouseOut}
                            >{item.name}</a>
                        </CSSTransition>
                    ))
                }
            </div>
        );
    }
}

export default DropdownSubTitle;

/*
CSSTransition天坑：
给遍历元素添加初始位置，则元素就无法展示动画效果，不知原因。
暂时在onEnter后面加回调函数，即在动画开始前，将display展示,在onExited后将display重置为none
初始化的时候将display设为none
*/