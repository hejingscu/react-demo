import React from 'react'
import { getShop,getBanner,getCategory } from '../api/api'
import ShopList from './common/shopList'
import SearchOption from './common/searchOption'
import Slide from './common/Slide'
import axios from 'axios'
import Swiper from 'swiper'


class Index extends React.Component{
  constructor(props) {
        super(props)
        this.state = {shopList: [],bannerList: [], categoryList: []}
  }
  async getData(){
    let shop = await getShop()
    let banner = await getBanner()
    let category = await getCategory()
    this.setState({shopList: shop.data, bannerList: banner.data, categoryList: category.data})
    console.log(this.state.bannerList)
  }
  componentDidMount(){
    this.getData()
  }
  render () {
    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      autoplayDisableOnInteraction : false,
      autoplay: 5000,
      loop: true,
      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    let shopList = this.state.shopList,
        bannerList = this.state.bannerList,
        categoryList = this.state.categoryList
    return (
      <div style={{fontSize: '0.26rem'}}>
        <div className="swiper-container">
          <div className="swiper-wrapper">
              {/* <div className="swiper-slide">1</div>
            <div className="swiper-slide">2</div>
            <div className="swiper-slide">3</div> */}
              {
              bannerList.map((item,key) => {
                return (
                  <div key={key} className="swiper-slide">
                    <img src={item.img} alt="" height="100%"/>
                  </div>
                )
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="category">
          {
            categoryList.map((item,key) => {
              return (
                <div key={key} className="item-category">
                  <div className="item-inner">
                    <img src={item.icon} alt="" height="100%"/>
                    <div>{item.name}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <SearchOption></SearchOption>
        <ShopList shopList={shopList}></ShopList>
      </div>
    )
  }
}

export default Index
