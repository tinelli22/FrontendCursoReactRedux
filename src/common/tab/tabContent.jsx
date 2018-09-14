import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/if'

class TabContent extends Component {
    render() {

        const selected = this.props.tab.selected === this.props.id

         //se um atributo dentro do visible ( q é um obj) tiver o mesmo no this.props.id e 
        //se o resultado for true marca como visivel
        const visible = this.props.tab.visible[this.props.id]

        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {/* target la do header. id /\ */}
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    tab: state.tab
})

const mapDispatchToProps = (dispatch, ownProps) =>  bindActionCreators({
    
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabContent)