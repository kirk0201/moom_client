import React, { Component } from 'react'
import '../css/Introduce.css'

export class Introduce extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
            <div className="container2">
            
                <div className="int_text">
                    우리의 서비스를 잘 나타내도록 소개
                    
                </div>
                <button className="int_btn">moom 시작하기</button>

            </div>
            </>
        )
    }
}

export default Introduce