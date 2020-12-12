import React, { Component } from 'react'
import "../../style/page1/PageOne.css"
import { Typography } from 'antd';
import store from '../../store'; //可省略index.js
import "../../style/page1/PageOne.css"
import testImg from '../../images/testImg.jpg'

const { Title } = Typography;
const { Paragraph } = Typography;

class PageOneText extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    handleScroll() {
        if (document.documentElement.scrollTop > 900) {
            const action = {
                type: "handle_scroll",
            }
            store.dispatch(action)
        }
        if (document.documentElement.scrollTop < 550) {
            const action = {
                type: "handle_noscroll",
            }
            store.dispatch(action)
        }
        // console.log(document.documentElement.scrollTop)
    }

    storeChange() {
        this.setState(store.getState())
    }

    componentDidMount() {
        // 挂载 onscroll 监听事件，object.onscroll = function()
        window.onscroll = () => { this.handleScroll() }
    }

    render() {
        return (
            <div className="textContainer">
                <img className={`${this.state.pgoneClassNames.img}`} src={testImg} alt="" />
                <Title className={`title ${this.state.pgoneClassNames.title}`}>{this.props.title}</Title>
                <Paragraph
                    ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}
                    className={`texts paragraph ${this.state.pgoneClassNames.text}`}
                >
                    {this.props.text}
                </Paragraph>
            </div>
        );
    }
}

export default PageOneText;


/*
页面滚动动画机制：
页面滚动时界面会不断渲染，因此在componentDidMount生命周期中可以监听scrollTop页面位置，作为动画入场条件。
*/