import React from "react";
import "./index.css";
import ListWrapper from "../src/components/ListWrapper/ListWrapper";
import mamaIStetoskopImage from "../src/assets/images/mamaistetoskop.jpg";
import lukaszBokImage from "../src/assets/images/lukaszbok.jpg";
import kasiaSawickaImage from "../src/assets/images/kasiasawicka.jpg";

const initialStateItems = [
    {
        image: mamaIStetoskopImage,
        name: "Mama i stetoskop",
        description:
            "Lekarka - Kasia Woźniak - przez swój kanał przekazuje medyczną wiedzę w przyjemny w odbiorze sposób",
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
            "Pedagog z zamiłowaniem do psychologii. Warto śledzić jej kanał w trosce o swoje zdrowie psychiczne w czasach ogólnoświatowej paniki",
        link: "https://www.youtube.com/channel/UC4FfcWV91rhP00dur0XiZzg/videos",
    },
];

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    };

    render() {
        return (
            <div>
                <ListWrapper items={this.state.items} />
            </div>
        );
    }
}

export default App;
