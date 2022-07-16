import React from "react";
import { Item } from "./style";

export interface Props {
    index: number,
    click: { "index": number },
    setClick: React.Dispatch<React.SetStateAction<{ "index": number }>>
    hasPassed?: boolean,
    isActive?: boolean,
    content: string
}

const TimeItem: React.FC<Props> = ({
    index,
    click,
    setClick,
    hasPassed,
    isActive,
    content
}) => {
    function handleSetActive() {
        setClick({ "index": index })
    }

    return (
        <Item
            onClick={handleSetActive}
            index={index}
            click={click}
            setClick={setClick}
            hasPassed={hasPassed}
            isActive={isActive}
            className={isActive ? "active" : ""}
            content={content}
        ></Item>
    )
}

export default TimeItem