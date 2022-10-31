import { createSelector } from '@reduxjs/toolkit';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(selectShop, shop => shop.collections)

export const selectCollectionsForPreview = createSelector(selectShopCollections, collections => Object.values(collections))