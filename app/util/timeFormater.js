export default function timeFormater(time) {
    let newTime = time;
    if(time<10){
        newTime = "0" + time;
    }
    return newTime;
}