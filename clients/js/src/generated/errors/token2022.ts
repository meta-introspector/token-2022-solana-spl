/**
 * This code was AUTOGENERATED using the codama library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun codama to update it.
 *
 * @see https://github.com/codama-idl/codama
 */

import {
  isProgramError,
  type Address,
  type SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
  type SolanaError,
} from '@solana/kit';
import { TOKEN_2022_PROGRAM_ADDRESS } from '../programs';

/** NotRentExempt: Lamport balance below rent-exempt threshold */
export const TOKEN_2022_ERROR__NOT_RENT_EXEMPT = 0x0; // 0
/** InsufficientFunds: Insufficient funds */
export const TOKEN_2022_ERROR__INSUFFICIENT_FUNDS = 0x1; // 1
/** InvalidMint: Invalid Mint */
export const TOKEN_2022_ERROR__INVALID_MINT = 0x2; // 2
/** MintMismatch: Account not associated with this Mint */
export const TOKEN_2022_ERROR__MINT_MISMATCH = 0x3; // 3
/** OwnerMismatch: Owner does not match */
export const TOKEN_2022_ERROR__OWNER_MISMATCH = 0x4; // 4
/** FixedSupply: Fixed supply */
export const TOKEN_2022_ERROR__FIXED_SUPPLY = 0x5; // 5
/** AlreadyInUse: Already in use */
export const TOKEN_2022_ERROR__ALREADY_IN_USE = 0x6; // 6
/** InvalidNumberOfProvidedSigners: Invalid number of provided signers */
export const TOKEN_2022_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS = 0x7; // 7
/** InvalidNumberOfRequiredSigners: Invalid number of required signers */
export const TOKEN_2022_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS = 0x8; // 8
/** UninitializedState: State is unititialized */
export const TOKEN_2022_ERROR__UNINITIALIZED_STATE = 0x9; // 9
/** NativeNotSupported: Instruction does not support native tokens */
export const TOKEN_2022_ERROR__NATIVE_NOT_SUPPORTED = 0xa; // 10
/** NonNativeHasBalance: Non-native account can only be closed if its balance is zero */
export const TOKEN_2022_ERROR__NON_NATIVE_HAS_BALANCE = 0xb; // 11
/** InvalidInstruction: Invalid instruction */
export const TOKEN_2022_ERROR__INVALID_INSTRUCTION = 0xc; // 12
/** InvalidState: State is invalid for requested operation */
export const TOKEN_2022_ERROR__INVALID_STATE = 0xd; // 13
/** Overflow: Operation overflowed */
export const TOKEN_2022_ERROR__OVERFLOW = 0xe; // 14
/** AuthorityTypeNotSupported: Account does not support specified authority type */
export const TOKEN_2022_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED = 0xf; // 15
/** MintCannotFreeze: This token mint cannot freeze accounts */
export const TOKEN_2022_ERROR__MINT_CANNOT_FREEZE = 0x10; // 16
/** AccountFrozen: Account is frozen */
export const TOKEN_2022_ERROR__ACCOUNT_FROZEN = 0x11; // 17
/** MintDecimalsMismatch: The provided decimals value different from the Mint decimals */
export const TOKEN_2022_ERROR__MINT_DECIMALS_MISMATCH = 0x12; // 18
/** NonNativeNotSupported: Instruction does not support non-native tokens */
export const TOKEN_2022_ERROR__NON_NATIVE_NOT_SUPPORTED = 0x13; // 19

export type Token2022Error =
  | typeof TOKEN_2022_ERROR__ACCOUNT_FROZEN
  | typeof TOKEN_2022_ERROR__ALREADY_IN_USE
  | typeof TOKEN_2022_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED
  | typeof TOKEN_2022_ERROR__FIXED_SUPPLY
  | typeof TOKEN_2022_ERROR__INSUFFICIENT_FUNDS
  | typeof TOKEN_2022_ERROR__INVALID_INSTRUCTION
  | typeof TOKEN_2022_ERROR__INVALID_MINT
  | typeof TOKEN_2022_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS
  | typeof TOKEN_2022_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS
  | typeof TOKEN_2022_ERROR__INVALID_STATE
  | typeof TOKEN_2022_ERROR__MINT_CANNOT_FREEZE
  | typeof TOKEN_2022_ERROR__MINT_DECIMALS_MISMATCH
  | typeof TOKEN_2022_ERROR__MINT_MISMATCH
  | typeof TOKEN_2022_ERROR__NATIVE_NOT_SUPPORTED
  | typeof TOKEN_2022_ERROR__NON_NATIVE_HAS_BALANCE
  | typeof TOKEN_2022_ERROR__NON_NATIVE_NOT_SUPPORTED
  | typeof TOKEN_2022_ERROR__NOT_RENT_EXEMPT
  | typeof TOKEN_2022_ERROR__OVERFLOW
  | typeof TOKEN_2022_ERROR__OWNER_MISMATCH
  | typeof TOKEN_2022_ERROR__UNINITIALIZED_STATE;

let token2022ErrorMessages: Record<Token2022Error, string> | undefined;
if (process.env.NODE_ENV !== 'production') {
  token2022ErrorMessages = {
    [TOKEN_2022_ERROR__ACCOUNT_FROZEN]: `Account is frozen`,
    [TOKEN_2022_ERROR__ALREADY_IN_USE]: `Already in use`,
    [TOKEN_2022_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED]: `Account does not support specified authority type`,
    [TOKEN_2022_ERROR__FIXED_SUPPLY]: `Fixed supply`,
    [TOKEN_2022_ERROR__INSUFFICIENT_FUNDS]: `Insufficient funds`,
    [TOKEN_2022_ERROR__INVALID_INSTRUCTION]: `Invalid instruction`,
    [TOKEN_2022_ERROR__INVALID_MINT]: `Invalid Mint`,
    [TOKEN_2022_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS]: `Invalid number of provided signers`,
    [TOKEN_2022_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS]: `Invalid number of required signers`,
    [TOKEN_2022_ERROR__INVALID_STATE]: `State is invalid for requested operation`,
    [TOKEN_2022_ERROR__MINT_CANNOT_FREEZE]: `This token mint cannot freeze accounts`,
    [TOKEN_2022_ERROR__MINT_DECIMALS_MISMATCH]: `The provided decimals value different from the Mint decimals`,
    [TOKEN_2022_ERROR__MINT_MISMATCH]: `Account not associated with this Mint`,
    [TOKEN_2022_ERROR__NATIVE_NOT_SUPPORTED]: `Instruction does not support native tokens`,
    [TOKEN_2022_ERROR__NON_NATIVE_HAS_BALANCE]: `Non-native account can only be closed if its balance is zero`,
    [TOKEN_2022_ERROR__NON_NATIVE_NOT_SUPPORTED]: `Instruction does not support non-native tokens`,
    [TOKEN_2022_ERROR__NOT_RENT_EXEMPT]: `Lamport balance below rent-exempt threshold`,
    [TOKEN_2022_ERROR__OVERFLOW]: `Operation overflowed`,
    [TOKEN_2022_ERROR__OWNER_MISMATCH]: `Owner does not match`,
    [TOKEN_2022_ERROR__UNINITIALIZED_STATE]: `State is unititialized`,
  };
}

export function getToken2022ErrorMessage(code: Token2022Error): string {
  if (process.env.NODE_ENV !== 'production') {
    return (token2022ErrorMessages as Record<Token2022Error, string>)[code];
  }

  return 'Error message not available in production bundles.';
}

export function isToken2022Error<TProgramErrorCode extends Token2022Error>(
  error: unknown,
  transactionMessage: {
    instructions: Record<number, { programAddress: Address }>;
  },
  code?: TProgramErrorCode
): error is SolanaError<typeof SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM> &
  Readonly<{ context: Readonly<{ code: TProgramErrorCode }> }> {
  return isProgramError<TProgramErrorCode>(
    error,
    transactionMessage,
    TOKEN_2022_PROGRAM_ADDRESS,
    code
  );
}
