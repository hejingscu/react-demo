import React from 'react'


class Hello extends React.Component{
  constructor(props) {
        super(props)
        this.state = {msg: '111', info: '222'}
    }
    render () {
        return (
            <div style={{color: '#fff'}}>
        <div>333</div>
        <p>555</p>
      </div>
        )
    }
}

export default Hello
