import React from 'react';
import Markdown from 'react-markdown';
import md from './files/基础概念.md'
import md1 from './files/let和const.md'
import './styles/markdown.css'
import CodeBlock from './CodeBlock.jsx'

class ChangeLog extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            markdown: '',
            lists: ['基础概念.md', 'let和const.md'],
            files:{'基础概念.md':md,'let和const.md':md1}
        }
    }

    componentWillMount() {
        fetch(md)
            .then(res => res.text())
            .then(text => this.setState({ markdown: text}));
    }

    selectChange=()=>{
     var select=document.getElementById('select');
     let val=select.options[select.options.selectedIndex].text;
     fetch(this.state.files[val])
            .then(res => res.text())
            .then(text => this.setState({ markdown: text}));
    }

    render() {
        const { markdown } = this.state;
        let arrList = this.state.lists.map((item, index) => {
            return (
                <option key={index}>{item}</option>
            )
        })
        return (
            <div className='markdown'>
                <h2 className='markColor'>选择博客</h2>
                <select id='select' className='selectFile' onChange={this.selectChange}>
                    {arrList}
                </select>
                <Markdown source={markdown} renderers={{ code: CodeBlock }}
                    escapeHtml={false} />

            </div>

        );
    }
}

export default ChangeLog;
