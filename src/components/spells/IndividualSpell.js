import React, { Component } from "react";
import { connect } from "react-redux";
import { getApiData } from "../../redux/reducers";

import { Link } from "react-router-dom";

class IndividualSpell extends Component {
	componentDidMount = () => {
		let spellName = "spells/" + this.props.match.params.spell;
		this.props.getApiData(spellName);
	};

	render() {
		return (
			// <h1>helllo</h1>
			<div>
				<h1>Spell: {this.props.spellName.name}</h1>

				<h3>Description</h3>
				{this.props.spellName !== undefined ? (
					<div>
						<p>{this.props.spellName.desc}</p>
					</div>
				) : (
					<span />
				)}

				<h3>Higher Level</h3>
				{this.props.spellName.higher_level !== undefined ? (
					<div>
						{this.props.spellName.higher_level.map(
							(item, index) => {
								return <p key={index}>{item}</p>;
							}
						)}
					</div>
				) : (
					<span />
				)}

				<h3>Range</h3>
				{this.props.spellName.range !== undefined ? (
					<div>
						<p>{this.props.spellName.range}</p>
					</div>
				) : (
					<span />
				)}

				{/* <h3>component</h3>
                {this.props.spellName.components !== undefined ? (
                    this.props.spellName.components.map((element, index) => {
                    
                        return(
                            <div key={index}>
                            <Link to {`/component/${element.components.index}`}>
                                <p>{element.components.name}</p>
                            </Link>
                        )
                    })
                )}  */}

				<h3>material</h3>
				{this.props.spellName.material !== undefined ? (
					<div>
						<p>{this.props.spellName.material}</p>
					</div>
				) : (
					<span />
				)}
				<h3>ritual</h3>
				{this.props.spellName.ritual !== undefined ? (
					this.props.spellName.ritual === false ? (
						<p>False</p>
					) : (
						<p>True</p>
					)
				) : (
					<span />
				)}
				<h3>duration</h3>
				{this.props.spellName.duration !== undefined ? (
					<div>
						<p>{this.props.spellName.duration}</p>
					</div>
				) : (
					<span />
				)}
				<h3>concentration</h3>
				{this.props.spellName.concentration !== undefined ? (
					this.props.spellName.concentration === false ? (
						<p>False</p>
					) : (
						<p>True</p>
					)
				) : (
					<span />
				)}
				<h3>casting time</h3>
				{this.props.spellName.casting_time !== undefined ? (
					<div>
						<p>{this.props.spellName.casting_time}</p>
					</div>
				) : (
					<span />
				)}
				<h3>level</h3>
				{this.props.spellName.level !== undefined ? (
					<div>
						<p>{this.props.spellName.level}</p>
					</div>
				) : (
					<span />
				)}
				<h3>attack type</h3>
				{this.props.spellName.attack_type !== undefined ? (
					<div>
						<p>{this.props.spellName.attack_type}</p>
					</div>
				) : (
					<span />
				)}

				<h3>Damage</h3>
				{this.props.spellName.damage !== undefined ? (
					<div>
						<p>
							Damage Type :{" "}
							{this.props.spellName.damage.damage_type.name}
						</p>
						{Object.entries(
							this.props.spellName.damage.damage_at_slot_level
						).map(([key, value]) => {
							return (
								<p>
									{key} : {value}
								</p>
							);
						})}
					</div>
				) : (
					<span />
				)}
				<h3>School : {this.props.spellName.school !== undefined && this.props.spellName.school.name}</h3>

				<h3>Classes</h3>
				{this.props.spellName.classes !== undefined && this.props.spellName.classes.map((item, index) => {
					return (
						<Link to={`/class/${item.index}`}>
							<p key={index}>{item.name}</p>
						</Link>
					);
				})}
				<h3>Subclasses</h3>
                {this.props.spellName.subclasses !== undefined && this.props.spellName.subclasses.map((item, index) => {
					return (
						<Link to={`/subclass/${item.index}`}>
							<p key={index}>{item.name}</p>
						</Link>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		spellName: state.dndData,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getApiData: (searchApi) => dispatch(getApiData(searchApi)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualSpell);
