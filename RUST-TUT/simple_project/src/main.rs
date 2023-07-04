mod extensions {
    pub mod user_log;
    pub mod user_information;
}

fn main() {
    extensions::user_log::run();
    extensions::user_information::run();
}