type UseCardProps = {
    name: string;
    gender: string;
    ttg: string;
    email: string;
};

const UseCard = (props: UseCardProps) => {
    const {name, gender, ttg, email} = props;
    return (
        <div className="card">
            <p>Nama = {name} </p>
            <p>Gender = {gender}</p>
            <p>Tempat tanggal lahir = {ttg} </p>
            <p>email = {email} </p>
        </div>
    )
}

export default UseCard;