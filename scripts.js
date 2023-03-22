
class Tabs {
    constructor(tabsContainer) {
        this.tabsContainer = tabsContainer;
        this.navItems = Array.from(tabsContainer.querySelectorAll('[data-tab-target]'));
        this.tabContents = Array.from(tabsContainer.querySelectorAll('.tab-content'));
        this.activeTabIndex = 0;
        this.initTabs();
    }

    initTabs() {
        this.showTab(this.activeTabIndex);
        this.navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.showTab(index);
            });
        });
    }

    showTab(index) {
        this.navItems[this.activeTabIndex].classList.remove('nav-item-active');
        this.tabContents[this.activeTabIndex].classList.remove('tab-content-active');
        this.activeTabIndex = index;
        this.navItems[this.activeTabIndex].classList.add('nav-item-active');
        this.tabContents.forEach((content, i) => {
            if (i === this.activeTabIndex) {
                content.classList.add('tab-content-active');
            } else {
                content.classList.remove('tab-content-active');
            }
        });
    }
}

const tabsEl = document.querySelector('#tabs')
new Tabs(tabsEl)