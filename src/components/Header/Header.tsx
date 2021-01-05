import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export const Header = () => {
	return (
		<header
			style={{
				height: '60px',
				width: '100%',
				borderBottom: '1px solid #EBEFF2',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingRight: '36px',
				paddingLeft: '36px',
				boxSizing: 'border-box',
			}}>
			<div>
				<FontAwesomeIcon
					icon={faSearch}
					style={{ color: 'C2CFE0', fontSize: '12px', marginRight: '12px' }}
				/>
				<input
					type='text'
					placeholder='Global search'
					style={{
						color: '#90A0B7',
						fontSize: '12px',
						height: '20px',
						border: 'none',
						outline: 'none',
					}}
				/>
			</div>
			<div style={{ position: 'relative' }}>
				<div className='dot'>
					<FontAwesomeIcon
						icon={faBell}
						style={{ color: 'C2CFE0', fontSize: '18px' }}
					/>
				</div>
			</div>
		</header>
	);
};
