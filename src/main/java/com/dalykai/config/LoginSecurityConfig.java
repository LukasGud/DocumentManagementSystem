package com.dalykai.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.sql.DataSource;
@CrossOrigin
@Configuration
@EnableWebSecurity
public class LoginSecurityConfig extends WebSecurityConfigurerAdapter {

	//adding reference to securityDataSource from LoginAppConfig class

	@Autowired
	private DataSource securityDataSource;



//
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		//// writing the code for using jdbc authentication
		auth.jdbcAuthentication().dataSource(securityDataSource);




		//Below are the hardcoded users (not used anymore, because they were added to mysql db)
//		// add our users for in memory authentication
//
//		UserBuilder users = User.withDefaultPasswordEncoder();
//
//		auth.inMemoryAuthentication()
//			.withUser(users.username("john").password("test123").roles("EMPLOYEE","PIMPACKIUKAS"))
//			.withUser(users.username("mary").password("test123").roles("MANAGER"))
//			.withUser(users.username("susan").password("test123").roles("ADMIN"));
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {

///http.csrf().disable(). is added so that i could test post/put/delete with postman. otherwise i get a 403

		http.csrf().disable().authorizeRequests()
				.antMatchers("/api/**").authenticated()
                .antMatchers("/leaders/**").hasRole("MANAGER")
                .antMatchers("/admins/**").hasRole("ADMIN")
                .antMatchers("/").hasRole("EMPLOYEE")
				//.antMatchers(HttpMethod.GET,"/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
				//.permitAll()
                .and()
                .formLogin()
                .loginPage("/LoginPage")
                .loginProcessingUrl("/authenticateTheUser")
                .permitAll()
                .and()
                .logout().permitAll()
                .and().exceptionHandling().accessDeniedPage("/accessDeniedPage");

    }

}






