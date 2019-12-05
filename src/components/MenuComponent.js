import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangTienAction, giamTienAction } from '../redux/reducers/actions/BaiTapBurger'
class MenuComponent extends Component {
    render() {
        return (
            <div>
                <h1>Chọn thức ăn</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Giá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menu.map((menu, index) => (
                            <tr key={menu.index}>
                                <td scope="row">{menu.ma}</td>
                                <td>
                                    <button className="btn btn-success mr-3" onClick={() => this.props.giamTien(menu.ma)}>-</button>
                                    <button className="btn btn-danger" onClick={() => this.props.tangTien(menu.ma)} >+</button>
                                </td>
                            <td>{menu.gia}</td>
                            </tr>
                            
                        ))}
                        <p>Total: {this.props.total}</p>
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    menu: state.baiTapBurger.menu,
    total: state.baiTapBurger.total
})

const mapDispatchToProps = dispatch => ({
    tangTien: (ma) => dispatch(tangTienAction(ma)),
    giamTien: (ma) => dispatch(giamTienAction(ma))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
