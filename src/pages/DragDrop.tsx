import './App.css';
import DragDropFile from '../components/DragAndDropInput.tsx/DragDropFile';

function DragDrop() {
 
    const onFileChange = (files: any) => {
        console.log(files);
    }

    return (
        <div className="box">
            <h2 className="header">
                React drop files input
            </h2>
          <div className='justify-center center-items flex'>
          <DragDropFile
                onFileChange={(files:any) => onFileChange(files)}
            />
          </div>
        </div>
    );
}

export default DragDrop