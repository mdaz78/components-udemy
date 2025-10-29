import { GoBell, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

const ButtonPage = () => {
  return (
    <div>
      <div>
        <Button className="mb-5">
          <GoBell /> Test 1
        </Button>
      </div>
      <div>
        <Button primary className="mb-10">
          <GoDatabase />
          Test 1
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          Test 1
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          Test 1
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          Test 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          Test 2
        </Button>
      </div>
      <div>
        <Button warning>Test 3</Button>
      </div>
      <div>
        <Button success>Test 4</Button>
      </div>
      <div>
        <Button success outline>
          Test 5
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Test 6
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
