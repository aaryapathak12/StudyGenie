"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  BarChart3,
  BookOpen,
  Calendar,
  ChevronLeft,
  Compass,
  GraduationCap,
  Home,
  Menu,
  MessageSquare,
  Settings,
  Video,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { useDashboardStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { usePathname } from 'next/navigation'
import Image from "next/image"



interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {

  const pathname = usePathname();
  const { ui, toggleSidebar, setCurrentView } = useDashboardStore()
  const { sidebarCollapsed, currentView } = ui

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Compass, label: "Industry Insights",  href: "/dashboard/onboarding" },
    { icon: BookOpen, label: "Courses" ,href: "/dashboard/courses" },
    { icon: Video, label: "Interviews", href: "/dashboard/interviews" },
    { icon: BarChart3, label: "Skills", href: "/dashboard/skills" },
    { icon: Users, label: "Community", href: "/dashboard/community" },
    { icon: Calendar, label: "Activity", href: "/dashboard/calendar" },
    { icon: BookOpen, label: "courses", href: "/dashboard/inst/courses",style: "bg-red-500" },
    { icon: Users, label: "groups", href: "/dashboard/inst/groups",style: "bg-red-500" }
  ]

  const secondaryNavItems = [
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
    { icon: GraduationCap, label: "Achievements", href: "/dashboard/achievements" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <motion.div
      className={cn(
        "flex flex-col border-r bg-background h-screen",
        sidebarCollapsed ? "w-[70px]" : "w-[240px]",
        className,
      )}
      animate={{ width: sidebarCollapsed ? 70 : 240 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-14 items-center px-3 border-b">
        {!sidebarCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 font-semibold text-lg"
          >
            <Image src={'/logo.svg'} alt="logo" width="25" height="25"/>
            <span>NeoPrep</span>
          </motion.div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn("ml-auto", sidebarCollapsed && "ml-0")}
        >
          {sidebarCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          <TooltipProvider delayDuration={0}>
            {navItems.map((item) => 
            {

              const isActive= pathname== item.href;
            return (

              <div   key={item.label} className={`${item.style}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                 
                    <Button
                      variant={isActive ? "secondary" : "ghost" }
                      asChild
                      className={cn("justify-start", sidebarCollapsed && "justify-center px-0")}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-5 w-5 text-muted-foreground" />
                        {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
                      </Link>
                    </Button>
                  
                </TooltipTrigger>
                {sidebarCollapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
              </Tooltip>
              </div>
            )} )}
          </TooltipProvider>
        </nav>

        <div className="mt-6">
          <div className={cn("px-3 text-xs font-semibold text-muted-foreground mb-2", sidebarCollapsed && "sr-only")}>
            Tools
          </div>
          <nav className="grid gap-1 px-2">
            <TooltipProvider delayDuration={0}>
              {secondaryNavItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Tooltip key={item.href}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        asChild
                        className={cn("justify-start", sidebarCollapsed && "justify-center px-0")}
                      >
                        <Link href={item.href}>
                          <item.icon className="h-5 w-5 text-muted-foreground" />
                          {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    {sidebarCollapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </nav>
        </div>
      </div>

      {/* <div className="mt-auto p-2 border-t">
        <div className={cn("flex items-center gap-2 p-2", sidebarCollapsed ? "justify-center" : "px-2")}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/images/avatars/alex.png" alt="Alex Johnson" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          {!sidebarCollapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Alex Johnson</span>
              <span className="text-xs text-muted-foreground">Premium</span>
            </div>
          )}
        </div>
      </div> */}
    </motion.div>
  )
}
