import { create } from "zustand"
const useItems = create((set) => ({
  cartItems: [],
  addItems: (item) =>
    set((state) => ({
      cartItems: [...state.cartItems, item],
    })),
  deleteItem: (index) =>
    set((state) => ({
      cartItems: state.cartItems.filter((product, i) => i != index),
    })),
  increaseQuantity: (itemId, itemSize, count = 1) =>
    set((state) => ({
      cartItems: state.cartItems.map((product) => {
        if (product.id === itemId && product.size === itemSize) {
          product.quantity += count
        }
        return product
      }),
    })),
  decreaseQuantity: (itemId, itemSize) =>
    set((state) => ({
      cartItems: state.cartItems.map((product) => {
        if (product.id === itemId && product.size === itemSize) {
          product.quantity -= 1
        }
        return product
      }),
    })),
}))

export default useItems
