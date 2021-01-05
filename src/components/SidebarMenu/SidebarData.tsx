import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
	{
		title: 'Dashboard',
		path: '/',
		icon: <RiIcons.RiDashboardLine />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
	{
		title: 'Tasks',
		path: '/reports',
		icon: <BsIcons.BsViewStacked />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
	{
		title: 'Email',
		path: '/products',
		icon: <AiIcons.AiOutlineMail />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
	{
		title: 'Contacts',
		path: '/team',
		icon: <FaIcons.FaRegUser />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
	{
		title: 'Chat',
		path: '/messages',
		icon: <RiIcons.RiChat4Line />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
	{
		title: 'Deals',
		path: '/support',
		icon: <BsIcons.BsLayoutThreeColumns />,
		cName: 'nav-text',
		iName: 'myReact-icons',
	},
];
