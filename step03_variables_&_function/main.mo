import Map "mo:base/HashMap";
import Text "mo:base/Text";

//actors are canisters
actor {
    //primitive types
    public var boolen : Bool = true;
    public var character : Char = A;
    public var text : Text = "String";
    public var flotingPoints: Float = 0.24;
    public var integer : Int = 44;
    public var sixteenBitInt : Int16 = 756;
    public var nonNegative : Nat = 67;
//     public var null :Null = Null;
    public var any :Any = 99;
//     //array

//     //tuple
//     var tuple : Tuple = ("hello", 2021, true)
    
//     // custom type
//     type User = {
//        name: Text;
//        phone: Nat;
//       // callback : shared Counter -> ();
//       };

//     //Map

//    // debug_show to transform tupe into string
//     D.print(debug_show(("hello", 42, "world")))

//    //if else


 //query function 
public query func function (): async Nat{
    return (nonNegative)
};

 //update function (needs to be asyn if returns a val)
public func function (): async Nat{
    return (nonNegative)
};
// local function, cant be called from outside hence n oneed to //be asyns
 _localFunction (): Nat {
      return (nonNegative)

 };
 //call local func from outside using a public function
 public func callLocal(): async Nat {
     return(_localFunction());
 };

    }
