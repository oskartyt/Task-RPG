import React,{Component} from 'react';
import FormRdx from './FormRdx'
import DisplayRdx from './DisplayRdx'

class TestComponent extends Component{
    render() {
        return <div style={{backgroundColor:'violet', height:'25%'}}>
            <FormRdx/>
            <DisplayRdx/>
        </div>
    }
}

export default TestComponent;