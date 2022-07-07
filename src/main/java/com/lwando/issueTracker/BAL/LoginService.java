package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.User;
import com.lwando.issueTracker.types.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginService {

    private final UserService userService;

    @Autowired
    public LoginService(UserService userService) {
        this.userService = userService;
    }

    public Login login(String username, String password) {
        List<User> Users = userService.getUser();
        for (var user : Users) {
            if (username.equals(user.getUsername()) && password.equals(user.getPassword())) {
                return new Login(
                        user.getId(),
                        user.getUsername(),
                        true,
                        false
                );
            }
        }
        return new Login(
           null,
           null,
           false,
           true
        );
    }
}
