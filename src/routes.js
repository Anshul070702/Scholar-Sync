import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import CollaborationWorkspace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import CollabPost from "views/admin/collabpost";
import CreateAccount from "views/auth/CreateAccount";

// Auth Imports
import SignIn from "views/auth/SignIn";

// FontAwesome Icons Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

// Icon Imports
import { MdHome, MdPerson, MdLock } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

/* */
const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Collab Workspace",
    layout: "/admin",
    path: "collaboration-workspace",
    icon: <FaHandshake className="h-6 w-6" />,
    component: <CollaborationWorkspace />,
    secondary: true,
  },

  {
    name: "Collab Post",
    layout: "/admin",
    path: "collab-post",
    icon: <FontAwesomeIcon icon={faSquarePlus} className="h-6 w-6" />,
    component: <CollabPost />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Create Account",
    layout: "/auth",
    path: "create-account",
    icon: <MdLock className="h-6 w-6" />,
    component: <CreateAccount />,
  },
];
export default routes;
