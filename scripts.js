
class Tabs {
    constructor(tabsContainer) {
        this.tabsContainer = tabsContainer;
        this.navItems = Array.from(tabsContainer.querySelectorAll('[data-tab-target]'));
        this.tabContents = Array.from(tabsContainer.querySelectorAll('.tab-content'));
        this.activeTabIndex = 0; // По умолчанию активен первый таб
        this.initTabs();
    }

    initTabs() {
        this.showTab(this.activeTabIndex); // Показываем первый таб при инициализации
        this.navItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.showTab(index); // Показываем таб по индексу при клике на него
            });
        });
    }

    showTab(index) {
        this.navItems[this.activeTabIndex].classList.remove('nav-item-active'); // Скрываем предыдущую активную табу
        this.tabContents[this.activeTabIndex].classList.remove('tab-content-active');
        this.activeTabIndex = index; // Обновляем активный индекс
        this.navItems[this.activeTabIndex].classList.add('nav-item-active'); // Показываем новую активную табу
        this.tabContents.forEach((content, i) => {
            if (i === this.activeTabIndex) {
                content.classList.add('tab-content-active'); // Добавляем класс для активного контента
            } else {
                content.classList.remove('tab-content-active'); // Удаляем класс для неактивных контентов
            }
        });
    }
}

const tabsEl = document.querySelector('#tabs')
new Tabs(tabsEl)