import Routing from '../../vendor/friendsofsymfony/jsrouting-bundle/Resources/js/router';

const routes = () => {
    const routes = require('../../public/js/fos_js_routes.json');
    Routing.setRoutingData(routes);
}

export default routes;
