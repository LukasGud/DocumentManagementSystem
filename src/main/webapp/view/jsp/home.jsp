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


<security:authorize access="hasRole('MANAGER')">

    <%--Only visible for leaders  --%>
    <a href="${pageContext.request.contextPath}/leaders">Leaders Page !</a>

</security:authorize>

<security:authorize access="hasRole('ADMIN')">

    <%--Only visible for admins  --%>
    <a href="${pageContext.request.contextPath}/admins">Admins Page !</a>

</security:authorize>



<form:form action="${pageContext.request.contextPath}/logout" method="post">
    <input type="submit" value="logout">

</form:form>
</body>

</html>