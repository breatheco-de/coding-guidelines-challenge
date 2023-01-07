import React from "react";

export default function Html({ children, style={} }) {
  return <div style={{ paddingLeft: "30px", ...style }}>{children}</div>;
}
