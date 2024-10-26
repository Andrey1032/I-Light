import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({
    data,
    icon = false,
    button = false,
    checker = false,
}) {
    const [isActive, setIsActive] = useState(0);
    return (
        <div className="section__catalog-menu catalog-menu">
            {data?.map((dataItem, id) => (
                <AccordionItem
                    key={id}
                    isActive={isActive === id}
                    setIsActive={() => setIsActive(id)}
                    data={dataItem}
                    icon={icon}
                    button={button}
                    checker={checker}
                />
            ))}
        </div>
    );
}
