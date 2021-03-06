'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/sahilrd07/workspace/campaign/pages/campaigns/new.js?entry';


var CampaignNew = function (_React$Component) {
    (0, _inherits3.default)(CampaignNew, _React$Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: ''
        }, _this.changeContribution = function (e) {
            _this.setState({
                minimumContribution: e.target.value
            });
        }, _this.onSumbit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();

                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                _context.next = 6;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, 'Create New Campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSumbit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei', labelPosition: 'right', value: this.state.minimumContribution,
                onChange: this.changeContribution, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Create!')));
        }
    }]);

    return CampaignNew;
}(_react2.default.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3Iiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiY2hhbmdlQ29udHJpYnV0aW9uIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1bWJpdCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwib25TdWJtaXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBTyxBQUFROztBQUN4QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7ME5BQ0YsQTtpQyxBQUFRLEFBQ2dCO0FBRGhCLEFBQ0osaUIsQUFHSixxQkFBcUIsVUFBQSxBQUFDLEdBQU0sQUFDeEI7a0JBQUEsQUFBSztxQ0FDb0IsRUFBQSxBQUFFLE9BRDNCLEFBQWMsQUFDb0IsQUFFckM7QUFIaUIsQUFDVjtBLGlCLEFBSVI7aUdBQVcsaUJBQUEsQUFBTyxHQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO2tDQURPLEFBQ1AsQUFBRTs7Z0RBREs7dUNBR2dCLGNBQUEsQUFBSyxJQUhyQixBQUdnQixBQUFTOztpQ0FBMUI7QUFIQyxvREFBQTtnREFBQTt5REFLRCxBQUFRLFFBQVIsQUFBZ0IsZUFBZSxNQUFBLEFBQUssTUFBcEMsQUFBMEMscUJBQTFDLEFBQStEOzBDQUMzRCxTQU5ILEFBS0QsQUFBb0UsQUFDaEUsQUFBUztBQUR1RCxBQUN0RSxpQ0FERTs7aUNBTEM7aUNBQUE7Z0RBQUE7O0FBQUE7NEJBQUE7QTs7Ozs7Ozs7OztpQ0FVSCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUVBLHdDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjs4QkFBckI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUMsd0NBQU0sT0FBUCxBQUFhLE9BQU0sZUFBbkIsQUFBaUMsU0FBUSxPQUFPLEtBQUEsQUFBSyxNQUFyRCxBQUEyRCxBQUMzRDswQkFBWSxLQURaLEFBQ2lCOzhCQURqQjtnQ0FIUixBQUNJLEFBRUksQUFHSjtBQUhJO2lDQUdKLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBVlosQUFDSSxBQUdJLEFBTUksQUFJZjs7Ozs7RUFwQ3FCLGdCQUFNLEEsQUF1Q2hDOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zYWhpbHJkMDcvd29ya3NwYWNlL2NhbXBhaWduIn0=