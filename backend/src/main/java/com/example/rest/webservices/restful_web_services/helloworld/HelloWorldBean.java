package com.example.rest.webservices.restful_web_services.helloworld;

public class HelloWorldBean {

	private String string;
	public HelloWorldBean(String string) {
		// TODO Auto-generated constructor stub
		this.string=string;
	}
	public void setString(String string) {
		this.string = string;
	}
	public String getString() {
		return string;
	}
	@Override
	public String toString() {
		return "HelloWorldBean [string=" + string + "]";
	}
	
	
	
}
