"use client";
import * as React from "react";
import { ModeToggle } from "../mode-toggle/mode-toggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { BookOpenCheck, Home, Ghost } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Quiz",
    url: "#",
    icon: BookOpenCheck,
  },
  {
    title: "About Us",
    url: "/about",
    icon: Ghost,
  },
];

export function MySidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Dark Mode Toggle Section */}
        <div className="">
          <ModeToggle />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
export default MySidebar();
