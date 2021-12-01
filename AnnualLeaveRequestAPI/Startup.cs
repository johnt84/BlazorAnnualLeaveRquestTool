using AnnualLeaveRequest.Shared;
using AnnualLeaveRequestAPI.Interfaces;
using AnnualLeaveRequestAPI.Logic;
using AnnualLeaveRequestDAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace AnnualLeaveRequestAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "AnnualLeaveRequestAPI", Version = "v1" });
            });

            var sqlConnectionConfiguration = new SqlConnectionConfiguration(Configuration.GetConnectionString("AnnualLeaveRequestDB"));
            services.AddSingleton(sqlConnectionConfiguration);

            services.AddSingleton<AnnualLeaveRequestDataAccess>();

            services.AddSingleton<IAnnualLeaveRequestLogic, AnnualLeaveRequestLogic>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "AnnualLeaveRequestAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}