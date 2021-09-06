import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import Cycles "mo:base/ExperimentalCycles";

/// Usage of the Internet Computer is measured, and paid for, in _cycles_.
/// **WARNING:** This low-level API is **experimental** and likely to change or even disappear.
/// Dedicated syntactic support for manipulating cycles may be added to the language in future, obsoleting this library.
/// Since cycles measure computational resources, the value of `balance()` can change from one call to the next.

actor {
      let limit = 10_000_000;
  /// Returns the actor's current balance of cycles as `amount`.
  public func getWalletBalance() : async (amount : Nat)  {
    return Cycles.balance();
  };

  /// Returns the currently available `amount` of cycles.

  public func availableCycles() : async (amount : Nat) {
    return Cycles.available();
  };
}
