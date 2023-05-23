import { useRef } from "react";
import InputField from "../../components/basics/InputField/InputField";

const Home = (): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
        <div>
          <span>Hola</span>
          <InputField
            ref={inputRef}
            type='text'
            placeholder='Search...'
          />
        </div> 
  );
}

export default Home;
