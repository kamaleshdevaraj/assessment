import { Routes, Route } from "react-router-dom";
import { RouteConst } from "./config";
import Login from "../Components/Login";
import Signup from "../Components/SignUp";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={RouteConst.login} element={<Login />} />
      <Route path={RouteConst.SignUp} element={<Signup />} />
    </Routes>
  );
}
