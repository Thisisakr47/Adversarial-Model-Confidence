import React from 'react'

export default function GridImages(props) {
  return (
    <div class="row">
        <div class="col">
            <img src={props.l1} alt="MNIST" height="200" />
        </div>
        <div class="col">
            <img src={props.l2} alt="MNIST" height="200" />
        </div>
        <div class="col">
            <img src={props.l3} alt="MNIST" height="200" />
        </div>
    </div>
  )
}
