import create from 'zustand'

const useStore = create((set, get) => ({
  cartItems: 0,
  addItem: () => set((state) => ({ cartItems: state.cartItems + 1 })),
  removeItem: () => set((state) => ({ cartItems: state.cartItems - 1 })),
  clearCart: () => set((state) => ({ cartItems: 0 }))
}))

export default useStore
