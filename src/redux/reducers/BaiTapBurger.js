import { TANG_TIEN, GIAM_TIEN } from "./constants/BaiTapBurger";

const initialState = {
    burgerState: [
        { ma: 'salad', soLuong: 1 },
        { ma: 'cheese', soLuong: 1 },
        { ma: 'beef', soLuong: 1 }
    ],
    menu: [
        { ma: 'salad', gia: 10 },
        { ma: 'cheese', gia: 10 },
        { ma: 'beef', gia: 10 }
    ],
    total: 30
}

const baiTapBurgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TANG_TIEN:
            {
                const dsMenu = [...state.menu]
                const dsBurger = [...state.burgerState]
                const index = dsMenu.findIndex(item => item.ma === action.data)
                if (index !== -1) {
                    if (state.total >= 30) {
                        state.total += 10
                        dsMenu[index].gia += 10
                        dsBurger[index].soLuong += 1
                        console.log(dsBurger)
                    }
                }
                return { ...state, menu: dsMenu, burgerState: dsBurger }
            }
        case GIAM_TIEN:
            {
                const dsMenu = [...state.menu]
                const dsBurger = [...state.burgerState]
                const index = dsMenu.findIndex(item => item.ma === action.data)
                if (index !== -1) {
                    if (dsMenu[index].gia > 10) {
                        dsMenu[index].gia -= 10
                        state.total -= 10

                        dsBurger[index].soLuong -= 1
                        console.log(dsBurger)

                    }
                }
                return { ...state, menu: dsMenu, burgerState: dsBurger }
            }
        default:
            return state;
    }
}
export default baiTapBurgerReducer;