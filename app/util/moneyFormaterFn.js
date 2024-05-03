export default function moneyFormaterFn(value){
    const newValue = (Math.round(value*100)/100).toFixed(2);
    return `$${newValue}`;
}