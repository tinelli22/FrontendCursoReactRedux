const INITIAL_VALUE = { selected: ''}

export default (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, selected: action.payload }
        default:
            return state
    }
}