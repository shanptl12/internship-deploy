import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Layout.scss";

import Navbar from "../../components/Navbar/Navbar";
import Sidenav from "../../components/Sidenav";
import { actions } from "../../store/reducers/runtime";

const Layout = ({
  children,
  contentClassName,
  sidebarOpen,
  noSidebar = false,
  noPadding = false,
  backbutton,
  menu,
  logo,
}) => {
  const containerCx = classnames("layout-container", {
    "is-sidebar-open": sidebarOpen,
    "no-sidebar": noSidebar,
    "no-padding": noPadding,
  });
  const contentCx = classnames("layout-content", contentClassName);

  return (
    <div className={containerCx}>
      <div className="layout-header">
        <Navbar backbutton={backbutton} menu={menu} logo={logo} />
      </div>
      {sidebarOpen && <div className="sidebar-backdrop" onClick={actions.closeSidebar} />}
      {!noSidebar && (
        <div className="layout-sidebar">
          <Sidenav onSidebarClose={actions.closeSidebar} />
        </div>
      )}
      <div className={contentCx}>{children}</div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contentClassName: PropTypes.string,

  sidebarOpen: PropTypes.bool.isRequired,
  noSidebar: PropTypes.bool,
  noPadding: PropTypes.bool,
};

export default Layout;
