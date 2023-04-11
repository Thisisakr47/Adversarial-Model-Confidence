import React from 'react'
import GridImages from './GridImages'

export default function Panel(props) {
    return (
    <div className="container-fluid d-flex flex-row">
        <div className="container-fluid d-flex flex-column w-25 m-3">
            <div className="container-fluid flex-wrap">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Bad Images</b>
                    </div>
                </div>
                <GridImages index={0}/>
                <GridImages index={3}/>
                <GridImages index={6}/>
            </div>
            <div className="container-fluid flex-wrap mt-5">
                <div className="row justify-content-md-center text-center">
                    <div className="col">
                        <b>Good Images</b>
                    </div>
                </div>
                <GridImages index={9}/>
                <GridImages index={12}/>
                <GridImages index={15}/>
            </div>
        </div>
        <div className="container-fluid flex-column d-flex m-3 w-75">
            <div className="container-fluid d-flex">
                
            </div>
            <div className="container-fluid d-flex">
                
            </div>
            <div className="container-fluid d-flex">
                
            </div>
        </div>
    </div>
    )
}
