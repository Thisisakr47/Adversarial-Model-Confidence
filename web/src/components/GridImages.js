import React from 'react'

export default function GridImages(props) {
  return (
    <div className="row justify-content-md-center text-center">
        <div className="col m-1">
            <img src={require(`../images/${props.dataset}/Left/${props.type}/${props.index + 0}.png`)} onClick={event => props.update(event, `${props.type}/${props.index + 0}.png`)} alt="Dataset" height="50"/>
        </div>
        <div className="col m-1">
            <img src={require(`../images/${props.dataset}/Left/${props.type}/${props.index + 1}.png`)} onClick={event => props.update(event, `${props.type}/${props.index + 1}.png`)} alt="Dataset" height="50"/>
        </div>
        <div className="col m-1">
            <img src={require(`../images/${props.dataset}/Left/${props.type}/${props.index + 2}.png`)} onClick={event => props.update(event, `${props.type}/${props.index + 2}.png`)} alt="Dataset" height="50"/>
        </div>
    </div>
  )
}
