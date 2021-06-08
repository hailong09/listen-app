import { createSlice } from '@reduxjs/toolkit'

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState:{
        tracks: {
            toptracks: [],
            recentPlayedTracks:[],
            categoryTracks:[],
            currentPlayTrack: ""
        },
        artists:[],
        
    },
    reducers:{

        getToptracks: (state, action) => {
            state.tracks.toptracks = action.payload
        },
        getRecentPlayedTracks: (state, action) => {
            state.tracks.recentPlayedTracks = action.payload
        },
        getTopArtists: (state, action) => {
            state.artists = action.payload
        },
        getCurrentPlayTrack: (state, action) => {
            state.tracks.currentPlayTrack = action.payload
        },
        getCategoryTracks: (state, action) => {
            state.tracks.categoryTracks = action.payload
        }

    }
})

export const {
    getTopArtists, 
    getToptracks, 
    getRecentPlayedTracks, 
    getCurrentPlayTrack,
    getCategoryTracks

} = tracksSlice.actions


export const topTrackSelector = state => state.tracks.tracks.toptracks
export const recentPlayedSelector = state => state.tracks.tracks.recentPlayedTracks
export const topArtistSelector = state => state.tracks.artists
export const currentPlayTrack = state => state.tracks.tracks.currentPlayTrack
export const categoryTrackSelector = state => state.tracks.tracks.categoryTracks
export default tracksSlice.reducer