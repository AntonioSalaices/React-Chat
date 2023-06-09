
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
      }
}
export default Helper;