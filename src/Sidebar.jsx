const Sidebar = (props) => {

    return(
        <div className={`sidebar ${props.toggle ? 'sidebar-display' : ''}`}>
        <div className={props.toggle ? 'wrapper' : ''} onClick={() => props.setToggle(false)}> </div>
            <div className="sidebar-container">
                <nav>
                    <li> Features </li>
                    <li> Pricing </li>
                    <li>Resources</li>
                </nav>

                <div className="login-section-sidebar">
                    <li>Login</li>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )

}

export default Sidebar;