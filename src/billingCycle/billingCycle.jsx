import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//import { selectTab, showTabs } from '../common/tab/tabActions'
import { init , create, update, remove } from './billingCycleActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
        //this.props.selectTab('tabList')
        //this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                   <Tabs>
                       <TabsHeader>
                           <TabHeader label='Listar' icon='bars' target='tabList' />

                           <TabHeader label='Incluir' icon='plus' target='tabCreate' />

                           <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />

                           <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />

                       </TabsHeader>

                       <TabsContent>
                           <TabContent id='tabList'>
                                <h3>Ciclos de Pagamento</h3>
                                <BillingCycleList />
                           </TabContent>

                           <TabContent id='tabCreate'>
                                <h3>Incluir</h3>

                                 {/* quando for submeter o form chame o create */}
                                <BillingCycleForm onSubmit={this.props.create} submitLabel='Incluir' submitClass='primary' />
                           </TabContent>

                           <TabContent id='tabUpdate'>
                            <h3>Alterar</h3>
                            <BillingCycleForm onSubmit={this.props.update} submitLabel='Alterar' submitClass='warning' />
                           </TabContent>


                           <TabContent id='tabDelete'>
                                <h3>Excluir</h3>
                                <BillingCycleForm onSubmit={this.props.remove} readOnly={true} submitLabel='Excluir' submitClass='danger' />
                           </TabContent>
                       </TabsContent>

                   </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators({
   init, /* selectTab, showTabs,*/ create, update, remove
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)