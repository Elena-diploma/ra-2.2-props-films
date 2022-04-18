import Star from './Star';

export default function Stars({ count }) {
    if (count < 1 || count > 5) {
        return null;
    }

    let arr = new Array(count).fill(undefined);

    return (
        <ul className = "card-body-stars">
            {arr.map((_, index) => <Star key={index} />)}
        </ul>
    );
}