import "./DataPoint.css";
type dataProps = {
    Name: string,
    Value: number
}

const DataPoint =(props: dataProps) => {
    return (
        <div className="dataPoint">
            <h1>{props.Value.toString()}</h1>
            <h3>{props.Name} </h3>
        </div>
    );
}

export default DataPoint;