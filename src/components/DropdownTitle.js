import React, { Component } from 'react';
import "../style/DropdownTitle.css"
import DropdownSubTitle from './DropdownSubTitle'

class DropdownTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <DropdownSubTitle
                params={this.props.params}
                index={this.props.index}
                // isActive={this.props.isActive}
            />
        )
    }
}

export default DropdownTitle;

/*
调整CSS样式心得：
1. 从网页打开F12，选择元素查看其className进行定位。
2. width,height 宽高100%(或百分比设置)针对的是上一级元素(父级元素)，
因此若多余空白的<div>包裹应将其删除，或者将上级空白div设置宽高100%。
*/
/*
route-transition-group动画心得：
1. 先定义要动画的目标组件的CSS样式，并设定其初始的透明度和位置(transform)
2. 用<CSSTransition>包裹，设定动画的CSS样式
3. 动画组件尽量分离出来单独做，否则可能会受到其他组件的干扰导致无法正常展示动画效果。
*/