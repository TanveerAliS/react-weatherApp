import React from 'react';

import 'owfont/css/owfont-regular.css';
import './index.scss';

const Forecast1 = props => {

	console.log(props.date);
	return(
		<div className="Forecast1">
			<div className="date">
				<span>{props.date.format('MMM DDD')}<br /><br />{props.date.format('ha')}</span>
			</div>
			<div className="weather">
				<div className={`owf owf-${props.weather.id}`} />
				<div className="description">
					<span>{props.weather.main}</span>
				</div>
			</div>
			<div className="temperature">
				<span>{Math.round(props.temp)}&deg;</span>
			</div>
			<div className="humidity">
				<span>{Math.round(props.humidity)}%<br />humidity</span>
			</div>
		</div>
	);
}
export default Forecast1;
