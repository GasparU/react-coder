import Item from "./Item";

export default function ItemList({ result }) {
    return (
        <div className="card">
            {result.map((item, id) => (
                <div className="item" key={id}>
                    <Item item={item}></Item>
                </div>
            ))}
        </div>

    )
}
