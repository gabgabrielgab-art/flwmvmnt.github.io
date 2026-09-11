/* @ds-bundle: {"format":4,"namespace":"FLWDesignSystem_4c3784","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SpecList","sourcePath":"components/core/SpecList.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"SizePicker","sourcePath":"components/forms/SizePicker.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Drawer","sourcePath":"components/surfaces/Drawer.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"}],"sourceHashes":{"components/core/Button.jsx":"79bca213dce6","components/core/Icon.jsx":"e8e3fe8b4490","components/core/IconButton.jsx":"36bcfc95f56b","components/core/SpecList.jsx":"cea1757539bb","components/core/Tag.jsx":"63a1bc2d80ac","components/core/Wordmark.jsx":"40836a9b617d","components/feedback/Toast.jsx":"bbb55b4fbc27","components/feedback/Tooltip.jsx":"234d72996fc4","components/forms/Checkbox.jsx":"f118a0afb008","components/forms/Input.jsx":"9e652b72470f","components/forms/Radio.jsx":"424011567193","components/forms/Select.jsx":"c7bd88ba3d13","components/forms/SizePicker.jsx":"465378e09459","components/forms/Switch.jsx":"bfad745aa062","components/surfaces/Card.jsx":"fee20200bd0a","components/surfaces/Dialog.jsx":"34fdf75ddd78","components/surfaces/Drawer.jsx":"7248bbfc9dde","components/surfaces/ProductCard.jsx":"2b0b7612c812","components/surfaces/Tabs.jsx":"3c9b65ae5146","ui_kits/storefront/App.jsx":"d297b38173c8","ui_kits/storefront/CommunityPage.jsx":"059aeebe5560","ui_kits/storefront/Header.jsx":"ab5a0d65d9be","ui_kits/storefront/ListingPage.jsx":"39840987af98","ui_kits/storefront/ProductPage.jsx":"cc0904e55601"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FLWDesignSystem_4c3784 = window.FLWDesignSystem_4c3784 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-display)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--track-label)',
  fontWeight: 600,
  border: '1px solid transparent',
  borderRadius: 'var(--radius-hair)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  transition: 'var(--transition-control)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  s: {
    height: 'var(--control-h-s)',
    padding: '0 var(--space-4)',
    fontSize: '11px'
  },
  m: {
    height: 'var(--control-h-m)',
    padding: '0 var(--space-5)',
    fontSize: '12px'
  },
  l: {
    height: 'var(--control-h-l)',
    padding: '0 var(--space-6)',
    fontSize: '13px'
  }
};
const variants = {
  primary: {
    background: 'var(--onyx)',
    color: 'var(--bone)'
  },
  accent: {
    background: 'var(--accent)',
    color: 'var(--accent-on)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--onyx)',
    borderColor: 'var(--onyx)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--onyx)'
  },
  reverse: {
    background: 'var(--bone)',
    color: 'var(--onyx)'
  }
};
const hovers = {
  primary: {
    background: '#000000'
  },
  accent: {
    filter: 'brightness(.92)'
  },
  outline: {
    background: 'var(--chalk)'
  },
  ghost: {
    background: 'var(--chalk)'
  },
  reverse: {
    background: 'var(--chalk)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'm',
  full = false,
  disabled = false,
  as = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    disabled: Tag === 'button' ? disabled : undefined,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      width: full ? '100%' : undefined,
      opacity: disabled ? 0.38 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
// Lucide via CDN, masked so the glyph inherits currentColor.
// Flagged substitution: FL:W+ supplied no icon set. See readme ICONOGRAPHY.
const CDN = 'https://unpkg.com/lucide-static@0.451.0/icons/';
function Icon({
  name,
  size = 20,
  style
}) {
  const url = `url(${CDN}${name}.svg)`;
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      background: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      flex: '0 0 auto',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  name,
  label,
  size = 'm',
  variant = 'ghost',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const dim = size === 's' ? 36 : 44;
  const tones = {
    ghost: {
      background: hover ? 'var(--chalk)' : 'transparent',
      color: 'var(--onyx)'
    },
    outline: {
      background: hover ? 'var(--chalk)' : 'transparent',
      color: 'var(--onyx)',
      border: '1px solid var(--onyx)'
    },
    reverse: {
      background: hover ? 'rgba(246,243,237,.16)' : 'transparent',
      color: 'var(--bone)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid transparent',
      borderRadius: 'var(--radius-hair)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...tones[variant],
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === 's' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SpecList.jsx
try { (() => {
function SpecList({
  items = [],
  columns = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0,1fr))`,
      gap: 'var(--space-1) var(--space-6)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      ...style
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: 'var(--onyx)',
      textAlign: 'right'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { SpecList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SpecList.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'quiet',
  pill = false,
  style
}) {
  const tones = {
    quiet: {
      background: 'var(--chalk)',
      color: 'var(--onyx)'
    },
    ink: {
      background: 'var(--onyx)',
      color: 'var(--bone)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-on)'
    },
    tonal: {
      background: 'var(--clay)',
      color: 'var(--bone)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--onyx)',
      boxShadow: 'inset 0 0 0 1px var(--onyx)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      padding: '5px var(--space-3)',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-hair)',
      display: 'inline-block',
      lineHeight: 1.2,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
// No logo artwork was supplied with the brand guidelines. The wordmark is set
// in Archivo per readme.md; do not substitute a drawn mark.
function Wordmark({
  size = 24,
  tone = 'ink',
  descriptor,
  style
}) {
  const colors = {
    ink: 'var(--onyx)',
    bone: 'var(--bone)',
    accent: 'var(--accent)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      minWidth: 96,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color: colors[tone]
    }
  }, "FL:W+"), descriptor ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.max(size * 0.28, 8),
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label-wide)',
      color: colors[tone],
      opacity: 0.72
    }
  }, descriptor) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open,
  message,
  tone = 'ink',
  onClose,
  style
}) {
  if (!open) return null;
  const tones = {
    ink: {
      background: 'var(--onyx)',
      color: 'var(--bone)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--accent-on)'
    },
    error: {
      background: 'var(--oxblood)',
      color: 'var(--bone)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) var(--space-5)',
      borderRadius: 'var(--radius-hair)',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      boxShadow: 'var(--shadow-panel)',
      ...tones[tone],
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, message), onClose ? /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      color: 'inherit',
      cursor: 'pointer',
      display: 'flex',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  style
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      background: 'var(--onyx)',
      color: 'var(--bone)',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      padding: '6px var(--space-3)',
      borderRadius: 'var(--radius-hair)',
      zIndex: 20
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: 'grid',
      placeItems: 'center',
      border: '1px solid var(--onyx)',
      borderRadius: 'var(--radius-hair)',
      background: checked ? 'var(--onyx)' : 'var(--surface-raised)',
      color: 'var(--bone)',
      transition: 'var(--transition-control)',
      flex: '0 0 auto'
    }
  }, checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)',
      display: 'block',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", {
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 'var(--control-h-m)',
      padding: '0 var(--space-4)',
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--onyx)',
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-hair)',
      border: '1px solid ' + (error ? 'var(--oxblood)' : 'var(--border-hairline)'),
      outline: focus ? '2px solid var(--onyx)' : 'none',
      outlineOffset: '2px',
      opacity: disabled ? 0.38 : 1,
      transition: 'var(--transition-control)'
    }
  }), error || hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '.04em',
      color: error ? 'var(--oxblood)' : 'var(--text-quiet)',
      display: 'block',
      marginTop: 'var(--space-2)'
    }
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  name,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '999px',
      border: '1px solid var(--onyx)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--surface-raised)',
      flex: '0 0 auto'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '999px',
      background: 'var(--onyx)'
    }
  }) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)',
      display: 'block',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: {
      width: '100%',
      height: 'var(--control-h-m)',
      padding: '0 var(--space-7) 0 var(--space-4)',
      appearance: 'none',
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      color: 'var(--onyx)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-hair)',
      opacity: disabled ? 0.38 : 1
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--graphite)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/SizePicker.jsx
try { (() => {
function SizePicker({
  sizes = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      ...style
    }
  }, sizes.map(s => {
    const name = s.name ?? s;
    const out = s.soldOut;
    const active = value === name;
    return /*#__PURE__*/React.createElement("button", {
      key: name,
      type: "button",
      disabled: out,
      onClick: () => onChange && onChange(name),
      style: {
        minWidth: 56,
        height: 'var(--control-h-m)',
        padding: '0 var(--space-3)',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        letterSpacing: 'var(--track-label)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-hair)',
        cursor: out ? 'not-allowed' : 'pointer',
        border: '1px solid ' + (active ? 'var(--onyx)' : 'var(--border-hairline)'),
        background: active ? 'var(--onyx)' : 'var(--surface-raised)',
        color: active ? 'var(--bone)' : 'var(--onyx)',
        opacity: out ? 0.38 : 1,
        textDecoration: out ? 'line-through' : 'none',
        transition: 'var(--transition-control)'
      }
    }, name);
  }));
}
Object.assign(__ds_scope, { SizePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SizePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      padding: 2,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--onyx)',
      background: checked ? 'var(--onyx)' : 'transparent',
      display: 'flex',
      justifyContent: checked ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      cursor: 'inherit',
      transition: 'var(--transition-control)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '999px',
      background: checked ? 'var(--bone)' : 'var(--onyx)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  tone = 'raised',
  pad = 'var(--space-5)',
  style
}) {
  const tones = {
    raised: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-hairline)'
    },
    ground: {
      background: 'var(--bone)',
      border: '1px solid var(--border-hairline)'
    },
    tonal: {
      background: 'var(--clay)',
      color: 'var(--bone)',
      border: '1px solid transparent'
    },
    inverse: {
      background: 'var(--onyx)',
      color: 'var(--bone)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-card)',
      padding: pad,
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--overlay-scrim)',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-5)',
      zIndex: 40
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--shadow-panel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    size: "s",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: '14px',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Drawer.jsx
try { (() => {
function Drawer({
  open,
  title,
  children,
  footer,
  onClose,
  width = 420
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": !open,
    style: {
      position: 'fixed',
      inset: 0,
      pointerEvents: open ? 'auto' : 'none',
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--dur-slow) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: width,
      background: 'var(--bone)',
      boxShadow: 'var(--shadow-panel)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--dur-slow) var(--ease-standard)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-5)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    name: "x",
    label: "Close",
    size: "s",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 'var(--space-5)'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Drawer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Drawer.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  name,
  range,
  price,
  tag,
  ratio = '4 / 5',
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      color: 'var(--onyx)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: 'var(--chalk)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.02)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }), tag ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 'var(--space-3)',
      top: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "ink"
  }, tag)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)'
    }
  }, name), range ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)',
      marginTop: 4
    }
  }, range) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px'
    }
  }, price)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, tabs.map(t => {
    const id = t.id ?? t;
    const active = value === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      onClick: () => onChange && onChange(id),
      style: {
        background: 'none',
        border: 'none',
        padding: '0 0 var(--space-3)',
        marginBottom: -1,
        cursor: 'pointer',
        fontFamily: 'var(--font-display)',
        fontSize: '12px',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 'var(--track-label)',
        color: active ? 'var(--onyx)' : 'var(--text-quiet)',
        borderBottom: '2px solid ' + (active ? 'var(--onyx)' : 'transparent'),
        transition: 'var(--transition-control)'
      }
    }, t.label ?? t);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/App.jsx
try { (() => {
const {
  Drawer,
  Button,
  SpecList,
  Wordmark,
  Tag
} = window.FLWDesignSystem_4c3784;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--onyx)',
      color: 'var(--bone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 30,
    tone: "bone",
    descriptor: "IN MOTION"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label)',
      color: 'var(--chalk)',
      textAlign: 'right',
      lineHeight: 2
    }
  }, "JOIN THE #MVMNT. BE THE #RVLTN", /*#__PURE__*/React.createElement("br", null), "MADE IN PORTUGAL \xB7 FLWPLUS.COM")));
}
function App() {
  const [page, setPage] = React.useState('listing');
  const [bag, setBag] = React.useState([]);
  const [bagOpen, setBagOpen] = React.useState(false);
  const nav = ['TOPS', 'LEGGINGS', 'OUTERWEAR', 'ACCESSORIES', '#MVMNT'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bone)',
      color: 'var(--onyx)',
      fontFamily: 'var(--font-display)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(Header, {
    nav: nav,
    page: page,
    bagCount: bag.length,
    onBag: () => setBagOpen(true),
    onNav: p => setPage(p)
  }), page === 'listing' ? /*#__PURE__*/React.createElement(ListingPage, {
    onOpen: () => setPage('product')
  }) : null, page === 'product' ? /*#__PURE__*/React.createElement(ProductPage, {
    onAdd: size => setBag(b => [...b, {
      name: 'RANGE LEGGING',
      size,
      price: '£88'
    }]),
    onOpen: () => setPage('product')
  }) : null, page === 'community' ? /*#__PURE__*/React.createElement(CommunityPage, null) : null, /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(Drawer, {
    open: bagOpen,
    title: 'BAG · ' + bag.length,
    onClose: () => setBagOpen(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      full: true,
      size: "l",
      disabled: !bag.length
    }, "CHECKOUT")
  }, bag.length ? bag.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      paddingBottom: 'var(--space-4)',
      marginBottom: 'var(--space-4)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.FLW_IMG.hero,
    alt: "",
    style: {
      width: 72,
      height: 90,
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)'
    }
  }, it.name), /*#__PURE__*/React.createElement(SpecList, {
    items: [{
      label: 'SIZE',
      value: it.size
    }, {
      label: 'PRICE',
      value: it.price
    }]
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)'
    }
  }, "YOUR BAG IS EMPTY")));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CommunityPage.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  Input,
  Switch
} = window.FLWDesignSystem_4c3784;
function CommunityPage() {
  const [on, setOn] = React.useState(true);
  const IMG = window.FLW_IMG;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--accent)',
      color: 'var(--accent-on)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page-lg)',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--track-label-wide)',
      textTransform: 'uppercase'
    }
  }, "COMMUNITY"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '14px 0 0',
      fontSize: 84,
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 0.96
    }
  }, "JOIN THE #MVMNT"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-editorial)',
      fontSize: 22,
      lineHeight: 1.35,
      maxWidth: '30ch'
    }
  }, "Be the #RVLTN. Every pace, every body, no hierarchy.")), /*#__PURE__*/React.createElement("img", {
    src: IMG.group,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      filter: 'grayscale(1) contrast(1.1)'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, [['SATURDAY 07:00', 'VICTORIA PARK, LONDON', '5K / 10K · ALL PACES'], ['TUESDAY 18:30', 'BAIXA, LISBON', 'MOBILITY + 5K'], ['SUNDAY 08:00', 'PRENZLAUER BERG, BERLIN', 'LONG RUN · 12K']].map(([when, where, what]) => /*#__PURE__*/React.createElement(Card, {
    key: when,
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label-wide)',
      color: 'var(--text-quiet)'
    }
  }, where), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      marginTop: 10
    }
  }, when), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-body)',
      marginTop: 8
    }
  }, what), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "s",
    style: {
      marginTop: 20
    }
  }, "RSVP"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--clay)',
      color: 'var(--bone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)',
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "ink"
  }, "DISPATCHES"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 0',
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Run days, drops, nothing else.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-end',
      minWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "EMAIL",
    placeholder: "you@domain.com",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "m"
  }, "SIGN UP"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-page-lg) var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "#MVMNT dispatches only \u2014 no product email",
    checked: on,
    onChange: setOn
  }))));
}
window.CommunityPage = CommunityPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CommunityPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
const {
  Wordmark,
  IconButton,
  Tag
} = window.FLWDesignSystem_4c3784;
function Header({
  nav,
  page,
  onNav,
  bagCount,
  onBag
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'rgba(246,243,237,.88)',
      backdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-page-lg)',
      height: 72,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('listing'),
    style: {
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => onNav(n === '#MVMNT' ? 'community' : 'listing'),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)',
      color: n === '#MVMNT' && page === 'community' ? 'var(--accent)' : 'var(--onyx)',
      paddingBottom: 2,
      borderBottom: '1px solid transparent'
    },
    onMouseEnter: e => e.currentTarget.style.borderBottomColor = 'var(--onyx)',
    onMouseLeave: e => e.currentTarget.style.borderBottomColor = 'transparent'
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "search",
    label: "Search"
  }), /*#__PURE__*/React.createElement(IconButton, {
    name: "user",
    label: "Account"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "shopping-bag",
    label: "Bag",
    onClick: onBag
  }), bagCount ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "ink",
    style: {
      fontSize: 8,
      padding: '2px 5px'
    }
  }, bagCount)) : null))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ListingPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  ProductCard,
  Tag,
  Button,
  Select
} = window.FLWDesignSystem_4c3784;
const IMG = {
  hero: '../../assets/imagery/hero-split-lunge-4x5.jpg',
  macro: '../../assets/imagery/fabric-macro-flatlock-1x1.jpg',
  group: '../../assets/imagery/group-frame-dawn-16x9.jpg'
};
const PRODUCTS = [{
  id: 'rl',
  image: IMG.hero,
  name: 'RANGE LEGGING',
  range: 'LEGGINGS / RANGE',
  price: '£88',
  tag: 'NEW IN'
}, {
  id: 'll',
  image: IMG.macro,
  name: 'LOAD LONGSLEEVE',
  range: 'TOPS / LOAD',
  price: '£64'
}, {
  id: 'ms',
  image: IMG.group,
  name: 'MVMNT SHELL',
  range: 'OUTERWEAR / MVMNT',
  price: '£185'
}, {
  id: 'gs',
  image: IMG.hero,
  name: 'GUSSET SHORT',
  range: 'LEGGINGS / RANGE',
  price: '£56'
}, {
  id: 'ft',
  image: IMG.macro,
  name: 'FLATLOCK TEE',
  range: 'TOPS / RANGE',
  price: '£48'
}, {
  id: 'cl',
  image: IMG.hero,
  name: 'CLUB LEGGING',
  range: 'LEGGINGS / CLUB',
  price: '£92',
  tag: 'LOW STOCK'
}];
function ListingPage({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 520,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.group,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--protection-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)',
      color: 'var(--bone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label-wide)'
    }
  }, "EDITION 01 \u2014 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      fontSize: 76,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 0.98,
      maxWidth: '16ch'
    }
  }, "MOVE WITHOUT NEGOTIATION"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "reverse",
    size: "l",
    onClick: () => onOpen('rl')
  }, "SHOP LEGGINGS"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "l",
    style: {
      color: 'var(--bone)',
      borderColor: 'var(--bone)',
      border: '1px solid var(--bone)'
    }
  }, "THE #MVMNT")))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-page-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      borderBottom: '2px solid var(--onyx)',
      paddingBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)'
    }
  }, "LEGGINGS / RANGE"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontSize: 34,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "ALL LEGGINGS")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['SORT / NEWEST', 'SORT / PRICE', 'SORT / INSEAM'],
    style: {
      width: 200
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-7)'
    }
  }, PRODUCTS.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => onOpen(p.id)
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--onyx)',
      color: 'var(--bone)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-9) var(--gutter-page-lg)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-9)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent",
    pill: true
  }, "#MVMNT"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '16px 0 0',
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.05
    }
  }, "SATURDAY 07:00 \xB7 VICTORIA PARK"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--chalk)',
      maxWidth: '48ch'
    }
  }, "Every pace, every body. No hierarchy, nobody leading and nobody trailing."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "l",
    style: {
      marginTop: 8
    }
  }, "JOIN THE #MVMNT")), /*#__PURE__*/React.createElement("img", {
    src: IMG.macro,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover'
    }
  }))));
}
window.ListingPage = ListingPage;
window.FLW_PRODUCTS = PRODUCTS;
window.FLW_IMG = IMG;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ListingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Tag,
  Tabs,
  SpecList,
  SizePicker,
  Dialog,
  Toast,
  ProductCard
} = window.FLWDesignSystem_4c3784;
function ProductPage({
  onAdd,
  onOpen
}) {
  const [size, setSize] = React.useState('S');
  const [tab, setTab] = React.useState('FABRIC & FIT');
  const [guide, setGuide] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const IMG = window.FLW_IMG;
  const copy = {
    'FABRIC & FIT': 'Four-way stretch knit with an unbroken gusset and flatlock seams throughout. High-rise, 26" inseam. True to size across the full range.',
    'CARE': 'Machine wash cold with like colours. Do not tumble dry. Do not iron the waistband.',
    'SHIPPING': 'Dispatched from Portugal. Standard 3–5 days. Free returns for 30 days, worn or unworn.'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--measure-max)',
      margin: '0 auto',
      padding: 'var(--space-6) var(--gutter-page-lg) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)',
      marginBottom: 'var(--space-5)'
    }
  }, "LEGGINGS / RANGE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.25fr 1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "",
    style: {
      gridColumn: '1 / -1',
      width: '100%',
      aspectRatio: '3 / 2',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG.macro,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: IMG.group,
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "ink"
  }, "NEW IN"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "4-WAY")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '16px 0 0',
      fontSize: 44,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.02
    }
  }, "RANGE LEGGING"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      marginTop: 'var(--space-3)'
    }
  }, "\xA388"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      maxWidth: '52ch'
    }
  }, "Built for the deepest part of the movement. Engineered around real range of motion, not an idealised standard."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label)',
      color: 'var(--text-quiet)'
    }
  }, "SIZE \xB7 ", size), /*#__PURE__*/React.createElement("a", {
    onClick: () => setGuide(true),
    style: {
      cursor: 'pointer',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: 'var(--track-label)',
      textDecoration: 'underline'
    }
  }, "SIZE GUIDE")), /*#__PURE__*/React.createElement(SizePicker, {
    style: {
      marginTop: 'var(--space-3)'
    },
    value: size,
    onChange: setSize,
    sizes: [{
      name: 'XS'
    }, {
      name: 'S'
    }, {
      name: 'M'
    }, {
      name: 'L',
      soldOut: true
    }, {
      name: 'XL'
    }, {
      name: '2XL'
    }, {
      name: '3XL'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "l",
    full: true,
    onClick: () => {
      onAdd(size);
      setToast(true);
      setTimeout(() => setToast(false), 2400);
    }
  }, "ADD TO BAG"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "l",
    onClick: () => setTab('FABRIC & FIT')
  }, "FABRIC & FIT")), /*#__PURE__*/React.createElement(Tabs, {
    style: {
      marginTop: 'var(--space-7)'
    },
    tabs: Object.keys(copy),
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)'
    }
  }, copy[tab]), /*#__PURE__*/React.createElement(SpecList, {
    columns: 1,
    items: [{
      label: 'FABRIC',
      value: 'NYLON 74 / ELASTANE 26'
    }, {
      label: 'INSEAM',
      value: '26"'
    }, {
      label: 'CONSTRUCTION',
      value: 'GUSSET · 4-WAY · FLATLOCK'
    }, {
      label: 'MADE IN',
      value: 'PORTUGAL'
    }, {
      label: 'SKU',
      value: 'FLW-RL-026'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--onyx)',
      paddingBottom: 'var(--space-3)',
      fontFamily: 'var(--font-display)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--track-label)'
    }
  }, "MOVES WITH IT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, minmax(0,1fr))',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-6)'
    }
  }, window.FLW_PRODUCTS.slice(1, 5).map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
    key: p.id
  }, p, {
    onClick: () => onOpen(p.id)
  })))))), /*#__PURE__*/React.createElement(Dialog, {
    open: guide,
    title: "SIZE GUIDE",
    onClose: () => setGuide(false),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "s",
      onClick: () => setGuide(false)
    }, "CLOSE")
  }, "Measurements are taken flat and doubled. Every size shares the same gusset construction and the same 26\" inseam grade.", /*#__PURE__*/React.createElement(SpecList, {
    style: {
      marginTop: 16
    },
    columns: 2,
    items: [{
      label: 'XS',
      value: '58–63 CM'
    }, {
      label: 'S',
      value: '63–68 CM'
    }, {
      label: 'M',
      value: '68–74 CM'
    }, {
      label: 'L',
      value: '74–81 CM'
    }, {
      label: 'XL',
      value: '81–89 CM'
    }, {
      label: '2XL',
      value: '89–98 CM'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 'var(--space-6)',
      bottom: 'var(--space-6)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    open: toast,
    message: 'ADDED TO BAG · RANGE LEGGING / ' + size
  })));
}
window.ProductPage = ProductPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SpecList = __ds_scope.SpecList;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.SizePicker = __ds_scope.SizePicker;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Drawer = __ds_scope.Drawer;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
