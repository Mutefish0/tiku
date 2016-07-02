import React from 'react'
import { render } from 'react-dom'
import Pysearch from './pysearch'
import s from './SearchPannel.css'

class SearchPannel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            output:''
        }
    }
    render(){
        return(
            <div className={s.main}>
                <div className={s.search}>
                    <i className="fa fa-search"/>
                    <input
                        className={s.input}
                        onChange={(e)=>{
                        let input = e.target.value
                        let out = this.props.data.map((val,index)=>{
                        if(Pysearch.match(input,val))
                            return <li key={index}>{val}</li>
                    })
                    this.setState({output:out})
                }} type="text"/>
                </div>
                <ul>{this.state.output}</ul>
            </div>
        )
    }
}

export default SearchPannel