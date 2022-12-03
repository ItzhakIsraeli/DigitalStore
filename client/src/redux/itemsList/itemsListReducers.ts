import {ItemsListTypes} from "./itemsListTypes";

export interface ItemsState {
    ItemsList: []
}

interface actionI {
    type: string,
    payload: {
        data: string
    }
}

const initialState: ItemsState = {
    ItemsList: []
};

const itemsListReducer = (state: ItemsState = initialState, action: actionI) => {
    switch (action.type) {
        case ItemsListTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                ItemsList: [...state.ItemsList, action.payload]
            };
        default:
            return state
    }
};

export default itemsListReducer;