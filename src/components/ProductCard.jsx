function ProductCard (props) {
    return (
        <div>
            <p>Nama: {props.name}</p>
            <p>Harga: {props.price}</p>
            <p>Deskripsi produk: {props.description}</p>
        </div>
    )
}

export default ProductCard;