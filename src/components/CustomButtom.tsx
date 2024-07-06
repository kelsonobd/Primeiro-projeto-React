type Props = {
    label: string;
}
export const CustomButton = ({label}:Props) => {
    return (
        <button className="p-3 rounded-md text white bg-blue-700">{label}</button>
);

}