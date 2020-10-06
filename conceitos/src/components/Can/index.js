import { connect } from "react-redux";

function checkAuth({ roles, permissions }, checkRole, checkPermission) {
  if (checkRole && !roles.include(checkRole)) {
    return false;
  }

  if (checkPermission && !permissions.include(checkPermission)) {
    return false;
  }

  return true;
}

const Can = ({ children, auth, checkRole, checkPermission }) =>
  typeof children === "function"
    ? children(checkAuth(auth, checkRole, checkPermission))
    : checkAuth(auth, checkRole, checkPermission);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Can);
