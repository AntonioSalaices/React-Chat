import { PropertyRequiredError, ReadError, ValidationError } from "./Error";

type CheckForBadArgs<Arg> = Arg extends any[] 
    ? "You cannot compare two arrays using deepEqualCompare"
    : Arg;

const Helper = {
    debounce(callback, wait) {
        let timerId;
        return (...args) => {
          clearTimeout(timerId);
          timerId = setTimeout(() => {
            callback(...args);
          }, wait);
        };
      },
      deepEqualCompare<Arg>(
        a: CheckForBadArgs<Arg>,
        b: CheckForBadArgs<Arg>
      ): boolean {
        if(Array.isArray(a) || Array.isArray(b)){
            throw new Error("You cannot compare two arrays using deepEqualCompare");
        }

        return a === b;
      },
      validateUser(user) {
        if (!user.age) {
            throw new PropertyRequiredError("age");
        }
    
        if (!user.name) {
            throw new PropertyRequiredError("name");
        }
      },
      readInputs(json: string) {
        let user;
      
        try {
          user = JSON.parse(json);
        } catch (err) {
          if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
          } else {
            throw err;
          }
        }
      
        try {
          Helper.validateUser(user);
        } catch (err) {
          if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
          } else {
            throw err;
          }
        }
      
      }
}
export default Helper;