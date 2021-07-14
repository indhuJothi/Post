import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {id:'1',title:'First Post',content:'Hello'},
    {id:'2',title:'second Post',content:"lets's post more comments"}
]

const postsSlice=createSlice({
    name:'posts',
    initialState,
    reducers:{}
})

export default postsSlice.reducer