# Create a print function in motoko  

## Create a dfx.json file and code the following    

```json   

{
    "canisters": {
      "step01": {
        "main": "main.mo",
        "type": "motoko"
      }
    },
    "defaults": {
      "build": {
        "args": "",
        "packtool": ""
      }
    },
    "dfx": "0.8.1",
    "networks": {
      "local": {
        "bind": "127.0.0.1:8000",
        "type": "ephemeral"
      }
    },
    "version": 1
  }  

```   
  
  
## Create a file '*main.mo*' and write a function that prints a string on the console  
   
```javascript
   
import Debug "mo:base/Debug";

actor {
   public func cal(){
    Debug.print("Step01 is now Working!");
   };
}
  
```

## now start the dfx local network in the background
  
> dfx start --background   
    
## next create the canister with the following command:

> dfx canister create --all 

## build it using:   
   
> dfx build

## install it now:

> dfx canister install --all

## now call the function with the following command:

> dfx canister call step01 cal

## you should see something like this

```

    [Canister rrkah-fqaaa-aaaaa-aaaaq-cai] Step01 is now Working!
    ()
  
```
