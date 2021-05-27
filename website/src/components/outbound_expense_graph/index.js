import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import style from './style.css';
import baseroute from '../../baseroute';

import outboundExpenseImage from '../../assets/images/bubble-plot.png';

class OutboundExpenseGraph extends Component {
  render() {
    return (
			<div id={style.outbound_expense_section}>
				<div class="container">

					<h2>Outbound/Expense graph</h2>
					
					<div id="outbound_expense_graph">
						Here will be displayed the outbound vs expense graph and some additionnal infos.
						<img src={outboundExpenseImage} alt="Bubble plot comparing the expentiture per number of outbound tourists for each country" title="Expenditures over Outbound bubble plot"/>
					</div>

				</div>
			</div>
		)
	}
};

export default OutboundExpenseGraph;
