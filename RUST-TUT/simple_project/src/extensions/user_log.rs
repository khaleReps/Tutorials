use chrono::Local;
use whoami::username;
use gethostname::gethostname;

pub fn run() {
    println!("file: extensions/user_log.rs \n");

    let current_time = Local::now();
    let user_name = username();
    let machine_name = gethostname();

    // Debug purposes
    println!("User: {:?} {:?}", user_name, machine_name);
    println!("Time loggedIn: {:?}", current_time);
    println!("Machine Used: {:?}", machine_name);

    println!("{:?} logedin through {:?} at {:?}", user_name, machine_name, current_time )
}
