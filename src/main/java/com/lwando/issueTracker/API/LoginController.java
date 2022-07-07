package com.lwando.issueTracker.API;

import com.lwando.issueTracker.BAL.LoginService;
import com.lwando.issueTracker.types.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class LoginController {
    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @QueryMapping
    public Login login(@Argument String username, @Argument String password) {
        return loginService.login(username, password);
    }
}
