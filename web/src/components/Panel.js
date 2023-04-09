import React, { useState } from 'react'
import GridImages from './GridImages'

export default function Panel(props) {
    const [path, changepath] = useState(``);
    changepath(`${props.path}`);
    return (
    <div className="container-fluid d-flex flex-row">
        <div className="container-fluid d-flex flex-column w-25 m-3">
            <div className="container-fluid flex-wrap">
                <div className="row justify-content-md-center text-center mb-5">
                    <div className="col">
                        <b>Bad Images</b>
                    </div>
                </div>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
            </div>
            <div className="container-fluid flex-wrap mt-5">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Good Images</b>
                    </div>
                </div>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
                <GridImages l1 = {path} l2 = {path} l3 = {path}/>
            </div>
        </div>
        <hr className="bg-danger border-2 border-top border-danger"/>
        <div className="container-fluid d-flex w-75">

        </div>
    </div>
    )
}
