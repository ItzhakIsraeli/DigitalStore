import {ItemsListTypes} from "./itemsListTypes";

export const addItemToCart = (itemData: string) => {
    return {
        type: ItemsListTypes.ADD_ITEM_TO_CART,
        payload: itemData
    }
};