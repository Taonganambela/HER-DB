import RequisitionItem from '../components/RequisitionItem'
import { Link } from 'react-router-dom'

function Requisitions() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full">
    <div className="flex ml-auto items-center justify-between w-full mb-4">
      <div className="inline-block">
        <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
          Requisitions
        </h1>
      </div>

      <div className=" mb-2 ml-auto">
        <Link to="requisitionCreation">
          <button className="bg-green-500 text-white h-9 w-32 rounded-md">
            Add New
          </button>
        </Link>
      </div>
    
    </div> 
    <div>
        <RequisitionItem />
        <RequisitionItem />
        <RequisitionItem />
        <RequisitionItem />
     </div>
    </div>
  )
}

export default Requisitions