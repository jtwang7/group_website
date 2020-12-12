import React, { Component } from 'react';
import "../../style/page1/PageOne.css"
import PageOneText from './PageOneText'
import testImg from '../../images/testImg.jpg'
import pgoneBackground from '../../images/pgoneBackground.png'

class PageOne extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const itemList = [
            {
                title: "h1. Title1",
                text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                imgSrc: testImg,
            },
            {
                title: "h2. Title2",
                text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                imgSrc: testImg,
            },
            {
                title: "h3. Title3",
                text: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\
                XXXXXXXXXXXXXXXXXXxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                imgSrc: testImg,
            },
        ]
        return (
            <div className="pgOnePlaceholder">
                <img
                    src={pgoneBackground}
                    style={{
                        opacity: 1,
                        width: "100%",
                        height: "100%",
                        position: "absolute", //脱离文档流，但是基于父级position:"relative"定位，置于背景的一种方法
                    }}
                    alt="" />
                {
                    itemList.map((item, index) => (
                        <PageOneText
                            key={index}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            text={item.text} />
                    ))
                }
            </div>
        );
    }
}

export default PageOne;