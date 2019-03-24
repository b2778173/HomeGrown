package com.hg.HomeGrown.config;

public class homeGrownDataScourceConfig {

@Configuration
@PropertySource({ "classpath:application.properties" })
@EnableJpaRepositories(basePackages = "com.gt.payment.mcp.dao", entityManagerFactoryRef = "hgEntityManager", transactionManagerRef = "hgTransactionManager")
public class MCPDataSourceConfig {

	@Autowired
	private Environment env;

	@Bean
	@Primary
	public LocalContainerEntityManagerFactoryBean hgEntityManager() {
		LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
		em.setDataSource(mcpDataSource());
        em.setPackagesToScan("com.gt.payment.entity", "com.gt.payment.ecare.entity");

		HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
		em.setJpaVendorAdapter(vendorAdapter);
		HashMap<String, Object> properties = new HashMap<>();
		properties.put("hibernate.show_sql", env.getProperty("spring.jpa.show-sql"));
		properties.put("hibernate.format_sql", env.getProperty("spring.jpa.properties.hibernate.format_sql"));
		properties.put("hibernate.hbm2ddl.aut", env.getProperty("spring.jpa.hibernate.ddl-auto"));
		properties.put("hibernate.dialect", env.getProperty("spring.jpa.properties.hibernate.dialect"));
		properties.put("hibernate.ejb.naming_strategy",
				env.getProperty("spring.jpa.hibernate.naming.physical-strategy"));
		em.setJpaPropertyMap(properties);

		return em;
	}

	@Primary
	@Bean
	public DataSource mcpDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(env.getProperty("mcp.datasource.driver-class-name"));
		dataSource.setUrl(env.getProperty("mcp.datasource.url"));
		dataSource.setUsername(env.getProperty("mcp.datasource.username"));
		dataSource.setPassword(env.getProperty("mcp.datasource.password"));

		return dataSource;
	}

	@Primary
	@Bean
	public PlatformTransactionManager hgTransactionManager() {
		JpaTransactionManager transactionManager = new JpaTransactionManager();
		transactionManager.setEntityManagerFactory(mcpEntityManager().getObject());
		return transactionManager;
	}
}
