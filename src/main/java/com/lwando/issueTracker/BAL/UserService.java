package com.lwando.issueTracker.BAL;

import com.lwando.issueTracker.DAL.User;
import com.lwando.issueTracker.DAL.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<User> getUser() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User addNewUser(User user) {
        userRepository.save(user);
        return user;
    }

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);
        if (!exists) {
            throw new IllegalStateException("user id " + userId + " does not exist");
        }
        userRepository.deleteById(userId);
    }

    @Transactional
    public void updateUser(Long userId, String username, String password) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalStateException(
                        "User with id " + userId + " does not exist"
                ));

        user.setUsername(username);
        if (username != null && username.length() > 0 && !Objects.equals(user.getUsername(), username)) {
            user.setUsername(username);
        }

        user.setPassword(password);
        if (password != null && password.length() > 0 && !Objects.equals(user.getPassword(), password)) {
            user.setPassword(password);
        }
    }
}
