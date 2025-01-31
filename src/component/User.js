import React, { useState } from "react";


// class User extends React.Component {
//     state = {
//         "name": "nguyen van dung",
//         "age": 14,
//     }

//     hanleClick = (test) => {
//         // alert(this.state.name);
//         this.setState({
//             name: "nguyen thay doi",
//             age: Math.floor(Math.random() * 100 + 1)
//         })
//     }

//     hanleOnchange = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     hanleSubmit = (event) => {
//         event.preventDefault();
//         this.props.hanleNewfunction({ id: Math.floor(Math.random() * 100 + 1), name: this.state.name, age: +this.state.age });
//     }

//     render() {
//         return (
//             <div>
//                 Hello world
//                 <br />
//                 {this.state.name} {this.state.name}  <button onClick={() => {
//                     this.hanleClick("nguyen van a");
//                 }}>Click me</button>
//                 <form onSubmit={(event) => {
//                     this.hanleSubmit(event);
//                 }}>
//                     <input type="text" value={this.state.name} onChange={(event) => { this.hanleOnchange(event) }} />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const User = (props) => {
    const [state, setState] = useState({
        "name": "nguyen van dung",
        "age": 14,
    })

    const hanleClick = (test) => {
        // alert(this.state.name);
        setState({
            name: "nguyen thay doi",
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    const hanleOnchange = (event) => {
        setState({
            name: event.target.value
        })
    }

    const hanleSubmit = (event) => {
        event.preventDefault();
        props.hanleNewfunction({ id: Math.floor(Math.random() * 100 + 1), name: state.name, age: +state.age });
    }

    return (
        <div>
            Hello world
            <br />
            {state.name} {state.name}  <button onClick={() => {
                this.hanleClick("nguyen van a");
            }}>Click me</button>
            <form onSubmit={(event) => {
                hanleSubmit(event);
            }}>
                <input type="text" value={state.name} onChange={(event) => { hanleOnchange(event) }} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default User;