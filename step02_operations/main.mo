actor {
    var cell : Int = 0;

    public func add(n:Int) : async Int {
       cell += n; 
    return cell
       };

    public func sub(n:Int) : async Int { 
      cell -= n; 
        return cell
      };

    public func mul(n:Int) : async Int { 
      cell *= n; 
        return cell
};
    public func div(n:Int) : async ?Int 
    {
        if (n == 0){
            return null
        }else{
            cell /= n; ?cell
        }
    };

    public func mod(n:Int) : async Int {
       cell %= n; 
        return cell
       };
    public func exp(n:Int) : async Int {
       cell **= n; 
        return cell
       };

    public func get() : async Int {
      return  cell
       };
    public func reset() : async Int { 
        if (cell : Int != 0)
                cell -= cell;
        return cell
    };


};
 
