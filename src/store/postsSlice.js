import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const postsAdapter = createEntityAdapter({
    // sortComparer: (a, b) => b.date.localeCompare(a.date)
})

// we don't need to add initial states. it will be created in normalization database
// Normalized data: This is typically done by storing collections as objects with the key of an id
const initialState = postsAdapter.getInitialState()

// injectEndpoints -> let's you import endpoints in that builder fn
export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/feed/posts',
            transformResponse: responseData => {
                return postsAdapter.setAll(initialState, responseData.posts);
            },
            // providesTags: only for query endpoints. map provides id tags for each post item. 
            // For more granular control over the provided data, provided tags can have an associated id. This enables a distinction between 'any of a particular tag type', and 'a specific instance of a particular tag type'.
            // In order to provide stronger control over invalidating the appropriate data, you can use an arbitrary ID such a 'LIST' for a given tag. 
            providesTags: (result, error, arg) => [
                { type: 'Post', id: "LIST" },
                ...result.ids?.map(id => ({ type: 'Post', id }))
            ]
        })
    })
})


export const {
    useGetPostsQuery
} = extendedApiSlice

// returns the query result object
export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select()

// Creates memoized selector
const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
    // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => selectPostsData(state) ?? initialState)