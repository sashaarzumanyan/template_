const initialState = {
    pageTitle:null,
    paragraph:null,
    image1:null,
    image2:null
}

export const singlePageInfo = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PAGE_PROPS":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}