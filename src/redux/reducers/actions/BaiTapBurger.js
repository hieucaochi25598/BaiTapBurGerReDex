import { TANG_TIEN, GIAM_TIEN } from "../constants/BaiTapBurger"

export const tangTienAction = (ma) => {
    return {
        type: TANG_TIEN,
        data: ma
    }
}

export const giamTienAction = (ma) => {
    return {
        type: GIAM_TIEN,
        data: ma
    }
}