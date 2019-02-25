<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<%--
  Created by IntelliJ IDEA.
  User: tomas
  Date: 2/15/2019
  Time: 1:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Access dienied</title>
</head>
<body>
 <p>Cia galima pridet daug grazaus ir blizgancio CSS ir vaiku asaru </p>
<p>ALSO</p>
<h1>Šitas puslapis nematomas  <security:authentication property="principal.authorities" /> rolės useriui  </h1>
</body>
</html>
