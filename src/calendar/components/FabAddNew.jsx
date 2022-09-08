import { useCalendarStore, useUiStore } from "../../hooks"
import { addHours } from 'date-fns';

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();
  const handleClickNew = () => {
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(),2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Varela'
      }
    });
    openDateModal();
  }
  return (
    <button className="fab btn btn-primary" onClick={handleClickNew}>
      <i className="fas fa-plus" />
    </button>
  )
}

