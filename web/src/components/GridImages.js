import React from 'react'

export default function GridImages(props) {
  return (
    <div className="row justify-content-md-center text-center">
        <div className="col border border-1 m-1">
            <img src={require(`../images/MNIST/Left/${props.index + 0}.png`)} onClick={event => props.update(event, `${props.index + 0}.png`)} alt="Dataset" height="50"/>
        </div>
        <div className="col border border-1 m-1">
            <img src={require(`../images/MNIST/Left/${props.index + 1}.png`)} onClick={event => props.update(event, `${props.index + 1}.png`)} alt="Dataset" height="50"/>
        </div>
        <div className="col border border-1 m-1">
            <img src={require(`../images/MNIST/Left/${props.index + 2}.png`)} onClick={event => props.update(event, `${props.index + 2}.png`)} alt="Dataset" height="50"/>
        </div>
    </div>
  )
}
