import { Fragment } from "react"
import { Route } from "react-router-dom"


import React from 'react'

function Template(props) {
    return (
        <Route path={props.path} exact render={(propsRoute) => {
            return <Fragment>
                <div className="row" style={{ overflow: 'hidden' }}>
                    <div className="col-6" style={{ height: '100vh' }}>
                        <img src="https://picsum.photos/1000" className="w-100" alt="" />
                    </div>
                    <div className="col-6">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            <props.component {...propsRoute} />
                        </div>
                    </div>
                </div>
            </Fragment>
        }} />
    )
}

export default Template