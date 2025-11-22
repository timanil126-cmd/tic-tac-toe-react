import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ status }) => {
  return (
    <div className={styles.information}>
      <div className={styles.status}>{status}</div>
    </div>
  );
};

InformationLayout.propTypes = {
  status: PropTypes.string.isRequired,
};

export default InformationLayout;
