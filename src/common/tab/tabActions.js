export function selectTab(tabId) {
    console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}


//juntar diversos parametros em um array o ...tabIds -> operador rest
export function showTabs(...tabIds) {
    //cada atributo representa a aba a ser exibida
    const tabsToShow = {}
    tabIds.forEach(element => tabsToShow[element] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}