'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _slicedToArray = _interopDefault(require('@babel/runtime/helpers/slicedToArray'));
var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var _extends = _interopDefault(require('@babel/runtime/helpers/extends'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/objectWithoutProperties'));
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/defineProperty'));
var useEventListener = _interopDefault(require('use-event-listener'));
var reactUi = require('react-ui');
var _regeneratorRuntime = _interopDefault(require('@babel/runtime/regenerator'));
var _asyncToGenerator = _interopDefault(require('@babel/runtime/helpers/asyncToGenerator'));
var resolveConfig = _interopDefault(require('tailwindcss/resolveConfig'));
var _typeof = _interopDefault(require('@babel/runtime/helpers/typeof'));
var deepmerge = _interopDefault(require('deepmerge'));
var Color = _interopDefault(require('color'));
var tinykeys = _interopDefault(require('tinykeys'));
var radixIcons = require('@modulz/radix-icons');
var reactColor = require('react-color');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var getDefinitions = function getDefinitions(tailwindConfig) {
  tailwindConfig.theme.textAlign = {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify'
  };
  tailwindConfig.theme.fontStyle = {
    italic: 'italic',
    normal: 'normal',
    'not-italic': 'normal'
  };
  tailwindConfig.theme.lineHeight = _objectSpread({
    inherit: 'inherit'
  }, tailwindConfig.theme.lineHeight);
  tailwindConfig.theme.textDecoration = {
    underline: 'underline',
    'line-through': 'line-through',
    none: 'none'
  };
  tailwindConfig.theme.textTransform = {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    none: 'none',
    'normal-case': 'none'
  };
  tailwindConfig.theme.display = {
    block: 'block',
    flex: 'flex',
    'inline-flex': 'inline-flex',
    inline: 'inline',
    'inline-block': 'inline-block',
    hidden: 'none'
  };
  tailwindConfig.theme.justifyContent = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly'
  };
  tailwindConfig.theme.alignItems = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch'
  };
  tailwindConfig.theme.flexDirection = {
    row: 'row',
    'row-reverse': 'row-reverse',
    col: 'column',
    'col-reverse': 'column-reverse'
  };
  tailwindConfig.theme.flexWrap = {
    wrap: 'wrap',
    'wrap-reverse': 'wrap-reverse',
    'no-wrap': 'nowrap'
  };
  tailwindConfig.theme.flexGrow = {
    "default": '1',
    '0': '0'
  };
  tailwindConfig.theme.flexShrink = {
    "default": '1',
    '0': '0'
  };
  tailwindConfig.theme.alignSelf = {
    auto: 'auto',
    start: 'flex-start',
    end: 'flex-end',
    center: 'center',
    stretch: 'stretch'
  };
  tailwindConfig.theme.spacing.auto = 'auto';
  tailwindConfig.theme.borderWidth = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.borderWidth);
  tailwindConfig.theme.borderStyle = {
    solid: 'solid',
    dashed: 'dashed',
    dotted: 'dotted',
    "double": 'double',
    none: 'none'
  };
  tailwindConfig.theme.outline = {
    browser: 'browser',
    none: '0'
  };
  tailwindConfig.theme.fill = {
    current: 'currentColor',
    none: 'none'
  };
  tailwindConfig.theme.stroke = {
    current: 'currentColor',
    none: 'none'
  };
  tailwindConfig.theme.transitionDuration = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.transitionDuration);
  tailwindConfig.theme.transitionDelay = _objectSpread({
    '0': '0'
  }, tailwindConfig.theme.transitionDelay);
  tailwindConfig.theme.accessibility = {
    visible: 'visible',
    'sr-only': 'sr-only',
    'not-sr-only': 'not-sr-only'
  };
  tailwindConfig.theme.flatColors = longNames(flatten(tailwindConfig.theme.colors));
  delete tailwindConfig.theme.spacing.px;
  var properties = [{
    name: 'display',
    scale: 'display',
    prefix: ''
  }, {
    name: 'opacity',
    scale: 'opacity',
    prefix: 'opacity-'
  }, {
    name: 'justifyContent',
    scale: 'justifyContent',
    prefix: 'justify-'
  }, {
    name: 'alignItems',
    scale: 'alignItems',
    prefix: 'items-'
  }, {
    name: 'flexDirection',
    scale: 'flexDirection',
    prefix: 'flex-'
  }, {
    name: 'flexWrap',
    scale: 'flexWrap',
    prefix: 'flex-'
  }, {
    name: 'flexGrow',
    scale: 'flexGrow',
    prefix: 'flex-grow-'
  }, {
    name: 'flexShrink',
    scale: 'flexShrink',
    prefix: 'flex-shrink-'
  }, {
    name: 'alignSelf',
    scale: 'alignSelf',
    prefix: 'self-'
  }, {
    name: 'order',
    scale: 'order',
    prefix: 'order-'
  }, {
    name: 'width',
    scale: 'width',
    prefix: 'w-'
  }, {
    name: 'height',
    scale: 'height',
    prefix: 'h-'
  }, {
    name: 'maxWidth',
    scale: 'maxWidth',
    prefix: 'max-w-'
  }, {
    name: 'maxHeight',
    scale: 'maxHeight',
    prefix: 'max-h-'
  }, {
    name: 'minWidth',
    scale: 'minWidth',
    prefix: 'min-w-'
  }, {
    name: 'minHeight',
    scale: 'minHeight',
    prefix: 'min-h-'
  }, {
    name: 'borderRadius',
    scale: 'borderRadius',
    prefix: 'rounded-'
  }, {
    name: 'spaceX',
    scale: 'space',
    prefix: 'space-x-'
  }, {
    name: 'spaceY',
    scale: 'space',
    prefix: 'space-y-'
  }, {
    name: 'margin',
    scale: 'margin',
    prefix: 'm-'
  }, {
    name: 'marginTop',
    scale: 'margin',
    prefix: 'mt-'
  }, {
    name: 'marginRight',
    scale: 'margin',
    prefix: 'mr-'
  }, {
    name: 'marginBottom',
    scale: 'margin',
    prefix: 'mb-'
  }, {
    name: 'marginLeft',
    scale: 'margin',
    prefix: 'ml-'
  }, {
    name: 'marginX',
    scale: 'margin',
    prefix: 'mx-'
  }, {
    name: 'marginY',
    scale: 'margin',
    prefix: 'my-'
  }, {
    name: 'padding',
    scale: 'padding',
    prefix: 'p-'
  }, {
    name: 'paddingTop',
    scale: 'padding',
    prefix: 'pt-'
  }, {
    name: 'paddingRight',
    scale: 'padding',
    prefix: 'pr-'
  }, {
    name: 'paddingBottom',
    scale: 'padding',
    prefix: 'pb-'
  }, {
    name: 'paddingLeft',
    scale: 'padding',
    prefix: 'pl-'
  }, {
    name: 'paddingX',
    scale: 'padding',
    prefix: 'px-'
  }, {
    name: 'paddingY',
    scale: 'padding',
    prefix: 'py-'
  }, {
    name: 'fontFamily',
    scale: 'fontFamily',
    prefix: 'font-'
  }, {
    name: 'textColor',
    scale: 'flatColors',
    prefix: 'text-'
  }, {
    name: 'fontWeight',
    scale: 'fontWeight',
    prefix: 'font-'
  }, {
    name: 'fontSize',
    scale: 'fontSize',
    prefix: 'text-'
  }, {
    name: 'textAlign',
    scale: 'textAlign',
    prefix: 'text-'
  }, {
    name: 'lineHeight',
    scale: 'lineHeight',
    prefix: 'leading-'
  }, {
    name: 'fontStyle',
    scale: 'fontStyle',
    prefix: ''
  }, {
    name: 'textDecoration',
    scale: 'textDecoration',
    prefix: ''
  }, {
    name: 'textTransform',
    scale: 'textTransform',
    prefix: ''
  }, {
    name: 'textOpacity',
    scale: 'textOpacity',
    prefix: 'text-opacity-'
  }, {
    name: 'backgroundColor',
    scale: 'flatColors',
    prefix: 'bg-'
  }, {
    name: 'backgroundOpacity',
    scale: 'backgroundOpacity',
    prefix: 'bg-opacity-'
  }, {
    name: 'borderWidth',
    scale: 'borderWidth',
    prefix: 'border-'
  }, {
    name: 'borderColor',
    scale: 'flatColors',
    prefix: 'border-'
  }, {
    name: 'borderStyle',
    scale: 'borderStyle',
    prefix: 'border-'
  }, {
    name: 'outline',
    scale: 'outline',
    prefix: 'outline-'
  }, {
    name: 'borderOpacity',
    scale: 'borderOpacity',
    prefix: 'border-opacity-'
  }, {
    name: 'color',
    scale: 'colors'
  }, {
    name: 'flatColors',
    scale: 'flatColors'
  }, {
    name: 'boxShadow',
    scale: 'boxShadow',
    prefix: 'shadow-'
  }, {
    name: 'fill',
    scale: 'fill',
    prefix: 'fill-'
  }, {
    name: 'stroke',
    scale: 'stroke',
    prefix: 'stroke-'
  }, {
    name: 'strokeWidth',
    scale: 'strokeWidth',
    prefix: 'stroke-'
  }, {
    name: 'transitionProperty',
    scale: 'transitionProperty',
    prefix: 'transition-'
  }, {
    name: 'transitionDuration',
    scale: 'transitionDuration',
    prefix: 'duration-'
  }, {
    name: 'transitionTimingFunction',
    scale: 'transitionTimingFunction',
    prefix: 'ease-'
  }, {
    name: 'transitionDelay',
    scale: 'transitionDelay',
    prefix: 'delay-'
  }, {
    name: 'animation',
    scale: 'animation',
    prefix: 'animate-'
  }, {
    name: 'accessibility',
    scale: 'accessibility',
    prefix: ''
  }];
  var screenModifiers = Object.keys(tailwindConfig.theme.screens || {});
  var pseudoModifiers = ['hover', 'focus', 'active' // 'focus-within',
  // 'disabled',
  ];
  var usedPseudoModifiers = [];
  var definitions = {};
  properties.forEach(function (_ref) {
    var name = _ref.name,
        scale = _ref.scale,
        prefix = _ref.prefix;
    var config = tailwindConfig.theme[scale];
    definitions[name] = {
      prefix: prefix,
      classNames: Object.keys(config).map(function (modifier) {
        if (modifier === 'default') return prefix.slice(0, -1);else return prefix + modifier;
      }),
      names: Object.keys(config),
      values: config,
      variants: getVariant(name, tailwindConfig)
    };
    pseudoModifiers.forEach(function (modifier) {
      if (!tailwindConfig.variants[name]) return;

      if (tailwindConfig.variants[name].includes(modifier)) {
        if (!usedPseudoModifiers.includes(modifier)) {
          usedPseudoModifiers.push(modifier);
        }

        var originalClassNames = definitions[name].classNames;
        var modifiedClassNames = [];
        originalClassNames.forEach(function (className) {
          if (!className.includes(':')) {
            // can't have double :hover:focus:
            modifiedClassNames.push(modifier + ':' + className);
          }
        });
        definitions[name].classNames = originalClassNames.concat(modifiedClassNames);
      }
    });

    if (definitions[name].variants.includes('responsive')) {
      var originalClassNames = definitions[name].classNames;
      var modifiedClassNames = [];
      screenModifiers.forEach(function (modifier) {
        originalClassNames.forEach(function (className) {
          modifiedClassNames.push(modifier + ':' + className);
        });
      });
      definitions[name].classNames = originalClassNames.concat(modifiedClassNames);
    }
  });
  tailwindConfig.usedPseudoModifiers = usedPseudoModifiers;
  return definitions;
};

function flatten(scale, prefix) {
  var flatScale = {};

  for (var key in scale) {
    var value = scale[key];

    if (_typeof(value) === 'object') {
      flatScale = deepmerge(flatScale, flatten(value, key));
    } else {
      var flatKey = prefix ? prefix + '-' + key : key;
      flatScale[flatKey] = value;
    }
  }

  return flatScale;
}

function longNames(colors) {
  var longColors = {};
  Object.keys(colors).forEach(function (name) {
    var value = colors[name];

    try {
      if (value === 'transparent') longColors[name] = value;else longColors[name] = Color(value).hex().toLowerCase();
    } catch (error) {
      longColors[name] = value;
    }
  });
  return longColors;
}

var getVariant = function getVariant(name, tailwindConfig) {
  if (tailwindConfig.variants[name]) return tailwindConfig.variants[name];
  if (name.includes('padding')) return tailwindConfig.variants.padding;
  if (name.includes('margin')) return tailwindConfig.variants.margin;
  if (name.includes('space')) return tailwindConfig.variants.margin;
  return [];
};

var shortMap = {
  xs: 'extra small',
  sm: 'small',
  "default": 'default',
  md: 'medium',
  lg: 'large',
  xl: 'Extra large',
  '2xl': '2X large',
  col: 'column',
  'col-reverse': 'column-reverse'
};

var removeHyphen = function removeHyphen(string) {
  if (string.startsWith('-')) return string;else return string.replace('-', ' ');
};

var prettify = function prettify(string) {
  var longString = shortMap[string] || string;
  return capitalize(removeHyphen(longString));
};
var hideDefault = function hideDefault(string) {
  return string.replace('default', '');
};
var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var getWipProperty = function getWipProperty(state, property) {
  var key = getKeyWithModifier(state, property);
  return state.wipProperties[key];
};
var rgbProperties = ['backgroundColor', 'textColor', 'borderColor'];
var remProperties = ['borderRadius', 'fontSize', 'lineHeight', 'width', 'height', 'maxWidth', 'maxHeight', 'minWidth', 'minHeight', 'borderWidth', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
var getComputedProperty = function getComputedProperty(state, property, value) {
  var computedValue = value || state.computedStyles[property];
  if (rgbProperties.includes(property)) computedValue = rgbToHex(computedValue);
  if (remProperties.includes(property)) computedValue = pxTorem(computedValue);
  return getModifier(state, property, computedValue);
};
var getKeyWithModifier = function getKeyWithModifier(_ref, property) {
  var responsiveModifier = _ref.responsiveModifier,
      pseudoModifier = _ref.pseudoModifier;
  // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value
  var key = '';
  if (responsiveModifier) key += responsiveModifier + ':';
  if (pseudoModifier) key += pseudoModifier + ':';
  key += property;
  return key;
};
var parseClassName = function parseClassName(state, property, className) {
  var responsiveModifers = Object.keys(state.config.theme.screens);
  var definition = state.definitions[property];
  var prefix = definition.prefix; // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value

  var responsiveModifier;
  var pseudoModifier;
  var value;
  var keyvalue;
  var numberOfModifiers = className.split(':').length - 1;

  if (numberOfModifiers === 2) {
    responsiveModifier = className.split(':')[0];
    pseudoModifier = className.split(':')[1];
    keyvalue = className.split(':')[2];
  } else if (numberOfModifiers === 1) {
    var unknownModifier = className.split(':')[0];
    keyvalue = className.split(':')[1];

    if (responsiveModifers.includes(unknownModifier)) {
      responsiveModifier = unknownModifier;
    } else {
      pseudoModifier = unknownModifier;
    }
  } else {
    keyvalue = className;
  }

  if (keyvalue.includes('-')) {
    value = keyvalue.replace(prefix, '');
  } else if (prefix.replace('-', '') === keyvalue) {
    // example: rounded
    value = 'default';
  } else {
    // example: flex
    value = keyvalue;
  }

  return {
    responsiveModifier: responsiveModifier,
    pseudoModifier: pseudoModifier,
    value: value
  };
};
var getPropertyFromKey = function getPropertyFromKey(propertyWithModifiers) {
  // format: prefix-value |
  // responsive:prefix-value | pseudo:prefix-value |
  // responsive:pseudo:prefix-value
  return propertyWithModifiers.split(':').pop();
};
var getModifier = function getModifier(state, property, value) {
  var values = state.definitions[property].values;

  var type = _typeof(value);

  return Object.keys(values).find(function (key) {
    if (type === 'string') {
      if (typeof values[key] === 'string') {
        return values[key].toLowerCase() === value.toLowerCase();
      } else if (Array.isArray(values[key])) {
        // future: defaultLineHeights
        var arrayValue = values[key][0];
        return arrayValue.toLowerCase() === value.toLowerCase();
      }
    } else {
      return values[key] == value;
    }
  });
};
var pxTorem = function pxTorem(value) {
  if (value === '0px') return '0';
  var bodyFontSize = parseInt(window.getComputedStyle(document.querySelector('body')).fontSize, 10);
  return parseInt(value, 10) / bodyFontSize + 'rem';
};
var remToPx = function remToPx(value) {
  if (value === '0') return '0';
  if (value.includes('px')) return value;
  var bodyFontSize = parseInt(window.getComputedStyle(document.querySelector('body')).fontSize, 10);
  var pxs = Math.floor(parseFloat(value, 10) * bodyFontSize);
  if (pxs) return pxs + 'px';else return '';
};
var rgbToHex = function rgbToHex(rgb) {
  if (!rgb) return 'transparent';
  var color = Color(rgb);
  if (color.valpha === 0) return 'transparent';
  return Color(rgb).hex().toLowerCase();
};
var isDisabled = function isDisabled(state, variants) {
  return state.pseudoModifier && !variants.includes(state.pseudoModifier) || state.responsiveModifier && !variants.includes('responsive');
};
var isValueEmpty = function isValueEmpty(property, value) {
  if (property.includes('opacity')) return false;
  if (property.includes('margin')) return false;
  if (property.includes('padding')) return false;
  if (property.includes('flexShrink')) return false;
  if (property.includes('flexGrow')) return false;
  if (!value) return true;
  if (value === '0') return true;
  if (property === 'fontStyle' && value === 'normal') return true;
  if (property === 'outline' && value === 'browser') return true;
  if (property === 'accessibility' && value === 'visible') return true;
  if (property.includes('Color') && value === 'transparent') return true;

  if (['stroke', 'fill', 'textDecoration', 'textTransform'].includes(property) && value === 'none') {
    return true;
  }

  return false;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var defaultConfig = resolveConfig({});
var initialState = {
  enabled: false,
  config: {},
  uuid: null,
  wipStyles: {},
  wipProperties: {},
  computedStyles: {},
  responsiveModeEnabled: false,
  responsiveModifier: '',
  pseudoModifier: null,
  spaceOverlayVisibility: false,
  experimentalSpace: true,
  shortcutsEnabled: false
};
var actions = {
  INIT: 'INIT',
  LOAD_CONFIG: 'LOAD_CONFIG',
  TOGGLE_DEVTOOLS: 'TOGGLE_DEVTOOLS',
  SELECT_ELEMENT: 'SELECT_ELEMENT',
  CHANGE_STYLE: 'CHANGE_STYLE',
  CHANGE_PROPERTY: 'CHANGE_PROPERTY',
  SAVE_CHANGES: 'SAVE_CHANGES',
  TOGGLE_RESPONSIVE_MODE: 'TOGGLE_RESPONSIVE_MODE',
  CHANGE_RESPONSIVE_MODIFIER: 'CHANGE_RESPONSIVE_MODIFIER',
  CHANGE_PSEUDO_MODIFIER: 'CHANGE_PSEUDO_MODIFIER',
  CHANGE_SPACE_OVERLAY_VISIBILITY: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
  TOGGLE_EXPERIMENTAL_SPACE: 'TOGGLE_EXPERIMENTAL_SPACE',
  TOGGLE_SHORTCUTS: 'TOGGLE_SHORTCUTS'
};

var reducer = function reducer(state, action) {
  window.state = state;

  switch (action.type) {
    case actions.INIT:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          config: defaultConfig,
          definitions: getDefinitions(defaultConfig)
        });
      }

    case actions.LOAD_CONFIG:
      {
        // in case of error, keep default config
        var config = action.payload.config || defaultConfig;
        config.custom = !!action.payload.config;
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          config: config,
          definitions: getDefinitions(config)
        });
      }

    case actions.TOGGLE_DEVTOOLS:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          enabled: !state.enabled
        });
      }

    case actions.SELECT_ELEMENT:
      {
        if (!state.enabled) return state;
        var element = document.querySelector("[data-uuid=\"".concat(action.payload.uuid, "\"]"));
        if (!element) return state;
        var wipProperties = {};
        Object.keys(state.definitions).forEach(function (property) {
          var _state$definitions$pr = state.definitions[property],
              classNames = _state$definitions$pr.classNames,
              prefix = _state$definitions$pr.prefix;
          classNames.forEach(function (className) {
            if (element.classList.contains(className)) {
              var _parseClassName = parseClassName(state, property, className),
                  responsiveModifier = _parseClassName.responsiveModifier,
                  pseudoModifier = _parseClassName.pseudoModifier,
                  value = _parseClassName.value;

              var key = getKeyWithModifier({
                responsiveModifier: responsiveModifier,
                pseudoModifier: pseudoModifier
              }, property);
              wipProperties[key] = value;
            }
          });
        });
        var computedStyles = window.getComputedStyle(element);
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          uuid: action.payload.uuid,
          wipProperties: wipProperties,
          computedStyles: computedStyles,
          // reset
          pseudoModifier: null
        });
      }

    case actions.CHANGE_STYLE:
      {
        var _element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

        if (!_element) return;
        var changingStyles = false; // handle array values like future: defaultLineHeights

        Object.keys(action.payload).forEach(function (key) {
          if (Array.isArray(action.payload[key])) {
            var _action$payload$key = _slicedToArray(action.payload[key], 2),
                value = _action$payload$key[0],
                options = _action$payload$key[1];

            action.payload[key] = value;
            Object.keys(options).forEach(function (key) {
              action.payload[key] = options[key];
            });
          }
        });
        Object.keys(action.payload).forEach(function (key) {
          var value = action.payload[key];

          if (['spaceX', 'spaceY'].includes(key)) {
            var styleProperties = {
              spaceX: 'marginLeft',
              spaceY: 'marginTop'
            };

            _element.childNodes.forEach(function (child, index) {
              var property = styleProperties[key];
              if (index) child.style[property] = value;
            });
          } else if (key.startsWith('--')) {
            _element.style.setProperty(key, value);
          } else {
            _element.style[key] = value;
          }

          if (value) changingStyles = true;
        });
        if (changingStyles) _element.dataset.changing = true;else delete _element.dataset.changing;
        var _newState = state;
        if (action.effect) _newState = action.effect(_newState, action);
        return _newState;
      }

    case actions.CHANGE_PROPERTY:
      {
        var properties = {};
        Object.keys(action.payload).forEach(function (property) {
          var value = action.payload[property]; // format: prefix-value |
          // responsive:prefix-value | pseudo:prefix-value |
          // responsive:pseudo:prefix-value

          var key = getKeyWithModifier(state, property);
          properties[key] = value;
        });

        var _newState2 = _objectSpread$1(_objectSpread$1({}, state), {}, {
          wipProperties: _objectSpread$1(_objectSpread$1({}, state.wipProperties), properties)
        });

        if (action.effect) _newState2 = action.effect(_newState2, action);
        updateClassList({
          state: _newState2
        });
        flushClassList({
          state: _newState2
        });
        return _newState2;
      }

    case actions.SAVE_CHANGES:
      {
        flushClassList({
          state: newState
        });
        return state;
      }

    case actions.TOGGLE_RESPONSIVE_MODE:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          responsiveModeEnabled: !state.responsiveModeEnabled
        });
      }

    case actions.CHANGE_RESPONSIVE_MODIFIER:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          responsiveModifier: action.payload.responsiveModifier
        });
      }

    case actions.CHANGE_PSEUDO_MODIFIER:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          pseudoModifier: action.payload.pseudoModifier
        });
      }

    case actions.CHANGE_SPACE_OVERLAY_VISIBILITY:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          spaceOverlayVisibility: action.payload.spaceOverlayVisibility
        });
      }

    case actions.TOGGLE_EXPERIMENTAL_SPACE:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          experimentalSpace: !state.experimentalSpace
        });
      }

    case actions.TOGGLE_SHORTCUTS:
      {
        return _objectSpread$1(_objectSpread$1({}, state), {}, {
          shortcutsEnabled: !state.shortcutsEnabled
        });
      }

    default:
      {
        console.log('not identified', action);
      }
  }
};

var StateContext = /*#__PURE__*/React.createContext();
var StateProvider = function StateProvider(props) {
  var _React$useReducer = React.useReducer(reducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  return /*#__PURE__*/React.createElement(StateContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch,
      actions: actions
    }
  }, props.children);
};
var useState = function useState() {
  var _React$useContext = React.useContext(StateContext),
      state = _React$useContext.state,
      dispatch = _React$useContext.dispatch;

  return {
    state: state,
    dispatch: dispatch,
    actions: actions
  };
};

var updateClassList = function updateClassList(_ref) {
  var state = _ref.state;
  var element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));
  if (!element) return;
  var wipProperties = mergeShorthands(state.wipProperties);
  Object.keys(wipProperties).forEach(function (propertyWithModifiers) {
    var property = getPropertyFromKey(propertyWithModifiers);
    var definition = state.definitions[property];
    var value = wipProperties[propertyWithModifiers]; // create class for value

    var prefix = propertyWithModifiers.replace(property, definition.prefix);
    var className;
    if (value === 'default') className = prefix.slice(0, -1);else className = prefix + value; // remove conficting classes for the property

    definition.classNames.forEach(function (className) {
      if (className.startsWith(prefix.slice(0, -1))) {
        element.classList.remove(className);
      }
    });

    if (isValueEmpty(property, value)) ; else {
      element.classList.add(className);
    }
  });
};

var mergeShorthands = function mergeShorthands(wipProperties) {
  if (wipProperties.paddingLeft && wipProperties.paddingLeft === wipProperties.paddingRight) {
    wipProperties.paddingX = wipProperties.paddingLeft;
    delete wipProperties.paddingLeft;
    delete wipProperties.paddingRight;
  }

  if (wipProperties.paddingTop && wipProperties.paddingTop === wipProperties.paddingBottom) {
    wipProperties.paddingY = wipProperties.paddingTop;
    delete wipProperties.paddingTop;
    delete wipProperties.paddingBottom;
  }

  if (wipProperties.marginLeft && wipProperties.marginLeft === wipProperties.marginRight) {
    wipProperties.marginX = wipProperties.marginLeft;
    delete wipProperties.marginLeft;
    delete wipProperties.marginRight;
  }

  if (wipProperties.marginTop && wipProperties.marginTop === wipProperties.marginBottom) {
    wipProperties.marginY = wipProperties.marginTop;
    delete wipProperties.marginTop;
    delete wipProperties.marginBottom;
  }

  return wipProperties;
};

var flushClassList = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref2) {
    var state, element, firstSource, source, classList, _source$split, _source$split2, filename, start, end, API_URL, response, data, notificationEl, location;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _ref2.state;
            element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

            if (element) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            // with multiple source tags
            // the first one is the one we are interested in
            firstSource = Object.keys(element.dataset).find(function (key) {
              return key.startsWith('source_') || key.startsWith('meta_') || key === 'source';
            });

            if (firstSource) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            source = element.dataset[firstSource];
            classList = element.classList.value; // If using filename:start:end syntax (better for Vue and SSR)

            if (source.startsWith('/')) {
              _source$split = source.split(':'), _source$split2 = _slicedToArray(_source$split, 3), filename = _source$split2[0], start = _source$split2[1], end = _source$split2[2];
              source = {
                filename: filename,
                start: start,
                end: end
              };
            } else {
              source = JSON.parse(source);
            }

            API_URL = window.UI_DEVTOOLS_API || 'http://localhost:2406';
            _context.next = 13;
            return fetch(API_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                path: source.filename,
                lineNumber: source.start,
                start: source.start,
                end: source.end,
                className: classList
              })
            });

          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();

          case 16:
            data = _context.sent;

            if (data.error || data.nochange) {
              notificationEl = document.querySelector('#error-notification');
              location = source.filename.split('/').pop() + ':' + source.start;
              notificationEl.innerText = "Cannot predictibly change JSX expression at ".concat(location, ", skipped code change.");
              notificationEl.style.right = '8px';
              window.setTimeout(function () {
                return notificationEl.style.right = '-300px';
              }, 7500);
            }

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function flushClassList(_x) {
    return _ref3.apply(this, arguments);
  };
}();

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var tokens = {
  name: 'React UI Light',
  space: {
    0: 0,
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    13: '52px',
    14: '56px',
    15: '60px',
    16: '64px'
  },
  radii: [0, '2px', '4px', '16px', '50%'],
  fontSizes: {
    0: 0,
    1: '10px',
    2: '12px',
    3: '14px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '48px',
    9: '64px',
    10: '72px'
  },
  fontWeights: {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    compact: '1.2',
    "default": '1.6',
    cosy: '2'
  },
  breakpoints: {
    0: '576px',
    1: '768px',
    2: '992px'
  },
  durations: {
    0: 0,
    1: '75ms',
    2: '100ms',
    3: '150ms',
    4: '200ms',
    5: '300ms',
    6: '500ms',
    7: '1000ms',
    8: '2500ms'
  },
  // based on elevation levels
  shadows: {
    0: 'none',
    1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    4: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  },
  colors: {
    white: '#fff',
    reds: {
      100: '#F8E4E4',
      200: '#EFA6A6',
      300: '#E06161',
      400: '#D95252',
      500: '#D12D2D',
      600: '#B41F1F',
      700: '#A20808',
      800: '#821919',
      900: '#5E1717'
    },
    yellows: {
      100: '#FDF3D7',
      200: '#FAECC2',
      300: '#F8E8BA',
      400: '#FAE29F',
      500: '#FFD97E',
      600: '#F4CA64',
      700: '#CAA53D',
      800: '#8C6D1F',
      900: '#5C4813'
    },
    blues: {
      100: '#EFF8FF',
      200: '#B7DBF7',
      300: '#A8D1F2',
      400: '#63A2D8',
      500: '#3793E0',
      600: '#217CC9',
      700: '#2368A2',
      800: '#1A4971',
      900: '#203D54'
    },
    greens: {
      100: '#E3FCEC',
      200: '#A8EEC1',
      300: '#8FF2B2',
      400: '#4BE38C',
      500: '#22D66F',
      600: '#38C172',
      700: '#259D58',
      800: '#197741',
      900: '#145239'
    },
    grays: {
      100: '#f5faff',
      200: '#E1E7EC',
      300: '#D1D9E0',
      400: '#C8D0D7',
      500: '#AEBECD',
      600: '#929FB1',
      700: '#6E7A8A',
      800: '#404B5A',
      900: '#202833'
    }
  }
}; // recommended: use the same space grid for size

tokens.sizes = _objectSpread$2({}, tokens.space);
/* 
  Decisions: 
  You can create aliases in scales based on the scale.
*/

tokens.colors.text = {
  subtle: 'grays.700',
  body: 'grays.800',
  link: 'blues.500',
  linkHover: 'blues.700'
};
tokens.colors.error = {
  background: 'reds.100',
  border: 'reds.300',
  text: 'reds.700'
};
tokens.colors.App = {
  backgroundColor: 'white',
  color: 'grays.900',
  borderColor: 'grays.200'
};
tokens.fontSizes.Heading = {
  page: 8,
  // reads from tokens.fontSizes.8
  section: 6,
  paragraph: 4
};
/* 
  Component styles:
  You can define styles, sizes and variants here
*/

var components = {
  /** Global */
  Global: {
    body: "\n      --reach-menu-button: 1;\n      --reach-tooltip: 1;\n      @import url('https://rsms.me/inter/inter.css');\n    ",
    '#devtool': {
      'select, button, input': {
        fontFamily: 'Inter, sans-serif'
      },
      'input::-webkit-inner-spin-button': {
        height: '32px !important'
      }
    },
    '#devtool-main': {
      display: 'flex',
      justifyContent: 'space-between'
    },
    '#devtool-wrapper': {
      flexGrow: 1,
      transition: 'max-width 300ms'
    },
    '[data-enabled] [data-hovering]': {
      transitionDelay: '16ms',
      boxShadow: 'var(--shadow, 0 0), 0px 0px 0px 1px #80afff'
    },
    '[data-enabled] [data-uuid]': {
      transition: 'all 50ms linear, box-shadow 250ms ease-in'
    },
    '[data-enabled] [data-uuid] > *': {
      transition: 'all 50ms linear'
    },
    '[data-enabled] [data-uuid]:not([data-changing])': {
      transitionDelay: '16ms',
      boxShadow: 'var(--shadow, 0 0), 0px 0px 0px 1px #3f87ff'
    },
    '[data-enabled] [data-uuid][data-changing]': {
      // in case the item is otherwise opacity:0
      opacity: 1
    },
    '[data-reach-menu-popover]': {
      zIndex: 99999
    },
    '[data-reach-tooltip]': {
      zIndex: '99999 !important;'
    },
    '[data-component="TooltipTriangle"]': {
      zIndex: '99999 !important;'
    },
    '.swatches-picker span>div[title]:focus': {
      boxShadow: '0px 0px 1px 1px #3f87ff !important'
    },
    '@keyframes shortcut-fade-in': {
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    }
  },

  /** Atoms */
  Avatar: {
    sizes: {
      small: 7,
      medium: 10,
      large: 15
    },
    border: '2px solid',
    borderColor: 'grays.200'
  },
  Button: {
    fontSize: 2,
    lineHeight: 1,
    fontWeight: 'medium',
    borderRadius: 1,
    paddingLeft: 3,
    paddingRight: 3,
    border: '1px solid',
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    variants: {
      primary: {
        backgroundColor: 'greens.700',
        color: 'white',
        borderColor: 'greens.700',
        ':hover': {
          backgroundColor: 'greens.600',
          borderColor: 'greens.600'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'greens.600',
          borderColor: 'greens.700'
        },
        ':active': {
          backgroundColor: 'greens.800',
          borderColor: 'greens.800'
        }
      },
      secondary: {
        backgroundColor: 'grays.300',
        color: 'text.body',
        borderColor: 'grays.300',
        ':hover': {
          backgroundColor: 'grays.200',
          borderColor: 'grays.200'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'grays.200',
          borderColor: 'grays.400'
        },
        ':active': {
          backgroundColor: 'grays.400',
          borderColor: 'grays.400'
        }
      },
      destructive: {
        backgroundColor: 'reds.600',
        color: 'white',
        borderColor: 'reds.600',
        ':hover': {
          backgroundColor: 'reds.500',
          borderColor: 'reds.500'
        },
        ':focus': {
          outline: 'none',
          boxShadow: 1,
          backgroundColor: 'reds.600',
          borderColor: 'reds.900'
        },
        ':active': {
          backgroundColor: 'reds.700',
          borderColor: 'reds.700'
        }
      },
      link: {
        backgroundColor: 'transparent',
        color: 'text.link',
        borderColor: 'transparent',
        ':hover': {
          color: 'text.linkHover'
        },
        ':focus': {
          outline: 'none',
          color: 'text.linkHover'
        },
        ':active': {
          color: 'text.linkHover'
        }
      },
      text: {
        width: 'fit-content',
        color: 'grays.600',
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        ':hover, :focus, :active': {
          color: 'grays.700',
          boxShadow: 'none',
          outline: 'none'
        },
        '&[aria-expanded], &[data-active="true"]': {
          color: 'grays.800',
          boxShadow: 'none',
          outline: 'none'
        }
      },
      input: {
        fontSize: 2,
        borderRadius: 1,
        fontWeight: 'medium',
        width: 120,
        backgroundImage: "url(".concat(reactUi.Select.caret, ")"),
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '50%',
        backgroundPositionX: 'calc(100% - 4px)',
        // match input padding
        justifyContent: 'space-between',
        paddingLeft: 2,
        paddingRight: 4,
        flexShrink: 0,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'text.body',
        cursor: 'default',
        ':not(:hover):not(:focus)': {
          backgroundImage: 'none'
        },
        ':hover:not(:disabled)': {
          borderColor: '#dedede'
        },
        ':focus:not(:disabled)': {
          outline: 'none',
          borderColor: '#dedede'
        },
        '&[aria-invalid]': {
          backgroundColor: 'reds.100',
          borderColor: 'reds.300'
        },
        ':disabled': {
          backgroundImage: 'none'
        },
        svg: {
          size: 4
        }
      }
    }
  },
  Checkbox: {
    border: '1px solid'
  },
  Heading: {
    /** fontSizes for heading are defined in tokens.fontSizes.Heading */
    color: 'text.body'
  },
  Image: {},
  Input: {
    // recommended: match sizes of input and buttons so
    // that they go well together in forms next to other
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    fontWeight: 'medium',
    backgroundColor: 'transparnet',
    borderColor: 'transparent',
    textAlign: 'center',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      borderColor: '#dedede'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: '#dedede'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },
  Link: {
    variants: {
      "default": {
        color: 'text.link',
        ':hover, :focus': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.linkHover'
        }
      },
      subtle: {
        color: 'text.subtle',
        textDecoration: 'none',
        ':hover': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.link'
        },
        ':focus': {
          color: 'text.linkHover'
        }
      },
      body: {
        color: 'text.body',
        textDecoration: 'none',
        ':hover': {
          color: 'text.linkHover'
        },
        '&[aria-current]': {
          color: 'text.link'
        },
        ':focus': {
          color: 'text.linkHover'
        }
      }
    }
  },
  Select: {
    // recommended: match styles of input
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 2,
    borderRadius: 1,
    paddingX: 2,
    fontWeight: 'medium',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: 'text.body',
    ':not(:hover):not(:focus)': {
      backgroundImage: 'none'
    },
    ':hover:not(:disabled)': {
      borderColor: '#dedede'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      borderColor: '#dedede'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },
  Skeleton: {
    backgroundColor: 'grays.300',
    highlightColor: 'grays.100',
    height: 4,
    borderRadius: 2,
    animationDuration: 8
  },
  Spinner: {
    sizes: {
      small: 4,
      medium: 6,
      large: 8
    },
    borderColor: 'grays.200',
    borderLeftColor: 'grays.600'
  },
  Switch: {
    sizes: {
      medium: 4
    },
    colors: {
      backgroundOff: 'grays.400',
      backgroundOn: 'greens.700'
    }
  },
  Text: {
    variants: {
      "default": {
        color: 'inherit'
      },
      body: {
        color: 'text.body'
      },
      subtle: {
        color: 'text.subtle'
      },
      danger: {
        color: 'error.text'
      },
      link: {
        color: 'text.link'
      }
    }
  },
  Textarea: {
    // recommended: match styles of input
    sizes: {
      small: 6,
      medium: 8,
      large: 10
    },
    fontSize: 3,
    borderRadius: 1,
    paddingX: 2,
    paddingY: 2,
    backgroundColor: 'grays.100',
    borderColor: 'grays.400',
    color: 'text.body',
    '::placeholder': {
      color: 'text.subtle'
    },
    ':hover:not(:disabled)': {
      backgroundColor: 'grays.100',
      borderColor: 'blues.300'
    },
    ':focus:not(:disabled)': {
      outline: 'none',
      backgroundColor: 'blues.100',
      borderColor: 'blues.500'
    },
    '&[aria-invalid]': {
      backgroundColor: 'reds.100',
      borderColor: 'reds.300'
    }
  },

  /** Molecules */
  Alert: {
    fontSize: 3,
    borderRadius: 1,
    padding: 4,
    border: '1px solid',
    variants: {
      "default": {
        backgroundColor: 'grays.100',
        color: 'grays.900',
        borderColor: 'grays.200'
      },
      warning: {
        backgroundColor: 'yellows.100',
        color: 'yellows.900',
        borderColor: 'yellows.300'
      },
      success: {
        backgroundColor: 'greens.100',
        color: 'greens.900',
        borderColor: 'greens.200'
      },
      destructive: {
        backgroundColor: 'reds.100',
        color: 'reds.900',
        borderColor: 'reds.200'
      },
      info: {
        backgroundColor: 'blues.100',
        color: 'blues.900',
        borderColor: 'blues.200'
      }
    }
  },
  Breadcrumb: {
    fontSize: 3
  },
  BreadcrumbSeparator: {
    display: 'inline-block',
    color: 'text.subtle',
    paddingX: 2
  },
  BreadcrumbItem: {
    display: 'inline-block',
    '&[aria-current]': {
      color: 'text.body'
    }
  },
  Card: {
    width: '500px',
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'grays.200',
    padding: 5,
    borderRadius: 2,
    boxShadow: 2,
    overflow: 'hidden'
  },
  DialogContent: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 2,
    boxShadow: 2
  },
  DialogOverlay: {
    // use blues.900 with 90% opacity = e6 in hex
    backgroundColor: function backgroundColor(theme) {
      return theme.colors.blues[900] + 'e6';
    }
  },
  Form: {
    paddingY: 4
  },
  FormLabel: {
    fontSize: 2,
    marginBottom: 1
  },
  FormHeader: {
    color: 'text.body',
    fontSize: 5,
    fontWeight: 'normal'
  },
  MenuList: {
    backgroundColor: 'white',
    color: 'text.body',
    border: '1px solid',
    borderColor: 'grays.200',
    fontSize: 2,
    fontWeight: 500,
    borderRadius: 2,
    marginTop: '2px',
    boxShadow: 3,
    maxHeight: 256
  },
  MenuItem: {
    paddingY: 2,
    paddingX: 3,
    '&[data-selected]': {
      backgroundColor: 'grays.200'
    }
  },
  Paragraph: {},
  TabList: {
    borderColor: 'grays.200'
  },
  Tab: {
    outline: 'none',
    fontSize: 3,
    height: 8,
    marginRight: 6,
    color: 'text.body',
    ':hover': {
      color: 'text.link'
    },
    '&[data-selected]': {
      color: 'text.link'
    }
  },
  TabPanel: {
    fontSize: 3,
    paddingY: 4,
    outline: 'none'
  },
  Tooltip: {
    backgroundColor: 'grays.900',
    color: 'grays.100',
    borderRadius: 1,
    boxShadow: 2,
    paddingX: 1,
    paddingY: 1,
    fontSize: 2,
    lineHeight: 1
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var ResponsiveTabs = function ResponsiveTabs() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var breakpoints = state.config.theme.screens;
  var modifiers = Object.keys(breakpoints);
  var wrapper = document.querySelector('#devtool-wrapper');
  var main = document.querySelector('#devtool-main');
  var targetNode = wrapper;
  var config = {
    attributes: true,
    subtree: true
  };

  var callback = function callback(mutationsList) {
    var _iterator = _createForOfIteratorHelper(mutationsList),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var mutation = _step.value;

        if (mutation.type === 'attributes' && mutation.attributeName === 'class' && !mutation.target.dataset.uuid) {
          backupClassNames(mutation.target);
          filterClassList(mutation.target);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    observer.disconnect();
  };

  var observer = new MutationObserver(callback);

  var setResponsiveModifier = function setResponsiveModifier(mode) {
    var newMode = mode === state.responsiveModifier ? '' : mode;
    dispatch({
      type: actions.CHANGE_RESPONSIVE_MODIFIER,
      payload: {
        responsiveModifier: newMode
      }
    });
  };

  var resizeWrapper = function resizeWrapper() {
    var modifier = state.responsiveModifier;
    var size = modifier ? breakpoints[modifier] : 'calc(100% - 260px)';
    var bodyBackground = window.getComputedStyle(document.body).backgroundColor === 'rgba(0, 0, 0, 0)' ? 'white' : window.getComputedStyle(document.body).backgroundColor;
    wrapper.style.maxWidth = size;
    main.style.justifyContent = modifier ? 'center' : 'space-between';
    main.style.paddingRight = modifier ? '260px' : '0';
    main.style.backgroundColor = modifier ? '#1a202e' : 'transparent';
    wrapper.style.backgroundColor = modifier ? bodyBackground : 'transparent';
  };

  var backupClassNames = function backupClassNames(element) {
    if (!state.responsiveModeEnabled) return;
    var elements = element ? [element] : document.querySelectorAll('#devtool-wrapper *');
    elements.forEach(function (element) {
      // backup classnames in data attribute
      element.dataset.classNames = element.className;
    });
  };

  var restoreClassNames = function restoreClassNames() {
    document.querySelectorAll('#devtool-wrapper *').forEach(function (element) {
      if (element.dataset.classNames) {
        element.setAttribute('class', element.dataset.classNames);
      }
    });
  };

  function filterClassList(element) {
    if (!state.responsiveModifier) return;
    var elements = element ? [element] : document.querySelectorAll('#devtool-wrapper *');
    elements.forEach(function (element) {
      var properties = [];
      Object.keys(state.definitions).forEach(function (property) {
        var _state$definitions$pr = state.definitions[property],
            classNames = _state$definitions$pr.classNames,
            prefix = _state$definitions$pr.prefix;
        classNames.forEach(function (className) {
          if (element.classList.contains(className)) {
            var _parseClassName = parseClassName(state, property, className),
                responsiveModifier = _parseClassName.responsiveModifier,
                pseudoModifier = _parseClassName.pseudoModifier,
                value = _parseClassName.value;

            properties.push({
              property: property,
              responsiveModifier: responsiveModifier,
              pseudoModifier: pseudoModifier,
              prefix: prefix,
              value: value,
              className: className
            });
          }
        });
      });
      modifiers.forEach(function (modifier, index) {
        if (index > modifiers.indexOf(state.responsiveModifier)) {
          // 1. remove properties that have higher responsive modifier than selected
          properties = properties.filter(function (_ref) {
            var responsiveModifier = _ref.responsiveModifier;
            if (responsiveModifier === modifier) return false;
            return true;
          });
        }
      }); // 2. merge down classNames keeping the highest modifier

      properties = properties.filter(function (p1) {
        var anotherProperty = properties.find(function (p2) {
          return p1.property === p2.property && p1.pseudoModifier === p2.pseudoModifier && p1.className !== p2.className;
        }); // only one

        if (!anotherProperty) return true; // if this is bigger than the other, include this one

        if (modifiers.indexOf(p1.responsiveModifier) > modifiers.indexOf(anotherProperty.responsiveModifier)) {
          return true;
        }

        return false;
      }); // 3. attach without modifiers

      var classNames = properties.map(function (_ref2) {
        var className = _ref2.className,
            responsiveModifier = _ref2.responsiveModifier;
        return className.replace(responsiveModifier + ':', '');
      });
      element.setAttribute('class', classNames.join(' '));
    });
  }

  React.useEffect(function () {
    if (state.responsiveModeEnabled) {
      backupClassNames();
    } else {
      restoreClassNames(); // just to be sure

      observer.disconnect();
    }
  }, [state.responsiveModeEnabled]);
  React.useEffect(function () {
    if (!state.responsiveModeEnabled) return; // when a property changes, it resets the classname
    // to be be pure again, but only for the active element!
    // So, we repeat the process of backup
    // and then apply the modifier filter

    var selectedElement = document.querySelector("#devtool-wrapper [data-uuid=\"".concat(state.uuid, "\"]"));
    backupClassNames(selectedElement);
    filterClassList(selectedElement); // look out for other elements to change next

    observer.observe(targetNode, config);
  }, [state.wipProperties]);
  React.useEffect(function () {
    resizeWrapper(); // when modifier changes, you want a clean slate

    restoreClassNames(); // and then filter again

    filterClassList();
  }, [state.responsiveModifier]);
  var RIGHT = 39;
  var LEFT = 37;
  useEventListener('keydown', function (event) {
    if (!state.responsiveModeEnabled) return;
    var currentModifierIndex = modifiers.indexOf(state.responsiveModifier);

    if (event.which === RIGHT) {
      var nextModifier = modifiers[currentModifierIndex + 1];
      if (nextModifier) setResponsiveModifier(nextModifier);
    } else if (event.which === LEFT) {
      var previousModifier = modifiers[currentModifierIndex - 1];
      if (previousModifier) setResponsiveModifier(previousModifier);
    }
  });
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 1,
    css: {
      paddingX: 3,
      paddingY: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "flex-start"
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Emulate breakpoints"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    style: state.responsiveModeEnabled ? {
      color: 'greens.700'
    } : {},
    css: {
      paddingX: 1,
      alignItems: 'flex-start',
      marginRight: 1
    },
    onClick: function onClick() {
      dispatch({
        type: actions.TOGGLE_RESPONSIVE_MODE
      });
      setResponsiveModifier('');
    }
  }, /*#__PURE__*/React.createElement(Switch, null))), state.responsiveModeEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'sm: ' + breakpoints.sm + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'sm' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('sm');
    }
  }, /*#__PURE__*/React.createElement(Phone, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'md: ' + breakpoints.md + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'md' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('md');
    }
  }, /*#__PURE__*/React.createElement(Tablet, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'lg: ' + breakpoints.lg + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'lg' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('lg');
    }
  }, /*#__PURE__*/React.createElement(Laptop, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: 'xl: ' + breakpoints.xl + ' and bigger'
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: state.responsiveModifier === 'xl' ? 'link' : 'text',
    css: {
      width: 'fit-content',
      paddingX: 1
    },
    onClick: function onClick() {
      return setResponsiveModifier('xl');
    }
  }, /*#__PURE__*/React.createElement(Desktop, null))))));
};

var Desktop = function Desktop() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V6C22 4.89543 21.1046 4 20 4Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 22H16",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18V22",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70834 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Laptop = function Laptop() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19.2 8H4.8C3.80589 8 3 8.76751 3 9.71429V18.2857C3 19.2325 3.80589 20 4.8 20H19.2C20.1941 20 21 19.2325 21 18.2857V9.71429C21 8.76751 20.1941 8 19.2 8Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 22L23 22",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70834 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Tablet = function Tablet() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70833 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Phone = function Phone() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "38",
    viewBox: "0 0 24 38",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.70833 31.5H16.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.5 27.7083L16.2917 31.5L12.5 35.2917",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Switch = function Switch() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18H12.01",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11H2C1.44772 11 1 11.5373 1 12.2V21.8C1 22.4627 1.44772 23 2 23H7C7.55228 23 8 22.4627 8 21.8V12.2C8 11.5373 7.55228 11 7 11Z",
    fill: "white",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var PseudoPicker = function PseudoPicker() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var modifiers = state.config.usedPseudoModifiers;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "flex-end",
    align: "center"
  }, modifiers.map(function (modifier) {
    return /*#__PURE__*/React.createElement(reactUi.Button, {
      key: modifier,
      variant: state.pseudoModifier === modifier ? 'link' : 'text',
      css: {
        fontSize: 2
      },
      onClick: function onClick() {
        var newModifier = state.pseudoModifier === modifier ? null : modifier;
        dispatch({
          type: actions.CHANGE_PSEUDO_MODIFIER,
          payload: {
            pseudoModifier: newModifier
          }
        });
      }
    }, ":", modifier);
  }));
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var useShortcuts = function useShortcuts() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var focus = function focus(id) {
    // if any other menu is open, cancel
    var menuOpen = document.querySelector('[data-reach-menu]');
    if (menuOpen) return;
    var element = document.querySelector('#' + id);
    if (element) element.focus();
    dispatch({
      type: actions.TOGGLE_SHORTCUTS
    });
  };

  var shortcuts = {};
  Object.keys(shortcutMap).forEach(function (property) {
    var shortcut = shortcutMap[property];

    shortcuts[shortcut] = function () {
      return focus(property);
    };
  });
  React.useEffect(function () {
    var cleanup = tinykeys(window, _objectSpread$3(_objectSpread$3({
      Shift: function Shift() {
        return dispatch({
          type: actions.TOGGLE_SHORTCUTS
        });
      }
    }, state.shortcutsEnabled ? shortcuts : {}), {}, {
      'M Y': function MY() {
        var line = document.querySelector('#constraint-y');
        console.log(line);
        line.click();
      }
    }));
    return cleanup;
  });
};
var shortcutMap = {
  display: 'D',
  opacity: 'O',
  flexDirection: 'F D',
  flexWrap: 'F W',
  justifyContent: 'F J',
  alignItems: 'F A',
  flexGrow: 'F G',
  flexShrink: 'F S',
  // alignSelf: '',
  // order: 'F O',
  width: 'W',
  height: 'H',
  // maxWidth: '',
  // maxHeight: '',
  // minWidth: '',
  // minHeight: '',
  borderRadius: 'B R',
  spaceX: 'S X',
  spaceY: 'S Y',
  // margin: '',
  marginTop: 'M T',
  marginRight: 'M R',
  marginBottom: 'M B',
  marginLeft: 'M L',
  // padding: '',
  paddingTop: 'P T',
  paddingRight: 'P R',
  paddingBottom: 'P B',
  paddingLeft: 'P L',
  fontSize: 'T S',
  fontWeight: 'T W',
  lineHeight: 'T L',
  textColor: 'T C',
  fontFamily: 'T F',
  // textAlign: '',
  // fontStyle: '',
  // textDecoration: '',
  // textTransform: '',
  textOpacity: 'T O',
  backgroundColor: 'B C',
  backgroundOpacity: 'B O',
  boxShadow: 'S H',
  borderWidth: 'B W',
  // borderColor: 'B ?',
  // borderStyle: '',
  // outline: '',
  // borderOpacity: '',
  // color: '',
  // flatColors: '',
  // fill: '',
  // stroke: '',
  // strokeWidth: '',
  transitionProperty: 'T P',
  transitionDuration: 'T D',
  transitionTimingFunction: 'T E',
  // transitionDelay: '',
  animation: 'A N',
  accessibility: 'A C'
};

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ShortcutHint = function ShortcutHint(_ref) {
  var property = _ref.property;

  var _useState = useState(),
      state = _useState.state;

  if (!state.shortcutsEnabled || !shortcutMap[property]) return null;
  var rightProperties = ['marginRight', 'paddingRight'];
  return /*#__PURE__*/React.createElement("span", {
    style: _objectSpread$4({
      position: 'absolute',
      height: 0,
      width: 0,
      zIndex: 5,
      animation: 'shortcut-fade-in 250ms'
    }, rightProperties.includes(property) && {
      right: 36
    })
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    css: {
      backgroundColor: 'grays.900',
      color: 'white',
      borderRadius: 2,
      paddingX: 1,
      paddingY: '2px',
      position: ' absolute',
      left: '-6px',
      top: '6px',
      whiteSpace: 'nowrap'
    }
  }, shortcutMap[property]));
};

var ResponsiveHint = function ResponsiveHint(_ref) {
  var property = _ref.property,
      computedValue = _ref.computedValue;

  var _useState = useState(),
      state = _useState.state;

  var overridingProperty = Object.keys(state.wipProperties).find(function (key) {
    return key.endsWith(':' + property) && state.wipProperties[key] === computedValue;
  }); // mission abort

  if (!overridingProperty) return null;
  var prefix = state.definitions[property].prefix;
  var overridingModifier = overridingProperty && overridingProperty.split(':')[0];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      height: 0,
      width: 0,
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    css: {
      whiteSpace: 'pre-wrap',
      textAlign: 'left',
      paddingX: 2,
      maxWidth: 'fit-content'
    },
    label: "\nbase: ".concat(prefix).concat(state.wipProperties[property], "\noverride: ").concat(overridingModifier, ":").concat(prefix).concat(state.wipProperties[overridingProperty], "\n\n\nShowing value for base styles.\nIt is overriden by responsive styles.\n        ")
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    css: {
      position: 'absolute',
      top: '8px',
      left: '-8px',
      color: 'blues.800',
      circle: {
        fill: 'blues.100'
      }
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7.49988 13.6476C10.8952 13.6476 13.6477 10.8951 13.6477 7.49973C13.6477 4.10438 10.8952 1.3519 7.49988 1.3519C4.10453 1.3519 1.35205 4.10438 1.35205 7.49973C1.35205 10.8951 4.10453 13.6476 7.49988 13.6476Z",
    stroke: "currentColor",
    strokeWidth: "0.95"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.50002 3.78662C7.11785 3.78662 6.81224 4.10422 6.82692 4.4861L7 8C7.01073 8.27899 7.2208 8.5 7.5 8.5C7.7792 8.5 7.98927 8.27899 8 8L8.17312 4.4861C8.18781 4.10422 7.88219 3.78662 7.50002 3.78662ZM7.49988 11.226C7.91409 11.226 8.24988 10.8902 8.24988 10.476C8.24988 10.0618 7.91409 9.72598 7.49988 9.72598C7.08566 9.72598 6.74988 10.0618 6.74988 10.476C6.74988 10.8902 7.08566 11.226 7.49988 11.226Z",
    fill: "currentColor"
  })))));
};

var Dropdown = function Dropdown(props) {
  var responsiveHint = typeof props.computedValue !== 'undefined' && props.value !== props.computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ShortcutHint, {
    property: props.property
  }), responsiveHint && /*#__PURE__*/React.createElement(ResponsiveHint, {
    property: props.property,
    computedValue: props.computedValue
  }), /*#__PURE__*/React.createElement(DropdownMenu, props));
};
var DropdownMenu = /*#__PURE__*/React.memo(function (_ref) {
  var property = _ref.property,
      value = _ref.value,
      icon = _ref.icon,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      _ref$showValue = _ref.showValue,
      showValue = _ref$showValue === void 0 ? true : _ref$showValue,
      options = _ref.options,
      onChange = _ref.onChange,
      onHover = _ref.onHover,
      onClose = _ref.onClose,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  var selectedOption = options.find(function (option) {
    return option.name === value;
  }) || options[0];

  var onKeyDown = function onKeyDown(event) {
    // ESCAPE
    if (event.which === 27) {
      onClose();
      return;
    }

    var element = event.target;
    window.setTimeout(function () {
      var selectedId = element.getAttribute('aria-activedescendant');
      if (!selectedId) return;
      var index = selectedId.split('--')[0].split('option-')[1];
      var option = options[index];
      onHover(option.name);
      var selectedItem = document.querySelector('#' + selectedId);
      if (selectedItem) selectedItem.scrollIntoView({
        block: 'center'
      });
    });
  };

  return /*#__PURE__*/React.createElement(reactUi.Menu, null, function (_ref2) {
    var isExpanded = _ref2.isExpanded;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Menu.Button, {
      variant: "input",
      style: style.Button,
      id: property,
      disabled: disabled
    }, /*#__PURE__*/React.createElement(reactUi.Stack, {
      gap: 2,
      align: "center"
    }, icon ? /*#__PURE__*/React.createElement(reactUi.Stack, {
      as: reactUi.Text,
      align: "center",
      justify: "center",
      size: 2,
      color: "grays.500",
      style: {
        width: 4
      }
    }, icon) : null, /*#__PURE__*/React.createElement(reactUi.Stack, {
      gap: 1,
      align: "center"
    }, prefix && /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      css: {
        whiteSpace: 'nowrap'
      }
    }, prettify(prefix)), showValue && /*#__PURE__*/React.createElement(reactUi.Text, {
      css: {
        whiteSpace: 'nowrap'
      }
    }, typeof selectedOption.name === 'string' ? prettify(hideDefault(selectedOption.name)) : selectedOption.name), !prefix && selectedOption.hint && selectedOption.name !== selectedOption.hint ? /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      css: {
        whiteSpace: 'nowrap'
      }
    }, selectedOption.hint) : null))), isExpanded && /*#__PURE__*/React.createElement(Options, {
      options: options,
      defaultSelected: selectedOption,
      onChange: onChange,
      onHover: onHover,
      onKeyDown: onKeyDown,
      onClose: onClose
    }));
  });
}, function (prevProps, nextProps) {
  if (prevProps.value !== nextProps.value) return false;
  if (prevProps.disabled !== nextProps.disabled) return false;
  return true;
});
var Options = /*#__PURE__*/React.memo(function (_ref3) {
  var options = _ref3.options,
      defaultSelected = _ref3.defaultSelected,
      onChange = _ref3.onChange,
      onClose = _ref3.onClose,
      onKeyDown = _ref3.onKeyDown,
      onHover = _ref3.onHover;
  window.setTimeout(function () {
    // We do this in a timeout imperatively because the
    // options never update with the always true useMemo
    if (!defaultSelected) return;
    var index = options.findIndex(function (option) {
      return option.name === defaultSelected.name;
    });
    if (index === -1) return;
    var element = document.querySelector("[id^=option-".concat(index, "]"));
    if (element) element.scrollIntoView({
      block: 'center'
    });
  });
  return /*#__PURE__*/React.createElement(reactUi.Menu.List, {
    onMouseLeave: onClose,
    onKeyDown: onKeyDown
  }, options.map(function (option, index) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      as: reactUi.Menu.Item,
      key: option.name,
      gap: 1,
      justify: "space-between",
      align: "center",
      onSelect: function onSelect() {
        onChange(option.name);
        onClose(option.name);
      },
      onMouseOver: function onMouseOver() {
        return onHover(option.name);
      }
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      weight: option.name === defaultSelected.name ? 'semibold' : 'normal'
    }, typeof option.name === 'string' ? prettify(option.name) : option.name), option.hint ? /*#__PURE__*/React.createElement(reactUi.Text, {
      variant: "subtle",
      weight: option.name === defaultSelected.name ? 'semibold' : 'normal'
    }, option.hint) : null);
  }));
}, function () {
  return true;
});

var Display = function Display() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'display';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name),
        effect: function effect(newState, action) {
          if (action.payload.value !== 'flex') {
            newState.wipProperties.justifyContent = '';
            newState.wipProperties.alignItems = '';
          }

          return newState;
        }
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var Opacity = function Opacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'opacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};
var icon = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var JustifyContent = function JustifyContent() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'justifyContent';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  var flexDirection = state.computedStyles.flexDirection;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: flexDirection,
    icon: flexDirection === 'column' || flexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(radixIcons.AlignStartIcon, null) : /*#__PURE__*/React.createElement(radixIcons.JustifyStartIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    style: {
      Button: {
        flexShrink: 1
      }
    },
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var AlignItems = function AlignItems() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'alignItems';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  var flexDirection = state.computedStyles.flexDirection;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: flexDirection,
    disabled: isDisabled(state, variants),
    icon: flexDirection === 'column' || flexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(radixIcons.JustifyStartIcon, null) : /*#__PURE__*/React.createElement(radixIcons.AlignStartIcon, null),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    style: {
      Button: {
        flexShrink: 1
      }
    },
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FlexDirection = function FlexDirection() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexDirection';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FlexWrap = function FlexWrap() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexWrap';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$1,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$1 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M4.35355 12.8536C4.54882 12.6583 4.54882 12.3417 4.35355 12.1464L3.20711 11L6.5 11L8 11C10.7614 11 13 8.76142 13 6L13 4L13 2.5C13 2.22386 12.7761 2 12.5 2C12.2239 2 12 2.22386 12 2.5L12 4L12 6C12 8.20914 10.2091 10 8 10L6.5 10L3.20711 10L4.35355 8.85355C4.54882 8.65829 4.54882 8.34171 4.35355 8.14645C4.15829 7.95118 3.84171 7.95118 3.64645 8.14645L1.64645 10.1464C1.45118 10.3417 1.45118 10.6583 1.64645 10.8536L3.64645 12.8536C3.84171 13.0488 4.15829 13.0488 4.35355 12.8536Z",
  fill: "currentColor"
}));

var FlexGrow = function FlexGrow() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexGrow';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$2,
    showValue: false,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name] === '1' ? 'Grow' : "Don't grow"
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$2 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  id: "horizontal",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: 'rotate(45deg)'
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "15 3 21 3 21 9"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "9 21 3 21 3 15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "3",
  x2: "14",
  y2: "10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

var FlexShrink = function FlexShrink() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'flexShrink';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$3,
    showValue: false,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name] === '1' ? 'Shrink' : "Don't shrink"
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$3 = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  id: "horizontal",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: 'rotate(45deg)'
  }
}, /*#__PURE__*/React.createElement("polyline", {
  points: "4 14 10 14 10 20"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "20 10 14 10 14 4"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "10",
  x2: "21",
  y2: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "21",
  x2: "10",
  y2: "14"
}));

var AlignSelf = function AlignSelf(_ref) {
  var parentFlexDirection = _ref.parentFlexDirection;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'alignSelf';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    key: parentFlexDirection,
    disabled: isDisabled(state, variants),
    prefix: "Align",
    icon: parentFlexDirection === 'column' || parentFlexDirection === 'column-reverse' ? /*#__PURE__*/React.createElement(radixIcons.JustifyStartIcon, null) : /*#__PURE__*/React.createElement(radixIcons.AlignStartIcon, null),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FlexOrder = function FlexOrder() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'order';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$4,
    prefix: property,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$4 = /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "9",
  x2: "20",
  y2: "9"
}), /*#__PURE__*/React.createElement("line", {
  x1: "4",
  y1: "15",
  x2: "20",
  y2: "15"
}), /*#__PURE__*/React.createElement("line", {
  x1: "10",
  y1: "3",
  x2: "8",
  y2: "21"
}), /*#__PURE__*/React.createElement("line", {
  x1: "16",
  y1: "3",
  x2: "14",
  y2: "21"
}));

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Size = function Size() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedWidth = getComputedProperty(state, 'width');
    var computedHeight = getComputedProperty(state, 'height');
    return {
      maintainRatio: false,
      width: getWipProperty(state, 'width') || computedWidth,
      height: getWipProperty(state, 'height') || computedHeight,
      computedWidth: computedWidth,
      computedHeight: computedHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$5(_objectSpread$5({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$5(_objectSpread$5({}, values), {}, {
          width: value,
          height: value
        });
      } else newValues = _objectSpread$5(_objectSpread$5({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          width = _newValues.width,
          height = _newValues.height;
      dispatch({
        type: action,
        payload: {
          width: width,
          height: height
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Width, {
    value: values.width,
    computedValue: values.computedWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(Height, {
    value: values.height,
    computedValue: values.computedHeight,
    onChange: onChange
  }));
};

var Width = function Width(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'width';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.WidthIcon, null),
    style: {
      Button: {
        width: 88
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  }));
};

var Height = function Height(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'height';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.HeightIcon, null),
    style: {
      Button: {
        width: 88
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  }));
};

var MaintainRatio = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Maintain width = height"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10,
      transform: 'rotate(90deg)'
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, maintainRatio ? /*#__PURE__*/React.createElement(radixIcons.Link1Icon, null) : /*#__PURE__*/React.createElement(radixIcons.LinkNone1Icon, null)));
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MinSize = function MinSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedMinWidth = getComputedProperty(state, 'minWidth');
    var computedMinHeight = getComputedProperty(state, 'minHeight');
    return {
      maintainRatio: false,
      minWidth: getWipProperty(state, 'minWidth') || computedMinWidth,
      minHeight: getWipProperty(state, 'minHeight') || computedMinHeight,
      computedMinWidth: computedMinWidth,
      computedMinHeight: computedMinHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$6(_objectSpread$6({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$6(_objectSpread$6({}, values), {}, {
          minWidth: value,
          minHeight: value
        });
      } else newValues = _objectSpread$6(_objectSpread$6({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          minWidth = _newValues.minWidth,
          minHeight = _newValues.minHeight;
      dispatch({
        type: action,
        payload: {
          minWidth: minWidth,
          minHeight: minHeight
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MinWidth, {
    value: values.minWidth,
    computedValue: values.computedMinWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio$1, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(MinHeight, {
    value: values.minHeight,
    computedValue: values.computedMinHeight,
    onChange: onChange
  }));
};

var MinWidth = function MinWidth(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'minWidth';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.WidthIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MinHeight = function MinHeight(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'minHeight';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.HeightIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaintainRatio$1 = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "12",
    viewBox: "0 0 12 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 15V18C11 18.6566 10.8707 19.3068 10.6194 19.9134C10.3681 20.52 9.99983 21.0712 9.53553 21.5355C9.07124 21.9998 8.52004 22.3681 7.91342 22.6194C7.30679 22.8707 6.65661 23 6 23C5.34339 23 4.69321 22.8707 4.08658 22.6194C3.47995 22.3681 2.92876 21.9998 2.46447 21.5355C2.00017 21.0712 1.63188 20.52 1.3806 19.9134C1.12933 19.3068 1 18.6566 1 18L1 15M1 9L1 6C1 5.34339 1.12933 4.69321 1.3806 4.08658C1.63188 3.47995 2.00017 2.92876 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6L11 9",
    stroke: "currentColor"
  }), maintainRatio ? /*#__PURE__*/React.createElement("path", {
    d: "M6 8L6 16",
    stroke: "currentColor"
  }) : null));
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var MaxSize = function MaxSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var initialiseValues = function initialiseValues() {
    var computedMaxWidth = getComputedProperty(state, 'maxWidth');
    var computedMaxHeight = getComputedProperty(state, 'maxHeight');
    return {
      maintainRatio: false,
      maxWidth: getWipProperty(state, 'maxWidth') || computedMaxWidth,
      maxHeight: getWipProperty(state, 'maxHeight') || computedMaxHeight,
      computedMaxWidth: computedMaxWidth,
      computedMaxHeight: computedMaxHeight
    };
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setMaintainRatio = function setMaintainRatio(maintainRatio) {
    setValues(_objectSpread$7(_objectSpread$7({}, values), {}, {
      maintainRatio: maintainRatio
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var newValues;

      if (values.maintainRatio) {
        newValues = _objectSpread$7(_objectSpread$7({}, values), {}, {
          maxWidth: value,
          maxHeight: value
        });
      } else newValues = _objectSpread$7(_objectSpread$7({}, values), {}, _defineProperty({}, property, value));

      var _newValues = newValues,
          maxWidth = _newValues.maxWidth,
          maxHeight = _newValues.maxHeight;
      dispatch({
        type: action,
        payload: {
          maxWidth: maxWidth,
          maxHeight: maxHeight
        }
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MaxWidth, {
    value: values.maxWidth,
    computedValue: values.computedMaxWidth,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(MaintainRatio$2, {
    maintainRatio: values.maintainRatio,
    setMaintainRatio: setMaintainRatio
  }), /*#__PURE__*/React.createElement(MaxHeight, {
    value: values.maxHeight,
    computedValue: values.computedMaxHeight,
    onChange: onChange
  }));
};

var MaxWidth = function MaxWidth(_ref) {
  var value = _ref.value,
      computedValue = _ref.computedValue,
      _onChange = _ref.onChange;
  var property = 'maxWidth';

  var _useState2 = useState(),
      state = _useState2.state,
      actions = _useState2.actions;

  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    icon: /*#__PURE__*/React.createElement(radixIcons.WidthIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaxHeight = function MaxHeight(_ref2) {
  var value = _ref2.value,
      computedValue = _ref2.computedValue,
      _onChange2 = _ref2.onChange;
  var property = 'maxHeight';

  var _useState3 = useState(),
      state = _useState3.state,
      actions = _useState3.actions;

  var _state$definitions$pr2 = state.definitions[property],
      names = _state$definitions$pr2.names,
      values = _state$definitions$pr2.values,
      variants = _state$definitions$pr2.variants;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    icon: /*#__PURE__*/React.createElement(radixIcons.HeightIcon, null),
    style: {
      Button: {
        width: 96
      }
    },
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      return _onChange2(actions.CHANGE_PROPERTY, property, name);
    },
    onHover: function onHover(name) {
      return _onChange2(actions.CHANGE_STYLE, property, values[name]);
    },
    onClose: function onClose() {
      return _onChange2(actions.CHANGE_STYLE, property, null);
    }
  });
};

var MaintainRatio$2 = function MaintainRatio(_ref3) {
  var maintainRatio = _ref3.maintainRatio,
      setMaintainRatio = _ref3.setMaintainRatio;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      width: 10
    },
    marginRight: 2,
    justify: "center",
    "data-active": maintainRatio,
    onClick: function onClick() {
      return setMaintainRatio(!maintainRatio);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "6",
    height: "12",
    viewBox: "0 0 12 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 15V18C11 18.6566 10.8707 19.3068 10.6194 19.9134C10.3681 20.52 9.99983 21.0712 9.53553 21.5355C9.07124 21.9998 8.52004 22.3681 7.91342 22.6194C7.30679 22.8707 6.65661 23 6 23C5.34339 23 4.69321 22.8707 4.08658 22.6194C3.47995 22.3681 2.92876 21.9998 2.46447 21.5355C2.00017 21.0712 1.63188 20.52 1.3806 19.9134C1.12933 19.3068 1 18.6566 1 18L1 15M1 9L1 6C1 5.34339 1.12933 4.69321 1.3806 4.08658C1.63188 3.47995 2.00017 2.92876 2.46447 2.46447C3.40215 1.52678 4.67392 1 6 1C7.32608 1 8.59785 1.52678 9.53553 2.46447C10.4732 3.40215 11 4.67392 11 6L11 9",
    stroke: "currentColor"
  }), maintainRatio ? /*#__PURE__*/React.createElement("path", {
    d: "M6 8L6 16",
    stroke: "currentColor"
  }) : null));
};

var BorderRadius = function BorderRadius() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderRadius';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.CornersIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var SpaceX = function SpaceX() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'spaceX';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: icon$5,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = value === 0 ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$5 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M14 13.5L14 1.5",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M1 13.5L1 1.5",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M11.8515 7.18144C12.0272 7.35718 12.0272 7.6421 11.8515 7.81784L10.0181 9.65117C9.8424 9.82691 9.55748 9.82691 9.38174 9.65117C9.20601 9.47544 9.20601 9.19051 9.38174 9.01478L10.4469 7.94964L4.553 7.94964L5.61814 9.01478C5.79388 9.19051 5.79388 9.47544 5.61814 9.65117C5.4424 9.82691 5.15748 9.82691 4.98174 9.65117L3.14841 7.81784C3.06402 7.73345 3.01661 7.61899 3.01661 7.49964C3.01661 7.38029 3.06402 7.26583 3.14841 7.18144L4.98174 5.34811C5.15748 5.17237 5.4424 5.17237 5.61814 5.34811C5.79388 5.52385 5.79388 5.80877 5.61814 5.98451L4.553 7.04964L10.4469 7.04964L9.38174 5.98451C9.20601 5.80877 9.20601 5.52385 9.38174 5.34811C9.55748 5.17237 9.84241 5.17237 10.0181 5.34811L11.8515 7.18144Z",
  fill: "currentColor"
}));

var SpaceY = function SpaceY() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'spaceY';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: icon$6,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = value === 0 ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};
var icon$6 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M13.5 1L1.5 0.999999",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  d: "M13.5 14L1.5 14",
  stroke: "currentColor",
  strokeWidth: "0.9",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M7.18144 3.14846C7.35718 2.97273 7.6421 2.97273 7.81784 3.14846L9.65117 4.9818C9.82691 5.15753 9.82691 5.44246 9.65117 5.61819C9.47544 5.79393 9.19051 5.79393 9.01478 5.61819L7.94964 4.55306L7.94964 10.4469L9.01478 9.3818C9.19051 9.20606 9.47544 9.20606 9.65117 9.3818C9.82691 9.55753 9.82691 9.84246 9.65117 10.0182L7.81784 11.8515C7.73345 11.9359 7.61899 11.9833 7.49964 11.9833C7.38029 11.9833 7.26584 11.9359 7.18144 11.8515L5.34811 10.0182C5.17237 9.84246 5.17237 9.55753 5.34811 9.3818C5.52385 9.20606 5.80877 9.20606 5.98451 9.3818L7.04964 10.4469L7.04964 4.55306L5.98451 5.61819C5.80877 5.79393 5.52385 5.79393 5.34811 5.61819C5.17237 5.44246 5.17237 5.15753 5.34811 4.9818L7.18144 3.14846Z",
  fill: "currentColor"
}));

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ConstrainedGroup = function ConstrainedGroup(_ref) {
  var propertyGroup = _ref.propertyGroup;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var properties = {
    Top: propertyGroup + 'Top',
    Right: propertyGroup + 'Right',
    Bottom: propertyGroup + 'Bottom',
    Left: propertyGroup + 'Left'
  }; // TODO: These values don't change with responsive mode changing

  var initialiseValues = function initialiseValues() {
    var _ref2;

    var computedTop = getComputedProperty(state, properties.Top);
    var computedRight = getComputedProperty(state, properties.Right);
    var computedBottom = getComputedProperty(state, properties.Bottom);
    var computedLeft = getComputedProperty(state, properties.Left);
    return _ref2 = {
      constraints: {
        x: false,
        y: false,
        all: false
      }
    }, _defineProperty(_ref2, properties.Top, getWipProperty(state, properties.Top) || computedTop), _defineProperty(_ref2, properties.Right, getWipProperty(state, properties.Right) || computedRight), _defineProperty(_ref2, properties.Bottom, getWipProperty(state, properties.Bottom) || computedBottom), _defineProperty(_ref2, properties.Left, getWipProperty(state, properties.Left) || computedLeft), _defineProperty(_ref2, 'computed' + properties.Top, computedTop), _defineProperty(_ref2, 'computed' + properties.Right, computedRight), _defineProperty(_ref2, 'computed' + properties.Bottom, computedBottom), _defineProperty(_ref2, 'computed' + properties.Left, computedLeft), _ref2;
  };

  var _React$useState = React.useState(initialiseValues),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  React.useEffect(function () {
    setValues(initialiseValues);
  }, [state.uuid, state.responsiveModifier, state.pseudoModifier]);

  var setConstraints = function setConstraints(constraints) {
    setValues(_objectSpread$8(_objectSpread$8({}, values), {}, {
      constraints: constraints
    }));
  };

  var onChange = function onChange(action, property, value) {
    setValues(function (values) {
      var constraints = values.constraints;
      var newValues;

      if (constraints.all) {
        var _objectSpread2;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, properties.Top, value), _defineProperty(_objectSpread2, properties.Right, value), _defineProperty(_objectSpread2, properties.Bottom, value), _defineProperty(_objectSpread2, properties.Left, value), _objectSpread2));
      } else if (constraints.x && [properties.Left, properties.Right].includes(property)) {
        var _objectSpread3;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, properties.Left, value), _defineProperty(_objectSpread3, properties.Right, value), _objectSpread3));
      } else if (constraints.y && [properties.Top, properties.Bottom].includes(property)) {
        var _objectSpread4;

        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, (_objectSpread4 = {}, _defineProperty(_objectSpread4, properties.Top, value), _defineProperty(_objectSpread4, properties.Bottom, value), _objectSpread4));
      } else {
        newValues = _objectSpread$8(_objectSpread$8({}, values), {}, _defineProperty({}, property, value));
      }

      var payload = {}; // only dispatch properties that have changed

      if (newValues[properties.Top] !== values[properties.Top]) {
        payload[properties.Top] = newValues[properties.Top];
      }

      if (newValues[properties.Right] !== values[properties.Right]) {
        payload[properties.Right] = newValues[properties.Right];
      }

      if (newValues[properties.Bottom] !== values[properties.Bottom]) {
        payload[properties.Bottom] = newValues[properties.Bottom];
      }

      if (newValues[properties.Left] !== values[properties.Left]) {
        payload[properties.Left] = newValues[properties.Left];
      }

      dispatch({
        type: action,
        payload: payload
      });
      if (action === actions.CHANGE_PROPERTY) return newValues;else return values;
    });
  };

  var onMouseOver = function onMouseOver() {// dispatch({
    //   type: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
    //   payload: { spaceOverlayVisibility: true },
    // })
  };

  var onMouseLeave = function onMouseLeave() {// dispatch({
    //   type: 'CHANGE_SPACE_OVERLAY_VISIBILITY',
    //   payload: { spaceOverlayVisibility: false },
    // })
  };

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 1,
    css: {
      paddingY: 4,
      flexShrink: 0
    },
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5,
      textTransform: 'capitalize'
    }
  }, propertyGroup), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Top",
    property: propertyGroup + 'Top',
    value: values[propertyGroup + 'Top'],
    computedValue: values['computed' + propertyGroup + 'Top'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Top']
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Left",
    property: propertyGroup + 'Left',
    value: values[propertyGroup + 'Left'],
    computedValue: values['computed' + propertyGroup + 'Left'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Left']
  }), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    gap: 1,
    css: {
      height: 10,
      width: 12,
      color: 'text.subtle'
    }
  }, /*#__PURE__*/React.createElement(Constraints, {
    constraints: values.constraints,
    setConstraints: setConstraints
  })), /*#__PURE__*/React.createElement(Select2, {
    direction: "Right",
    property: propertyGroup + 'Right',
    value: values[propertyGroup + 'Right'],
    computedValue: values['computed' + propertyGroup + 'Right'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Right']
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "center",
    align: "center",
    css: {
      height: 10
    }
  }, /*#__PURE__*/React.createElement(Select2, {
    direction: "Bottom",
    property: propertyGroup + 'Bottom',
    value: values[propertyGroup + 'Bottom'],
    computedValue: values['computed' + propertyGroup + 'Bottom'],
    onChange: onChange,
    definition: state.definitions[propertyGroup + 'Bottom']
  })));
};

var Constraints = function Constraints(_ref3) {
  var constraints = _ref3.constraints,
      setConstraints = _ref3.setConstraints;
  var x = constraints.x,
      y = constraints.y,
      all = constraints.all;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "23",
    rx: "4.5",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 0.5V24M12 0.5H9M12 0.5H15M9 23.5H15",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 12H24M23.5 15V9M0.5 14.5V9",
    stroke: "#D2D4D7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "23",
    rx: "4.5",
    stroke: "black",
    strokeOpacity: all ? '1' : '0',
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        all: !all
      }));
    }
  }), /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "g",
    tabIndex: 0,
    css: {
      '&:hover, &:focus': {
        outline: 'none',
        path: {
          strokeOpacity: y || all ? 1 : 0.5
        }
      }
    },
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        y: !y
      }));
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 0.5V24M12 0.5H9M12 0.5H15M9 23.5H15",
    stroke: "black",
    strokeOpacity: y || all ? '1' : '0'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 1H20L12.5 11.5L20 23H4L11.5 11.5L4 1Z",
    fill: "black",
    fillOpacity: "0"
  })), /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "g",
    tabIndex: 0,
    css: {
      '&:hover, &:focus': {
        outline: 'none',
        path: {
          strokeOpacity: x || all ? 1 : 0.5
        }
      }
    },
    onClick: function onClick() {
      return setConstraints(_objectSpread$8(_objectSpread$8({}, constraints), {}, {
        x: !x
      }));
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M23 4L23 20L12 12.5L0.999999 20L1 4L12 11.5L23 4Z",
    fill: "black",
    fillOpacity: "0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 12H24M23.5 15V9M0.5 14.5V9",
    stroke: "black",
    strokeOpacity: x || all ? '1' : '0'
  }))));
};

var Select2 = function Select2(_ref4) {
  var property = _ref4.property,
      value = _ref4.value,
      computedValue = _ref4.computedValue,
      _onChange = _ref4.onChange,
      definition = _ref4.definition;

  var _useState2 = useState(),
      state = _useState2.state;

  var names = definition.names,
      values = definition.values,
      variants = definition.variants;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      var value = values[name];
      var hint = ['0', 'auto'].includes(value) ? null : remToPx(value);
      return {
        name: name,
        hint: hint
      };
    }),
    style: {
      Button: {
        width: 88,
        justifyContent: 'center',
        paddingLeft: 3
      }
    },
    onChange: function onChange(name) {
      return _onChange('CHANGE_PROPERTY', property, name);
    },
    onHover: function onHover(name) {
      _onChange('CHANGE_STYLE', property, values[name]);
    },
    onClose: function onClose() {
      _onChange('CHANGE_STYLE', property, null);
    }
  }));
};

var FontFamily = function FontFamily() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontFamily';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.FontFamilyIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ColorPicker = function ColorPicker(_ref) {
  var property = _ref.property,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      computedValue = _ref.computedValue,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      _ref$onHover = _ref.onHover,
      onHover = _ref$onHover === void 0 ? function () {} : _ref$onHover,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose;

  var _useState = useState(),
      state = _useState.state;

  var values = state.definitions.color.values;
  var flatValues = state.definitions.flatColors.values;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisibility = _React$useState2[1];

  var inputRef = React.useRef();
  var colorValue;
  if (color === 'transparent') colorValue = 'transparent';else colorValue = flatValues[color] || 'currentColor';
  var configColors = convertObjectToArray(values);
  var borderColor = colorValue;

  try {
    borderColor = Color(colorValue).contrast(Color('#ffffff')) < 1.5 ? '#dedede' : colorValue;
  } catch (err) {}

  var internalOnChange = function internalOnChange(color) {
    onChange(color);
    setVisibility(false);
  };

  var getPosition = function getPosition() {
    var HEIGHT = 282; // based on tailwind-ui config

    var position = {
      top: inputRef.current.getBoundingClientRect().top + 32,
      right: 3
    }; // keep it inside

    if (position.top + HEIGHT > window.innerHeight) {
      position.top = window.innerHeight - HEIGHT - 8;
    }

    return position;
  };

  return /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(ShortcutHint, {
    property: property,
    computedValue: computedValue
  }), computedValue && color !== computedValue && /*#__PURE__*/React.createElement(ResponsiveHint, {
    property: property,
    computedValue: computedValue
  }), /*#__PURE__*/React.createElement(reactUi.Stack, {
    gap: 1,
    align: "center",
    css: {
      height: 8,
      width: 120,
      paddingLeft: 3,
      border: '1px solid',
      borderRadius: 1,
      borderColor: 'transparent',
      opacity: disabled ? 0.4 : 1,
      ':hover, :focus-within': {
        borderColor: disabled ? 'trasparent' : '#dedede'
      }
    },
    style: {
      marginLeft: 0
    }
  }, /*#__PURE__*/React.createElement(reactUi.Element, {
    as: "button",
    id: property,
    tabIndex: 0,
    disabled: disabled,
    css: {
      border: '1px solid',
      borderColor: borderColor,
      width: 4,
      height: 4,
      borderRadius: 1,
      backgroundColor: colorValue,
      boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.1)',
      flexShrink: 0,
      zIndex: 3,
      cursor: 'default !important'
    },
    onClick: function onClick() {
      return setVisibility(!visible);
    }
  }), /*#__PURE__*/React.createElement(reactUi.Input, {
    type: "text",
    ref: inputRef,
    disabled: disabled,
    css: {
      textAlign: 'left',
      fontSize: 2,
      width: 72,
      zIndex: 1,
      height: 30,
      border: 'none',
      cursor: 'default !important'
    },
    style: {
      paddingLeft: '2px',
      paddingRight: 0
    },
    value: prettify(color),
    onClick: function onClick() {
      return setVisibility(!visible);
    },
    onChange: function onChange(event) {
      return internalOnChange({
        hex: event.target.value
      });
    }
  })), visible && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zoomIndex: 2
    },
    onClick: function onClick() {
      onClose();
      setVisibility(false);
    }
  }), /*#__PURE__*/React.createElement(reactUi.Element, {
    css: _objectSpread$9(_objectSpread$9({
      position: 'fixed'
    }, getPosition()), {}, {
      zIndex: 99999
    })
  }, /*#__PURE__*/React.createElement(reactColor.SwatchesPicker, {
    width: "auto",
    height: "auto",
    color: color,
    colors: configColors,
    onChange: internalOnChange,
    onSwatchHover: onHover
  }))));
};

var convertObjectToArray = function convertObjectToArray(values) {
  var arr = [];
  var ungrouped = [];
  Object.keys(values).map(function (key) {
    var value = values[key];

    if (_typeof(value) === 'object') {
      var group = Object.values(value);
      arr.push(group);
    } else {
      ungrouped.push(value);
    }
  });
  arr.push(ungrouped);
  return arr;
};

var TextColor = function TextColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.color);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          color: null
        }
      });
    }
  }));
};

var FontWeight = function FontWeight() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontWeight';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.FontBoldIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FontSize = function FontSize() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontSize';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.FontSizeIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      var _payload3;

      dispatch({
        type: actions.CHANGE_STYLE,
        payload: (_payload3 = {}, _defineProperty(_payload3, property, null), _defineProperty(_payload3, "lineHeight", null), _payload3)
      });
    }
  });
};

var TextAlign = function TextAlign() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textAlign';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;

  var setAlignment = function setAlignment(alignment) {
    dispatch({
      type: actions.CHANGE_PROPERTY,
      payload: _defineProperty({}, property, alignment)
    });
  };

  var onHover = function onHover(alignment) {
    dispatch({
      type: actions.CHANGE_STYLE,
      payload: _defineProperty({}, property, alignment)
    });
  };

  var onCancel = function onCancel() {
    dispatch({
      type: actions.CHANGE_STYLE,
      payload: _defineProperty({}, property, null)
    });
  };

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      width: 120
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align left"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('left');
    },
    onMouseOver: function onMouseOver() {
      return onHover('left');
    },
    onMouseOut: onCancel,
    "data-active": value === 'left' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.TextAlignLeftIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align center"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('center');
    },
    onMouseOver: function onMouseOver() {
      return onHover('center');
    },
    onMouseOut: onCancel,
    "data-active": value === 'center' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.TextAlignCenterIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Align right"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return setAlignment('right');
    },
    onMouseOver: function onMouseOver() {
      return onHover('right');
    },
    onMouseOut: onCancel,
    "data-active": value === 'right' ? true : null,
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.TextAlignRightIcon, null))));
};

var LineHeight = function LineHeight() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'lineHeight';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.LineHeightIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: remToPx(values[name])
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var FontStyle = function FontStyle(_ref) {
  var parentValue = _ref.parentValue;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fontStyle';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Italics"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'normal' || value === 'not-italic' ? 'italic' : parentValue === 'italic' ? 'not-italic' : 'normal')
      });
    },
    "data-active": value === 'italic',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.FontItalicIcon, null)));
};

var TextDecoration = function TextDecoration() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textDecoration';
  var variants = state.definitions[property].variants;
  var value = getWipProperty(state, property) || getComputedProperty(state, property, state.computedStyles.textDecorationLine);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Underline"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value !== 'underline' ? 'underline' : 'none')
      });
    },
    "data-active": value === 'underline',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.UnderlineIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Line through"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      return dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value !== 'line-through' ? 'line-through' : 'none')
      });
    },
    "data-active": value === 'line-through',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.StrikethroughIcon, null))));
};

var TextTransform = function TextTransform(_ref) {
  var parentValue = _ref.parentValue;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textTransform';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Uppercase"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'uppercase' ? 'none' : 'uppercase')
      });
    },
    "data-active": value === 'uppercase',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.LetterCaseUppercaseIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Capitalize"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'capitalize' ? 'none' : 'capitalize')
      });
    },
    "data-active": value === 'capitalize',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.LetterCaseCapitalizeIcon, null))), /*#__PURE__*/React.createElement(reactUi.Tooltip, {
    label: "Lowercase"
  }, /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    css: {
      paddingX: 2
    },
    onClick: function onClick() {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, value === 'lowercase' ? 'none' : 'lowercase')
      });
    },
    "data-active": value === 'lowercase',
    disabled: isDisabled(state, variants)
  }, /*#__PURE__*/React.createElement(radixIcons.LetterCaseLowercaseIcon, null))));
};

var TextOpacity = function TextOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'textOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.textColor ? Color(state.computedStyles.textColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    computedValue: computedValue,
    icon: icon$7,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--text-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--text-opacity': null
        }
      });
    }
  });
};
var icon$7 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var BackgroundColor = function BackgroundColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'backgroundColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          backgroundColor: null
        }
      });
    }
  });
};

var BackgroundOpacity = function BackgroundOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'backgroundOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.backgroundColor ? Color(state.computedStyles.backgroundColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$8,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': null
        }
      });
    }
  });
};
var icon$8 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var BorderWidth = function BorderWidth() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderWidth';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$9,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$9 = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1 0.75H14C14.1381 0.75 14.25 0.861929 14.25 1V14C14.25 14.1381 14.1381 14.25 14 14.25H1C0.861929 14.25 0.75 14.1381 0.75 14V1C0.75 0.861929 0.861929 0.75 1 0.75ZM0 1C0 0.447715 0.447715 0 1 0H14C14.5523 0 15 0.447715 15 1V14C15 14.5523 14.5523 15 14 15H1C0.447715 15 0 14.5523 0 14V1ZM7.5 5C7.22386 5 7 5.22386 7 5.5C7 5.77614 7.22386 6 7.5 6C7.77614 6 8 5.77614 8 5.5C8 5.22386 7.77614 5 7.5 5ZM7 3.5C7 3.22386 7.22386 3 7.5 3C7.77614 3 8 3.22386 8 3.5C8 3.77614 7.77614 4 7.5 4C7.22386 4 7 3.77614 7 3.5ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8C7.77614 8 8 7.77614 8 7.5C8 7.22386 7.77614 7 7.5 7ZM5 7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8C5.22386 8 5 7.77614 5 7.5ZM3.5 7C3.22386 7 3 7.22386 3 7.5C3 7.77614 3.22386 8 3.5 8C3.77614 8 4 7.77614 4 7.5C4 7.22386 3.77614 7 3.5 7ZM9 7.5C9 7.22386 9.22386 7 9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8C9.22386 8 9 7.77614 9 7.5ZM11.5 7C11.2239 7 11 7.22386 11 7.5C11 7.77614 11.2239 8 11.5 8C11.7761 8 12 7.77614 12 7.5C12 7.22386 11.7761 7 11.5 7ZM7 9.5C7 9.22386 7.22386 9 7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5ZM7.5 11C7.22386 11 7 11.2239 7 11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5C8 11.2239 7.77614 11 7.5 11Z",
  fill: "currentColor"
}));

var BorderColor = function BorderColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderColor';
  var variants = state.definitions[property].variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(ColorPicker, {
    property: property,
    computedValue: computedValue,
    color: value,
    disabled: isDisabled(state, variants),
    onChange: function onChange(color) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, getModifier(state, property, color.hex))
      });
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: null
        }
      });
    },
    onHover: function onHover(color) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: color.hex
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          borderColor: null
        }
      });
    }
  });
};

var BorderStyle = function BorderStyle() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderStyle';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.BorderStyleIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var BorderOpacity = function BorderOpacity() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'borderOpacity';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property, state.computedStyles.borderColor ? Color(state.computedStyles.borderColor).valpha : 1);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$a,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: '%'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': values[name]
        }
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: {
          '--border-opacity': null
        }
      });
    }
  });
};
var icon$a = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M1.17048 7.29871C2.6305 4.65294 4.88555 3 7.5 3C10.1144 3 12.3695 4.65294 13.8295 7.29871C13.8986 7.42393 13.8986 7.57609 13.8295 7.70131C12.3695 10.3471 10.1144 12 7.5 12C4.88555 12 2.6305 10.3471 1.17048 7.70131C1.10138 7.5761 1.10138 7.42393 1.17048 7.29871ZM7.5 2C4.41479 2 1.87258 3.95663 0.294943 6.81557C0.0598947 7.24151 0.0598957 7.75852 0.294946 8.18446C1.87259 11.0434 4.41479 13 7.5 13C10.5852 13 13.1274 11.0434 14.7051 8.18446C14.9401 7.75852 14.9401 7.24151 14.7051 6.81557C13.1274 3.95663 10.5852 2 7.5 2ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
  fill: " currentColor"
}));

var Outline = function Outline() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'outline';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(reactUi.Element, {
      css: {
        size: 3,
        borderRadius: 1,
        boxShadow: value === 'none' ? '#aebecd 0px 0px 0px 1px' : '#4299e180 0px 0px 0px 2px'
      }
    }),
    disabled: isDisabled(state, variants),
    prefix: "Outline",
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var BoxShadow = function BoxShadow() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'boxShadow';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  window.dispatch = dispatch;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.SunIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null),
        effect: function effect(newState) {
          var selectedElement = document.querySelector("[data-uuid=\"".concat(newState.uuid, "\"]"));
          selectedElement.style.setProperty('--shadow', values[name]);
          return newState;
        }
      });
    }
  });
};

var StrokeWidth = function StrokeWidth() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'strokeWidth';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: icon$b,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: values[name]
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};
var icon$b = /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "3",
  y1: "4",
  x2: "21",
  y2: "4",
  strokeWidth: "1"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3.5",
  y1: "11",
  x2: "20.5",
  y2: "11",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("line", {
  x1: "3.5",
  y1: "18",
  x2: "20.5",
  y2: "18",
  strokeWidth: "3"
}));

var StrokeColor = function StrokeColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'stroke';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var FillColor = function FillColor() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'fill';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  }));
};

var TransitionProperty = function TransitionProperty() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionProperty';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionDuration = function TransitionDuration() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionDuration';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.StopwatchIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: 'ms'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionDelay = function TransitionDelay() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionDelay';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    icon: /*#__PURE__*/React.createElement(radixIcons.TimerIcon, null),
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name,
        hint: 'ms delay'
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var TransitionTimingFunction = function TransitionTimingFunction() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'transitionTimingFunction';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    computedValue: computedValue,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  });
};

var Animation = function Animation() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'animation';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var computedValue = getComputedProperty(state, property);
  var value = getWipProperty(state, property) || computedValue;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var Accessibility = function Accessibility() {
  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  var property = 'accessibility';
  var _state$definitions$pr = state.definitions[property],
      names = _state$definitions$pr.names,
      values = _state$definitions$pr.values,
      variants = _state$definitions$pr.variants;
  var value = getWipProperty(state, property);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9
    },
    align: "center"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    property: property,
    value: value,
    disabled: isDisabled(state, variants),
    options: names.map(function (name) {
      return {
        name: name
      };
    }),
    onChange: function onChange(name) {
      dispatch({
        type: actions.CHANGE_PROPERTY,
        payload: _defineProperty({}, property, name)
      });
    },
    onHover: function onHover(name) {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, values[name])
      });
    },
    onClose: function onClose() {
      dispatch({
        type: actions.CHANGE_STYLE,
        payload: _defineProperty({}, property, null)
      });
    }
  })));
};

var inWrapper = function inWrapper(element) {
  var ids = ['devtool-wrapper'];
  var main = document.querySelector('#devtool-wrapper');

  if (window.UI_DEVTOOLS_FRAMEWORK === 'nuxt') {
    // Avoid selecting Nuxt and Layout divs
    main = document.querySelector('#__layout') || document.querySelector('#__nuxt') || main;
    ids.push('__nuxt', '__layout');
  }

  if (main.contains(element) && ids.includes(element.id) === false) return true;
};

var SelectedElement = function SelectedElement() {
  var _useState = useState(),
      state = _useState.state,
      actions = _useState.actions,
      dispatch = _useState.dispatch;

  var elementStack = [];
  var selectedElement = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));
  elementStack.unshift(selectedElement);
  var parent = selectedElement.parentElement;

  if (parent && inWrapper(parent)) {
    elementStack.unshift(parent);
    var grandParent = parent.parentElement;
    if (grandParent && inWrapper(grandParent)) elementStack.unshift(grandParent);
  }

  return /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "flex-end"
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center",
    marginX: 3,
    css: {
      width: 'fit-content',
      paddingY: 2,
      '> span:not([data-selected])': {
        opacity: 0,
        width: 0,
        paddingX: 0,
        position: 'relative',
        right: -20,
        transition: 'right 200ms, opacity 200ms'
      },
      '[data-selected]': {
        zIndex: 2
      },
      ':hover': {
        '> span': {
          opacity: 1,
          paddingX: 2,
          width: 'auto',
          right: 0
        }
      }
    }
  }, elementStack.map(function (element, index) {
    var isSelected = index === elementStack.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      "data-selected": isSelected ? true : null,
      size: 1,
      weight: "semibold",
      css: {
        width: 'fit-content',
        paddingX: 2,
        paddingY: 1,
        borderRadius: 2,
        backgroundColor: isSelected ? 'blues.100' : 'grays.100',
        color: isSelected ? 'blues.800' : 'grays.800',
        cursor: 'pointer',
        opacity: isSelected ? 1 : 0.75,
        border: '1px solid',
        borderColor: isSelected ? 'blues.300' : 'transparent',
        transition: 'border-color 100ms linear',
        ':hover': {
          opacity: 1,
          backgroundColor: 'blues.100'
        }
      },
      onMouseOver: function onMouseOver() {
        var el = elementStack[index];
        el.dataset.hovering = true;
      },
      onMouseOut: function onMouseOut() {
        var el = elementStack[index];
        delete el.dataset.hovering;
      },
      onClick: function onClick() {
        var uuid = parseInt(selectedElement.dataset.uuid, 10) + 1;
        delete selectedElement.dataset.uuid;
        var newElement = elementStack[index];
        delete newElement.dataset.hovering;
        newElement.dataset.uuid = uuid;
        dispatch({
          type: actions.SELECT_ELEMENT,
          payload: {
            uuid: uuid
          }
        });
      }
    }, element.tagName.toLowerCase(), element.id ? "#".concat(element.id) : ''), index < elementStack.length - 1 && /*#__PURE__*/React.createElement(reactUi.Text, {
      css: {
        color: 'grays.400'
      }
    }, caret));
  })));
};
var caret = /*#__PURE__*/React.createElement("svg", {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6.18194 4.18185C6.35767 4.00612 6.6426 4.00612 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z",
  fill: "currentColor",
  fillRule: "evenodd",
  clipRule: "evenodd"
}));

var ServerInfo = function ServerInfo() {
  var _useState = useState(),
      state = _useState.state;

  var sourceExists = hasSourceData();

  if (!state.config.custom) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      direction: "vertical",
      css: {
        paddingY: 3,
        paddingLeft: 4,
        backgroundColor: 'yellows.100',
        color: 'yellows.800',
        borderBottom: '1px solid',
        borderColor: 'yellows.600'
      }
    }, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Devtools server not connected."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "- not syncing changes to source"), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "- using default tailwind config"));
  } else if (!sourceExists) {
    return /*#__PURE__*/React.createElement(reactUi.Stack, {
      direction: "vertical",
      css: {
        paddingY: 3,
        paddingLeft: 4,
        backgroundColor: 'yellows.100',
        color: 'yellows.800',
        borderBottom: '1px solid',
        borderColor: 'yellows.600'
      }
    }, window.UI_DEVTOOLS_FRAMEWORK === 'vue' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Source plugin not configured."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Follow", ' ', /*#__PURE__*/React.createElement(reactUi.Link, {
      href: "https://github.com/ui-devtools/tailwind-vue-experimental#usage",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "step 3 in Usage"), ' ', "to make sure the vue-template-compiler plugin is setup properly.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Babel plugin not configured."), /*#__PURE__*/React.createElement(reactUi.Text, {
      size: 2
    }, "Follow", ' ', /*#__PURE__*/React.createElement(reactUi.Link, {
      href: "https://github.com/ui-devtools/tailwind#usage",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "step 3 in Usage"), ' ', "to make sure the babel plugin is setup properly.")));
  }

  return null;
};

var hasSourceData = function hasSourceData() {
  var wrapper = document.querySelector('#devtool-wrapper');

  if (wrapper && wrapper.children) {
    if (window.UI_DEVTOOLS_FRAMEWORK === 'nuxt') {
      return true;
    }

    return Array.from(wrapper.children).find(function (child) {
      var dataset = child.dataset;
      var keys = Object.keys(dataset);
      var sourceExists = keys.find(function (key) {
        return key.startsWith('source') || key.startsWith('meta');
      });
      return sourceExists;
    });
  }
};

var version = "0.5.8";

var Feedback = function Feedback(props) {
  return /*#__PURE__*/React.createElement(reactUi.Button, _extends({
    variant: "input",
    align: "center",
    style: {
      backgroundImage: 'none',
      cursor: 'pointer',
      position: 'fixed',
      bottom: 2,
      right: '268px'
    },
    onClick: function onClick() {
      window.open('https://github.com/ui-devtools/tailwind/issues/new');
    }
  }, props), /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }))), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginLeft: 1
  }, "Send feedback - v", version));
};

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var count = 0;
var Devtool = function Devtool(_ref) {
  var _ref$enabled = _ref.enabled,
      enabled = _ref$enabled === void 0 ? true : _ref$enabled,
      setEnabled = _ref.setEnabled;

  var _useState = useState(),
      state = _useState.state,
      dispatch = _useState.dispatch,
      actions = _useState.actions;

  React.useEffect(function () {
    if (enabled !== state.enabled) setEnabled(state.enabled);
  }, [state.enabled]);
  React.useEffect(function () {
    if (!state.definitions) dispatch({
      type: actions.INIT
    });
  }, [state.definitions]);
  React.useEffect(function () {
    if (window.SKIP_CONFIG) return;

    if (state.enabled && !state.config.custom) {
      var API_URL = window.UI_DEVTOOLS_API || 'http://localhost:2406';
      fetch(API_URL + '/config', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (result) {
        return result.json();
      }).then(function (config) {
        return dispatch({
          type: actions.LOAD_CONFIG,
          payload: {
            config: config
          }
        });
      })["catch"](function () {
        dispatch({
          type: actions.LOAD_CONFIG,
          payload: {}
        });
      });
    }
  }, [state.enabled]);
  useEventListener('keydown', function (event) {

    if (event.which === 192) {
      dispatch({
        type: 'TOGGLE_DEVTOOLS'
      });
    }
  });
  useEventListener('mouseover', function (event) {
    if (!state.enabled) return;
    if (notInWrapper(event.target)) return;
    event.stopPropagation();
    event.target.dataset.hovering = true;

    var _window$getComputedSt = window.getComputedStyle(event.target),
        boxShadow = _window$getComputedSt.boxShadow;

    event.target.style.setProperty('--shadow', boxShadow === 'none' ? '0 0' : boxShadow);
  });
  useEventListener('mouseout', function (event) {
    // if (notInWrapper(event.target)) return
    event.stopPropagation();
    delete event.target.dataset.hovering; // if (!event.target.dataset.uuid) {
    //   // don't reset if this is the selected property
    //   event.target.style.setProperty('--shadow', '0 0')
    // }
  });
  useEventListener('click', function (event) {
    if (!state.enabled) return;
    event.preventDefault();
    event.stopPropagation();
    if (notInWrapper(event.target)) return;
    var previousElement = document.querySelector('[data-uuid]');
    if (previousElement) delete previousElement.dataset.uuid; // set uuid because state depends on it now

    var uuid = event.target.dataset.uuid || ++count;
    event.target.dataset.uuid = uuid;
    dispatch({
      type: actions.SELECT_ELEMENT,
      payload: {
        uuid: uuid
      }
    });
  });
  useShortcuts();

  var _React$useState = React.useState(localStorage.TOGGLE_FLEX === 'true'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      advancedFlexOpen = _React$useState2[0],
      setAdvancedFlex = _React$useState2[1];

  var _React$useState3 = React.useState(localStorage.TOGGLE_SIZE === 'true'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      advancedSizeOpen = _React$useState4[0],
      setAdvancedSize = _React$useState4[1];

  var _React$useState5 = React.useState(localStorage.TOGGLE_BORDER === 'true'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      advancedBorderOpen = _React$useState6[0],
      setAdvancedBorder = _React$useState6[1];

  var _React$useState7 = React.useState(localStorage.TOGGLE_TEXT === 'true'),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      advancedTextOpen = _React$useState8[0],
      setAdvancedText = _React$useState8[1];

  localStorage.TOGGLE_FLEX = advancedFlexOpen;
  localStorage.TOGGLE_SIZE = advancedSizeOpen;
  localStorage.TOGGLE_BORDER = advancedBorderOpen;
  localStorage.TOGGLE_TEXT = advancedTextOpen;
  if (!state.enabled) return /*#__PURE__*/React.createElement(Switcher, null);
  if (!state.uuid) return /*#__PURE__*/React.createElement(Empty, null); // conditional properties

  var flexed = state.wipProperties.display === 'flex' || state.computedStyles.display === 'flex' || state.wipProperties.display === 'inline-flex' || state.computedStyles.display === 'inline-flex'; // parent styles

  var parentStyles = {};
  var element = document.querySelector("[data-uuid=\"".concat(state.uuid, "\"]"));

  if (element && element.parentElement) {
    parentStyles = window.getComputedStyle(element.parentElement);
  }

  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    id: "devtools",
    direction: "vertical",
    css: {
      position: 'fixed',
      zIndex: 998,
      right: 0,
      top: 0,
      width: 260,
      height: '100vh',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
      backgroundColor: 'white',
      borderLeft: '1px solid',
      borderColor: '#dedede',
      overflowY: 'scroll',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: state.responsiveModeEnabled ? 'vertical' : 'horizontal',
    justify: "space-between",
    css: {
      position: 'fixed',
      zIndex: 100,
      width: 260,
      backgroundColor: 'white',
      borderBottom: '1px solid',
      borderColor: 'grays.200'
    }
  }, /*#__PURE__*/React.createElement(ResponsiveTabs, null), /*#__PURE__*/React.createElement(PseudoPicker, null)), /*#__PURE__*/React.createElement(Section, {
    marginTop: 12
  }, /*#__PURE__*/React.createElement(ServerInfo, null)), /*#__PURE__*/React.createElement(SelectedElement, {
    key: state.uuid
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Display"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Display, null), flexed ? null : /*#__PURE__*/React.createElement(Opacity, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: flexed
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FlexDirection, null), /*#__PURE__*/React.createElement(FlexWrap, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(JustifyContent, null), /*#__PURE__*/React.createElement(AlignItems, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Opacity, null)))), parentStyles.display.includes('flex') && /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Flex Child"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedFlexOpen,
    setOpen: setAdvancedFlex
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FlexGrow, null), /*#__PURE__*/React.createElement(FlexShrink, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedFlexOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(AlignSelf, {
    parentFlexDirection: parentStyles.flexDirection
  }), /*#__PURE__*/React.createElement(FlexOrder, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Size"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedSizeOpen,
    setOpen: setAdvancedSize
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Size, null)), !advancedSizeOpen && /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderRadius, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedSizeOpen,
    css: {
      paddingTop: 1,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Min Size"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(MinSize, null)), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Max Size"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(MaxSize, null)), /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    variant: "subtle",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Border Radius"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderRadius, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Space"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(SpaceX, null), /*#__PURE__*/React.createElement(SpaceY, null))), /*#__PURE__*/React.createElement(ConstrainedGroup, {
    propertyGroup: "margin"
  }), /*#__PURE__*/React.createElement(ConstrainedGroup, {
    propertyGroup: "padding"
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Text"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedTextOpen,
    setOpen: setAdvancedText
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FontSize, null), /*#__PURE__*/React.createElement(FontWeight, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(LineHeight, null), /*#__PURE__*/React.createElement(TextColor, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedTextOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FontFamily, null), /*#__PURE__*/React.createElement(TextOpacity, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      width: 120
    }
  }, /*#__PURE__*/React.createElement(TextDecoration, null), /*#__PURE__*/React.createElement(FontStyle, {
    parentValue: parentStyles.fontStyle
  })), /*#__PURE__*/React.createElement(reactUi.Stack, {
    css: {
      height: 9,
      paddingLeft: 1
    }
  }, /*#__PURE__*/React.createElement(TextTransform, null))), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TextAlign, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Fill"), element.tagName === 'svg' ? /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FillColor, null)) : /*#__PURE__*/React.createElement(Row, {
    css: {
      '> div': {
        paddingLeft: 2
      }
    }
  }, /*#__PURE__*/React.createElement(BackgroundColor, null), /*#__PURE__*/React.createElement(BackgroundOpacity, null))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Shadow"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BoxShadow, null))), element.tagName === 'svg' ? /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    align: "center",
    justify: "space-between",
    marginX: 4
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    css: {
      height: 5
    }
  }, "Stroke")), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(StrokeWidth, null), /*#__PURE__*/React.createElement(StrokeColor, null))) : /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Stack, {
    justify: "space-between",
    align: "center",
    css: {
      height: 5,
      marginLeft: 4
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium"
  }, "Border"), /*#__PURE__*/React.createElement(Toggle, {
    open: advancedBorderOpen,
    setOpen: setAdvancedBorder
  })), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderWidth, null), /*#__PURE__*/React.createElement(BorderColor, null)), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: advancedBorderOpen
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(BorderStyle, null), /*#__PURE__*/React.createElement(BorderOpacity, null)), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Outline, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Transition"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TransitionProperty, null), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: state.wipProperties.transitionProperty
  }, /*#__PURE__*/React.createElement(TransitionDuration, null))), /*#__PURE__*/React.createElement(AdvancedOptions, {
    open: state.wipProperties.transitionProperty
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(TransitionTimingFunction, null), /*#__PURE__*/React.createElement(TransitionDelay, null)))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Animation"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Animation, null))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(reactUi.Text, {
    size: 2,
    weight: "medium",
    marginX: 4,
    css: {
      height: 5
    }
  }, "Accessibility"), /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Accessibility, null))), /*#__PURE__*/React.createElement(reactUi.Stack, {
    marginBottom: 16
  }), /*#__PURE__*/React.createElement(Feedback, null)), /*#__PURE__*/React.createElement(reactUi.Stack, {
    id: "error-notification",
    css: {
      position: 'fixed',
      fontSize: 2,
      zIndex: 999,
      top: 2,
      right: -300,
      width: 244,
      paddingX: 4,
      paddingY: 2,
      borderRadius: 2,
      backgroundColor: 'reds.100',
      color: 'reds.900',
      border: '1px solid',
      borderColor: 'reds.200',
      transition: 'right 150ms ease-out'
    }
  }, "Cannot predictibly change JSX expression, skipped code change."));
};

var Toggle = function Toggle(_ref2) {
  var open = _ref2.open,
      setOpen = _ref2.setOpen;
  return /*#__PURE__*/React.createElement(reactUi.Button, {
    variant: "text",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 200ms'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })));
};

var AdvancedOptions = function AdvancedOptions(_ref3) {
  var open = _ref3.open,
      children = _ref3.children,
      _ref3$css = _ref3.css,
      css = _ref3$css === void 0 ? {} : _ref3$css;
  return /*#__PURE__*/React.createElement(reactUi.Element, {
    css: _objectSpread$a({
      opacity: open ? 1 : 0,
      height: open ? 'auto' : 0,
      overflow: open ? 'visible' : 'hidden',
      marginTop: open ? 0 : -16,
      marginBottom: open ? 0 : 3,
      transitionProperty: 'all',
      transitionDuration: open ? 3 : 5
    }, css)
  }, children);
};

var Row = function Row(_ref4) {
  var children = _ref4.children,
      _ref4$css = _ref4.css,
      css = _ref4$css === void 0 ? {} : _ref4$css,
      props = _objectWithoutProperties(_ref4, ["children", "css"]);

  return /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    css: _objectSpread$a({
      height: 9,
      marginX: 2
    }, css),
    gap: 1,
    align: "center"
  }, props), children);
};

var Section = function Section(props) {
  return /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    direction: "vertical",
    css: {
      paddingY: 4,
      flexShrink: 0
    }
  }, props), props.children);
};

var Switcher = function Switcher(props) {
  var _useState2 = useState(),
      dispatch = _useState2.dispatch,
      actions = _useState2.actions;

  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, _extends({
    id: "devtools-switcher",
    justify: "center",
    align: "center",
    css: {
      position: 'fixed',
      zIndex: 998,
      top: 3,
      right: 3,
      cursor: 'pointer',
      backgroundColor: '#fff',
      padding: '9px 7px 7px 9px',
      borderRadius: '5px',
      border: '2px solid #eee',
      color: '#6E7A8A',
      transition: 'border-color 250ms ease',
      path: {
        transition: 'all 250ms ease'
      },
      ':hover': {
        borderColor: '#ddd',
        color: '#111',
        '#rect': {
          color: '#3793E0'
        }
      }
    },
    onClick: function onClick() {
      dispatch({
        type: actions.TOGGLE_DEVTOOLS
      });
    }
  }, props), /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 27 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "rect",
    d: "M22.8824 15V5C22.8824 2.79086 21.0915 1 18.8823 1H5C2.79086 1 1 2.79087 1 5.00001V18.8824C1 21.0915 2.79086 22.8824 5 22.8824H14.5",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5294 16.5293L20.0584 24.9999L21.3113 21.3112L25 20.0583L16.5294 16.5293Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5209 21.521L25.5209 25.521",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
};

var Empty = function Empty() {
  var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      width = _React$useState10[0],
      setWidth = _React$useState10[1];

  React.useEffect(function () {
    if (width === 0) setWidth(260);
  });
  return /*#__PURE__*/React.createElement(reactUi.ThemeProvider, {
    tokens: tokens,
    components: components
  }, /*#__PURE__*/React.createElement(reactUi.Stack, {
    direction: "vertical",
    gap: 4,
    justify: "center",
    align: "center",
    css: {
      paddingBottom: '40vh',
      position: 'fixed',
      zIndex: 998,
      right: 0,
      top: 0,
      width: width,
      height: '100vh',
      transition: 'width 400ms ease',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
      backgroundColor: 'white',
      borderLeft: '1px solid',
      borderColor: '#dedede'
    }
  }, /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle",
    css: {
      opacity: width ? 1 : 0,
      transition: 'opacity 500ms ease',
      transitionDelay: '250ms'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 27 27",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    id: "rect",
    d: "M22.8824 15V5C22.8824 2.79086 21.0915 1 18.8823 1H5C2.79086 1 1 2.79087 1 5.00001V18.8824C1 21.0915 2.79086 22.8824 5 22.8824H14.5",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5294 16.5293L20.0584 24.9999L21.3113 21.3112L25 20.0583L16.5294 16.5293Z",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.5209 21.521L25.5209 25.521",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement(reactUi.Text, {
    variant: "subtle",
    size: 3,
    css: {
      opacity: width ? 1 : 0,
      transition: 'opacity 500ms ease',
      transitionDelay: '250ms',
      willChange: 'opacity'
    }
  }, "Select an element to inspect")));
};

var notInWrapper = function notInWrapper(element) {
  var main = document.querySelector('#devtool-wrapper');
  if (!main.contains(element)) return true;
};

var Provider = function Provider() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      enabled = _React$useState2[0],
      setEnabled = _React$useState2[1];

  React.useEffect(function () {
    var wrapper = document.getElementById('devtool-wrapper');
    var main = document.querySelector('#devtool-main');

    if (wrapper) {
      wrapper.style.maxWidth = enabled ? 'calc(100% - 260px)' : '100%';
      if (!enabled) main.style.paddingRight = '0';
      if (enabled) wrapper.dataset.enabled = true;else delete wrapper.dataset.enabled;
    }
  }, [enabled]);
  return /*#__PURE__*/React.createElement(StateProvider, null, /*#__PURE__*/React.createElement(Devtool, {
    enabled: enabled,
    setEnabled: setEnabled
  }));
};

if (typeof document !== 'undefined') {
  var body = document.body;
  body.innerHTML = "\n    <main id=\"devtool-main\">\n      <div id=\"devtool-wrapper\" >\n        ".concat(body.innerHTML, "\n      </div>\n      <div id=\"devtool\" />\n    </main>\n  ");
  ReactDOM.render( /*#__PURE__*/React.createElement(Provider, null), document.getElementById('devtool'));
}

exports.Provider = Provider;
