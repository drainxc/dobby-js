import * as S from "./styles";
import { useEffect, useState } from "react";
import { fillZero } from "../../../Library/Function/fillzero";

export default function Time() {
  const now = new Date();
  const [count, setCount] = useState(0);
  const [time, setTime] = useState({
    year: "0",
    month: "0",
    day: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  counting();

  useEffect(() => {
    // setTime({
    //   year: fillZero(2022 - now.getFullYear()),
    //   month: fillZero(3 - now.getMonth() - 1),
    //   day: fillZero(14 - now.getDate()),
    //   hours: fillZero(14 - now.getHours() - 1),
    //   minutes: fillZero(60 - now.getMinutes() - 1),
    //   seconds: fillZero(60 - now.getSeconds()),
    // });
    let days;
    if (now.getMonth - 1 === 2) {
      days = 28;
    } else if (now.getMonth - 1 <= 7) {
      if ((now.getMonth - 1) % 2 === 1) {
        days = 31;
      } else {
        days = 30;
      }
    } else {
      if ((now.getMonth - 1) % 2 === 0) {
        days = 31;
      } else {
        days = 30;
      }
    }
    setTime({
      year: fillZero(2023 - now.getFullYear()),
      month: fillZero(9 - now.getMonth() - 1),
      day: fillZero(days - now.getDate() - 1),
      hours: fillZero(24 - now.getHours() - 1),
      minutes: fillZero(60 - now.getMinutes() - 1),
      seconds: fillZero(60 - now.getSeconds()),
    });
  }, [count]);

  function counting() {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }

  return (
    <>
      <S.Time>
        <div>
          {time.year} : {time.month} : {time.day} : {time.hours} :{" "}
          {time.minutes} : {time.seconds}
        </div>
      </S.Time>
    </>
  );
}
