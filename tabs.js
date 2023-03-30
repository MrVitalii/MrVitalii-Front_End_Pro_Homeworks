class Tabs {
    static DEFAULT_TAB_INDEX = 0
    #activeTabIndex

    constructor(rootEl) {
        const [navElements, contentElements] = rootEl.children

        this.rootEL = rootEl
        this.navElemets = Array.from(navElements.children)
        this.contentElements = Array.from(contentElements.children)
        this.bindStyles()
        this.bindEvents()
        this.setActiveTab(Tabs.DEFAULT_TAB_INDEX)
    }

    bindStyles() {
        this.navElemets.forEach((navElement) => {
            navElement.classList.add('nav-item')
        })
        this.contentElements.forEach((contentElement) => {
            contentElement.classList.add('tab-content')
        })
    }

    bindEvents() {
        this.rootEL.addEventListener('click', this.onRootElClick.bind(this))
    }

    onRootElClick(e) {
        const target = e.target

        if (this.isNavButton(target)) {
            const index = this.findNavIndex(target)

            this.hideActiveTab()
            this.setActiveTab(index)
        }
    }

    isNavButton(el) {
        const rootNavEl = el.closest('.nav-item')
        return Boolean(rootNavEl)
    }

    findNavIndex(navEL) {
        return this.navElemets.indexOf(navEL)
    }

    hideActiveTab() {
        this.navElemets[this.#activeTabIndex].classList.remove('nav-item-active')
        this.contentElements[this.#activeTabIndex].classList.remove('tab-content-active')
    }

    setActiveTab(index) {
        this.#activeTabIndex = index

        this.navElemets[index].classList.add('nav-item-active')
        this.contentElements[index].classList.add('tab-content-active')
    }
}