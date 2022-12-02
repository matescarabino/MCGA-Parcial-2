// import React, { useEffect } from 'react';
// import { Redirect, Switch, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// // import { tokenListener } from 'helpers/firebase';

// const Layout = () => {
//   //   useEffect(() => {
//   //     tokenListener();
//   //   }, []);

//   return (
//       <div>
//         <Switch>
//           <PrivateRoute path="/employees/" role="EMPLOYEE" component={EmployeeRoutes} />
//           <PrivateRoute exact path="/admins" role="ADMIN" component={AdminRoutes} />
//           <Route exact path="/projects" component={ProjectsRoutes} />
//           <Route exact path="/timesheets" component={TimeSheetsRoutes} />
//           <Route exact path="/tasks" component={TasksRoutes} />
//           <Route path="/auth" component={AuthRoutes} />
//           <Redirect to="/login" />
//           <Route exact path="/">
//             <Redirect to="/home" />
//           </Route>
//         </Switch>
//       </div>
//   );
// };

// export default Layout;
