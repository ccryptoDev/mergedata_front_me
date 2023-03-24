import { useNavigate, Navigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

export default function WithPermissionRouter ({
  children,
  loggedNeeded = true,
  rols = [""],
  grantByRols = false,
  permissions = [""],
  grantByPermissions = false
}) {
  const history = useNavigate();
  const authPermRols = useAuth(
    permissions,
    grantByPermissions,
    rols,
    grantByRols
  );

  if (!authPermRols[2] && grantByRols && loggedNeeded) {
    history(-1);
  }

  if (!authPermRols[0] && loggedNeeded) {
    return <Navigate to="/login" />
  }

  if (!loggedNeeded && authPermRols[0]) {
    return <Navigate to="/" />
  }

  return <>{children}</>
}
