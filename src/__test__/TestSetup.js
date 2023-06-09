const { values } = require("lodash");


require("dotenv").config();

let _storeMap = {};

const browserStorageMock = {
    getItem: function(key) {
        return _storeMap[key];
    },
    setItem: function(key, value) {
        return (_storeMap[key] = value);
    },
    clear: function(key) {
        return (_storeMap[key] = undefined);
    },
    removeItem: function(key) {
        return (_storeMap[key] = undefined);
    }
};

global.sessionStorage = browserStorageMock;
global.localStorage = browserStorageMock;
global.dataLayer = [];

const jsdom = require("jsdom");
const {JSDOM} = jsdom;
const {window} = new JSDOM('', {
    url: 'https://test.com/',
    referrer: 'https://test.com/',
    contentType: 'text/html',
    includeNodeLocations: true,
    storageQuota: 10000000
});

window._ENV_VARS = {
    MOCK_API_URL: "https://test.com",
    IRS_UI_DB: 'db'
}

window.open = function () {
    return;
}

global.window = window;

global.document = window.document;

let _navigator = {};
_navigator.userAgent = "Firefox";
_navigator.platform = "Windows";
global.navigator = _navigator;
global.location = window.location;
global._COMMON_UTILS = {};


//xhr mock
const xhrMockClass = () => ({
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn()
});

const XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
global.XMLHttpRequest = XMLHttpRequest;
global.setInterval = function() {};