import { formatToLocalTime } from "../services/weatherServices";

function TimeLocation({ weather: { dt, timezone, name, country } }: any) {
    return (
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                    {formatToLocalTime(dt, timezone)}
                </p>
            </div>

            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">{`${name}, ${country}`}</p>
            </div>
        </div>
    );
}

export default TimeLocation;