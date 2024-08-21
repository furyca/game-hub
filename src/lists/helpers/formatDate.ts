export const getToday = () => {
  const d = new Date().getDate().toString().padStart(2, "0");
  const m = (new Date().getMonth() + 1).toString().padStart(2, "0");
  const y = new Date().getFullYear();
  return `${y}-${m}-${d}`;
};

export const getLastMonth = () => {
  const d = new Date().getDate().toString().padStart(2, "0");
  const m = new Date().getMonth().toString().padStart(2, "0");
  const y = new Date().getFullYear();
  return `${y}-${m}-${d}`;
};

export const getLastWeek = () => {
  let d = new Date().getDate();
  let m = new Date().getMonth();
  let y = new Date().getFullYear();

  if (d > 7) {
    d -= 7;
    m++;
  } else {
    if (m === 1) {
      if (y % 4 === 0) {
        d = 29 - (7 - d);
      } else {
        d = 28 - (7 - d);
      }
    } else if (m === 3 || m === 5 || m === 8 || m === 10) {
      d = 30 - (7 - d);
    } else {
      d = 31 - (7 - d);
      if (m === 0) {
        y--;
      }
    }
  }

  return `${y}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
};

export const getNextWeek = () => {
  let d = new Date().getDate();
  let m = new Date().getMonth() + 1;
  let y = new Date().getFullYear();

  if (m === 1) {
    if (y % 4 === 0) {
      if (d > 22) {
        m++;
        d = 7 + d - 29;
      }
    } else if (d > 21) {
      m++;
      d = 7 + d - 28;
    } else {
      d += 7;
    }
  } else if (m === 3 || m === 5 || m === 8 || m === 10) {
    if (d > 23) {
      m++;
      d = 7 + d - 30;
    } else {
      d += 7;
    }
  } else {
    if (d > 24) {
      if (m === 11) {
        y++;
        m = 0;
      } else {
        m++;
      }
      d = 7 + d - 31;
    } else {
      d += 7;
    }
  }

  return `${y}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
};

// export const getThisMonth = () => {
//   const m = (new Date().getMonth() + 1).toString().padStart(2, "0");
//   const y = new Date().getFullYear();
//   let endDay = "31";
//   if (+m === 2) {
//     if (y % 4 === 0) {
//       endDay = "29";
//     } else {
//       endDay = "28";
//     }
//   } else if (+m === 4 || +m === 6 || +m === 9 || +m === 11) {
//     endDay = "30";
//   }
//   return `${y}-${m}-01,${y}-${m}-${endDay}`;
// };

export const getThisYear = () => {
  const y = new Date().getFullYear();
  return `${y}-01-01,${y}-12-31`;
};

//21 months: 6 past, 14 future
export const getCalendar = () => {
  const today = new Date();
  let monthNames = [];

  let i = -7;
  while (i < 14) {
    i++;
    let y = today.getFullYear();
    let m = today.getMonth() + i;
    const newDate = new Date(y, m);

    if (m < 0) {
      y--;
    } else if (m > 11) {
      y++;
      m = m % 12;
    }
    const dateName = newDate.toLocaleString("en-GB", { month: "short" });
    const monthString = (m + 1).toString().padStart(2, "0")
    const dateValue = `${y}-${monthString}-01,${y}-${monthString}-31`;

    monthNames.push({ dateName, dateValue });
  }

  return monthNames;
};
