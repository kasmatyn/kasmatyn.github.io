(function () {
        let tabNav = [...document.querySelectorAll('.colorButton')],
            tabContent = [...document.querySelectorAll('.information')],
            tabName;
            
        tabNav[0].classList.add('showbut');
        tabContent[0].classList.add('show');
        
        tabNav.forEach(function (item) {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(function (item) {
                item.classList.remove('showbut'); // Удаляем активный укласс у элемента списка
            });
            this.classList.add('showbut');  // Добавляем активный у класс у элемента списка
            tabName = this.getAttribute('dataat');
            selectTabContent(tabName);
        }

        function selectTabContent(tab) {
            tabContent.forEach(function (item) {
                if (item.classList.contains(tab)) {
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                }
            });
        }
    })();