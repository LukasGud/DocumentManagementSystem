package com.docuservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.convert.Jsr310Converters;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
@EntityScan(basePackageClasses =  {
		DMSApplication.class,
		Jsr310Converters.class
})
public class DMSApplication {

	public static void main(String[] args) {
		SpringApplication.run(DMSApplication.class, args);
	}


	@PostConstruct
	private void init() {
		TimeZone.setDefault((TimeZone.getTimeZone("UTC")));
	}
}
