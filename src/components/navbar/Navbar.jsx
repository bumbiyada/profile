import React from 'react';
import {NavLink} from 'react-router-dom';
import S from './navbar.module.css'

const Navbar = () => {
	return(
		<div className={S.content}>
			<div className={S.item}>
				<NavLink to="/bio" activeClassName={S.active}> bio</NavLink>
			</div>
			<div className={S.item}>
				<NavLink to="/project" activeClassName={S.active}> project</NavLink>
			</div>
		</div>
		)
};

export default Navbar;
