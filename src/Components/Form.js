import React from 'react'
import FormHeader from "./FormHeader"
import Rectangle from './Rectangle'
import Question from "./Question"
import "../style.css"
const Form = () => {
    return (
        <div className = "form">
            <FormHeader></FormHeader>
            <Rectangle></Rectangle>
            <Question question="Select your country of residence *"/>
            <Rectangle></Rectangle>
            <Question question="Select an income year *"/>
            <Rectangle></Rectangle>
            <Question question="Enter your total income for the income year *"/>
            <Rectangle></Rectangle>
        </div>
    )
}

export default Form
