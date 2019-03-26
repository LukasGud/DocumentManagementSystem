package com.docuservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.convert.Jsr310Converters;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
@EntityScan(basePackageClasses =  {
		ProjektasApplication.class, //Anglu kalba
		Jsr310Converters.class
})
public class ProjektasApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjektasApplication.class, args);
	}


	@PostConstruct//Ka reiskia
	private void init() {
		TimeZone.setDefault((TimeZone.getTimeZone("UTC")));
	}
}
