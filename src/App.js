import Navbar from "./components/navbar";
import MainLayout from "./layout/main-layout";
import LandingPage from "./pages/landing-page";
import HamburgerMenu from "./components/navbar-components/hamburger-menu";
import { Route, Routes } from "react-router-dom";
import JobVacancy from "./pages/job-vacancy-page";
import Login from "./pages/login-pages";
import Register from "./pages/register-page";
import Dashboard from "./pages/dashboard-page";
import JobTable from "./components/dashboard-components/job-table";
import Profile from "./components/dashboard-components/profile-component";
import ChangePassword from "./components/dashboard-components/change-password-component";
import JobForm from "./components/dashboard-components/job-form-component";
import JobVacancyDetail from "./components/dashboard-components/job-vacancy-detail-component";
import Auth from "./layout/auth";
import NotFound from "./pages/not-found";

function App() {
  return (
    <MainLayout>
      <Navbar />
      <HamburgerMenu />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='job-vacancy' element={<JobVacancy />} />
        <Route path='job-vacancy/:id' element={<JobVacancyDetail />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route
          path='dashboard'
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }>
          <Route path='list-job-vacancy' element={<JobTable />} />
          <Route path='profile' element={<Profile />} />
          <Route path='change-password' element={<ChangePassword />} />
        </Route>
        <Route path='dashboard/list-job-vacancy/create' element={<JobForm />} />
        <Route
          path='dashboard/list-job-vacancy/:id/edit'
          element={<JobForm />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
