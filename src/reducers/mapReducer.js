const mapReducer = (state, action) => {
    const { type, data } = action
    switch (type) {
        case 'add_marker':
            return {...state, markers: [...state.markers, data.clicked]}
        default:
            return {...state}
    }
}

export default mapReducer