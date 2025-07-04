package com.example.rest.webservices.restful_web_services.user;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;

@Entity(name = "user_details")
public class User {
	
	protected User() {
		
	}
	@Id
	@GeneratedValue
	private Integer id;
	
	@Size(min=2, message="Name should atleast have two words")
	@JsonProperty("user_name")
	private String name;
	
	@Past(message="Add a valid birthdate")
	@JsonProperty("birth_date")
	private LocalDate birthDate;

	@OneToMany(mappedBy="user")
	@JsonIgnore
	private List<Post> posts;
	
	public User(Integer id, String name, LocalDate birthDate) {
		super();
		this.id = id;
		this.name = name;
		this.birthDate = birthDate;
	}
	public Integer getId() {
		return id;
	}
	public String getName() {
		return name;
	}
	public LocalDate getBirthDate() {
		return birthDate;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name="+name+", birthDate="+birthDate+ "]";
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}
	public List<Post> getPosts() {
		return posts;
	}
	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}
	
}


