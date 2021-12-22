import PropTypes from 'prop-types';

function Listing(props) {
    const {items} = props;

    return (
        <>
        {
            items &&
            <div className="item-list">
            {
                items.map(v => 
                    v.price &&    
                    <div className="item" key={v.listing_id}>
                        <div className="item-image">
                        {
                            v.url &&
                            <a href={v.url}>
                                <img src={v.MainImage.url_570xN} /> 
                            </a>                  
                        
                        }

                        </div>
                        <div className="item-details">
                            {v.title && <p className="item-title">{
                                v.title.length <= 50 
                                    ? v.title 
                                    : (v.title.substr(0, 50) + "...")
                            }</p>} 

                            <p className="item-price">{
                                v.currency_code == "USD" 
                                    ? "$" + v.price 
                                    : (v.currency_code == "EUR" 
                                        ? "€" + v.price 
                                        : v.price + " " +  v.currency_code
                                    )
                            }
                            </p>

                            <p className={
                                "item-quantity level-" + (
                                v.quantity <= 10 
                                    ? "low" 
                                    : (v.quantity <= 20 
                                        ? "medium" 
                                        : "high")
                                )
                            }>{v.quantity} left</p>
                        </div>
                    </div>
                )
            }
            </div>
        }
        </>
    )
}

Listing.defaultProps = {
    items: []
};
 
Listing.propTypes = {
    items: PropTypes.arrayOf(
    PropTypes.shape({
        listing_id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        MainImage: PropTypes.shape({url_570xN: PropTypes.string}).isRequired,
        title: PropTypes.string,
        currency_code: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    })  
    ).isRequired
}

export default Listing;