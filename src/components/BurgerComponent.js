import React, { Component } from 'react'
import '../css/cssBurger.css'
import {connect} from 'react-redux'
class BurgerComponent extends Component {
    renderLoaiMonAn = (loai) => {
        let contentLoaiMonAn = []
        let loaiObject = this.props.mangBurger.find(bg => bg.ma === loai)
        for(let i = 0; i < loaiObject.soLuong; i++)
        {
            contentLoaiMonAn.push(
                <div className={loaiObject.ma}></div>
            )
        }
        return contentLoaiMonAn
    }
    render() {
        return (
            <div>
                <div className="breadTop"></div>
                    {this.renderLoaiMonAn('salad')}
                    {this.renderLoaiMonAn('cheese')}
                    {this.renderLoaiMonAn('beef')}
                <div className="breadBottom">
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    mangBurger: state.baiTapBurger.burgerState
})

export default connect(mapStateToProps)(BurgerComponent)
