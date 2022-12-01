import React from "react";
import Landing from "./layout/Landing";
import NotFound from "./Pages/NotFound";
import Homepage from "./layout/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrivateRoutes, LoginRoutes } from "./routes/PrivateRoutes";
import Dashboard from "./Pages/Dashboard";
import Masterlist from "./Pages/Masterlist/Index";
import Store from "./Pages/Store";
import Members from "./Pages/Members";
import Reports from "./Pages/Reports";
import HistoryLogs from "./Pages/HistoryLogs";
import DataMigration from "./Pages/DataMigration";
import ActivityLogs from "./Pages/ActivityLogs";
import RewardPoints from "./Pages/RewardPoints";

// Masterlist
import UserAccounts from "./Pages/Masterlist/UserAccounts";
import BusinessModel from "./Pages/Masterlist/BusinessModel";
import BusinessOperation from "./Pages/Masterlist/BusinessOperation";
import AddUser from "./Pages/Masterlist/Add/AddUser";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "login",
    element: <LoginRoutes />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "masterlist",
            element: <Masterlist />,
            children: [
              {
                path: "user-accounts",
                element: <UserAccounts />,
                children: [
                  {
                    path: "add-user",
                    element: <AddUser />,
                  },
                ],
              },
              {
                path: "business-operation",
                element: <BusinessOperation />,
              },
              {
                path: "business-model",
                element: <BusinessModel />,
              },
            ],
          },
          {
            path: "store",
            element: <Store />,
          },
          {
            path: "members",
            element: <Members />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
          {
            path: "history",
            element: <HistoryLogs />,
          },
          {
            path: "data-migration",
            element: <DataMigration />,
          },
          {
            path: "activitylogs",
            element: <ActivityLogs />,
          },
          {
            path: "rewards",
            element: <RewardPoints />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    // <Routes>
    //   <Route element={<PrivateRoutes />}>
    //     <Route path="/" element={<Homepage />} exact>
    //       <Route index element={<Dashboard />} exact />
    //       <Route path="masterlist" element={<Masterlist />} exact />
    //     </Route>
    //   </Route>
    //   <Route path="login" element={<Landing />} />
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
    <RouterProvider router={router} />
  );
}

export default App;
