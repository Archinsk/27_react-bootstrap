import Input from "./Input/Input";
import Button from "./Button/Button";

function SearchForm() {
    return (
        <form className="d-flex">
            <Input/>
            <Button type="submit" content="Поиск" icon="search" sem="outline-secondary"/>
        </form>
    )
}

export default SearchForm;