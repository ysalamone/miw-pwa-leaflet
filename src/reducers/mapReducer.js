import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const mapReducer = (state, action) => {
    const { type, data } = action
    switch (type) {
        case 'add_marker':
            if(navigator.vibrate) navigator.vibrate(200);
            return {...state, markers: [...state.markers, { id: generateUniqueID(), latlng: data.clicked } ]}
        case 'delete_marker':
            return {...state, markers: [...state.markers.filter(marker => marker.id !== data.selected)]}
        default:
            return {...state}
    }
}

export default mapReducer