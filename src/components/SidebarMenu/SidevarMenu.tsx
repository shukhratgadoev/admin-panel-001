import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { ReactComponent as Avatar } from '../../img/avatar.svg';

function SidebarMenu() {
	// const [sidebar, setSidebar] = useState(false);

	// const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: '#C2CFE0' }}>
				<nav className='nav-menu active'>
					<ul>
						<li className='logo-name'>
							<h3>SaaS Kit</h3>
						</li>
						<li
							style={{
								display: 'flex',
								alignItems: 'center',
								marginTop: '24px',
								marginLeft: '24px',
								marginBottom: '40px',
							}}>
							<Avatar />
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<span style={{ fontSize: '14px' }}>Sierra Ferguson</span>
								<span style={{ fontSize: '11px' }}>s.ferguson@gmail.com</span>
							</div>
						</li>
						{SidebarData.map((item, index) => {
							return (
								<li key={index} className={item.cName}>
									<Link to={item.path}>
										<i className={item.iName}>{item.icon}</i>
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default SidebarMenu;
