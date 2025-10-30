import { differenceInDays, formatDistance } from "date-fns";

    const today = new Date();

export function timeBetween(a: Date){
    return formatDistance(a, today, {
  addSuffix: true
});

}


export function renewalStatusStyle(date: Date){
const result = differenceInDays(
 today,
date
);


if (result > 0){
    return "#ff1a1a";
    
} else if (result < -14){
    return "#00C49F"
    
} else{
       return "#FFBB28";
}
        }
