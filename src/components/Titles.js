import React, { Component } from 'react';
import "../style/Titles.css"
import SubTitle from './SubTitle';


class Titles extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const titleInfo = [
            {
                titleText: "Title1",
                id:1,
                subTitleProps: [
                    { name: "百度", href: "https://www.baidu.com/", },
                    { name: "搜狗", href: "https://www.sogou.com/", },
                    { name: "360搜索", href: "https://www.so.com/", },
                    { name: "火狐", href: "https://start.firefoxchina.cn/", },
                ],
            },
            {
                titleText: "Title2",
                id:2,
                subTitleProps: [
                    { name: "百度", href: "https://www.baidu.com/", },
                    { name: "搜狗", href: "https://www.sogou.com/", },
                    { name: "360搜索", href: "https://www.so.com/", },
                    { name: "火狐", href: "https://start.firefoxchina.cn/", },
                ],
            },
            {
                titleText: "Title3",
                id:3,
                subTitleProps: [
                    { name: "百度", href: "https://www.baidu.com/", },
                    { name: "搜狗", href: "https://www.sogou.com/", },
                    { name: "360搜索", href: "https://www.so.com/", },
                    { name: "火狐", href: "https://start.firefoxchina.cn/", },
                ],
            },
            {
                titleText: "Title4",
                id:4,
                subTitleProps: [
                    { name: "百度", href: "https://www.baidu.com/", },
                    { name: "搜狗", href: "https://www.sogou.com/", },
                    { name: "360搜索", href: "https://www.so.com/", },
                    { name: "火狐", href: "https://start.firefoxchina.cn/", },
                ],
            },
        ]

        return (
            <div>
                <div className="titleContainer">
                    <div className="leftPlaceHolder"></div>
                    <div className="rightPlaceHolder">
                        {
                            titleInfo.map((item, index) => {
                                return (
                                    <SubTitle
                                        key={index}
                                        titleText={item.titleText}
                                        params={item.subTitleProps}
                                        index={item.id}
                                        />)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Titles;