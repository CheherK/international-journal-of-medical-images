package com.arfaouiKallebi.JournalWeb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Bean
    public FilterRegistrationBean<CorsFilter> corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        org.springframework.web.cors.CorsConfiguration config = new org.springframework.web.cors.CorsConfiguration();
        config.addAllowedOrigin("http://localhost:3000"); // Allow requests from any origin
        config.addAllowedHeader("*"); // Allow all headers
        config.addAllowedMethod("*"); // Allow all HTTP methods
        config.setAllowCredentials(true); // Allow sending cookies along with the request (if applicable)
        config.addExposedHeader("Content-Disposition"); // Expose the Content-Disposition header
        source.registerCorsConfiguration("/**", config);
        FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return bean;
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/authors/{authorId}/manusccripts/{manuscriptId}/items/save")
                .allowedOrigins("http://localhost:3000") // Allow requests from any origin
                .allowedMethods("POST") // Allow only POST method for file uploads
                .allowedHeaders("*") // Allow all headers
                .exposedHeaders("Content-Disposition"); // Expose the Content-Disposition header
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer configurer) {
        configurer.setUseSuffixPatternMatch(false); // Disable matching URL suffixes (e.g., .json) to allow path variables with dots
    }
}
