import React from "react";
import './NavBar.css';

function NavBar(){
  return(
        
    <div className="NavContainer">
      <ul class="nav-list">
        <li>
          <a href="/home">
            <span class="links"> 
              <i class="material-icons">home</i>
              Home
            </span>
          </a>
        </li>

        <li>
          <a href="/about_me">
            <span class="links"> 
              <i class="material-icons">person</i>
              About me
            </span>
          </a>
        </li>

        <li>
          <a href="/my_projects">
            <span class="links"> 
              <i class="material-icons">folder_open</i>
              My Projects
            </span>
          </a>
        </li>

        <li>
          <a href="/my_links">
            <span class="links"> 
              <i class="material-icons">link</i>
              My Links
            </span>
          </a>
        </li>

        <li>
          <a href="/blog">
            <span class="links"> 
              <i class="material-icons">article</i>
              Blog
            </span>
          </a>
        </li>
        
      </ul>    
    </div>
  )
}

export default NavBar