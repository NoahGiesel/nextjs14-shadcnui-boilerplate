"use client";

import React from "react";

import { ThemeToogle } from "@/src/theme/ThemeToogle";


const Navbar: React.FC = () => (
  <nav className="fixed w-full flex items-center justify-end flex-wrap border-b p-4 pr-10 bg-background">
    <ThemeToogle />
  </nav>
)

export default Navbar;