import React, { Component } from 'react';
import DropdownTitle from './DropdownTitle'
import "../style/SubTitle.css"
import store from '../store/index';

class SubTitle extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)

        this.handleMouseOver = this.handleMouseOver.bind(this)
        this.handleMouseOut = this.handleMouseOut.bind(this)
        // this.mouseLeave = this.mouseLeave.bind(this)
        // this.mouseIn = this.mouseIn.bind(this)
    }

    // mouseIn(e) {
    //     e.target.style.setProperty("color", "#44DAFF", "important")
    // }

    // mouseLeave(e) {
    //     e.target.style.color = "#666666"
    // }

    handleMouseOver() {
        const action = {
            type: "open_isActive_delay",
            id: this.props.index,
        }
        store.dispatch(action)
    }

    handleMouseOut() {
        const delayAction = () => (dispatch, getState) => {
            // setTimeout里用箭头函数调用dispatch函数，目的是绑定this，这里不能用bind方法，因为这样绑定的this是全局的，无效
            let timer = setTimeout(() => { dispatch({ type: "close_isActive_delay" }) }, 300)
            console.log(this.state.isActive)
            dispatch({ type: "add_timer", timer })
        }
        store.dispatch(delayAction())
    }

    storeChange() {
        this.setState(store.getState())
    }

    render() {
        return (
            <div className="subTitleContainer">
                <div>
                    <a
                        className="textFont"
                        onMouseOver={(e) => {
                            this.handleMouseOver()
                            // setTimeout(() => { this.mouseIn(e) }, 0) //setTimeout(x,0)妙用，延迟渲染
                        }}
                        onMouseOut={(e) => {
                            this.handleMouseOut()
                            // this.mouseLeave(e)
                        }}
                        style={
                            this.state.isActive ?
                                ((this.state.id === this.props.index) ?{ color: "#44DAFF" } : { color: "#666666" })
                                : { color: "white" }
                        }
                    >{this.props.titleText}</a>
                </div>
                <DropdownTitle
                    params={this.props.params}
                    index={this.props.index}
                />
            </div>
        );
    }
}

export default SubTitle;

/*
redux中怎么使用setTimeout? redux-thunk中间件
此处用setTimeout()做延迟操作，使用户有足够时间移动到子选项
注意omMouseOut里面的异步操作，setTimeout执行时，会执行this.setState()，而非等待setTimeout执行完。
*/