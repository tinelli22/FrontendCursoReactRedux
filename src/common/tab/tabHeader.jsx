import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/if'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target

        //se um atributo dentro do visible ( q é um obj) tiver o mesmo no this.props.target e 
        //se o resultado for true marca como visivel
        const visible = this.props.tab.visible[this.props.target]
        
        return (
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    {/* o props.target vai chegar la no action como tabId e depois evoluir 
                    esse state no reducer */}
                    <a href='javascript:;' data-toggle='tab' data-target={this.props.target} 
                    onClick={() => this.props.selectTab(this.props.target)}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ( {
    tab: state.tab
})

//dispatch é chamar um action creator e o resultado vai ser passado para o reducer
const mapDispatchToProps = (dispatch, ownProps) =>  bindActionCreators({
    selectTab
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)