<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<html>

<head>
	<title>Home Page</title>
</head>

<body>
	<h2>Home Page</h2>
	<hr>
	
	<p>Do you want to build a snowman ?</p>

    <p>
        USER : <security:authentication property="principal.username"/>
        <br><br>
        ROLE : <security:authentication property="principal.authorities" />
    </p>

<form:form action="${pageContext.request.contextPath}/logout" method="post">
	<input type="submit" value="logout">

</form:form>
</body>

</html>