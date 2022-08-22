import Star from "./star";

function Bin({color, size}) {

    return (
        <Star color={color} />,
        <Star size={size} />
    )
}

export default Bin;