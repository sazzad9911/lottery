import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string; // The target date string in a format recognized by Date.parse()
}

const TimeCounter: React.FC<CountdownProps> = ({ targetDate }) => {
  const language = useSelector((state: RootState) => state.language.language);
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];
  const checkLang = (interval: string) =>
    language === "en"
      ? `${
          interval === "days"
            ? "D"
            : interval == "hours"
            ? "H"
            : interval == "minutes"
            ? "M"
            : "S"
        }`
      : `${
          interval === "days"
            ? "দিন"
            : interval == "hours"
            ? "ঘণ্টা"
            : interval == "minutes"
            ? "মিনিট"
            : "সেকেন্ড"
        }`;

  Object.entries(timeLeft).forEach(([interval, value]) => {
    timerComponents.push(
      <span key={interval}>
        {value} {checkLang(interval)}{" "}
      </span>
    );
  });

  return (
    <div>
      {+new Date(targetDate) - +new Date() > 0 ? (
        <div>{timerComponents}</div>
      ) : (
        <span>{language=="en"?"Time's up!":"সময় শেষ"}</span>
      )}
    </div>
  );
};

export default TimeCounter;
