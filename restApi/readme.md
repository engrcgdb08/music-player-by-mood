# How to run?
dotnet tool install -g dotnet-ef
dotnet ef database update
dotnet build
dotnet run

# test 

(async () => {
  const rawResponse = await fetch('http://localhost:5125/api/UserItems', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: '1111', password: '123456',email:'aaa@gmail.com'})
  });
  const content = await rawResponse.json();

  console.log(content);
})();