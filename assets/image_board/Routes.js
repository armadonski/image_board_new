import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router';

const routes = () => {
    const routes = require('../../../public_html/js/fos_js_routes.json');
    Routing.setRoutingData(routes);
}

export default routes;
