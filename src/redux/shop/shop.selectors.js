import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    evergreens: 1,
    exotics: 2,
    flowerPlants: 3,
    indoor: 4,
    outdoor: 5
}
const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam => 
    createSelector (
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    );