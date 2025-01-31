import React, { useState } from "react";

import DisplayInfo from "./DisplayInfo";
import User from "./User";
// class Mycomponent extends React.Component {


//     render() {

//         return <div>
//             Hello Mycomponent
//             <User hanleNewfunction={this.hanleNewfunction}></User>
//             <br />
//             <br />
//             {/* 
//             <DisplayInfo name={this.state[1].name} age={this.state[1].age}></DisplayInfo> */}

//             <hr></hr>
//             {/* <DisplayInfo name="nguyen tran nguyen" age="13"></DisplayInfo> */}
//             <hr></hr>
//             <DisplayInfo listuser={this.state.listuser} hanleDelete={this.hanleDelete} ></DisplayInfo >
//         </div >
//     }
// }

const Mycomponent = () => {
    const [state, setState] = useState([
        { id: 1, name: "Hoang", age: 25 },
        { id: 2, name: "Nguyen", age: 34 },
        { id: 3, name: "Duong", age: 35 },
        { id: 4, name: "Chieu", age: 55 },
        { id: 5, name: "Thai", age: 38 },
        { id: 6, name: "Hieu", age: 35 },
        { id: 7, name: "Nam", age: 25 },
    ])


    const hanleNewfunction = (data) => {
        setState(
            [data, ...state]
        )
    }

    const hanleDelete = (index) => {
        const newarr = state.filter((item, index_item) => index_item != index);
        setState(
            [...newarr]
        )
    }
    return <div>
        Hello Mycomponent
        <User hanleNewfunction={hanleNewfunction}></User>
        <br />
        <br />
        {/* 
    <DisplayInfo name={this.state[1].name} age={this.state[1].age}></DisplayInfo> */}

        <hr></hr>
        {/* <DisplayInfo name="nguyen tran nguyen" age="13"></DisplayInfo> */}
        <hr></hr>
        <DisplayInfo listuser={state} hanleDelete={hanleDelete} ></DisplayInfo >
    </div >
}

export default Mycomponent;