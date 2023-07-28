import React from 'react'
import './Cards.css'

const Cards = ({ ...rest }) => {
  return (
    <>
      <div className="maincontainer">
        <article className='thecard'>
          <div className="thefront">
            <header className="card-image">
              <div className={`point-status ${rest.status}`} />
              <img src={rest.urlImage} alt="" />
            </header>
            <div className="card_front-content">
              <ul className='content'>
                <li className='title_name'><span>{rest.name}</span></li>
                <li className='title_position'><span>position: </span>{rest.position}</li>
                <li className='title_team'><span>team: </span>{rest.team}</li>
              </ul>
            </div>
          </div>
          <div className="theback">
            <div className="content-back">
              <h3 className='title-back-card'>computer specification</h3>
              <ul>
                <li>{rest.model}</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </article>
      </div>


    </>
  )
}

export default Cards