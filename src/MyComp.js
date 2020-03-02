import React from "react"; 


import {SomeContext} from "./Context"; 


export class MyComp extends React.Component {
    static contextType = SomeContext; 

    render() {
        const {foo, bar, nested} = this.context; 

        const {bish} = nested; 

        console.log(this.context); 
        return <div> 
                {foo} {bar} {bish}
        </div> 
    }
}