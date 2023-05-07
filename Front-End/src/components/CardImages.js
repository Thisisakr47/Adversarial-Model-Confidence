import React from 'react'

export default function CardImages(props) {
  return (
    <div className={`card justify-content-${props.align} d-flex flex-wrap border-0`} >
        <img src={require(`../images${props.path}`)} style={{display: props.valid}} className="card-img-top" alt="Plots" height={props.height}/>
        {props.body}
    </div>
  )
}

CardImages.defaultProps = {
    ind: '0',
    height: 150,
    body: 'Enter Title Here',
    valid: "block",
    align: "center"
}
