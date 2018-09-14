import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3004/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {

    return dispatch => {
        
        console.log(values)
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                //o redux multi vai ler cada um e disparar cada uma
                dispatch([
                    //la do component
                    resetForm('billingCycleForm'), getList(), selectTab('tabList'), 
                    showTabs('tabList', 'tabCreate')
                ])
            })
            .catch(e => {
                //errors -> vem do backend como foi feito o tratamento de erros nas aulas anteriores
                e.response.data.errors.forEach(error => {
                    toastr.error('Erro!', error)
                });
            })

    }


   
}