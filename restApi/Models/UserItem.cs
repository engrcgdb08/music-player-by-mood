namespace UserApi.Models;

public class UserItem
{
    public long Id { get; set; }
    public string? username { get; set; }
    public string? email { get; set; }
    public string? password { get; set; }
    public DateTime created_at { get; set; }
}