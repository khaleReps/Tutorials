#[allow(dead_code)]
// Girl or Boy
enum Gender {
    Male,
    Female,
}

fn main() {
    println!("SUP YO!!!");

    // Variables
    let first_name: String = String::from("John"); 
    let last_name: String = String::from("Doe");

    // Gender
    let gender: Gender = Gender::Male; 
    // Height
    let floating_height: f64 = 1.5;
    // Age
    let integer_age: i32 = 30;

    println!("Your are {} {}", first_name, last_name );
    match gender {
        Gender::Male => println!("You are a Male"),
        Gender::Female => println!("You are a Female"),
    }
    println!("Your are {}m tall", floating_height);
    println!("You are {}", integer_age);
}
