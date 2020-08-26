import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import editStory from '../actions/editStoryActions'
import fetchSingleStory from '../actions/getStoryActions'

const FormStyled = styled.form`

display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

label {
    font-size: 1.5rem;
    font-style: italic;
}

 input {
     margin: 1% 0%;
 }

` 

const initialStory = {
    title: "",
    location: "",
    body: "",
}

const StoryEdit = props => {
    const [ story, setStory ] = useState(initialStory)
    const { id } = useParams()

    useEffect( () => {
        props.fetchSingleStory(1)
        console.log("LOOK", props.body)
    }, [])


    const handleStoryChanges = e => {
        setStory({
            ...story,
            [e.target.name]: e.target.value
        })
    }

    const editedStory = {
        ...story
    }

    const onSubmit = e => {
        e.preventDefault()
        props.editStory(editedStory)
        setStory(initialStory)
    }

    return (
        <section>
            <FormStyled onSubmit={onSubmit}>

                <label>Title:&nbsp;
                    <input
                    name="title"
                    type="text"
                    placeholder="Title..."
                    value={story.title}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>Location:&nbsp;
                    <input
                    name="location"
                    type="text"
                    placeholder="Where it happened..."
                    value={story.location}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>The Story:&nbsp;
                    <input 
                    name="body"
                    type="text"
                    placeholder="Your story..."
                    value={story.body}
                    onChange={handleStoryChanges}
                    />
                </label>
                <button type="submit">Submit</button>
            </FormStyled>
        </section>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    console.log(state.body[0])
    return {

        isLoading: state.isLoading,
        error: state.error,

        //from api
        body: state.body[0],
    }
}

export default connect(mapStatetoProps, {fetchSingleStory, editStory})(StoryEdit)