window.addEventListener('load',function () {
    this.document.querySelectorAll('tab-arrows button').forEach((arrowButton) => {
        arrowButton.addEventListener('click',arrowButtonTrigger);
    })
})
function arrowButtonTrigger () {
    var tabInterface = this.closest('tab-interface');
    var numberOfTabs = tabInterface.querySelectorAll('[role="tab"]').length;
    var currentTabIndex = tabInterface.querySelector('[role="tab"][aria-selected="true"]').getAttribute('id').replace('tab-','');
    var tabIndexToClick = currentTabIndex;
    switch (this.getAttribute('data-pn')) {
        case 'p':  tabIndexToClick--; break;
        case 'n': tabIndexToClick++; break;
    }
    if (tabIndexToClick == 0) tabIndexToClick = numberOfTabs;
    if (tabIndexToClick > numberOfTabs) tabIndexToClick = 1;
    tabInterface.querySelector(`#tab-${tabIndexToClick}`).click();
    tabInterface.querySelector(`#tabpanel-heading-${tabIndexToClick}`).focus();
}