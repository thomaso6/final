import React from 'react';
import Panda from './Panda';
import Grizzly from './Grizzly';
import Black from './Blackbear';
import Sun from './Sunbear';
import Sloth from './Slothbear';
import Andian from './Andian';
import Asiatic from './Asiatic';
import Polar from './Polar';
export default function Images(){
    return (
    <body>
      <h3 id="image-title">Here we can look at all the bears we want</h3>
      <p id="image-text">Please enjoy these bears with much enthusiasm:</p>
      <Panda></Panda><br></br>
      <Grizzly></Grizzly><br></br>
      <Black></Black><br></br>
      <Sun></Sun><br></br>
      <Sloth></Sloth><br></br>
      <Andian></Andian><br></br>
      <Asiatic></Asiatic><br></br>
      <Polar></Polar><br></br>

    </body>
    
    )
    
  }