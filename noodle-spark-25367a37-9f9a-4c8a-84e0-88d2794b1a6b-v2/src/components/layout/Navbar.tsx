import React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "../../lib/utils";

const Navbar = () => {
  return (
    <header className="doc-header">
      <div className="doc-container">
        <NavigationMenu.Root className="nav-root">
          <div className="nav-logo">
            <Link to="/" className="logo-link">
              <img
                src="https://cdn.brandfetch.io/noodleseed.com/logo?theme=light&fallback=false&h=48&w=48&c=1idp692X7Om55M1ydMR"
                alt="Noodle Seed"
                className="logo-img"
              />
              <span className="logo-text" style={{ display: 'none' }}>Noodle Seed</span>
            </Link>
          </div>
          <NavigationMenu.List className="nav-list">
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link 
                  to="/changelog" 
                  className={cn("nav-link")}
                >
                  Changelog
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link 
                  to="/blog" 
                  className={cn("nav-link")}
                >
                  Blog
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link 
                  to="/academy" 
                  className={cn("nav-link")}
                >
                  Academy
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </header>
  );
};

export default Navbar;
