export default function Card(props) {
    console.log(props);

    return (
        <div className="card">
            <div className="card-detail">
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h4>$ {props.price}</h4>
            </div>
        </div>
    );
}