import React from 'react'
import s from './AnswerList.module.scss'

function AnswersList(props) {

    console.log(props.question[1])

    let onClickHandler = (QuestId) => {
        console.log(QuestId)
    }   

    let questId = props.question[0]


    return (
        <>
            <p>
                <span>
                    <strong>{questId.idQuest}. </strong>
                    {questId.question}
                </span>
            </p>
            <ul className={s.ulMain}>
            {questId.answers.map((ansver, index) => {
                return <li onClick={() => {onClickHandler(index)}} key={index}><a href='/experiments'>{ansver}</a></li>
            })}
        </ul>
        </>
    )
}
export default AnswersList