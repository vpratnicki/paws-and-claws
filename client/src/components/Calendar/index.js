import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, getJson, setOptions } from "@mobiscroll/react";

setOptions({
    theme: "material",
    themeVariant: "dark",
});

function Calendar() {
  const min = "2023-01-07T00:00";
  const max = "2023-07-07T00:00";

  const [datetimeLabels, setDatetimeLabels] = React.useState([]);
  const [datetimeInvalid, setDatetimeInvalid] = React.useState([]);



  const onPageLoadingDatetime = React.useCallback((event, inst) => {
    getDatetimes(event.firstDay, (bookings) => {
    setDatetimeLabels(bookings.labels);
    setDatetimeInvalid(bookings.invalid);
    });
  }, []);

  const getDatetimes = (d, callback) => {
    let invalid = [];
    let labels = [];

    getJson(
      "https://trial.mobiscroll.com/getbookingtime/?year=" +
        d.getFullYear() +
        "&month=" +
        d.getMonth(),
      (bookings) => {
        for (let i = 0; i < bookings.length; ++i) {
          const booking = bookings[i];
          const bDate = new Date(booking.d);

          if (booking.nr > 0) {
            labels.push({
              start: bDate,
              title: booking.nr + " SPOTS",
              textColor: "#e1528f",
            });
            invalid = [...invalid, ...booking.invalid];
          } else {
            invalid.push(d);
          }
        }
        callback({ labels: labels, invalid: invalid });
      },
      "jsonp"
    );
  };

//   const myLabels = React.useMemo(() => {
//     return [{
//         start: '2023-01-06',
//         textColor: '#e1528f',
//         title: '2 SPOTS'
//     }];
// }, []);

const myInvalid = React.useMemo(() => {
    return [{
        start: '2023-01-07T08:00',
        end: '2023-01-07T13:00'
    }, {
        start: '2023-01-07T15:00',
        end: '2023-01-07T17:00'
    }, {
        start: '2023-01-07T19:00',
        end: '2023-01-07T20:00'
    }];
}, []);


  return (
    <Page className="md-calendar-booking">
      <div className="mbsc-form-group">
        <div className="mbsc-form-group-title">Select date & time</div>
        <Datepicker
          display="anchored"
          controls={["calendar", "timegrid"]}
          calendarType="month"
          pages={1}
          calendarScroll="horizontal"
          showWeekNumbers={false}
          showOuterDays={false}
          touchUi={true}
          min={min}
          max={max}
          minTime="08:00"
          maxTime="19:59"
          stepMinute={60}
          width={null}
        //   labels={myLabels}
          invalid={myInvalid}
          onPageLoading={onPageLoadingDatetime}
          cssClass="booking-datetime"
        />
      </div>
    </Page>
  );
}

export default Calendar;
