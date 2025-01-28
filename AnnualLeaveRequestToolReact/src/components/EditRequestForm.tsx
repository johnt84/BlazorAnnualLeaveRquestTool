import { useState } from "react";

interface Props {
  request: AnnualLeaveRequest;
  handleEditRequest: (request?: AnnualLeaveRequest) => void;
  handleSaveEditRequest: (request: AnnualLeaveRequest) => void;
}

interface AnnualLeaveRequest {
  id: string;
  startDate: Date;
  returnDate: Date;
  numberOfDaysRequested: number;
  numberOfAnnualLeaveDaysRequested: number;
  numberOfPublicLeaveDaysRequested: number;
  numberOfDaysLeft: number;
  numberOfAnnualLeaveDaysLeft: number;
  numberOfPublicLeaveDaysLeft: number;
  paidLeaveType: string;
  leaveType: string;
  notes: string;
}

const EditRequestForm = ({
  request,
  handleEditRequest,
  handleSaveEditRequest,
}: Props) => {
  const [editRequest, setEditRequest] = useState<AnnualLeaveRequest>(request);

  const handleSaveClick = () => {
    if (editRequest === undefined) return;

    calculateDates();

    handleSaveEditRequest(editRequest);

    handleEditRequest(undefined);
  };

  const handleCancelClick = () => {
    handleEditRequest(undefined);
  };

  const calculateDates = () => {
    let numberOfDays = getNumberOfDaysBetweenTwoDate(
      editRequest.startDate,
      editRequest.returnDate
    );

    setEditRequest({
      ...editRequest,
      numberOfDaysRequested: numberOfDays,
      numberOfAnnualLeaveDaysRequested: numberOfDays,
    });
  };

  function getNumberOfDaysBetweenTwoDate(fromDate: Date, toDate: Date) {
    let differenceInTime = toDate.getTime() - fromDate.getTime();

    return Math.round(differenceInTime / (1000 * 3600 * 24));
  }

  return (
    <>
      <div>
        <label htmlFor="startDate">Start Date: </label>
        <input
          type="date"
          placeholder="Start Date"
          value={editRequest?.startDate.toString()}
          onChange={(e) =>
            setEditRequest({
              ...editRequest,
              startDate: new Date(e.target.value),
            })
          }
        />
        <label>{editRequest?.startDate.toString()}</label>
      </div>
      <div>
        <label htmlFor="returnDate">Return Date: </label>
        <input
          type="date"
          placeholder="Return Date"
          value={editRequest?.returnDate.toString()}
          onChange={(e) =>
            setEditRequest({
              ...editRequest,
              returnDate: new Date(e.target.value),
            })
          }
        />
        <label>{editRequest?.returnDate.toString()}</label>
      </div>
      <div>
        <label htmlFor="paidLeaveType">Paid Leave Type: </label>
        <input
          type="text"
          placeholder="Paid Leave Type"
          value={editRequest?.paidLeaveType}
          onChange={(e) =>
            setEditRequest({
              ...editRequest,
              paidLeaveType: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="leaveType">Leave Type: </label>
        <input
          type="text"
          placeholder="Leave Type"
          value={editRequest?.leaveType}
          onChange={(e) =>
            setEditRequest({
              ...editRequest,
              leaveType: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="notes">Notes: </label>
        <input
          type="text"
          placeholder="Notes"
          value={editRequest?.notes}
          onChange={(e) =>
            setEditRequest({
              ...editRequest,
              notes: e.target.value,
            })
          }
        />
      </div>
      <div>
        <button onClick={handleSaveClick}>Save</button>
        <button onClick={handleCancelClick}>Cancel</button>
      </div>
    </>
  );
};

export default EditRequestForm;
