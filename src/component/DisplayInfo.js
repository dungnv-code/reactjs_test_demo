import React, { useEffect, useState } from "react";
import './DisplayInfo.scss'
import logo from '../logo.svg'
import { use } from "react";
// class DisplayInfo extends React.Component {

//     render() {

//         const { listuser } = this.props;
//         return (

//             <div className="Display_info">
//                 {true && <div >
//                     {listuser.map((item, index) => {
//                         return (
//                             <div key={item.id} className={+item.age > 18 ? "red" : "green"}>
//                                 <hr></hr>
//                                 <div >My name is {item.name}</div>
//                                 <div >My age is {item.age}</div>
//                                 <button type="button" onClick={() => { this.props.hanleDelete(index) }}>Xoá</button>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 }
//             </div>

//         )
//     }
// }

function DisplayInfo(props) {
    const { listuser } = props;
    const [isShow, setisShow] = useState(true);

    const hanleIsshow = () => {
        setisShow(!isShow);
    }
    console.log("render");

    useEffect(() => {
        setTimeout(() => { document.title = "Nguyen van a" }, 3000)
        console.log("call me effect");
    })

    return (
        <div className="Display_info">
            <div>
                <span onClick={() => { hanleIsshow() }}>Show list user</span>
            </div>
            {isShow && <div >
                {listuser.map((item, index) => {
                    return (
                        <div key={item.id} className={+item.age > 18 ? "red" : "green"}>
                            <hr></hr>
                            <div >My name is {item.name}</div>
                            <div >My age is {item.age}</div>
                            <button type="button" onClick={() => { props.hanleDelete(index) }}>Xoá</button>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}


export default DisplayInfo;