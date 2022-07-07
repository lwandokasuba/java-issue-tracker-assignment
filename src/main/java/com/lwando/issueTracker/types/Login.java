package com.lwando.issueTracker.types;

public record Login(Long userId, String username, boolean success, boolean failed) {

}
