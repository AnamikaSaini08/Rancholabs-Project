import Swal from "sweetalert2";

export const checkIsGameWin = (filterBatteryPosition : [number,number][]):boolean=>{
    if(filterBatteryPosition.length){
      return false;
    }
    return true;
  }

  export function handleGameResult(
    status: string,
    message: string,
    icon: 'success' | 'error' | 'warning' | 'info' | 'question',
    result: string,
    setIsNextLevel: React.Dispatch<React.SetStateAction<boolean>>
  ) {
      Swal.fire({
        icon: icon,
        title: status,
        text: message,
        confirmButtonText: result,
        showCancelButton: true,
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          setIsNextLevel(true);
        }
      });
  }