import {useState} from "react";
import DataPoint from "./DataPoint";
import {invoke} from "@tauri-apps/api/tauri";
import "./ClassCard.css";

type unitClass = {
    Name: string,
    Points: number,
    Aim: number,
    Clobba: number,
    HP: number,
    Carry: number,
    Armor: number,
    StartingGear: string[],
    Abilities: string[],
    Passives: string[],
    Keywords: string[],
    ImgPath: string
}

function ClassCard(props: unitClass){
    let faction: string = "default";
    if(props.Keywords.includes("HORDE")) faction = "horde";
    if(props.Keywords.includes("SPEEDKULT")) faction = "speedkult"
    if(props.Keywords.includes("GEARHEDZ")) faction = "gearhedz";
    if(props.Keywords.includes("HUNTERZ")) faction = "hunterz";
    if(props.Keywords.includes("ROKKAZ")) faction = "rokkaz";
    if(props.Keywords.includes("W.A.R.G.")) faction = "warg";
  
    return(
        <div className={"classCard " + faction}>
            <>
                <div className="upperRow">
                    <h1>{props.Name}</h1>
                    <h2>Keywords: {props.Keywords.toString()}</h2>
                </div>
                <div>
                    <h2>Starter Gear: {props.StartingGear.toString()}</h2>
                </div>
                <div className="bottomRow">
                    <DataPoint Name={'Points'} Value={props.Points}/>
                    <DataPoint Name={'Aim'} Value={props.Aim}/>
                    <DataPoint Name={'Clobba'} Value={props.Clobba}/>
                    <DataPoint Name={'HP'} Value={props.HP}/>
                    <DataPoint Name={'Carry'} Value={props.Carry}/>
                    <DataPoint Name={'Armor'} Value={props.Armor}/>
                </div>
                <div>
                    <div>
                        <h1>Abilities</h1>
                        <h2>{props.Abilities.toString()}</h2>
                    </div>
                    <div>
                        <h1>Passives</h1>
                        <h2>{props.Passives.toString()}</h2>
                    </div>
                </div>
            </>
        </div>
    )
}


export default ClassCard;''