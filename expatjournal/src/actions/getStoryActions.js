import axiosWithAuth from '../utils/axiosWithAuth'

export const FETCH_SINGLE_STORY = "FETCH_SINGLE_STORY"
export const FETCH_SINGLE_STORY_SUCCESS = "FETCH_SINGLE_STORY_SUCCESS"
export const FETCH_SINGLE_STORY_FAIL = "FETCH_SINGLE_STORY_FAIL"

const fetchSingleStory = id => (dispatch) => {
    dispatch({ type: FETCH_SINGLE_STORY })

    axiosWithAuth()
    .get(`/api/stories/storyId/${id}`) 
    .then(res => {
        console.log(res.data[0])
        dispatch({ type: FETCH_SINGLE_STORY_SUCCESS, payload: res.data[0] })
    })
    .catch(err => {
        console.log(err)
        dispatch({ type: FETCH_SINGLE_STORY_FAIL, payload: "Failure to fetch a story within getStoryActions."})
    })
}

export default fetchSingleStory