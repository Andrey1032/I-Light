import React from "react";
import ListItem from "./ListItem";

export default function List(props) {
    return (
        <div className="list">
            {props.items?.map((item, id) => (
                <ListItem key={id} item={item} />
            ))}
        </div>
    );
}
