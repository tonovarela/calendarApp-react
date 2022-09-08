
import { useCalendarStore } from '../../hooks';


export const FabDelete = () => {
  const  { startDeleteEvent,activeEvent ,hasEventSelected } = useCalendarStore()

  const handleDeleteClick = async() => {
    if (activeEvent==null){
      console.log("No hay activeEvent");
      return;
    }
     await startDeleteEvent();
  }
  return (
     
    <button style ={{display:hasEventSelected?'':'none'}} className="fab-danger btn btn-danger" onClick={handleDeleteClick}>
      <i className="fas fa-trash" />
    </button>
  )
}

