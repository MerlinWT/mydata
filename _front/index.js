document.addEventListener("DOMContentLoaded", function () {
    (function (document) {
        const forms = {
            spending: {
                action: 'api/spending/create.py',
                list: [
                    ['input', {}, {placeholder: 'магазин', name: 'shop'}],
                    ['input', {}, {placeholder: 'сумма', name: 'sum'}],
                ]
            },
        };

        let categories = [
            {
                caption: 'Расходы', groups: [
                    {
                        id: 'spending_products', caption: 'Продукты', fields: forms.spending
                    },
                    {
                        id: 'spending_chemistry', caption: 'Химия', fields: forms.spending
                    },
                    {
                        id: 'spending_appliances', caption: 'Техника', fields: forms.spending
                    },
                    {
                        id: 'spending_communal', caption: 'Комунальные услуги', fields: forms.spending
                    },
                    {
                        id: 'spending_communication', caption: 'Связь', fields: forms.spending
                    },
                    {
                        id: 'spending_clothes', caption: 'Одежда', fields: forms.spending
                    },
                    {
                        id: 'spending_bicycle', caption: 'Велосипед', fields: forms.spending
                    },
                ]
            },
            {
                caption: 'Спорт', groups: [
                    {
                        id: 'sport_bicycle', caption: 'Велосипед', fields: {
                            list: [
                                ['input', {}, {placeholder: 'время', name: 'duration'}],
                                ['input', {}, {placeholder: 'дистанция', name: 'distance'}],
                            ],
                            action: 'api/sport/bicycle/create.py'
                        }
                    },
                    {
                        id: 'sport_exercises', caption: 'Упражнения', fields: {
                            list: [
                                ['input', {}, {placeholder: 'отжимания', name: 'push-ups'}],
                                ['input', {}, {placeholder: 'приседания', name: 'squats'}],
                                ['input', {}, {placeholder: 'пресс', name: 'abdominal'}],
                                ['input', {}, {placeholder: 'подтягивания', name: 'pull-ups'}],
                            ],
                            action: 'api/sport/exercises/create.py'
                        }
                    },
                    {
                        id: 'sport_volleyball', caption: 'Волейбол', fields: {
                            list: [],
                            action: 'api/sport/create.py'
                        }
                    },
                    {
                        id: 'sport_pin_pong', caption: 'Пин-понг', fields: {
                            list: [],
                            action: 'api/sport/create.py'
                        }
                    },
                ]
            },
        ];

        function loadVersion() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'api/version.py');
            xhr.send();

            xhr.onload = () =>
                document.getElementById('header-version').innerText =
                    JSON.parse(xhr.response).current

        }

        function el(tag, properties = {}, attributes = {}) {
            const el = document.createElement(tag);
            Object.assign(el, properties);
            Object.keys(attributes).forEach(
                key => el.setAttribute(key, attributes[key])
            );

            return el
        }

        function div(properties = {}, attributes = {}) {
            return el('div', properties, attributes)
        }

        function a(properties = {}, attributes = {}) {
            return el('a', properties, attributes)
        }

        function span(properties = {}, attributes = {}) {
            return el('span', properties, attributes)
        }

        function form(properties = {}, attributes = {}) {
            return el('form', properties, attributes)
        }

        function input(properties = {}, attributes = {}) {
            return el('input', properties, attributes)
        }

        function btn(properties = {}, attributes = {}) {
            return el('button', properties, attributes)
        }

        function createCategoryHeader(caption) {
            const header = div({className: 'header'});
            const h2 = div({innerText: caption});
            header.append(h2);

            return header
        }

        function createGroupsList(categoryGroups) {
            const groups = div({className: 'groups'});
            categoryGroups.forEach(group => {
                const groupEl = a(
                    {className: 'group', innerText: group.caption},
                    {href: `#${group.id}`}
                );
                groups.append(groupEl);
            });

            return groups
        }

        function createCategory(category) {
            const wrapper = div({className: 'wrapper'});

            wrapper.append(
                createCategoryHeader(category.caption)
            );
            wrapper.append(
                createGroupsList(category.groups)
            );

            return wrapper
        }

        const categoriesListEl = document.getElementById('categories-list');
        categories.forEach(
            category => categoriesListEl.append(
                createCategory(category)
            )
        );

        const categoriesEl = document.getElementById('categories');
        categories.forEach(
            category => category.groups.forEach(
                group => {
                    const screenEl = div({id: group.id, className: 'screen'});

                    const headerEl = div({className: 'screen-header'});
                    const spanEl = span({innerText: `${group.caption} (${category.caption})`});
                    const aEl = a({innerText: 'наверх'}, {href: '#header'});
                    const formEl = form({}, {action: group.fields.action});
                    formEl.onsubmit = function () {

                    };
                    const dateEl = input({}, {placeholder: 'дата', name: 'date'});

                    formEl.append(dateEl);
                    group.fields.list.forEach(
                        field => formEl.append(el(...field))
                    );
                    const submitEl = btn({innerText: 'Отправить'});
                    formEl.append(submitEl);

                    headerEl.append(spanEl);
                    headerEl.append(aEl);

                    screenEl.append(headerEl);
                    screenEl.append(formEl);

                    categoriesEl.append(screenEl)
                }
            )
        );

        loadVersion();

    })(document);
});
