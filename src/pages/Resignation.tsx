import DragDropFile from "../components/DragAndDropInput.tsx/DragDropFile";
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