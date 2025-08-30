import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar />
      {user && <div>{children}</div>}
    </div>
  );
}

export default DashboardLayout;
