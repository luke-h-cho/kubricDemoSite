import React, {useState} from 'react';
import kubric from '../assets/kubric-colored-skeleton.png'

const Filler = (props) => {
  return (
    <div id="filler">
      <img src={kubric}></img>
    </div>
  )
}

export default Filler;