import React from 'react'
import s from './AnswerList.module.scss'

function AnswersList(props) {

  const questId = props.question[props.activeQU]

  if (questId) {
    return (
      <>
        <p>
          <span className={s.questSpan}>
            <strong>{questId.idQuest}.</strong>
            {questId.question}
          </span>
        </p>
        <ul className={s.ulMain}>
          {questId.answers.map((ansver, index) => {
            return <li onClick={() => { props.ansverClick(index) }} key={index}><span>{ansver}</span></li>
          })}
        </ul>
      </>
    )
  }

  console.log(props.question)
  const questAnsver = props.question.map((obj, index) => {

    const ansverListLiner = obj.answers.map((elem, nun) => {
      const trueLiClass = obj.trueAnsver === nun ? s.liTrueAnver : s.liFalseAnver
      return <li className={trueLiClass} key={nun + 'list'}>{elem}</li>
    })

    const ansverList = obj.click
      ? <div className={s.divUl}><ul className={s.ulAnsver}>{ansverListLiner}</ul></div> : ''
    const ansver = obj.right ? <span className={s.colorGreen}><i className="fa fa-check" aria-hidden="true" /></span>
      : <span className={s.colorRed}><i className="fa fa-times" aria-hidden="true"></i></span>

    return <div onClick={() => { props.resultClick(index) }} className={s.flexDiv}>
             <div className={s.icon}>{ansver}</div>
             <div className={s.trueAnsver} key={index + 'hey'}>
               <span>{obj.question}</span>
               {ansverList}
            </div>
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
export default AnswersList
