import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let isScheduelMeetingSuccess = false;

export const handleScheduelMeeting = (event) => {
  event.preventDefault();

  if (isScheduelMeetingSuccess) {
    isScheduelMeetingSuccess = !isScheduelMeetingSuccess;
    return toastError("Slot not available!");
  }

  isScheduelMeetingSuccess = !isScheduelMeetingSuccess;

  return toastSuccess("Slot booked!");
};

export const toastError = (message) => {
  return toast.error(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

export const toastSuccess = (message) => {
  return toast.success(message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
  });
};

export const handleSortBy = (sortBy, selectedData, employeesData) => {
  const { label } = selectedData;

  let filteredData;

  switch (sortBy) {
    case "location":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.location === label
      );
      break;

    case "position":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.position === label
      );
      break;

    case "department":
      filteredData = employeesData.filter(
        (employeeData) => employeeData.department === label
      );
      break;

    default:
      break;
  }

  return filteredData;
};
