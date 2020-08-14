/*!

=========================================================
* Now UI Dashboard PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {DoctorList, DoctorProfile} from './components/Doctors';
import {ProfilePage} from './components/User';

let routes = [
  {
    path: "/doctors",
    name: "Doctors",
    icon: "now-ui-icons design_app",
    component: DoctorList,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "now-ui-icons design_app",
    component: ProfilePage,
    layout: "/admin",
    hidden: true
  },
  {
    path: "/doctor/:doctorId",
    name: "Doctor",
    icon: "now-ui-icons design_app",
    component: DoctorProfile,
    layout: "/admin",
    hidden: true
  }
];

export default routes;
