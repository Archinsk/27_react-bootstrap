import ListGroupFlush from "./ListGroupFlush/ListGroupFlush";
import './OffcanvasBody.css';

function OffcanvasBody() {
    let listItems = ["Программы", "Новости", {title: "Меры поддержки", content: ["Все меры поддержки", "Юридическим лицам", "Индивидуальным предпринимателям", "Физическим лицам"]}, "Пятое", "Десятое"]
    return (
        <div className="offcanvas-body">
            <ListGroupFlush listItems={listItems}/>
        </div>
    )
}

export default OffcanvasBody;