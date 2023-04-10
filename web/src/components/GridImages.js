import React from 'react'

function importAll(r) {
	let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
	return images
}


export default function GridImages(props) {
  const images = importAll(require.context(`../images/MNIST/FGSM/10/`, false, /\.(png|jpe?g|svg)$/));
  // console.log(images)
  // console.log(props.l1)
  return (
    <div className="row">
        <div className="col">
            <img src={props.l1+"/"+props.index} alt="MNIST" height="80"/>
        </div>
        <div className="col">
            <img src={props.l2+"/"+props.index} alt="MNIST" height="80"/>
        </div>
        <div className="col">
            <img src={props.l3+"/"+props.index} alt="MNIST" height="80"/>
        </div>
    </div>
  )
}
