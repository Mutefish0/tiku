import React from 'react'
import { render } from 'react-dom'
import SearchPannel from './SearchPannel'
import s from './App.css'
import {data_m,data_g} from './tiku'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            subject:'g'
        }
    }
    render(){
        return(
            <div className={s.app}>
                <div className={s.select}>
                    <span>选择学科：</span>
                    <select onChange={(e)=>{
                        this.setState({subject:e.target.value})
                    }}>
                        <option value="g">管理学</option>
                        <option value="m">毛概</option>
                    </select>
                </div>
                <SearchPannel data={this.state.subject=='m'?data_m:data_g}/>
            </div>
        )
    }
}

render(<App/>,document.getElementById('app'))