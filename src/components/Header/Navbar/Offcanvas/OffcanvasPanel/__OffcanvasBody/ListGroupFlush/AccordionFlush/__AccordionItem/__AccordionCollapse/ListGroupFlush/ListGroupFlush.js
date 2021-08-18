import ListGroupItem from "./__ListGroupItem/__ListGroupItem";

function ListGroupFlush(props) {
    let listItems = ["Пункт_1", "Пункт_2", "Пункт_3", "Пункт_4", "Пункт_5"];
    if (props.listItems) {
        listItems = props.listItems
    }

    const listGroupItems = listItems.map((listItem, index) => {
            if (typeof (listItem) === "string") {
                return <ListGroupItem key={index} content={listItem}/>
            }
        }
    );

    return (
        <ul className="list-group list-group-flush">
            {listGroupItems}
        </ul>
    )
}

export default ListGroupFlush;