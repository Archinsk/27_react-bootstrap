import Nav from "./Nav/Nav";

function SiteMenu() {
    let navItems = ["Программы", "Новости", {title:"Меры поддержки", content:["Все меры поддержки", "Юридическим лицам", "Индивидуальным предпринимателям", "divider", "Физическим лицам"]}, "Пятое", "Десятое", "Ещё один пункт", "Ещё один пункт", "Ещё один пункт" ]
    return (
        <Nav navItems={navItems} navbar/>
    )
}

export default SiteMenu;