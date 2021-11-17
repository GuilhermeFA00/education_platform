import main from "./pages/main.js";
import register from "./pages/register.js";
import login from "./pages/login.js";
import educa from "./pages/educa.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: main },
        { path: "/login", view: login },
        { path: "/register", view: register },
        { path: "/educa", view: educa }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('.app').innerHTML = await view.getHtml();

    if (match.route.path == "/login") {
        view.signin_form();
    }
    if (match.route.path == "/register") {
        view.signup_form();
    }
    if (match.route.path == "/educa") {
        document.body.style.background = "#1f2128";
        view.menuItems_bgChange();
        view.notificationsAlert();
        //view.classesCards();
    }
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});