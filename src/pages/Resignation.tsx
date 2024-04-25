// import { Box, IconButton, Modal } from "@mui/material"
// import { useState } from "react";
// import SendIcon from "@mui/icons-material/Send";
// import BackgroundLetterAvatars from "../components/Avatar";

import DragDropFile from "../components/DragAndDropInput.tsx/DragDropFile";


// function Resignation() {


//   return (

//   )
// }

// export default Resignation




function Resignation() { 
  
  const onFileChange = (files: any) => {
      console.log(files);

  }

  return (

  
   <div className="box">
         	
              <div className='justify-center center-items flex'>
                <DragDropFile
                    onFileChange={(files:any) => onFileChange(files)}
                    />
              </div>

            </div>
  )
}

export default Resignation