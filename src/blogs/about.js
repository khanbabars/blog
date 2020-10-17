import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getAboutText} from '../cache/actions/textActions'

 class about extends Component {
    componentDidMount(){
        this.props.getAboutText()
        
    }
    render() {
        const {about} = this.props.about

        
        return (
            <div>
                {about.map(t => 
                     <React.Fragment key={t.id}>
                         <p style={{ paddingTop: '50px',fontSize: '18px', fontWeight: '400', color: 'black'}} >{t.text}</p> 
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({about:state.about})

export default connect(mapStateToProps, {getAboutText})(about)