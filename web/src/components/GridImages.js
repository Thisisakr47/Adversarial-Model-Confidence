import React from 'react'

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}

const updatePath = (event, param) => { 
  console.log("This Works!!")
}

export default function GridImages(props) {
  const images = importAll(require.context(`../images/MNIST/Left`, false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="row justify-content-md-center text-center">
        <div className="col">
            <img src={images[`${props.index + 0}.png`]} onClick={event => updatePath(event, props.path)} alt="MNIST" height="80"/>
        </div>
        <div className="col">
            <img src={images[`${props.index + 1}.png`]} onClick={event => updatePath(event, props.path)} alt="MNIST" height="80"/>
        </div>
        <div className="col">
            <img src={images[`${props.index + 2}.png`]} onClick={event => updatePath(event, props.path)} alt="MNIST" height="80"/>
        </div>
    </div>
  )
}
