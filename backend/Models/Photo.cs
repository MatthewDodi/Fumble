using System;

namespace backend.Models
{
  public class Photo
  {
    public int Id { get; set; }
    public string Url { get; set; }
    public string Description { get; set; }
    public DateTime DateAdded { get; set; }
    public bool isMain { get; set; }
  }
}