using MoviesAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//AddScoped - A new instance Once every Http request, if classes need info from InMemoryRepository it will get it
//AddTransient - A new instance of ever InMemoryRepository will occur
//AddSingleton - A ONE TIME instance throuth all the server life till it down/restart
builder.Services.AddScoped<IRepository, InMemoryRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//use the Routing
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
