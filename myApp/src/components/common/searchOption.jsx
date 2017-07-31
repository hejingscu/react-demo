import React,{Component} from 'react'

class SearchOption extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section style={{position: 'relative'}}>
        <div className="block-option">
          <dic className="item-option" onClick="">综合排序</dic>
          <dic className="item-option">销量最高</dic>
          <dic className="item-option">距离最近</dic>
          <dic className="item-option">筛选</dic>
        </div>
        {
          true ?
          <div className="block-zh-rank text-left">
            <div className="item-rank">评分最高</div>
            <div className="item-rank">配送费最低</div>
            <div className="item-rank">起送价最低</div>
            <div className="item-rank">人均最低</div>
          </div> : ''
        }

      </section>
    )
  }
}

export default SearchOption
