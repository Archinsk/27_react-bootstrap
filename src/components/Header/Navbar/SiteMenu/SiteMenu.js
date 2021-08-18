import Nav from "./Nav/Nav";

function SiteMenu() {
    let navItems = ["Программы", "Новости", {title:"Меры поддержки", content:["Все меры поддержки", "Юридическим лицам", "Индивидуальным предпринимателям", "divider", "Физическим лицам"]} ]
    return (
        <Nav navItems={navItems} navbar/>
    )
}

export default SiteMenu;