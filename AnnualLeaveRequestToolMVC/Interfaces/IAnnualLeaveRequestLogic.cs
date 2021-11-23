﻿using AnnualLeaveRequestToolMVC.Models;
using AnnualLeaveRequestToolMVC.Models.ViewModels;

namespace AnnualLeaveRequestToolMVC.Interfaces
{
    public interface IAnnualLeaveRequestLogic
    {
        AnnualLeaveRequestOverviewViewModel GetRequestsForYear(int year);
        AnnualLeaveRequestOverviewModel GetRequest(int annualLeaveRequestID);
        AnnualLeaveRequestOverviewModel Create(AnnualLeaveRequestOverviewModel model);
        AnnualLeaveRequestOverviewModel Update(AnnualLeaveRequestOverviewModel model);
        void Delete(int annualLeaveRequestId);
        AnnualLeaveRequestCreateViewModel GetCreateViewModelForCreate();
        AnnualLeaveRequestCreateViewModel GetCreateViewModelForEdit(int annualLeaveRequestID);
    }
}
