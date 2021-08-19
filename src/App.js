import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Button from "./components/Header/Navbar/SearchForm/Button/Button";
import Icon from "./components/Header/Navbar/SearchForm/Icon/Icon";

function App() {
    return (
        <div className="App">

            <Header/>

            <div className="container">
                <p>Lorem ipsum dolor <Icon icon="settings" badge sem="danger"/> sit amet, <Icon
                    icon="favorite"/> adipisicing elit. Ad <Icon icon="login" sem="success" badge round/> alias aperiam
                    blanditiis distinctio dolorum,
                    laboriosam molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo
                    magni
                    numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste
                    maiores
                    laboriosam molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo
                    magni
                    numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste
                    maiores
                    molestiae nisi tenetur unde voluptatem?
                </p>
                <p>
                    <Icon icon="star" sem="primary"/>
                    <Icon icon="star" sem="secondary"/>
                    <Icon icon="star" sem="success"/>
                    <Icon icon="star" sem="danger"/>
                    <Icon icon="star" sem="warning"/>
                    <Icon icon="star" sem="info"/>
                    <Icon icon="star" sem="light"/>
                    <Icon icon="star" sem="dark"/>
                    <Icon icon="star" sem="primary" badge/>
                    <Icon icon="star" sem="secondary" badge/>
                    <Icon icon="star" sem="success" badge/>
                    <Icon icon="star" sem="danger" badge/>
                    <Icon icon="star" sem="warning" badge/>
                    <Icon icon="star" sem="info" badge/>
                    <Icon icon="star" sem="light" badge/>
                    <Icon icon="star" sem="dark" badge/>
                    <Icon icon="star" sem="primary" badge colorInverted/>
                    <Icon icon="star" sem="secondary" badge colorInverted/>
                    <Icon icon="star" sem="success" badge colorInverted/>
                    <Icon icon="star" sem="danger" badge colorInverted/>
                    <Icon icon="star" sem="warning" badge colorInverted/>
                    <Icon icon="star" sem="info" badge colorInverted/>
                    <Icon icon="star" sem="light" badge colorInverted/>
                    <Icon icon="star" sem="dark" badge colorInverted/>
                    <Icon icon="star" sem="primary" badge transparent/>
                    <Icon icon="star" sem="secondary" badge transparent/>
                    <Icon icon="star" sem="success" badge transparent/>
                    <Icon icon="star" sem="danger" badge transparent/>
                    <Icon icon="star" sem="warning" badge transparent/>
                    <Icon icon="star" sem="info" badge transparent/>
                    <Icon icon="star" sem="light" badge transparent/>
                    <Icon icon="star" sem="dark" badge transparent/>

                    <Icon icon="star" sem="primary" badge round/>
                    <Icon icon="star" sem="secondary" badge round/>
                    <Icon icon="star" sem="success" badge round/>
                    <Icon icon="star" sem="danger" badge round/>
                    <Icon icon="star" sem="warning" badge round/>
                    <Icon icon="star" sem="info" badge round/>
                    <Icon icon="star" sem="light" badge round/>
                    <Icon icon="star" sem="dark" badge round/>
                    <Icon icon="star" sem="primary" badge round transparent/>
                    <Icon icon="star" sem="secondary" badge round transparent/>
                    <Icon icon="star" sem="success" badge round transparent/>
                    <Icon icon="star" sem="danger" badge round transparent/>
                    <Icon icon="star" sem="warning" badge round transparent/>
                    <Icon icon="star" sem="info" badge round transparent/>
                    <Icon icon="star" sem="light" badge round transparent/>
                    <Icon icon="star" sem="dark" badge round transparent/>
                    <Icon icon="star" sem="primary" badge round colorInverted/>
                    <Icon icon="star" sem="secondary" badge round colorInverted/>
                    <Icon icon="star" sem="success" badge round colorInverted/>
                    <Icon icon="star" sem="danger" badge round colorInverted/>
                    <Icon icon="star" sem="warning" badge round colorInverted/>
                    <Icon icon="star" sem="info" badge round colorInverted/>
                    <Icon icon="star" sem="light" badge round colorInverted/>
                    <Icon icon="star" sem="dark" badge round colorInverted/>

                </p>

                <p>
                    <button>Button</button>
                </p>
                <p className="d-flex gap-2">
                    <Button/>
                    <Button sem="primary"/>
                    <Button sem="secondary"/>
                    <Button sem="success"/>
                    <Button sem="danger"/>
                    <Button sem="warning"/>
                    <Button sem="info"/>
                    <Button sem="light"/>
                    <Button sem="dark"/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="secondary"/>
                    <Button sem="primary" out/>
                    <Button sem="secondary" out/>
                    <Button sem="success" out/>
                    <Button sem="danger" out/>
                    <Button sem="warning" out/>
                    <Button sem="info" out/>
                    <Button sem="light" out/>
                    <Button sem="dark" out/>
                </p>
                <p className="">
                    <Button sem="outline-success" size="sm"/>
                    <Button sem="outline-success"/>
                    <Button sem="outline-success" size="lg"/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="primary"/>
                    <Button sem="primary" disabled/>
                    <Button sem="primary" action="toggle"/>
                    <Button sem="primary" action="toggle" active/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="primary" content="favorite"/>
                    <Button sem="primary" content="favorite" icon="favorite_border"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconBadge/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconBadge="round"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge="round"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round" iconBadge/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge="round"/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="primary" out content="favorite"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconBadge/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconBadge="round"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge="round"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge/>
                    <Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge="round"/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="warning" content="favorite"/>
                    <Button sem="warning" content="favorite" icon="favorite_border"/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconBadge/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconBadge="round"/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge="round"/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round" iconBadge/>
                    <Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge="round"/>
                </p>
                <p className="d-flex gap-2">
                    <Button sem="warning" out content="favorite"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconBadge/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconBadge="round"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                            iconBadge="round"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge/>
                    <Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                            iconBadge="round"/>
                </p>
                <div className="block"></div>

                <h3>Иконки</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Bootstrap-класс</th>
                        <th scope="col">Простая</th>
                        <th scope="col">Квадратный бейдж</th>
                        <th scope="col">Квадратный бейдж прозрачный</th>
                        <th scope="col">Квадратный бейдж инвертированный</th>
                        <th scope="col">Квадратный бейдж инвертированный прозрачный</th>
                        <th scope="col">Круглый бейдж</th>
                        <th scope="col">Круглый бейдж прозрачный</th>
                        <th scope="col">Круглый бейдж инвертированный</th>
                        <th scope="col">Круглый бейдж инвертированный прозрачный</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">CSS-классы</th>
                        <td>.Icon</td>
                        <td>.Icon.Icon_badge.Icon_badge-square</td>
                        <td>.Icon.Icon_badge.Icon_badge-square.Icon_badge-transparent-icon</td>
                        <td>.Icon.Icon_badge.Icon_badge-square.Icon_bg-dark(.Icon_bg-light).Icon_badge-color-inverted</td>
                        <td>.Icon.Icon_badge.Icon_badge-square.Icon_bg-dark(.Icon_bg-light).Icon_badge-color-inverted.Icon_bg-dark.Icon_badge-transparent-icon</td>
                        <td>.Icon.Icon_badge.Icon_badge-round</td>
                        <td>.Icon.Icon_badge.Icon_badge-round.Icon_badge-transparent-icon</td>
                        <td>.Icon.Icon_badge.Icon_badge-round.Icon_bg-dark(.Icon_bg-light).Icon_badge-color-inverted</td>
                        <td>.Icon.Icon_badge.Icon_badge-round.Icon_bg-dark(.Icon_bg-light).Icon_badge-color-inverted.Icon_bg-dark.Icon_badge-transparent-icon</td>
                    </tr>
                    <tr>
                        <th scope="row">primary</th>
                        <td><Icon icon="star" sem="primary"/></td>
                        <td><Icon icon="star" sem="primary" badge/></td>
                        <td><Icon icon="star" sem="primary" badge transparent/></td>
                        <td><Icon icon="star" sem="primary" badge colorInverted/></td>
                        <td><Icon icon="star" sem="primary" badge colorInverted transparent/></td>
                        <td><Icon icon="star" sem="primary" badge round/></td>
                        <td><Icon icon="star" sem="primary" badge round transparent/></td>
                        <td><Icon icon="star" sem="primary" badge round colorInverted/></td>
                        <td><Icon icon="star" sem="primary" badge round colorInverted transparent/></td>
                    </tr>
                    <tr>
                        <th scope="row">warning</th>
                        <td><Icon icon="star" sem="warning"/></td>
                        <td><Icon icon="star" sem="warning" badge/></td>
                        <td><Icon icon="star" sem="warning" badge transparent/></td>
                        <td><Icon icon="star" sem="warning" badge colorInverted/></td>
                        <td><Icon icon="star" sem="warning" badge transparent/></td>
                        <td><Icon icon="star" sem="warning" badge round/></td>
                        <td><Icon icon="star" sem="warning" badge round transparent/></td>
                        <td><Icon icon="star" sem="warning" badge round colorInverted/></td>
                        <td><Icon icon="star" sem="warning" badge round colorInverted transparent/></td>
                    </tr>
                    </tbody>
                </table>

            </div>
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
