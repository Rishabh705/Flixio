import React from 'react'
import { Outlet } from "react-router-dom"
export default function HomeLayout() {
  return (
    <div className="srch-layout-cont1">
        <Outlet/>
    </div>
  )
}
