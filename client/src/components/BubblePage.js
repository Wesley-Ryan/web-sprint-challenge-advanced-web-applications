import React, { useState, useEffect } from "react";
import axios from "axios";
import {axiosWithAuth, BASE_URL} from '../utils'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getBubbles = () => { 
    axiosWithAuth().get(`${BASE_URL}/api/colors`)
    .then((response) => { 
         setColorList(response.data)
    })
    .catch((error) => { 
        console.log("There was an error retreving your bubbles", error)
    })
}

  useEffect(() => { 
     getBubbles()
  }, [])


  return (
    <>
    <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      
    </>
  );
};

export default BubblePage;
