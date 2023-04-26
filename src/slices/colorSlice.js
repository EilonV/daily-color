import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    color: '',
    yetsterdaysColor: '',
    galleryPics: 'some pics idk'
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        recolor: (state, action) => {
            state.color = action.payload
        },
        changeGallery: (state, action) => {
            state.galleryPics = action.payload
        }
    }
})

export const { recolor, changeGallery } = colorSlice.actions
export default colorSlice.reducer
