import React from 'react';
import './index.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: [ '博客','兴趣','闲谈','关于我' ],
            tabIndex: 0
        }
    }

    tabClickEvent = (index) => {
        console.log(index);
        this.setState({
            tabIndex:index
        })
    }

    render() {
        var arrList = this.state.title.map((item, index) => {
            if (index === this.state.tabIndex) {
                return (
                    <li key={index} onClick={(event) => { this.tabClickEvent(index) }} className='headerItem headerItemActive'>{item}</li>
                )
            }
            else {
                return (
                    <li key={index} onClick={(event) => { this.tabClickEvent(index) }} className='headerItem'>{item}</li>
                )
            }

        })
        return (
            <ul className='header'>
                {arrList}
            </ul>
        )
    }
}

export default Header;