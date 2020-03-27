import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../services/token-service'
import UserContext from '../contexts/UserContext'
import './NavBar.css';

class NavBar extends Component {
   static contextType = UserContext

   handleLogout = () => {
      this.context.processLogout()
    }

   renderPrivateNav = () => {
      return <>
               <li>Hello {this.context.user.name}!</li>
               <li><Link to='/dashboard'>Home</Link></li>
               <li><Link to='/add-activity'>Add</Link></li>
               <li><Link to='/login' onClick={this.handleLogout}>Logout</Link></li>
            </>
   }

   renderPublicNav = () => {
      return <>
               <li><Link to='/login'>Login</Link></li>
               <li><Link to='/'>Register</Link></li>
            </>
   }

   render() {
   return (
      <section className="NavBar">
         <h2>Indecisio</h2>
         <ul id='navlist'>
            {TokenService.hasAuthToken()
               ? this.renderPrivateNav()
               : this.renderPublicNav()}
         </ul>
      </section>
   )
   }
}

export default NavBar;