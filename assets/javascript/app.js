const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach( tc =>{
            tc.classList.remove('active')
        })
        target.classList.add('active')

        tabs.forEach(t=> {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})
