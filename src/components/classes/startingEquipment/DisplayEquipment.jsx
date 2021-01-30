import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import "../../../css/displayequipment.css"
class DisplayEquipment extends Component {
    state = {
        equipment: []
    }
    async componentDidMount () {
        try {
            const { data } = await axios.get( `https://www.dnd5eapi.co/api/equipment/${this.props.match.params.index}` )
            this.setState( {
                equipment: data
            } )
        } catch ( error ) {
            console.log( error )
        }
    }
    render () {
        if ( this.state.equipment === undefined ) {
            return ( <h1 id = "loading">Loading</h1> )
        }
        return (
            <div id = "all-equipment-info-container">
            <div id = "indiv-equip-cont">
                <h1>{ this.state.equipment.name }</h1>
                {this.state.equipment.desc !== undefined && <div> <h2>Description:</h2>{
                    this.state.equipment.desc.map( ( item, index ) => {
                        return (
                            <p key={ index }>{ item }</p>
                        )
                    } )
                }</div> }
                {this.state.equipment.equipment_category !== undefined && <h2>Equipment Category : { this.state.equipment.equipment_category.name }</h2> }
                {this.state.equipment.gear_category !== undefined && <h2>Gear Category : { this.state.equipment.gear_category.name }</h2> }
                {this.state.equipment.weapon_category !== undefined && <h2>Weapon Category : { this.state.equipment.weapon_category }</h2> }
                {this.state.equipment.weapon_range !== undefined && <h2>Weapon Range : { this.state.equipment.weapon_range }</h2> }
                {this.state.equipment.armor_category !== undefined && <h2>Armor Category : {this.state.equipment.armor_category}</h2>}
                {this.state.equipment.tool_category !== undefined && <h2>Tool Category : {this.state.equipment.tool_category}</h2>}
                {this.state.equipment.vehicle_category !== undefined && <h2>Vehicle Category : {this.state.equipment.vehicle_category}</h2>}
                {this.state.equipment.armor_class !== undefined && <h2>Armor Class : Base: {this.state.equipment.armor_class.base} | Dex Bonus: {this.state.equipment.armor_class.dex_bonus === true ? "True" : "False"} |
                Max Bonus: {this.state.equipment.armor_class.max_bonus}</h2>}
                {this.state.equipment.category_range !== undefined && <h2>Category Range : { this.state.equipment.category_range }</h2> }
                {this.state.equipment.damage !== undefined && <h2>Damage Dice/Type : { this.state.equipment.damage.damage_dice }/ { this.state.equipment.damage.damage_type.name } </h2> }
                {this.state.equipment.two_handed_damage !== undefined && <h2>Two Handed Damage Dice/Type : { this.state.equipment.two_handed_damage.damage_dice }/ { this.state.equipment.two_handed_damage.damage_type.name } </h2> }
                {this.state.equipment.cost !== undefined && <h2>Cost : { this.state.equipment.cost.quantity } { this.state.equipment.cost.unit }</h2> }
                {this.state.equipment.quantity !== undefined && <h2>Quantity : { this.state.equipment.quantity}</h2> }
                {this.state.equipment.contents !== undefined &&
                    <div>
                        <h2>Contents:</h2>
                        { this.state.equipment.contents.map( ( item, index ) => {
                            return (
                                <h3 key={ index }>Item Name: <Link to={ `/equipment/${item.item.index}` }style={{ textDecoration: 'none' }}>{ item.item.name }</Link> | Quanitity : {item.quantity }</h3>
                            )
                        } ) }
                    </div> }
                {this.state.equipment.range !== undefined && <h2>Range: Normal : {this.state.equipment.range.normal} | Long : {this.state.equipment.range.long}</h2>}
                {this.state.equipment.throw_range !== undefined && <h2>Throw Range: Normal : {this.state.equipment.throw_range.normal} | Long : {this.state.equipment.throw_range.long}</h2>}
                {this.state.equipment.weight !== undefined && <h2>Equipment Weight : { this.state.equipment.weight }</h2> }
                {this.state.equipment.properties !== undefined && <div>
                    <h2>Properties : </h2>
                    {
                        this.state.equipment.properties.map( ( item, index ) => {
                            return (
                                <h3 key={ index }>{ item.name }</h3>
                            )
                        } )
                    }
                </div> }
                {this.state.equipment.speed !== undefined && <h2>Speed: {this.state.equipment.speed.quantity} {this.state.equipment.speed.unit}</h2>}
                {this.state.equipment.capacity !== undefined && <h2>Capacity: {this.state.equipment.capacity}</h2>}
                {this.state.equipment.str_minimum !== undefined && <h2>Strength Minimum : {this.state.equipment.str_minimum}</h2>}
                {this.state.equipment.stealth_advantage !== undefined && <h2>Stealth Advantage : {this.state.equipment.stealth_advantage === true ? "True" : "False"}</h2>}
                {this.state.equipment.stealth_disadvantage !== undefined && <h2>Stealth Disadvantage : {this.state.equipment.stealth_disadvantage === true ? "True" : "False"}</h2>}
            </div>
        </div>
        )
    }
}

export default DisplayEquipment;