# Annual Leave Request Tool
Simple Annual Leave Request Tool.  Web app developed 5 ways - WebForms, MVC, RazorPages and Blazor (WASM/Server).

* Allows users to create, update or delete annual leave requests.  
* The Annual leave requests are saved and read from a SQLServer database using an ORM (default is Dapper) in the DAL (Data Access Layer) project  
* There are two DAL projects
  * Dapper ORM
  * Entity Framework 6 ORM
* There are 6 GUI projects (web application frameworks)
  *  Blazor Server Dapper/.Net 8 (uses Dapper DAL to query DB)
  *  Blazor Server EF/.Net 8 (uses EF DAL to query DB)
  *  Blazor WebAssembly/.Net 8 (uses Restful Web API project)
  *  MVC/.Net 8  (uses Dapper DAL to query DB)
  *  Razor Pages/.Net 8 (uses Dapper DAL to query DB)
  *  WebForms/.Net 4.8 (uses Restful Web API project)
* There are 2 Restful Web API projects (both use Dapper DAL to query DB)
  * .Net 8 with controllers (uses MediatR to communicate with Dapper ORM DAL project)
  * .Net 8 Minimal API (uses MediatR to communicate with Dapper ORM DAL project)
* There is a SQLServer database project which can be used to set up an AnnualLeave DB on SSMS which can be used by the Annual Leave Request tool
* Live Blazor Server web app is deployed to an Azure web app and the database is deployed to an Azure SQL Database

## Blazor Server App

### Overview Page

![](Images/OverviewPage.png)

### Create Page

![](Images/CreatePage.png)

### Edit Page

![](Images/EditPage.png)
