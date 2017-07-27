import React from 'react'

const Main=React.createClass({
    render: function () {
        return (
            <div style={{color: '#fff'}}>
                {this.props.children}
                <a href="#/test">test页</a>
                <a href="#/hello">hello页</a>
            </div>
        )
    }
})

export default Main;
