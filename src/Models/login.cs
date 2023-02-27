using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data.SqlClient;
using System.Security.Cryptography.X509Certificates;

namespace aidchord.Pages.Client
{
    public class IndexModel : PageModel
    {

        public List<Users> listUsers = new List<Users>();
        public void OnGet()
        {

            try
            {
                String connectionString = "Data Source=.\\SQLEXPRESS;Initial Catalog=aidchorddb;Integrated Security=True";
                using (SqlConnection connection = new SqlConnection(connectionString)) 
                {
                    connection.Open();
                    String sql  = "SELECT * FROM Users";
                    using (SqlCommand command = new SqlCommand(sql, connection)) 
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                Users users = new Users();
                                users.userID = reader.GetInt32(0);
                                users.fullName = reader.GetString(1);
                                users.contactNum =  reader.GetString(2);
                                users.email = reader.GetString(3);
                                users.username = reader.GetString(4);
                                users.password = reader.GetString(5);
                                users.confirmPassword = reader.GetString(6);

                                listUsers.Add(users);

                            }
                        }
                    }
                }
            
            }
            catch (Exception ex)
            {
                Console.WriteLine("Exception" + ex.ToString());
            }
        }
    }

    public class Users 
    {
        public int userID;
        public String fullName;
        public String contactNum;
        public String email;
        public String username;
        public String password;
        public String confirmPassword;
    
    }
}
