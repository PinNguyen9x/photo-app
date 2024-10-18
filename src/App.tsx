import { AppDispatch } from "@app/store";
import { getMe } from "@app/userSlice";
import Header from "@components/Header";
import Loading from "@components/Loading";
import SignIn from "@features/Auth/Page/SignIn";
import firebaseInstance from "@firebaseConfig";
import { unwrapResult } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";

const Photo = React.lazy(() => import("./features/Photo"));
const NotFound = React.lazy(() => import("./components/NotFound"));
export const useAppDispatch = () => useDispatch<AppDispatch>();

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(
      firebaseInstance.auth,
      async (user) => {
        if (!user) {
          // user logs out, handle something here
          console.log("User is not logged in");
          return;
        }

        // Get me when signed in
        // const action = getMe();
        try {
          const actionResult = await dispatch(getMe());
          const currentUser = unwrapResult(actionResult);
          console.log("Logged in user: ", currentUser);
        } catch (error) {
          console.log("Failed to login ", error.message);
          // show toast error
        }
      }
    );

    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className="photo-app">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/photos" />} />
            <Route path="/photos/*" element={<Photo />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
