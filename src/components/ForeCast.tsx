import React, { useState } from "react";
import { iconUrlFromCode } from "../services/weatherServices";
import Chart from 'react-apexcharts'
import getWindowDimensions from '../services/windowDimensions'

function Forecast({ title, items }: any) {
    console.log(items);
    const [selectedDay, setSelectedDay] = useState("Today");
    const selectedDayData: any = [];
    // const selectedDayDataNames : any = [];
    console.log(selectedDay, "selectedDay");
    if (items[0].title === "01:00 AM") {
        items.map((item: any) => {
            selectedDayData.push(item.temp);
            // selectedDayDataNames.push(item.title);
        });
    }
    const { width, height } = getWindowDimensions();

    return (
        <div>
            <div className="flex items-center justify-start mt-6">
                <p className="text-white font-medium uppercase">{title}</p>
            </div>
            <hr className="my-2" />

            <div className="flex flex-row items-center justify-between text-white">

                {items.map((item: any, index: any) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center"
                        onClick={() => { setSelectedDay(item.title) }}
                    >
                        <p className="font-light text-sm">{item.title}</p>
                        <img
                            src={iconUrlFromCode(item.icon)}
                            className="w-12 my-1"
                            alt=""
                        />
                        <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
                    </div>
                ))}
            </div>
            <div className="block" >
                {
                    title === "hourly forecast" && (
                        <div className='m-7'>
                            <Chart
                                type='bar'
                                width={width - 250}
                                height={height - 250}
                                series={[
                                    { name: "Temperature", data: selectedDayData }
                                ]}

                                options={
                                    {
                                        title: {
                                            text: `Temperatures Chart`,
                                            style: { color: "white", fontSize: "26", fontWeight: "350" }
                                        }

                                    }
                                }
                            >
                            </Chart>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Forecast;