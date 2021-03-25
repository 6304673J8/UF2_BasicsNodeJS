import React, { Component } from 'react';

class Footer extends Component {
  render() {
	const more_info = {
		backgroundColor:"DodgerBlue",
		flexGrow:1
	};
	const social_networks_main = {
		backgroundColor:"#eeeeff",
		flexGrow:2
	}  
	const social_networks_list = {
		padding:0,
		margin:0,
		listStyleType:"none"
	};  
    return (
	<div>
		<div style={more_info}>
			<h2>Más información</h2>
			<p>Copyright (c) 2020 - ENTI M06-UF1</p>
		</div>

		<div style={social_networks_main}>
			<h2>Redes sociales</h2>
			<ul style={social_networks_list}>
				<li><a href="https://tuenti.es/amongmeme" class="tuenti">Tuenti</a></li>
				<li><a href="https://forocoches.com/amongmeme" class="forocoches">Forocoches</a></li>
				<li><a href="https://twitter.com/amongmeme" class="twitter">Twitter</a></li>
				<li><a href="https://reddit.com/r/amongmeme" class="reddit">Reddit</a></li>
			</ul>
		</div>
	</div>
    );
  }
}

export default Footer;
