﻿<%@ Page Async="true" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Edit.aspx.cs" Inherits="AnnualLeaveRequestToolWebForms.AnnualLeave.Edit" %>

<%@ Register TagPrefix="uc" TagName="ErrorMessage" Src="~/Controls/ErrorMessage.ascx" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <h1>Edit Annual Leave Request</h1>

     <% if (Model == null || Model.AnnualLeaveRequestID == 0)
        { %>
            <div style="color:red; padding-bottom: 20px">
                <ul>
                    <li>Cannot edit this Annual Leave Request</li>
                </ul>
            </div>

            <div class="form-actions no-color esh-link-list" style="padding-top: 20px">
                <a href="/AnnualLeave/Overview" class="esh-link-item">
                    Back to Overview
                </a>
            </div>

    <%
        return;
    } %>

    <%
    if(IsError)
    { %>
        <uc:ErrorMessage id="ErrorMessage" runat="server" />   
    <% 
    }
    %>

    <div class="form-group">
        Start Date:
        <asp:TextBox ID="txtStartDate" runat="server"></asp:TextBox>
    </div>

    <div class="form-group">    
        Return Date:
        <asp:TextBox ID="txtReturnDate" runat="server"></asp:TextBox>
    </div>

    <div class="form-group">
        Leave to be Paid/Unpaid:
        <asp:DropDownList ID="ddlPaidLeaveType" runat="server"></asp:DropDownList>
    </div>

    <div class="form-group">
        Leave Type:
        <asp:DropDownList ID="ddlLeaveType" runat="server"></asp:DropDownList>
    </div>

    <div class="form-group">
        Notes:
        <asp:TextBox ID="txtNotes" runat="server"></asp:TextBox>
    </div>

    <div>
        <asp:Button ID="btnSubmit" Text="Submit" runat="server" OnClick="btnSubmit_Click" />
    </div>

    <div class="form-actions no-color esh-link-list" style="padding-top: 20px">
        <a href="/AnnualLeave/Details?annualLeaveRequestID=<%= Model.AnnualLeaveRequestID %>" class="esh-link-item">
            Details
        </a>
        |
        <a href="/AnnualLeave/Overview?selectedYear=<%= Model.Year %>" class="esh-link-item">
            Back to Overview
        </a>
    </div>
</asp:Content>