import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar/';
import { useAuthStore } from '../hooks';
import { useEffect } from "react";


export const AppRouter = () => {  
  const { status, checkAuthToken } = useAuthStore();
  const authStatus = 'not-authenticated'
  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return <h3>Cargando....</h3>
  }
  return (
    <>
      <Routes>
        {
          (status == 'not-authenticated')
            ? <Route path="/auth/*" element={<LoginPage></LoginPage>} />
            : <Route path="/*" element={<CalendarPage></CalendarPage>} />
        }

        <Route path='/*' element={<Navigate to="auth/login"></Navigate>}></Route>

      </Routes>
    </>
  )
}

