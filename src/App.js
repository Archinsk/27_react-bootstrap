import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Button from "./components/Header/Navbar/SearchForm/Button/Button";
import Icon from "./components/Header/Navbar/SearchForm/Icon/Icon";

function App() {
    return (
        <div className="App">

            <Header/>

            <p>Lorem ipsum dolor <Icon icon="settings" badge sem="danger"/> sit amet, <Icon icon="favorite"/> adipisicing elit. Ad alias aperiam
                blanditiis distinctio dolorum,
                laboriosam <Icon icon="login" sem="success" badge round/> molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo magni
                numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste maiores
                laboriosam molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo magni
                numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste maiores
                molestiae nisi tenetur unde voluptatem?
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam blanditiis distinctio dolorum,
                laboriosam molestiae repellat ullam velit!
                <br/>
                <button>Button</button>
                <button className="btn btn-secondary" type="submit">Button</button>
                <button className="btn btn-outline-secondary" type="submit">Button</button>
                <Button/>
                <Button sem="primary"/>
                <Button sem="secondary"/>
                <Button sem="secondary" type="submit"/>
                <Button sem="outline-secondary" type="reset"/>
                <Button sem="outline-success"/>
                <Button sem="outline-info" size="lg"/>
                <Button sem="dark" size="sm"/>
                <Button sem="primary" disabled/>
                <Button sem="primary" icon="login"/>
                <Button content="Пассивна" sem="outline-warning" action="toggle" icon="login"/>
                <Button content="Активна" sem="outline-info" action="toggle" active icon="settings"/>


                A aut fuga iure natus repellat. Amet animi debitis illo magni
                numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste maiores
                molestiae nisi tenetur unde voluptatem?
            </p>

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
