import axios from "axios";
import { isAfter, add } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { DayComponent, NightComponent } from ".";

export default function TimeCard() {
  const { data, isLoading } = useSWR(`/api/time`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  // const [sunriseTime, sunsetTime] = useMemo(() => {
  //   if (!data) return [null, null];

  //   return [new Date(data.results.sunrise), new Date(data.results.sunset)];
  // }, [data]);

  // const timeComponent = useMemo(() => {
  //   if (!data) return null;

  //   if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
  //     return <NightComponent />;
  //   }

  //   if (isAfter(new Date(), sunriseTime)) {
  //     return <DayComponent />;
  //   }

  //   return <NightComponent />;
  // }, [data, sunriseTime, sunsetTime]);
  
  const [sunriseTime, sunsetTime, timeComponent] = useMemo(() => {
    if (!data) return [null, null, null];
  
    const sunriseTime = new Date(data.results.sunrise);
    const sunsetTime = new Date(data.results.sunset);
  
    let timeComponent;
    if (isAfter(new Date(), add(sunsetTime, { hours: 1 }))) {
      timeComponent = <NightComponent />;
    } else if (isAfter(new Date(), sunriseTime)) {
      timeComponent = <DayComponent />;
    } else {
      timeComponent = <NightComponent />;
    }
  
    return [sunriseTime, sunsetTime, timeComponent];
  }, [data]);
  
  return (
    <div className={`rounded-3xl flex relative overflow-hidden col-span-2`}>
      {timeComponent}
    </div>
  );
}
