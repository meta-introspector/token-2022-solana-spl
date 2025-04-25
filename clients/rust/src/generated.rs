//

    // Dummy declaration for TOKEN_2022_ID in Rust.
// In the actual Solana program, this would be a Pubkey.

//use solana_program::pubkey::Pubkey;
//use {
//    solana_pubkey::Pubkey,
//};


pub mod programs {
pub const TOKEN_2022_ID : solana_pubkey::Pubkey=  solana_pubkey::Pubkey::new_from_array([
    1u8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 22,
]);
}

// Alternatively, you could use a string representation and parse it (more common in tests):
// pub const TOKEN_2022_ID: Pubkey = Pubkey::new_from_str("Token22TestPlaceholder11111111111111111").unwrap();
