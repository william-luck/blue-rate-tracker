
function BlueRateValue({ blue }) {

    const dateString = new Date(blue.updated).toString()

    return (
        <div>
            <h1>Current blue rate: {blue.rate.value_avg}</h1>
            <p>Last updated: {dateString} </p>
        </div>
    )

}

export default BlueRateValue;