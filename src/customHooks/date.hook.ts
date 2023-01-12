
export const useCustomDate =(date:string)=>{

  const customDate = new Date(date)

  const day = customDate.getDate();
  const month = customDate.toLocaleString('en-US', { month: 'long' });
  const year = customDate.getFullYear();

  const daySuffix = function(day:number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  return {day,month,year,daySuffix}
}
