
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Battery, ChevronRight, Clock, Search, Wifi } from "lucide-react";
import { useState } from "react";
import { Dock, DockIcon } from "@/components/dock";

interface App {
  name: string;
  icon: string;
}

const apps: App[] = [
  { name: "About", icon: "👤" },
  { name: "Projects", icon: "💼" },
  { name: "Skills", icon: "🛠️" },
  { name: "Contact", icon: "📧" },
];

export default function Component() {
  const [activeApp, setActiveApp] = useState<App | null>(null);

  const openApp = (app: App) => {
    setActiveApp(app);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <div
      className="h-screen bg-cover bg-center relative w-screen overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://512pixels.net/downloads/macos-wallpapers-6k/13-Ventura-Dark.jpg')",
      }}
    >
      {/* Menu Bar */}
      <div className="bg-black/70 backdrop-blur-lg text-white text-sm py-1 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/apple.png" alt="Apple" className="h-4 w-4" />
          <span>Portfolio OS</span>
          <span className="hover:bg-gray-700/30 cursor-pointer px-2 py-1 rounded">
            File
          </span>
          <span className="hover:bg-gray-700/30 cursor-pointer px-2 py-1 rounded hidden md:block">
            Edit
          </span>
          <span className="hover:bg-gray-700/30 cursor-pointer px-2 py-1 rounded hidden md:block">
            View
          </span>
          <span className="hover:bg-gray-700/30 cursor-pointer px-2 py-1 rounded hidden md:block">
            Window
          </span>
          <span className="hover:bg-gray-700/30 cursor-pointer px-2 py-1 rounded hidden md:block">
            Help
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <Search className="h-4 w-4" />
          <Wifi className="h-4 w-4" />
          <Battery className="h-4 w-4" />
          <Clock className="h-4 w-4" />
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      {/* Desktop */}
      <div className="flex-grow flex items-start content-start flex-wrap gap-4 p-4 overflow-auto">
        {apps.map((app) => (
          <button
            key={app.name}
            className="flex flex-col items-center w-24 p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white"
            onClick={() => openApp(app)}
          >
            <span className="text-4xl mb-1">{app.icon}</span>
            <span className="text-sm">{app.name}</span>
          </button>
        ))}
        {/* Common Icons */}
        <div className="flex flex-col items-center w-24 p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Finder_Icon_macOS_Big_Sur.png/768px-Finder_Icon_macOS_Big_Sur.png"
            alt="Finder"
            className="h-10 w-10 mb-1"
          />
          <span className="text-sm">Finder</span>
        </div>
        <div className="flex flex-col items-center w-24 p-2 rounded-lg bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white">
          <img
            src="https://cdn.osxdaily.com/wp-content/uploads/2010/07/512-TrashIcon-macosx1.png"
            alt="Trash"
            className="h-10 w-10 mb-1"
          />
          <span className="text-sm">Trash</span>
        </div>
      </div>

      {/* Dock */}
      <div className="relative">
        <Dock magnification={100} distance={200}>
          {apps.map((app) => (
            <DockIcon key={app.name} className="bg-black/10 dark:bg-white/10" onClick={() => openApp(app)}>
              <span className="text-3xl" >{app.icon}</span>
            </DockIcon>
          ))}
          
        </Dock>
      </div>

      {/* Window */}
      {activeApp && (
        <AnimatePresence>
          <motion.div
            key="window"
            initial={{ opacity: 0, scale: 0.75, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.75, y: "-50%", x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            drag
            dragConstraints={{ top: -300, bottom: 300, left: -300, right: 300 }}
            className="absolute top-1/2 left-1/2 w-2/3 h-2/3 bg-gray-800/90 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden flex flex-col"
          >
            {/* Window Header */}
            <div className="bg-gray-700 p-2 flex items-center justify-between backdrop-blur-lg text-white cursor-move">
              <div className="flex space-x-2">
                <button
                  onClick={closeApp}
                  className="w-3 h-3 rounded-full bg-red-500"
                />
                <button className="w-3 h-3 rounded-full bg-yellow-500" />
                <button className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm font-medium text-center">
                {activeApp?.name}
              </span>
              <span className="hidden"></span>{" "}
            </div>

            {/* Window Content */}
            <div className="flex-grow p-4 overflow-auto text-white backdrop-blur-lg">
              {activeApp?.name === "About" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">About Me</h2>
                  <p>
                    Hello! I'm Brian Wabweni, a passionate developer with a
                    strong foundation in web technologies and a keen interest
                    in creating efficient and scalable software solutions.
                  </p>
                  <p className="mt-2">
                    With experience in React, Node.js, TypeScript, and other
                    modern tools, I strive to build intuitive and dynamic web
                    applications that enhance user experiences.
                  </p>
                </div>
              )}
              {activeApp?.name === "Projects" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">My Projects</h2>
                  <ul className="list-disc list-inside">
                    <li>
                      <strong>ServiceHub.ug:</strong> A platform for Ugandan
                      service providers to create business profiles and list
                      their services.
                    </li>
                    <li>
                      <strong>AutoReportCards:</strong> An automated report card
                      generation system for the new Ugandan curriculum.
                    </li>
                    <li>
                      <strong>Makerere Guild Platform:</strong> A comprehensive
                      platform for managing Makerere University's student guild
                      government profiles and activities.
                    </li>
                  </ul>
                </div>
              )}
              {activeApp?.name === "Skills" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                  <ul className="list-disc list-inside">
                    <li>React</li>
                    <li>Node.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Next.js</li>
                    <li>Prisma</li>
                  </ul>
                </div>
              )}
              {activeApp?.name === "Contact" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                  <p>Email: brianwabweni@gmail.com</p>
                  <p>LinkedIn: linkedin.com/in/brianwabweni</p>
                  <p>GitHub: github.com/wabwenibrian</p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

