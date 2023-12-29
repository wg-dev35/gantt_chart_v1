import globalStyles from "../styles/global/global.js";
import "../styles/global/globals.css";

function Layout(props) {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

export default Layout;
