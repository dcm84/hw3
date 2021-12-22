import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import Star from './Star.js'

function Stars(props) {
    const {count} = props;

    return (
      <>
        {
          count && 
          count >=1 && 
          count <=5 && 
          <ul className="card-body-stars u-clearfix">
            {Array.from({length: count}, () => uuidv4()).map(uuid => <Star key={uuid}/>)}
          </ul>
        }
      </> 
    )
}

Stars.defaultProps = {
  count: 3
};

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;