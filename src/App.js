import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header';
import Button from "./components/Header/Navbar/SearchForm/Button/Button";
import Icon from "./components/Header/Navbar/SearchForm/Icon/Icon";
import NavItem from "./components/Header/Navbar/SiteMenu/Nav/__NavItem/__NavItem";
import Nav from "./components/Header/Navbar/SiteMenu/Nav/Nav";

function App() {
    return (
        <div className="App">

            <Header/>

            <div className="container">
                <h3>Инлайн иконки</h3>
                <p className="simple-text">Lorem ipsum dolor sit amet, adipisicing elit. Ad alias aperiam
                    blanditiis distinctio dolorum,
                    laboriosam molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo
                    magni
                    numquam? <Icon icon="settings" badge sem="danger"/>Alias aut eius quibusdam quo reiciendis tempore
                    temporibus. A alias illo incidunt iste
                    maiores
                    laboriosam molestiae repellat ullam velit! A aut fuga iure natus repellat. Amet animi debitis illo
                    magni
                    numquam? Alias aut eius quibusdam quo reiciendis tempore temporibus. A alias illo incidunt iste
                    maiores
                    molestiae nisi tenetur unde voluptatem?
                    {/*<Icon icon="favorite"/> aperiam*/}
                    <Icon icon="login" sem="success" badge round/> Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Aspernatur at dicta eligendi, et eveniet
                    harum illo illum, in, modi neque nesciunt obcaecati odio quae quasi ratione<Icon icon="settings"
                                                                                                     badge
                                                                                                     sem="danger"/>reiciendis
                    sunt tempora
                    tempore ullam voluptatibus. Adipisci alias at aut consectetur cum deleniti dicta doloribus ducimus
                    eligendi enim error esse fugiat fugit, illum ipsam molestias numquam optio perferendis praesentium
                    quidem ratione similique tempore ullam!<Icon icon="favorite"/>At, cumque deleniti doloribus eius
                    expedita explicabo fuga
                    harum nesciunt nihil sed sit ullam. Dolore, illo nemo nesciunt nulla placeat ratione voluptatum?
                    Adipisci earum eius <Icon icon="favorite"/>fugit minima nisi possimus repellat temporibus, unde.
                    Aliquid at culpa delectus
                    doloribus impedit, tempora. Repudiandae! Lorem ipsum dolor sitA amet, consectetur adipisicing elit.
                    Assumenda dignissimos explicabo incidunt minima natus sit. Aliquam, culpa distinctio eos ipsa ipsum
                    iusto libero magnam nihil nobis officiis optio perspiciatis praesentium qui quia quidem quis quo rem
                    suscipit tenetur vitae! Ab ad aliquid animi architecto at commodi consequuntur debitis,
                    deserunt dicta distinctio dolore dolores ducimus ea eligendi facilis fugiat fugit ipsam molestiae
                    mollitia nisi officiis pariatur placeat porro quia ratione, recusandae reiciendis sed tempora
                    tempore ullam, velit vero voluptates? Ab alias architecto asperiores aspernatur autem cumque dicta
                    eos illo ipsam maiores minima molestiae nam obcaecati soluta temporibus velit, veniam voluptates?
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

                <h3>Иконки</h3>
                <table className="table">
                    <thead>
                    <tr className="table__head">
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
                    <tr className="table__head">
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
                        <td class="table-danger"><Icon icon="star" sem="primary" badge transparent/></td>
                        <td><Icon icon="star" sem="primary" badge colorInverted/></td>
                        <td><Icon icon="star" sem="primary" badge colorInverted transparent/></td>
                        <td><Icon icon="star" sem="primary" badge round/></td>
                        <td class="table-danger"><Icon icon="star" sem="primary" badge round transparent/></td>
                        <td><Icon icon="star" sem="primary" badge round colorInverted/></td>
                        <td><Icon icon="star" sem="primary" badge round colorInverted transparent/></td>
                    </tr>
                    <tr>
                        <th scope="row">warning</th>
                        <td><Icon icon="star" sem="warning"/></td>
                        <td><Icon icon="star" sem="warning" badge/></td>
                        <td class="table-danger"><Icon icon="star" sem="warning" badge transparent/></td>
                        <td><Icon icon="star" sem="warning" badge colorInverted/></td>
                        <td><Icon icon="star" sem="warning" badge colorInverted transparent/></td>
                        <td><Icon icon="star" sem="warning" badge round/></td>
                        <td class="table-danger"><Icon icon="star" sem="warning" badge round transparent/></td>
                        <td><Icon icon="star" sem="warning" badge round colorInverted/></td>
                        <td><Icon icon="star" sem="warning" badge round colorInverted transparent/></td>
                    </tr>
                    <tr className="table__head">
                        <th scope="row">Код</th>
                        <td>Icon icon="star" sem="warning</td>
                        <td>Icon icon="star" sem="warning" badge</td>
                        <td>Icon icon="star" sem="warning" badge transparent</td>
                        <td>Icon icon="star" sem="warning" badge colorInverted</td>
                        <td>Icon icon="star" sem="warning" badge transparent</td>
                        <td>Icon icon="star" sem="warning" badge round</td>
                        <td>Icon icon="star" sem="warning" badge round transparent</td>
                        <td>Icon icon="star" sem="warning" badge round colorInverted</td>
                        <td>Icon icon="star" sem="warning" badge round colorInverted transparent</td>
                    </tr>
                    </tbody>
                </table>

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
                    <Button sem="primary" content="dashboard" icon="dashboard"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconBadge/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconBadge="round"/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly/>
                    <Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    <Button sem="primary" content="dashboard" icon="dashboard" iconOnly btnForm="square"
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
                    <Button sem="warning" content="dashboard" icon="dashboard"/>
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

            </div>

            <h3>Кнопки</h3>
            <table className="table table-buttons">
                <thead>
                <tr className="table__head">
                    <th scope="col">Bootstrap-класс</th>
                    <th scope="col">Простая</th>
                    <th scope="col">С иконкой</th>
                    <th scope="col">С квадратной иконкой</th>
                    <th scope="col">С круглой иконкой</th>
                    <th scope="col">Только иконка</th>
                    <th scope="col">Только иконка квадратная</th>
                    <th scope="col">Только иконка квадратная с квадратной иконкой</th>
                    <th scope="col">Только иконка квадратная с круглой иконкой</th>
                    <th scope="col">Только иконка круглая</th>
                    <th scope="col">Только иконка круглая с квадратной иконкой</th>
                    <th scope="col">Только иконка круглая с круглой иконкой</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table__head">
                    <th scope="row">CSS-классы</th>
                    <td>.Button</td>
                    <td>.Button.Button_icon</td>
                    <td>.Button.Button_icon-badge-square</td>
                    <td>.Button.Button_icon-badge-round</td>
                    <td>.Button.Button_icon-only</td>
                    <td>.Button.Button_icon-only-square.</td>
                    <td>.Button.Button_icon-only-square.Button_icon-badge-square</td>
                    <td>.Button.Button_icon-only-square.Button_icon-badge-round</td>
                    <td>.Button.Button_icon-only-round.</td>
                    <td>.Button.Button_icon-only-round.Button_icon-badge-square</td>
                    <td>.Button.Button_icon-only-square.Button_icon-badge-round</td>
                </tr>
                <tr>
                    <th scope="row">primary</th>
                    <td><Button sem="primary" content="favorite"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconBadge="square"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconBadge="round"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="square"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="round"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="square"/></td>
                    <td><Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="round"/></td>
                </tr>
                <tr>
                    <th scope="row">outline-primary</th>
                    <td><Button sem="primary" out content="favorite"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconBadge="square"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconBadge="round"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    </td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="square"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="round"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    </td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="square"/></td>
                    <td><Button sem="primary" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="round"/></td>
                </tr>
                <tr>
                    <th scope="row">warning</th>
                    <td><Button sem="warning" content="favorite"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconBadge="square"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconBadge="round"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="square"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="round"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="square"/></td>
                    <td><Button sem="warning" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="round"/></td>
                </tr>
                <tr>
                    <th scope="row">outline-warning</th>
                    <td><Button sem="warning" out content="favorite"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconBadge="square"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconBadge="round"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"/>
                    </td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="square"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="square"
                                iconBadge="round"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"/>
                    </td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="square"/></td>
                    <td><Button sem="warning" out content="favorite" icon="favorite_border" iconOnly btnForm="round"
                                iconBadge="round"/></td>
                </tr>
                <tr className="table__head">
                    <th scope="row">Код</th>
                    <td>Button sem="primary" content="favorite"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconBadge="square"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconBadge="round"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                        iconBadge="square"
                    </td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="square"
                        iconBadge="round"
                    </td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"</td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                        iconBadge="square"
                    </td>
                    <td>Button sem="primary" content="favorite" icon="favorite_border" iconOnly btnForm="round"
                        iconBadge="round"
                    </td>
                </tr>
                </tbody>
            </table>

            <h3>Отзывчивые кнопки</h3>
            <table className="table table-buttons">
                <thead>
                <tr className="table__head">
                    <th scope="col">Bootstrap-класс</th>
                    <th scope="col">Простая кнопка</th>
                    <th scope="col">Кнопка, исчезающая на больших экранах</th>
                    <th scope="col">Кнопка, появляющаяся на больших экранах</th>
                    <th scope="col">Кнопка с иконкой</th>
                    <th scope="col">Иконочная кнопка, текст появляется на больших экранах</th>
                    <th scope="col">Иконочная кнопка, становится текстовой (без иконки) на больших экранах</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table__head">
                    <th scope="row">CSS-классы</th>
                    <td>.Button</td>
                    <td>.Button</td>
                    <td>.Button</td>
                    <td>.Button.Button_icon</td>
                    <td>.Button.Button_icon</td>
                    <td>.Button.Button_icon</td>
                </tr>
                <tr>
                    <th scope="row">outline-warning</th>
                    <td><Button sem="primary" out content="Search"/></td>
                    <td><Button sem="primary" out content="Search" btnInvis="lg"/></td>
                    <td><Button sem="primary" out content="Search" btnVis="lg"/></td>
                    <td><Button sem="primary" out content="Search" icon="search"/></td>
                    <td><Button sem="primary" out content="Search" icon="search" iconOnly textVis="lg"/></td>
                    <td><Button sem="primary" out content="Search" icon="search" iconOnly textVis="lg" iconInvis="lg"/>
                    </td>
                </tr>
                <tr>
                    <th scope="row">outline-warning</th>
                    <td><Button sem="warning" content="Sign in"/></td>
                    <td><Button sem="warning" content="Sign in" btnInvis="lg"/></td>
                    <td><Button sem="warning" content="Sign in" btnVis="lg"/></td>
                    <td><Button sem="warning" content="Sign in" icon="login"/></td>
                    <td><Button sem="warning" content="Sign in" icon="login" iconOnly textVis="lg"/></td>
                    <td><Button sem="warning" content="Sign in" icon="login" iconOnly textVis="lg" iconInvis="lg"/></td>
                </tr>
                <tr className="table__head">
                    <th scope="row">Код</th>
                    <td>Button sem="warning" content="Sign in"</td>
                    <td>Button sem="warning" content="Sign in" btnInvis="lg"</td>
                    <td>Button sem="warning" content="Sign in" btnVis="lg"</td>
                    <td>Button sem="warning" content="Sign in" icon="login"</td>
                    <td>Button sem="warning" content="Sign in" icon="login" iconOnly textVis="lg"</td>
                    <td>Button sem="warning" content="Sign in" icon="login" iconOnly textVis="lg" iconInvis="lg"</td>
                </tr>
                </tbody>
            </table>

            <p>
                <Button/>
                <Button content="Выполнить"/>
                <Button content="Выполнить" sem="success" size="sm"/>
                <Button content="Выполнить" sem="success"/>
                <Button content="Выполнить" sem="success" size="lg"/>
                <Button content="Выполнить" sem="success" out/>
                <Button content="Выполнить" sem="danger" icon="settings" size="sm"/>
                <Button content="Выполнить" sem="success" icon="settings"/>
                <Button content="Выполнить" sem="danger" icon="settings" size="lg"/>
            </p>

            <h3>Меню</h3>
            <h4>Пункты меню</h4>

            <table className="table">
                <thead>
                <tr className="table__head">
                    <th scope="col">Bootstrap-класс</th>
                    <th scope="col">Без пропсов</th>
                    <th scope="col">С наименованием</th>
                    <th scope="col">Со ссылкой</th>
                    <th scope="col">Активный</th>
                    <th scope="col">Выключенный</th>
                    <th scope="col">В обертке li</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table__head">
                    <th scope="row">CSS-классы</th>
                    <td>.Nav__item</td>
                    <td>.Nav__item</td>
                    <td>.Nav__item</td>
                    <td>.Nav__item</td>
                    <td>.Nav__item</td>
                    <td>.Nav__item</td>
                </tr>
                <tr>
                    <th scope="row">outline-warning</th>
                    <td><NavItem/></td>
                    <td><NavItem content="Пункт"/></td>
                    <td><NavItem content="Яндекс" href="https://yandex.ru"/></td>
                    <td><NavItem content="Active" active/></td>
                    <td><NavItem content="Off" disabled/></td>
                    <td><div className="nav"><NavItem type="li"/></div></td>
                </tr>
                <tr className="table__head">
                    <th scope="row">Код</th>
                    <td>NavItem</td>
                    <td>NavItem content="Пункт"</td>
                    <td>NavItem content="Яндекс" href="https://yandex.ru"</td>
                    <td>NavItem content="Active" active</td>
                    <td>NavItem content="Off" disabled</td>
                    <td>NavItem type="li"</td>
                </tr>
                </tbody>
            </table>

            <p>
                <Nav/>
                <Nav pos="center"/>
                <Nav pos="right"/>
                <Nav vertical/>
                <Nav type="tabs"/>
                <Nav type="pills"/>
            </p>

            <div className="block"></div>

        </div>
    );
}

export default App;
