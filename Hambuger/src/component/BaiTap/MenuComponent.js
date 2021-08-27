import React, { useState } from 'react'
// import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { resetAction, tangGiamSoLuong, thanhToanAction } from "../../redux/actions/BurgerActions";
export default function MenuComponent() {
    const { menu, total, burger } = useSelector(state => state.BurgerReducer)

    const [isReset, setIsReset] = useState(false)
    const [isTongTien, setIsTongTien] = useState(true)

    const dispatch = useDispatch()

    const handleClick = (key, tangGiam) => {
        dispatch(tangGiamSoLuong(key, tangGiam))
        setIsTongTien(false)
    }

    const thanhToan = () => {
        setIsReset(true)
        setIsTongTien(true)
        dispatch(thanhToanAction())
    }

    const renderThanhToan = () => {
        let middleValue = 0;

        for (let key in burger) {
            middleValue += burger[key]
        }

        
    }

    const renderMenu = () => {
        let bodyMenu = []
        for (let key in menu) { 
            bodyMenu.push (
                <tr key={Math.random()}>
                    <td>{key}</td>
                    <td>
                        {burger[key] ? <button style={{ width: "30px" }} className="btn btn-danger mr-3" onClick={ () => handleClick(key, 0) }>-</button> : <button style={{ width: "30px" }} className="btn btn-danger mr-3" disabled onClick={ () => handleClick(key, 0) }>-</button>}
                        <span style={{display: "inline-block", width:"10px"}}>{burger[key]}</span>
                        <button style={{ width: "30px" }} className="btn btn-success ml-3" onClick={ () => handleClick(key, 1) }>+</button>
                    </td>
                    <td>{menu[key]}</td>
                </tr>
            )
        }
        
        return bodyMenu.map(item => {
            return item
        })

    }


    const reset = () => {
        setIsTongTien(true)
        setIsReset(false)
        dispatch(resetAction())
    }

    return (
        <div className="text-center">
            <h2 className="mb-5">Chọn thức ăn</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Thức ăn</th>
                        <th></th>
                        <th>Giá</th>
                    </tr>
                </thead>

                <tbody>
                    {renderMenu()}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th> {isTongTien ? <p>Tổng tiền</p> : <p className="text-muted">Tổng tiền</p>}</th>
                        <th>{isTongTien ? <p>{total}</p> : <p className="text-muted">{total}</p>}</th>
                    </tr>
                </tfoot>
            </table>
            
            <div className="text-right mr-5">
                {isReset && <button style={{marginRight: "20px"}} className="btn btn-danger" onClick={reset}>RESET</button>}
                {renderThanhToan()}
                <button className="btn btn-primary" onClick={thanhToan}>THANH TOÁN</button>
             </div>
        </div>
    )
}