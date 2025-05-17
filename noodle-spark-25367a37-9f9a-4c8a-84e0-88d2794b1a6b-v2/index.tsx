import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";
import "./src/style.css";
import { SelectionOverlay } from "./src/utils/selection-overlay";

/**
 * Main entry point for the application
 *
 * This file imports and renders the main App component.
 * It can be extended with various providers as needed.
 *
 * Uncomment any providers needed for your specific application.
 */

// Example of how to set up React Router
// import { BrowserRouter } from 'react-router-dom';

// Example of how to set up React DnD
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

// Example of how to set up Framer Motion AnimatePresence
// import { AnimatePresence } from 'framer-motion';

// Example of how to set up toast notifications
// import { ToastProvider } from '@radix-ui/react-toast';

ReactDOM.render(
  <React.StrictMode>
    {/* 
      Uncomment and customize providers as needed:
      
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <ToastProvider>
            <AnimatePresence>
              <App />
            </AnimatePresence>
          </ToastProvider>
        </DndProvider>
      </BrowserRouter>
    */}
    <App />
    <SelectionOverlay />
  </React.StrictMode>,
  document.getElementById("root")
);