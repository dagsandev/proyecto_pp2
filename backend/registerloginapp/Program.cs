using Microsoft.EntityFrameworkCore;
using RegisterLoginApp.Data;
using RegisterLoginApp.Repository;
using RegisterLoginApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//CORS
builder.Services.AddCors(options => {
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500")
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

//Sql Server config
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

//Registro de authServices
builder.Services.AddScoped<AuthService>();

//Registro de UserRepository
builder.Services.AddScoped<IUserRepository, UserRepository>();

//Registro de ComicRepository
builder.Services.AddScoped<IComicRepository, ComicRepository>();

//Registro de UserService
builder.Services.AddScoped<IUserService, UserService>();

//Registro de ComicService
builder.Services.AddScoped<IComicService, ComicService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.UseStaticFiles();

app.MapControllers();

app.Run();
