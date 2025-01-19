# Dental Booking Admin - Next.js

This Next.js application is to provide clinic administrators with tools to manage patient records, appointments, and oversee clinic operations via a user-friendly web interface. This application integrates with the mobile app and the Spring Boot backend, creating a cohesive experience for both patients and administrators.

For more information, visit the organization page: [Dental Booking System](https://github.com/Dental-Booking-System).

## Features

- **User Authentication**: Secure login using Google API and Firebase.
- **Patient Records Management**: View, add, edit, and delete patient records.
- **Appointment Scheduling**: Stream appointments using a calendar interface, and manage upcoming appointments, including rescheduling and cancellations.
- **Clinic Operations Overview**: Monitor clinic operations and generate reports as needed.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dental-booking-admin.git
   cd dental-booking-admin
   ```
2. Install packages

  ```bash
   npm install 
   ```
3. Configure `.env.local`

   ```bash
   NEXT_PUBLIC_API_URL=http://localhost:8080/
   ```
4. Run the application
   ```bash
   npm run dev
   ```

## Backend Server

This app communicates with a **Spring Boot backend** for authentication, booking management, and MySQL data storage. [Visit Backend Repository](https://github.com/Dental-Booking-System/dental-booking-server).

## Contributors

- **Tony Vu** – [LinkedIn](https://linkedin.com/in/duyquocvu) | [GitHub](https://github.com/quocduyvu6262)
   
