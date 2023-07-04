use chrono::Local;
use chrono::Datelike;
use chrono::TimeZone;
use whoami::username;
use std::io;

pub fn run() {
    println!("file: extensions/user_information.rs \n");

    let current_year = Local::now().year();

    // Profile
    let mut user_name = String::new();
    let mut password = String::new();

    // Contact
    let mut first_name = String::new();
    let mut last_name = String::new();
    let mut email = String::new();

    // Stats
    let mut dob = String::new();
    let mut gender = String::new();

    // Function to check if age is over 18
    fn is_age_over_18(year_of_birth: i32) -> bool {
        let current_year = Local::now().year();
        current_year - year_of_birth > 18
    }

    // Function to calculate age
    fn calculate_age(year_of_birth: i32) -> i32 {
        let current_year = Local::now().year();
        current_year - year_of_birth
    }

    // Function to get birthday
    fn get_birthday(day: u32, month: u32, year: i32) -> String {
        let birthday = Local.ymd(year, month, day);
        birthday.format("%d-%m-%Y").to_string()
    }

    // Get user input
    println!("Enter user name:");
    io::stdin().read_line(&mut user_name).expect("Failed to read user name");

    println!("Enter password:");
    io::stdin().read_line(&mut password).expect("Failed to read password");

    println!("Enter first name:");
    io::stdin().read_line(&mut first_name).expect("Failed to read first name");

    println!("Enter last name:");
    io::stdin().read_line(&mut last_name).expect("Failed to read last name");

    println!("Enter email:");
    io::stdin().read_line(&mut email).expect("Failed to read email");

    println!("Enter date of birth (YYYY-MM-DD):");
    io::stdin().read_line(&mut dob).expect("Failed to read date of birth");

    loop {
        println!("Enter gender (male/female/other):");
        io::stdin().read_line(&mut gender).expect("Failed to read gender");
        gender = gender.trim().to_lowercase();
        if gender == "male" || gender == "female" || gender == "other" {
            break;
        } else {
            println!("Invalid gender. Please choose 'male', 'female', or 'other'.");
        }
    }

    // Example usage of the functions
    let year_of_birth: i32 = dob.trim().parse().unwrap();
    if is_age_over_18(year_of_birth) {
        println!("User is over 18 years old.");
    } else {
        println!("User is under 18 years old.");
    }

    let age = calculate_age(year_of_birth);
    println!("Age: {}", age);

    let birthday = get_birthday(1, 7, year_of_birth);
    println!("Birthday: {}", birthday);
}
