import Button from './Button';
const App = () => {
  return (
    <div>
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

export default App;
