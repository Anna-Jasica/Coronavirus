import React from "react";
import "./index.css";
import ListWrapper from "../src/components/ListWrapper/ListWrapper";
import mamaIStetoskopImage from "../src/assets/images/mamaistetoskop.jpg";
import lukaszBokImage from "../src/assets/images/lukaszbok.jpg";
import kasiaSawickaImage from "../src/assets/images/kasiasawicka.jpg";
import Form from "../src/components/Form/Form";
import Title from "../src/components/Title/Title";

const initialStateItems = [
    {
        image: mamaIStetoskopImage,
        name: "Mama i stetoskop",
        description:
            "Kasia Woźniak to lekarka, która poprzez swój kanał przekazuje medyczną wiedzę w rzeczowy sposób.",
        link: "https://www.youtube.com/channel/UCd44ZaZE6QTcL9qU86xm56A/videos",
    },
    {
        image: lukaszBokImage,
        name: "Łukasz Bok",
        description:
            "Założyciel i naczelny redaktor Poinformowani.pl. Na jego mediach społecznościowych znajdziemy rzetelne dane dotyczące rozwoju epidemii w Polsce i na świecie.",
        link: "https://twitter.com/lukaszbok",
    },
    {
        image: kasiaSawickaImage,
        name: "Kasia Sawicka",
        description:
            "Pedagog z zamiłowaniem do psychologii. Warto śledzić jej kanał w trosce o swoje zdrowie psychiczne - szczególnie w czasach wzmożonej paniki.",
        link: "https://www.youtube.com/channel/UC4FfcWV91rhP00dur0XiZzg/videos",
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    };

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            link: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        };

        this.setState((prevState) => ({
            items: [...this.state.items, newItem],
        }));

        e.target.reset();
    };

    render() {
        return (
            <>
                <div id="header">
                    <Title>Polecane strony w czasach koronawirusa</Title>
                </div>
                <div id="mainContainer">
                    <Form submitFn={this.addItem} />
                    <ListWrapper items={this.state.items} />
                </div>
            </>
        );
    }
}

export default App;
