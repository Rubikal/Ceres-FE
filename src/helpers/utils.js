import config from 'ceres-config';


export const getRootURL = () => config.CERES_BE_URL;

export const capitalizeString = s => s.charAt(0).toUpperCase() + s.slice(1);

export const formatOrderStatus = status => {
    if (status === 'on_the_way') {
      return 'On the way';
    }
    return capitalizeString(status)
}
