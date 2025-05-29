type GreetingProps = {
  name: string;
};

const Greeting = (props: GreetingProps) => {
  const { name } = props;
  return (
    <div className="card">
      <p>Nama = {name}</p>
    </div>
  );
};

export default Greeting;
