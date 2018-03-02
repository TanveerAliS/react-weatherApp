import React, { Component } from 'react';
import moment from 'moment';
import { fetchForecastByCityName } from '../api';

import ForecastView from '../components/ForcastView';

class Forecast5 extends Component {

	cityName = 'Bangalore, India'

	state = {
		loading: false,
		forecast: [],
	}

	componentWillMount() {
		this.getForecastData();
	}

	async getForecastData() {
		this.setState({ loading: true });
		const result = await fetchForecastByCityName(this.cityName);
		this.setState({
			loading: false,
			forecast: result.list.map(item => ({
				date: moment(item.dt * 1000),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
			}))
		});
	}

	render() {
		return (
			<ForecastView
				cityName={this.cityName}
				forecast={this.state.forecast}
				loading={this.state.loading}
				onPressRefresh={() => this.getForecastData()}
			/>
		);
	}
}

export default Forecast5;
