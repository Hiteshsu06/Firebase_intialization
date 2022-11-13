import { ActionTypes } from "../contants/Action-type";
export const initialState = {
    product: [],
    carts: []
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }

        case ActionTypes.INCREMENT:
            return {
                ...state,
                carts: state.carts.map(
                    el => el.id === action.payload ? { ...el, quantity: el.quantity + 1 } : el)
            }

        case ActionTypes.DECREMENT:
            return {
                ...state,
                carts: state.carts.map(
                    el => el.id === action.payload ? (el.quantity > 0 ? { ...el, quantity: el.quantity - 1 } : { ...el, quantity: el.quantity }) : el)
            }

        case ActionTypes.DELETE:
            return {
                ...state,
                carts: state.carts.filter((el) => {
                    return (el.id !== action.payload)
                })

            }
        case ActionTypes.FETCH_DATA:
            return {
                ...state,
                product: action.payload
            }

        case ActionTypes.ADD_DELETE_STATUS:
            return {
                ...state,
                product: state.product.map(
                    el => el.id === action.payload ? { ...el, add_delete: false } : el
                )
            }

        case ActionTypes.ADD_DELETE_STATUS_POST:
            return {
                ...state,
                product: state.product.map(
                    el => el.id === action.payload ? { ...el, add_delete: true } : el
                )
            }

        default:
            return state;
    }
};
