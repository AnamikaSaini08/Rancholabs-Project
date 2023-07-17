import Swal from "sweetalert2";
import { IGameResult } from "../Interface/IGameResult";

export function showHintFunction(setShowHint: any) {
  Swal.fire({
    title: "Are You Tired?",
    text: "Do You Want To See Solution?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, See!",
  }).then((result) => {
    if (result.isConfirmed) {
      setShowHint(true);
    }
  });
}

export function handleGameResult(gameResultConfig: IGameResult) {
  if (gameResultConfig.hint) {
    Swal.fire({
      title: gameResultConfig.status,
      text: gameResultConfig.message,
      icon: gameResultConfig.icon,
      showCancelButton: true,
      confirmButtonText: gameResultConfig.result,
      cancelButtonColor: "#d33",
    });
  } else {
    Swal.fire({
      icon: gameResultConfig.icon,
      title: gameResultConfig.status,
      text: gameResultConfig.message,
      confirmButtonText: gameResultConfig.result,
      showCancelButton: true,
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        gameResultConfig.setIsNextLevel(true);
      }
    });
  }
}

export function resetAlert(setResetFlag: any) {
  Swal.fire({
    title: "Reset Task?",
    text: "You will lose the current code.",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Reset!",
    cancelButtonColor: "red",
  }).then((result) => {
    if (result.isConfirmed) {
      setResetFlag(true);
      Swal.fire({
        title: "Reset",
        text: "Your code is reset.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  });
}
