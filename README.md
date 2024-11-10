# GL_Attendance

This is a redo of the original MDP project: https://github.com/YehyaHatoum/Automatic_Attendence_System

It will be reordered to fit the chosen incremental SDLC that we have chosen

## Face Recognition System: 
A python application that uses the face_recognition library for face encodings, face recognition and more AI features. The system will offer HTTP APIs for communicating with the other systems.

## User Login, Authentication and Authorization system:
Developed using Node.js, Express.js, and React, this sub-system Encapsulates the login page for the mobile app, the database schemas for the different user groups, authentication and authorization through JSON Web Tokens, and OTPs for password resets via email.

## Student Image Collection System:
This sub-system will handle the logic behind capturing student images via a selfie video provided by the user, it includes UI/UX design, API design, and image processing techniques.

## Phone Camera Attendance:
This core feature builds on top of the previous sub-systems to allow the user to submit images of a classroom via the phone’s camera and get an attendance report back via email.

## Raspberry Pi integration: 
Adding a feature to submit class images via installed raspberry Pi camera modules capturing and sending images via SSH directly to the server.

## Manual Attendance taking: 
This option allows professors to manually check students as present or absent, this includes correcting previous attendance reports in case of inaccuracies in the face recognition model

## Admin Website: 
An admin website will be provided last, this adds the option to create accounts by bulk, allowing universities to submit a list of all their students where accounts will be created for them and passwords will be sent via email. Moreover, the admin will be able to manage courses and their ownership.