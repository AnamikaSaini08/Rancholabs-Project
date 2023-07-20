export const checkIsGameWin = (filterBatteryPosition : [number,number][]):boolean=>{
    if(filterBatteryPosition.length){
      return false;
    }
    return true;
  }