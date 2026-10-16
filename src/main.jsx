import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import { AuthLayout, Home, Login, Signup } from "./components/index.jsx";
import { BloodRequestForm } from "./pages/BloodRequest";
import {BloodRequest} from "./pages/BloodRequest/BloodRequest.jsx"
import { DonationOfferForm } from "./pages/DonationOffer/DonationOfferForm.jsx";
import {DonationOffer} from "./pages/DonationOffer/DonationOffer.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "blood-requests",
        element: (
          <AuthLayout authentication={true}>
            <BloodRequest />
          </AuthLayout>
        ),
      },
      {
         path: "blood-requests/create",
        element: (
          <AuthLayout authentication={true}>
            <BloodRequestForm/>
          </AuthLayout>
        ),
      },
      {
        path: "donations/",
        element: (
          <AuthLayout authentication={true}>
            <DonationOffer />
          </AuthLayout>
        ),
      },
      {
        path: "donations/create",
        element: (
          <AuthLayout authentication={true}>
            <DonationOfferForm />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
