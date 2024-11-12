package com.fsd.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fsd.model.User;
import com.fsd.service.UserService;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String loginPage() {
        return "redirect: /login.html"; // Return the name of your HTML file (login.html)
    }

    @PostMapping("/login")
    public String login(@RequestParam String email, @RequestParam String password, Model model) {
        User user = userService.findUserByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            model.addAttribute("message", "Login Successful!");
            return "redirect:/index.html"; // Redirect to dashboard or home page after successful login
        } else {
            model.addAttribute("error", "Invalid email or password");
            return "login"; // Return to login page on failure
        }
    }

    @GetMapping("/signup")
    public String signupPage() {
        return "redirect: /signup.html"; // Return the name of your HTML file (signup.html)
    }
    
    @PostMapping("/signup")
    public String signup(@RequestParam String email, @RequestParam String password) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        userService.saveUser(user);
        return "redirect:/login.html"; // Redirect to login after successful signup
    }
}
