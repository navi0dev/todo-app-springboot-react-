package com.example.rest.webservices.restful_web_services.todo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Size;

@Entity
public class Todo {
	
	public Todo() {
		
	}
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Integer id;
		
		@Column(nullable=false)
		private String username;
		
		@Size(min=10, message="Enter atleast 10 characters")
		private String description;
		private LocalDate targetDate;
		private boolean done;
		
		public Todo(Integer id, String username, String description, LocalDate targetDate, boolean done) {
			super();
			this.id = id;
			this.username = username;
			this.description = description;
			this.targetDate = targetDate;
			this.done = done;
		}
		
	
		public Integer getId() {
			return id;
		}
		public void setId(Integer id) {
			this.id = id;
		}
		public String getUsername() {
			return username;
		}
		public void setUsername(String username) {
			this.username = username;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public LocalDate getTargetDate() {
			return targetDate;
		}
		public void setTargetDate(LocalDate targetDate) {
			this.targetDate = targetDate;
		}
		public boolean isDone() {
			return done;
		}
		public void setDone(boolean done) {
			this.done = done;
		}
		@Override
		public String toString() {
			return "Todo [id=" + id + ", username=" + username + ", description=" + description + ", targetDate="
					+ targetDate + ", done=" + done + "]";
		}


}
