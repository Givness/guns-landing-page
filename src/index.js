import React from 'react';
import ReactDOM from 'react-dom/client';
import RPG from './img/RPG.png';
import AKM from './img/AKM.png';
import Glock from './img/Glock.png';
import bg from './img/bg.jpg';

const root = ReactDOM.createRoot(document.getElementById('root'));

const gunsOffer = [
    {
        "title": "Вам подойдёт РПГ",
        "img": `${RPG}`,
        "text": `Разновидность индивидуального стрелкового оружия (гранатомёт),
                предназначенная для уничтожения танков, броневых и иных целей реактивными гранатами.
                В настоящее время является средством стрелков (пехоты) не только для борьбы с броневым и танковым вооружением и техникой противника,
                но и для уничтожения огневых точек и прочих укреплений.
                Развитие РПГ приблизило стрелковые (пехотные) части по огневой мощи к бронетанковым и мотострелковым войскам.`
    },
    {
        "title": "Вам подойдёт Автомат Калашникова",
        "img": `${AKM}`,
        "text": `Автомат, принятый на вооружение в СССР в 1949 году;
                индекс ГРАУ — 56-А-212. Был сконструирован в 1947 году М. Т. Калашниковым после провала предыдущего образца,
                АК-46, на конкурсных испытаниях 1946 года. В АК использованы технические решения, позаимствованные у других конструкторов.
                АК и его модификации являются самым распространённым стрелковым оружием в мире,
                он включён в Книгу рекордов Гиннесса: насчитывается более 100 млн единиц этого автомата,
                он состоит на вооружении 106 стран мира.`
    },
    {
        "title": "Вам подойдёт Glock 17",
        "img": `${Glock}`,
        "text": `Австрийский пистолет, разработанный фирмой Glock для нужд Вооружённых сил Австрии.
                Глок 17 стал первым образцом вооружения, разработанным этой фирмой.
                Получившийся в результате образец оказался довольно удачным и удобным для применения,
                благодаря чему позднее он был принят на вооружение Вооружённых сил Австрии под обозначением Р80.
                Благодаря своим боевым качествам и надёжности получил широкое распространение в качестве гражданского оружия самообороны.`
    }
];

function CustomLabel(props) {
    return (
        <h1 style={{
            color: "white",
            textAlign: "center"
        }}>
            {props.text}
        </h1>
    );
}

function CustomButton(props) {
    return (
        <div style={{
            backgroundColor: "khaki",
            border: "none",
            borderRadius: "5px",
            padding: "1px",
            margin: "5px auto",
            width: "15%",
            userSelect: "none",
            cursor: "pointer"
        }} onClick={props.onClick}>
            <p style={{
                margin: "14px auto",
                textAlign: "center",
                fontSize: "2em",
                fontWeight: "bold"
            }}>{props.text}</p>
        </div>
    );
}

function MainBlock(props) {
    return (
        <div style={{
            margin: "10% 0px"
        }}>
            <p style={{
                color: "white",
                textAlign: "center",
                fontSize: "4em",
                fontWeight: "bold"
            }}>Вы хотите купить оружие?</p>
            <p style={{
                color: "white",
                textAlign: "center",
                fontSize: "4em",
                fontWeight: "bold"
            }}>Тогда вам к нам!</p>
            <CustomButton text="Купить сейчас!" onClick={() => {
                let url = window.location.href;
                window.location.href = "#callback";
                window.history.replaceState(null,null,url);
            }}/>
        </div>
    );
}

function ChooseType(props) {
    const [chooseState, changeState] = React.useState(1);

    const press = (newState) => {
        changeState(newState);
    };

    function TypeButton(propsButton) {
        return (
            <div style={{
                backgroundColor: chooseState == propsButton.newState ? "khaki" : "darkgray",
                borderRadius: "5px 5px 0px 0px",
                width: "100%",
                textAlign: "center",
                userSelect: "none",
                cursor: "pointer"
            }} onClick={() => press(propsButton.newState)}>
                <h2>{propsButton.text}</h2>
            </div>
        );
    }
    
    function Offer(props) {
        return (
            <div style={{
                display: "flex",
                backgroundColor: "khaki",
                borderRadius: "0px 0px 5px 5px",
                width: "45%",
                margin: "0px auto"
            }}>
                <div style={{
                    margin: "10px",
                    width: "30%"
                }}>
                    <img src={props.image} style={{
                    borderRadius: "5px",
                    height: "100%",
                    width: "100%"
                }}/>
                </div>
                <div style={{
                    margin: "10px",
                    width: "70%"
                }}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ margin: "3% 0px" }}>
            <CustomLabel text="Какие стволы вам больше нравятся?" />
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 33%)",
                width: "45%",
                margin: "0px auto",
                justifyContent: "space-between"
            }}>
                <TypeButton text="Большие пушки" newState="0"/>
                <TypeButton text="Хочу автомат" newState="1"/>
                <TypeButton text="Мне поменьше" newState="2"/>
            </div>
            <Offer title={gunsOffer[chooseState]["title"]} image={gunsOffer[chooseState]["img"]} text={gunsOffer[chooseState]["text"]} />
        </div>
    );
}

function Callback(props) {

    const id = React.useId();

    function CustomInput(props) {

        return (
            <div style={{
                backgroundColor: "lightgray",
                margin: "10px 0px",
                borderRadius: "5px"
            }}>
                <input type="text" style={{
                    fontSize: "2em",
                    fontWeight: "bold",
                    backgroundColor: "transparent",
                    border: "none",
                    borderBottom: "solid 3px black",
                    margin: "10px",
                    outline: "none"
                }} placeholder={props.text}></input>
                <style>
                    {` ::placeholder { color: black }; user-select: none } `}
                </style>
            </div>
        );
    }

    return (
        <div style={{ margin: "3% 0px" }}>
            <CustomLabel text="Оставьте нам свой номер и мы с вами свяжемся!" />
            <form id={id} style={{
                display: "flex",
                borderRadius: "5px",
                width: "45%",
                margin: "0px auto",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <CustomInput text="Имя" />
                <CustomInput text="Телефон" />
            </form>
            <CustomButton text="Позвоните мне!" onClick={() => document.getElementById(id).reset()}/>
        </div>
    );
}

function Footer(props) {
    return (
        <div style={{
            backgroundColor: "rgb(50, 50, 50)",
            padding: "1px",
            textAlign: "center",
            marginTop: "5%"
        }}>
            <h4 style={{ color: "dimgray" }}>&copy; SimpleGunsStore.ru, 2024</h4>
            <h4 style={{ color: "dimgray" }}>Contact us:&nbsp;
                <a href="mailto:example@examplemail.com">
                    example@examplemail.com
                </a>
            </h4>
        </div>
    );
}

root.render(
    <>
        <style jsx global>{`body{ margin: 0px; padding: 0px; background-color: black; background-image: url(${bg}); background-repeat: no-repeat; font-family: sans-serif; }`}</style>
        <p style={{
            color: "white",
            textAlign: "center",
            fontSize: "2em"
        }}>SimpleGunsStore.ru</p>
        <MainBlock />
        <ChooseType />
        <br />
        <a name="callback" style={{ textDecoration: "none" }}>
            <Callback />
        </a>
        <Footer />
    </>
);