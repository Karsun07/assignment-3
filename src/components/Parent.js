import { useState } from "react";
import Header from "./Header";
import Content from "./Content";

export default function Parent() {
    const [text, setText] = useState("");
    const [weight, setWeight] = useState("normal");
    const [size, setSize] = useState(16);
    const [fStyle, setFStyle] = useState("normal");
    const [align, setAlign] = useState("left");

    return (
        <>
            <Header
                setWeight={setWeight}
                setSize={setSize}
                setFStyle={setFStyle}
                setAlign={setAlign}
            />

            <Content
                text={text}
                setText={setText}
                weight={weight}
                size={size}
                fStyle={fStyle}
                align={align}
            />
        </>
    );
}