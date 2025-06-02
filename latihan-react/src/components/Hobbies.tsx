type HobbiesProps = {
  hobi: string;
};

const Hobbies = ({ hobi }: HobbiesProps) => {
  return (
    <span style={{
        backgroundColor: "#9c2f38",
        padding: "4px 8px",
        borderRadius: "8px",
        fontSize: "12px",
    }}>
      <p>Hobbies: {hobi} </p>
    </span>
  );
};

export default Hobbies;
