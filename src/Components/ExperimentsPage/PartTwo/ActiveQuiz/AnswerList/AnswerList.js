import React from 'react'
import s from './AnswerList.module.scss'

function AnswersList(props) { 

    let questId = props.question[props.activeQU]

    if(questId) {
        return (
            <>
                <p>
                    <span className={s.questSpan}>
                        <strong>{questId.idQuest}. </strong>
                        {questId.question}
                    </span>
                </p>
                <ul className={s.ulMain}>
                {questId.answers.map((ansver, index) => {
                    return <li onClick={() => {props.ansverClick(index)}} key={index}><span>{ansver}</span></li>
                })}
            </ul>
            </>
        )
    } else {
        console.log(props.question)
        const questAnsver = props.question.map((obj, index) => {
            let ansver = obj.right ? <span className={s.colorGreen}><i className="fa fa-check" aria-hidden="true"></i></span>
             : <span className={s.colorRed}><i className="fa fa-times" aria-hidden="true"></i></span>
            return <div className={s.trueAnsver} key={index + 'hey'}>
                <div className={s.icon}>{ansver}</div>
                {obj.question}
            </div>
        })
        return (
        <div>
            <div className={s.calcAnsver}>
                Всего правильных ответов: <strong>{props.calcTrueAnsver}</strong>
            </div>
            <div>
                {questAnsver}
            </div>
        </div>
        )
    }

}
export default AnswersList