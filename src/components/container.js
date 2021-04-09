import React from "react"
import * as containerStyles from "./container.module.css"
export default function Container({ children }) { //Will sorta wrap around the html to have nice formatting
  return <div className={containerStyles.container}>{children}</div>
}