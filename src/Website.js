import React, { Component } from 'react';
import DropdownMenu from './components/DropdownMenu'
import Titles from './components/Titles'
import "./App.css"
import store from './store/index'
import headerPng from './images/header.png'
import PageOne from './components/page1/PageOne'

class Website extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    // componentWillMount() {
    //     setInterval(() => {
    //         this.setState({
    //             isActive: !this.state.isActive,
    //         })
    //     }, 2000)
    // }

    storeChange() {
        this.setState(store.getState())
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ position: "relative" }}>
                        <img style={{position:"absolute",zIndex:-1,width:"100vw",height:"1080px"}} src={headerPng} alt="" />
                        <Titles />
                        <DropdownMenu isActive={this.state.isActive} />
                    </div>
                    <div style={{position:"relative"}}>
                        <div className="titlePlaceHolder"></div>
                        <PageOne />
                    </div>
                </div>
            </div>
        );
    }
}

export default Website;

/*
z-index设置：
1. 设置z-index的元素必须设置position:(relative/fixed/absolute)，若不对位置有调整或特殊要求，可以单设一个absolute。
2. 将要在z轴排序的元素用<div>包裹，同时在父级元素上也要设position。
3. 根据需要对不同的子元素设置z-index，排序。
***关键：所有参与的元素(包括父元素)都要设置position
*/

/*
脱离文档流后元素上移问题：
1. 同级元素脱离文档流后，在整体布局上不占位置。
2. 若要保证其他元素原有布局，用<div>创建一个具有原同级元素大小的元素充当占位元素。
*/