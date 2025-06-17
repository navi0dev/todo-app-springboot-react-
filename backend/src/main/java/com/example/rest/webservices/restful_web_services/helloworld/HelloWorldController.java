package com.example.rest.webservices.restful_web_services.helloworld;

import java.util.Locale;

//import org.springframework.cglib.core.Locale;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class HelloWorldController {
	
	private MessageSource messageSource;
	
	public HelloWorldController(MessageSource messageSource) {
		this.messageSource=messageSource;
	}
	
	@GetMapping("/basicauth")
	public String basicAuthCheck() {
		return "Success";
	}
	
//	@RequestMapping(value="hello-world", method=RequestMethod.GET)
	@GetMapping("hello-world")
	public String helloWorld() {
		return "Hello World!!";
	}
	
	@GetMapping("hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping("hello-world-bean/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
//		return new HelloWorldBean("Hello World "+ name);
		return new HelloWorldBean(String.format("Hello %s", name));
	}
	
	@GetMapping("hello-world-internationalized")
	public String helloWorldInternationalized() {
		Locale locale=LocaleContextHolder.getLocale();
		return messageSource.getMessage("good.morning.message", null, "Default Message", locale);
//		return "Hello World";
	}
}
