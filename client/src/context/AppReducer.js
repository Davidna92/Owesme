export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_DEBT':
            return {
                ...state,
                debts: state.debts.filter(debt => debt.id !== action.payload)
            }
            case 'ADD_DEBT':
                return {
                    ...state,
                    debts: [action.payload,...state.debts]
                }
        default:
            return state;
    }
}