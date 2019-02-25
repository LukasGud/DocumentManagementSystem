package com.dalykai.config;

import com.mchange.v2.c3p0.ComboPooledDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

import javax.sql.DataSource;
import java.beans.PropertyVetoException;
import java.util.logging.Logger;
@CrossOrigin
@Configuration
@EnableWebMvc
@ComponentScan(basePackages= "com.dalykai")
@PropertySource("classpath:persistence-mysql.properties")
public class LoginAppConfig {
	//setting up a var to hold mysql properties
	//in other words "enviroment" holds data that is read at .properties file

	@Autowired
	private Environment environment;

	//Logger for diagnostics

	private Logger logger = Logger.getLogger(getClass().getName());


	// define a bean for ViewResolver

	@Bean
	public ViewResolver viewResolver() {

		InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();

		viewResolver.setPrefix("/view/jsp/");
		viewResolver.setSuffix(".jsp");
		viewResolver.setViewClass(JstlView.class);
		return viewResolver;
	}
	//Defining  a bean for security datasource

	@Bean
	public DataSource securityDataSource() {

		//create conn pool

		ComboPooledDataSource securityDataSource = new ComboPooledDataSource();

		//jdbc driver

		try {
			securityDataSource.setDriverClass(environment.getProperty("jdbc.driver"));
		} catch (PropertyVetoException e) {
			throw new RuntimeException(e) ;
		}

		//log the conn props , to see if the correct files are read

		logger.info("$$$$$ jdbc.url= "+ environment.getProperty("jdbc.url"));
		logger.info("$$$$$ jdbc.user= "+ environment.getProperty("jdbc.user"));
		// set db conn props

		securityDataSource.setJdbcUrl(environment.getProperty("jdbc.url"));
		securityDataSource.setUser(environment.getProperty("jdbc.user"));
		securityDataSource.setPassword(environment.getProperty("jdbc.password"));

		//set conn pool props
//the "connection.pool.initialPoolSize" and others are in the .properties file that is imported in the line above @PropertySource("classpath:persistence-mysql.properties")
		//and they are being read using the "getIntProperty" method written below
		securityDataSource.setInitialPoolSize(getIntProperty("connection.pool.initialPoolSize"));
		securityDataSource.setMinPoolSize(getIntProperty("connection.pool.minPoolSize"));
		securityDataSource.setMaxPoolSize(getIntProperty("connection.pool.maxPoolSize"));
		securityDataSource.setMaxIdleTime(getIntProperty("connection.pool.maxIdleTime"));




		return securityDataSource;
	}


//	read enviroment and convert it into int
	private int getIntProperty(String propName) {
		String propVal = environment.getProperty(propName);

		int intPropVal = Integer.parseInt(propVal);

		return intPropVal;
	}



}









