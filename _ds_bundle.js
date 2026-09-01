/* @ds-bundle: {"format":4,"namespace":"BeDesignSystem_748b5f","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"33801f228a4e","components/core/Button.jsx":"4d6c71dad359","components/core/Card.jsx":"68c1b506b676","components/core/IconButton.jsx":"ca9ed2690597","components/core/Tag.jsx":"39d2a4aa7574","components/feedback/Dialog.jsx":"4f781aa81d36","components/feedback/Toast.jsx":"3dcd24aa2a25","components/feedback/Tooltip.jsx":"474d17439301","components/forms/Checkbox.jsx":"144788f47309","components/forms/Input.jsx":"fca4f945a4b9","components/forms/Radio.jsx":"e9287e0146d7","components/forms/Select.jsx":"fec67cb22aff","components/forms/Switch.jsx":"15e7d798538c","components/navigation/Tabs.jsx":"a2f973c41669","doc-page.js":"f52ae9c02fca","pwa/sw.js":"559d65c123ec","ui_kits/app/Hive.jsx":"14b155ecbcd0","ui_kits/app/Settle.jsx":"e6c03ae86d10","ui_kits/app/Today.jsx":"7898dc9c66fb","ui_kits/app/You.jsx":"750ae33acb72","ui_kits/app/app-data.js":"9c19b1cd68e2","ui_kits/app/app-store.js":"bb7778d4dd2b","ui_kits/website/Home.jsx":"a303a50600de","ui_kits/website/Join.jsx":"5d6ae5266cea","ui_kits/website/Story.jsx":"849c68130315","ui_kits/website/assets-inline.js":"5523f60794a6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeDesignSystem_748b5f = window.BeDesignSystem_748b5f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = 'honey',
  children,
  style,
  ...rest
}) {
  const T = {
    honey: {
      bg: 'var(--honey-100)',
      c: 'var(--honey-700)'
    },
    meadow: {
      bg: 'var(--secondary-soft)',
      c: 'var(--meadow-700)'
    },
    clay: {
      bg: '#F6E3DE',
      c: 'var(--clay-600)'
    },
    pond: {
      bg: '#E1EBEE',
      c: 'var(--pond-500)'
    },
    neutral: {
      bg: 'var(--surface-tint)',
      c: 'var(--ink-700)'
    },
    ink: {
      bg: 'var(--ink-900)',
      c: 'var(--text-inverse)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      background: T.bg,
      color: T.c,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '16px',
      whiteSpace: 'nowrap',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false),
    [p, setP] = useState(false);
  const S = {
    sm: {
      h: 32,
      px: 14,
      fs: 13
    },
    md: {
      h: 40,
      px: 18,
      fs: 15
    },
    lg: {
      h: 48,
      px: 24,
      fs: 16
    }
  }[size];
  const V = {
    primary: {
      bg: h ? 'var(--accent-hover)' : 'var(--accent)',
      c: 'var(--text-on-accent)',
      bd: '1.5px solid transparent'
    },
    secondary: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      c: 'var(--text-body)',
      bd: '1.5px solid var(--ink-900)'
    },
    ghost: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      c: 'var(--text-body)',
      bd: '1.5px solid transparent'
    },
    danger: {
      bg: h ? 'var(--clay-600)' : 'var(--danger)',
      c: '#FFFEFA',
      bd: '1.5px solid transparent'
    },
    inverse: {
      bg: h ? 'var(--ink-700)' : 'var(--ink-900)',
      c: 'var(--text-inverse)',
      bd: '1.5px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: e => {
      setH(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setH(false);
      setP(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
    onMouseDown: e => {
      setP(true);
      rest.onMouseDown && rest.onMouseDown(e);
    },
    onMouseUp: e => {
      setP(false);
      rest.onMouseUp && rest.onMouseUp(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: S.h,
      padding: `0 ${S.px}px`,
      borderRadius: 'var(--radius-pill)',
      border: V.bd,
      background: V.bg,
      color: V.c,
      fontFamily: 'var(--font-sans)',
      fontSize: S.fs,
      fontWeight: 500,
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: p && !disabled ? 'scale(.98)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out),color var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  padding = 24,
  children,
  style,
  ...rest
}) {
  const V = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-2)',
      color: 'var(--text-body)'
    },
    tint: {
      background: 'var(--surface-tint)',
      border: '1px solid transparent',
      boxShadow: 'none',
      color: 'var(--text-body)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-2)',
      color: 'var(--text-inverse)'
    },
    outline: {
      background: 'transparent',
      border: '1.5px solid var(--ink-900)',
      boxShadow: 'none',
      color: 'var(--text-body)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      ...V,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function IconButton({
  variant = 'soft',
  size = 'md',
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false),
    [p, setP] = useState(false);
  const d = {
    sm: 28,
    md: 36,
    lg: 44
  }[size];
  const V = {
    solid: {
      bg: h ? 'var(--accent-hover)' : 'var(--accent)',
      c: 'var(--text-on-accent)',
      bd: '1.5px solid transparent'
    },
    soft: {
      bg: h ? 'var(--nectar-200)' : 'var(--surface-tint)',
      c: 'var(--text-body)',
      bd: '1.5px solid transparent'
    },
    ghost: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      c: 'var(--text-body)',
      bd: '1.5px solid transparent'
    },
    outline: {
      bg: h ? 'var(--surface-tint)' : 'transparent',
      c: 'var(--text-body)',
      bd: '1.5px solid var(--ink-900)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      flex: 'none',
      borderRadius: '50%',
      border: V.bd,
      background: V.bg,
      color: V.c,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transform: p && !disabled ? 'scale(.94)' : 'none',
      transition: 'background var(--dur-base) var(--ease-out),transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tag({
  onRemove,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: onRemove ? '4px 6px 4px 12px' : '4px 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--ink-700)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      lineHeight: '18px',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove",
    onClick: onRemove,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      borderRadius: '50%',
      border: 'none',
      background: h ? 'var(--ink-200)' : 'transparent',
      color: 'var(--ink-700)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useId
} = React;
const FOCUSABLE = 'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
function Dialog({
  open = false,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style
}) {
  const box = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const tid = 'be-dialog-title' + useId();
  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const t = setTimeout(() => {
      box.current && box.current.focus();
    }, 0);
    const k = e => {
      if (e.key === 'Escape') {
        closeRef.current && closeRef.current();
        return;
      }
      if (e.key !== 'Tab' || !box.current) return;
      const f = [...box.current.querySelectorAll(FOCUSABLE)];
      if (!f.length) {
        e.preventDefault();
        return;
      }
      const first = f[0],
        last = f[f.length - 1],
        a = document.activeElement;
      if (e.shiftKey && (a === first || a === box.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && a === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', k);
    return () => {
      clearTimeout(t);
      window.removeEventListener('keydown', k);
      prev && prev.focus && prev.focus();
    };
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(32,27,16,.44)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'be-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: box,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? tid : undefined,
    tabIndex: -1,
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-3)',
      padding: 28,
      fontFamily: 'var(--font-sans)',
      outline: 'none',
      animation: 'be-fade-up var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 12
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    id: tid,
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      lineHeight: 1.15,
      fontWeight: 400
    }
  }, title), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    variant: "ghost",
    size: "sm",
    onClick: onClose,
    style: {
      marginTop: -2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-700)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'honey',
  title,
  children,
  onDismiss,
  style
}) {
  const dot = {
    honey: 'var(--honey-400)',
    success: '#7CAF74',
    danger: '#E08A76',
    info: '#8FB6C4'
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      padding: '14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-3)',
      fontFamily: 'var(--font-sans)',
      animation: 'be-fade-up var(--dur-slow) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: dot,
      marginTop: 5,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      lineHeight: '20px'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: '19px',
      opacity: .75,
      marginTop: title ? 2 : 0
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-inverse)',
      opacity: .6,
      cursor: 'pointer',
      padding: 2,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  side = 'top',
  children,
  style
}) {
  const [on, setOn] = useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onFocus: () => setOn(true),
    onBlur: () => setOn(false)
  }, children, on && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      ...pos,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      lineHeight: '16px',
      padding: '6px 10px',
      borderRadius: 8,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-2)',
      zIndex: 50,
      pointerEvents: 'none',
      animation: 'be-fade var(--dur-fast) var(--ease-out)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 6,
      border: '1.5px solid var(--ink-900)',
      background: checked ? 'var(--accent)' : 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-900)",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  disabled = false,
  style,
  inputStyle,
  ...rest
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    disabled: disabled,
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      height: 40,
      padding: '0 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${error ? 'var(--danger)' : f ? 'var(--ink-900)' : 'var(--border-subtle)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      outline: 'none',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
      ...inputStyle
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: '1.5px solid var(--ink-900)',
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent)',
      border: '2.5px solid var(--ink-900)',
      boxSizing: 'border-box',
      transform: checked ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  hint,
  error,
  disabled = false,
  children,
  style,
  selectStyle,
  ...rest
}) {
  const [f, setF] = useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    disabled: disabled,
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 40,
      padding: '0 38px 0 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${error ? 'var(--danger)' : f ? 'var(--ink-900)' : 'var(--border-subtle)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      outline: 'none',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)',
      ...selectStyle
    }
  }), children), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--ink-500)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 42,
      height: 24,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0,
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--ink-200)',
      border: '1.5px solid ' + (checked ? 'var(--honey-600)' : 'var(--border-strong)'),
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#FFFEFA',
      boxShadow: 'var(--shadow-1)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState,
  useRef
} = React;
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  'aria-label': ariaLabel,
  style
}) {
  const [h, setH] = useState(null);
  const refs = useRef({});
  const S = {
    sm: {
      h: 30,
      px: 12,
      fs: 13
    },
    md: {
      h: 36,
      px: 16,
      fs: 14
    },
    lg: {
      h: 44,
      px: 18,
      fs: 15
    }
  }[size] || {
    h: 36,
    px: 16,
    fs: 14
  };
  const move = d => {
    const i = items.findIndex(it => it.id === value);
    const n = items[(i + d + items.length) % items.length];
    if (!n) return;
    onChange && onChange(n.id);
    const el = refs.current[n.id];
    el && el.focus();
  };
  const jump = i => {
    const n = items[i];
    if (!n) return;
    onChange && onChange(n.id);
    const el = refs.current[n.id];
    el && el.focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": ariaLabel,
    onKeyDown: e => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        move(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        move(-1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        jump(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        jump(items.length - 1);
      }
    },
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map(it => {
    const act = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      ref: el => {
        refs.current[it.id] = el;
      },
      role: "tab",
      id: it.tabId,
      "aria-controls": it.panelId,
      "aria-selected": act,
      tabIndex: act ? 0 : -1,
      onClick: () => onChange && onChange(it.id),
      onMouseEnter: () => setH(it.id),
      onMouseLeave: () => setH(null),
      style: {
        height: S.h,
        padding: `0 ${S.px}px`,
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: S.fs,
        fontWeight: 500,
        lineHeight: 1,
        color: act ? 'var(--text-body)' : 'var(--text-muted)',
        background: act ? 'var(--surface-card)' : h === it.id ? 'rgba(32,27,16,.05)' : 'transparent',
        boxShadow: act ? 'var(--shadow-1)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out),color var(--dur-fast) var(--ease-out)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// pwa/sw.js
try { (() => {
const C = 'be-v3';
const A = ['./', './index.html', './app.html', './privacy.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(A)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
// Same-origin GET only. Cache first (offline is the default), refresh in the background so the next open is current. Navigations fall back to the shell.
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  let u;
  try {
    u = new URL(r.url);
  } catch (err) {
    return;
  }
  if (u.origin !== self.location.origin) return;
  e.respondWith(caches.open(C).then(async c => {
    const hit = await c.match(r);
    const net = fetch(r).then(n => {
      if (n && n.ok) c.put(r, n.clone());
      return n;
    }).catch(() => null);
    if (hit) {
      net.catch(() => {});
      return hit;
    }
    const n = await net;
    if (n) return n;
    return r.mode === 'navigate' ? (await c.match('./index.html')) || Response.error() : Response.error();
  }));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "pwa/sw.js", error: String((e && e.message) || e) }); }

// ui_kits/app/Hive.jsx
try { (() => {
function Hive({
  state
}) {
  const {
    Card,
    Badge,
    Tag
  } = window.BeDesignSystem_748b5f;
  const ST = window.BE_STORE;
  const share = !!(state && state.prefs && state.prefs.share);
  const mine = state && state.acts ? state.acts[ST.day.key()] : null;
  const sample = ['M', 'J', 'R', 'A', 'S', 'T', 'L', 'E', 'K', 'D', 'P', 'N'].map((m, i) => ({
    m,
    on: [0, 2, 3, 7].includes(i),
    who: m
  }));
  const circle = share ? [{
    m: 'You',
    on: mine === 'yes',
    who: 'You'
  }, ...sample] : sample;
  const n = circle.filter(c => c.on).length;
  const av = (c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    role: "img",
    "aria-label": c.who + (c.on ? ' — trying today' : ' — resting'),
    title: c.on ? 'Trying today' : 'Resting',
    style: {
      minWidth: 44,
      height: 44,
      padding: c.m.length > 1 ? '0 10px' : 0,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      fontSize: c.m.length > 1 ? 13 : 15,
      background: c.on ? 'var(--honey-300)' : 'var(--surface-tint)',
      border: c.on ? '2.5px solid var(--honey-600)' : '1.5px solid var(--border-subtle)',
      color: 'var(--ink-900)',
      boxSizing: 'border-box'
    }
  }, c.m, c.on ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 10,
      marginLeft: 2
    }
  }, "\u2713") : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "Your circle"), /*#__PURE__*/React.createElement(Badge, {
    tone: "meadow"
  }, n, " of ", circle.length, " alongside you today")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 16
    }
  }, circle.map(av)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-faint)'
    }
  }, "A sample circle for now \u2014 yours forms when people you invite join."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 13.5,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, share ? 'Your circle sees one thing: whether you\u2019re trying or resting today. Never what, never why.' : 'Your circle sees nothing from you until you switch it on in You \u2014 \u201cLet my circle see how I\u2019m doing.\u201d'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, "No streaks, no rankings \u2014 just who's alongside you today. A shared act is always an invitation, never an expectation."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 12.5,
      color: 'var(--text-faint)',
      lineHeight: 1.5
    }
  }, "The bees taught us this: a forager dances what she found, plainly; the hive weighs the reports and decides together \u2014 no boss bee.")), /*#__PURE__*/React.createElement(Card, {
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "Shared acts this week"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Morning walk \xB7 Sat"), /*#__PURE__*/React.createElement(Tag, null, "One table dinner \xB7 Sun"), /*#__PURE__*/React.createElement(Tag, null, "Phones-down hour"))));
}
Object.assign(window, {
  Hive
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Hive.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Settle.jsx
try { (() => {
function Settle({
  notify,
  record
}) {
  const {
    Card,
    Badge,
    Button
  } = window.BeDesignSystem_748b5f;
  const [step, setStep] = React.useState(0);
  const [level, setLevel] = React.useState(null);
  const names = ['Anger', 'Grief', 'Worry', 'Hurt', 'Static'];
  const reset = () => {
    setStep(0);
    setLevel(null);
  };
  const finish = moved => {
    record && record({
      id: 'settle',
      c: moved ? 'yes' : 'no'
    });
    notify(moved ? {
      tone: 'success',
      title: 'Acknowledged.',
      body: 'It moved through you, not into someone. Nothing wasted.'
    } : {
      tone: 'honey',
      title: 'Still here \u2014 that\u2019s okay.',
      body: 'Some charges take longer. You met it; that already counts.'
    });
    reset();
  };
  const act = level >= 5 ? 'Move it — walk it off before words. Return when your shoulders drop.' : level >= 3 ? 'One minute away — window, water, sky. Then five long exhales.' : 'Five breaths, each exhale a little longer than the in-breath.';
  return /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "honey"
  }, "When a charge arrives"), step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 4px',
      fontSize: 15,
      color: 'var(--ink-700)',
      lineHeight: 1.55
    }
  }, "Anger, grief, static \u2014 a charge is biology arriving, not a flaw. It's welcome here. Acknowledging it, gently, is how harm shrinks."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(1)
  }, "Settle with it"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => notify({
      tone: 'honey',
      title: 'Honored.',
      body: 'It can wait. This will be here when you are.'
    })
  }, "Not now"))), step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 2px',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Comprehend \u2014 name it, gently."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Putting a feeling into words quiets the alarm. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5
    }
  }, "(Psychological Science, 2007)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, names.map(n => /*#__PURE__*/React.createElement(Button, {
    key: n,
    variant: "ghost",
    onClick: () => setStep(2),
    style: {
      minHeight: 44
    }
  }, n)))), step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 12px',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Measure \u2014 how much is it carrying?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [1, 2, 3, 4, 5].map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => {
      setLevel(v);
      setStep(3);
    },
    "aria-label": 'Level ' + v + ' of 5',
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '1.5px solid var(--border-strong)',
      background: 'var(--surface-tint)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink-900)',
      cursor: 'pointer'
    }
  }, v))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 12.5,
      color: 'var(--text-faint)'
    }
  }, "1 \u2014 a hum \xB7 5 \u2014 a storm. Any answer is right.")), step === 3 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 2px',
      fontWeight: 600,
      fontSize: 15
    }
  }, "Manage \u2014 let it move."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: 15,
      color: 'var(--ink-700)',
      lineHeight: 1.55
    }
  }, act), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Long exhales settle the body's arousal. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5
    }
  }, "(Cell Reports Medicine, 2023)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => finish(true)
  }, "It moved"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => finish(false)
  }, "Still here"))), step > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    style: {
      marginTop: 10,
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontSize: 13,
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      padding: '14px 10px',
      margin: '0 -10px'
    }
  }, "set it down for now"));
}
Object.assign(window, {
  Settle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Settle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Today.jsx
try { (() => {
function Today({
  state,
  setState,
  notify,
  record
}) {
  const {
    Card,
    Badge,
    Button
  } = window.BeDesignSystem_748b5f;
  const ST = window.BE_STORE;
  const f = ST.day.finding();
  const k = ST.day.key();
  if (!f) return /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)'
    }
  }, "Nothing here yet. Plant something."));
  const done = state.acts[k];
  const mark = v => {
    setState(s => ({
      ...s,
      acts: {
        ...s.acts,
        [k]: v
      }
    }));
    record({
      id: f.id,
      c: v
    });
    notify(v === 'yes' ? {
      tone: 'success',
      title: 'Welcome in.',
      body: 'However small, it counts. Go gently.'
    } : {
      tone: 'honey',
      title: 'Honored.',
      body: 'Rest is biology too. Tomorrow will hold it for you.'
    });
  };
  const undo = () => setState(s => {
    const a = {
      ...s.acts
    };
    delete a[k];
    return {
      ...s,
      acts: a,
      log: (s.log || []).filter(e => !(e.k === k && e.id === f.id))
    };
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  })), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "honey"
  }, "Today's finding"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 4px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      lineHeight: 1.2
    }
  }, f.finding), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, f.cite), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 15,
      color: 'var(--ink-700)'
    }
  }, f.act), f.why && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "Why we trust it: ", f.why), !done && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => mark('yes')
  }, "I'll try it"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => mark('no')
  }, "Not today")), done && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: done === 'yes' ? 'meadow' : 'neutral'
  }, done === 'yes' ? 'Trying it today' : 'Resting today'), /*#__PURE__*/React.createElement("button", {
    onClick: undo,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-muted)',
      fontSize: 13,
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      padding: '12px 10px',
      margin: '-12px -10px'
    }
  }, "change my mind"))), /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    padding: 18
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "Each morning, one gentle reminder from biology \u2014 plain words, real source, and the small act it suggests. Take it or leave it; both are welcome. Everything stays here with you unless you choose to share it.")), window.Settle && React.createElement(window.Settle, {
    notify,
    record
  }));
}
Object.assign(window, {
  Today
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Today.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/You.jsx
try { (() => {
function You({
  state,
  setState,
  notify,
  forget
}) {
  const {
    Card,
    Badge,
    Button,
    Switch
  } = window.BeDesignSystem_748b5f;
  const ST = window.BE_STORE;
  const set = (k, v) => setState(s => ({
    ...s,
    prefs: {
      ...s.prefs,
      [k]: v
    }
  }));
  const [confirm, setConfirm] = React.useState(false);
  // Learning with anonymity: plain counts from state.log, on this device only. Counts never content · opt-in blended aggregates only · forgetting is one plain ask.
  const c = ST.counts(state.log);
  const names = {
    light: 'Morning light',
    nature: 'Time in green',
    ties: 'Check-ins',
    breath: 'Long exhales',
    naming: 'Naming feelings',
    pollen: 'Tending something',
    touch: 'Asked-for embraces',
    laugh: 'Shared giggles',
    settle: 'Charges met'
  };
  const rows = Object.keys(names).filter(k => c[k]).map(k => ({
    k,
    label: names[k],
    a: c[k].yes,
    b: c[k].no,
    w: k === 'settle' ? ['moved', 'still here'] : ['tried', 'rested']
  }));
  const days = new Set((state.log || []).map(e => e.k).filter(Boolean)).size;
  const mono = {
    fontFamily: 'var(--font-mono)',
    fontSize: 12.5,
    color: 'var(--text-muted)',
    whiteSpace: 'nowrap'
  };
  const keep = () => {
    const ok = ST.download('be-counts-' + ST.day.key() + '.txt', ST.exportText(state));
    notify(ok ? {
      tone: 'info',
      title: 'Yours to keep.',
      body: 'A small text file of counts \u2014 nothing else exists to give.'
    } : {
      tone: 'danger',
      title: 'That didn\u2019t take.',
      body: 'Try again.'
    });
  };
  const sync = () => notify(state.prefs.share ? {
    tone: 'info',
    title: 'All caught up.',
    body: 'Only today\u2019s trying-or-resting left your hands \u2014 no words, no names.'
  } : {
    tone: 'honey',
    title: 'Nothing to send.',
    body: 'Sharing is off, so nothing left your hands. Switch it on above if you\u2019d like your circle to see how you\u2019re doing.'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      marginBottom: 14
    }
  }, "Consent & quiet"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: !!state.prefs.bigText,
    onChange: v => set('bigText', v),
    label: "Larger text"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: !!state.prefs.digest,
    onChange: v => set('digest', v),
    label: "A gentle morning note \u2014 leave anytime"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: state.prefs.quiet !== false,
    onChange: v => set('quiet', v),
    label: "Evenings kept quiet, after 9"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: !!state.prefs.share,
    onChange: v => set('share', v),
    label: "Let my circle see how I'm doing"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 12.5,
      color: 'var(--text-faint)'
    }
  }, "Nothing is on until you say so \u2014 no is always a safe answer here. Be also listens to your device's own settings: gentler motion, higher contrast, screen readers, zoom.")), /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "What Be is learning \u2014 beside you"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "This device only")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "Plain counts, never words. ", days === 0 ? 'No days noted yet.' : days === 1 ? 'One day noted.' : days + ' days noted.'), rows.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: 'var(--text-faint)'
    }
  }, "Nothing here yet. Whatever you try or rest from on Today gathers here, as arithmetic.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      gap: '8px 14px',
      fontSize: 13.5,
      alignItems: 'baseline'
    }
  }, rows.map(r => /*#__PURE__*/React.createElement(React.Fragment, {
    key: r.k
  }, /*#__PURE__*/React.createElement("span", null, r.label), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, r.w[0], " ", r.a), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, r.w[1], " ", r.b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: keep
  }, "Take my counts with me"), !confirm && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setConfirm(true)
  }, "Ask Be to forget everything")), confirm && /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Forget everything?",
    style: {
      marginTop: 12,
      padding: '12px 14px',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: 13.5,
      lineHeight: 1.5
    }
  }, "Forget everything here \u2014 counts, choices, switches? It happens now and can't be undone. No is a fine answer."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    size: "sm",
    onClick: () => {
      setConfirm(false);
      forget && forget();
    }
  }, "Yes, forget"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setConfirm(false)
  }, "Keep it")))), /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    padding: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "meadow"
  }, "Offline-ready")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: 'var(--ink-700)',
      lineHeight: 1.55
    }
  }, "Be is whole without a signal \u2014 today's note, your choices, your pace all live here with you. It reaches out only when you ask."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 14
    },
    onClick: sync
  }, "Catch up with my circle")));
}
Object.assign(window, {
  You
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/You.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app-data.js
try { (() => {
window.BE_FINDINGS = [{
  id: 'light',
  finding: 'Morning light moves your clock.',
  cite: '(Current Biology, 2013)',
  act: 'Ten minutes outside before screens \u2014 a window counts if that\u2019s what today allows.',
  why: 'A week under natural light re-synced campers\u2019 body clocks to the sun; even a weekend outdoors did most of the work.'
}, {
  id: 'nature',
  finding: 'About two hours a week in nature is where reported health and wellbeing rise.',
  cite: '(Scientific Reports, 2019)',
  act: 'Twenty minutes somewhere green, at your pace. Split it however you like.',
  why: 'In ~20,000 people, the benefit appeared at 120 minutes a week \u2014 in one visit or many small ones.'
}, {
  id: 'ties',
  finding: 'Strong social ties are among the best-studied predictors of a long life.',
  cite: '(PLoS Medicine, 2010)',
  act: 'One unhurried check-in \u2014 a call, a walk, a hug asked for, a meal at one table.',
  why: 'Across 148 studies of 308,849 people, stronger relationships meant ~50% higher likelihood of survival \u2014 an effect in smoking\u2019s league.'
}, {
  id: 'breath',
  finding: 'Long exhales settle the body faster than watching thoughts.',
  cite: '(Cell Reports Medicine, 2023)',
  act: 'Five minutes of sighing breaths \u2014 in once, then out long and slow.',
  why: 'A month-long trial: 5 minutes of exhale-weighted breathing daily improved mood more than meditation. Early evidence, honestly \u2014 about 100 people.'
}, {
  id: 'naming',
  finding: 'Naming a feeling quiets the brain\u2019s alarm.',
  cite: '(Psychological Science, 2007)',
  act: 'When something surges today, try one plain word for it \u2014 said kindly, to yourself.',
  why: 'In brain scans, putting feelings into words dampened the amygdala and woke the naming part of the cortex.'
}, {
  id: 'pollen',
  finding: 'Three of every four food crop types lean on pollinators.',
  cite: '(FAO)',
  act: 'Plant or tend one flowering thing this week \u2014 a pot on a sill counts.',
  why: 'Honest footnote: staples like wheat and rice self-suffice; what pollinators keep is most of the colorful, vitamin-rich food \u2014 about a third of production.'
}, {
  id: 'touch',
  finding: 'Consensual touch eases pain and low mood.',
  cite: '(Nature Human Behaviour, 2024)',
  act: 'One embrace today \u2014 asked for first, and only if you\u2019d like one. A hand on your own heart counts too.',
  why: 'A meta-analysis of 137 studies (~13,000 people): touch interventions eased pain, depression, and anxiety in adults. Always consensual \u2014 asking is part of the medicine.'
}, {
  id: 'laugh',
  finding: 'A shared giggle is bonding chemistry.',
  cite: '(Phil. Trans. R. Soc. B, 2022)',
  act: 'Trade one thing that made you laugh with someone \u2014 no screen required.',
  why: 'Laughing together upregulates the brain\u2019s endorphin system \u2014 the same warmth-and-trust chemistry primates get from grooming, shared at group scale.'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/app-store.js
try { (() => {
// Be — on-device store. Versioned, validated, forgettable. Only counts ever leave (and only when asked).
(function () {
  const KEY = 'be.app.v2',
    OLD = 'be.app.demo.v1',
    LOG_MAX = 400,
    TABS = ['today', 'hive', 'you'];
  const pad = n => String(n).padStart(2, '0');
  const day = {
    key(d = new Date()) {
      return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
    },
    num(d = new Date()) {
      return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
    },
    finding(d = new Date()) {
      const F = window.BE_FINDINGS || [];
      if (!F.length) return null;
      return F[(day.num(d) % F.length + F.length) % F.length];
    }
  };
  const fresh = () => ({
    v: 2,
    tab: 'today',
    acts: {},
    prefs: {},
    log: []
  });
  const read = k => {
    try {
      const r = localStorage.getItem(k);
      return r ? JSON.parse(r) : null;
    } catch (e) {
      return null;
    }
  };
  const obj = x => x && typeof x === 'object' && !Array.isArray(x) ? x : {};
  function sanitize(s) {
    s = obj(s);
    return {
      v: 2,
      tab: TABS.includes(s.tab) ? s.tab : 'today',
      acts: obj(s.acts),
      prefs: obj(s.prefs),
      log: (Array.isArray(s.log) ? s.log : []).filter(e => e && typeof e.id === 'string').slice(-LOG_MAX)
    };
  }
  function load() {
    const cur = read(KEY);
    if (cur) return sanitize(cur);
    const old = read(OLD);
    if (old) {
      const m = sanitize({
        ...old,
        acts: {}
      });
      try {
        localStorage.removeItem(OLD);
      } catch (e) {}
      return m;
    } // v1 keyed acts by finding, not by day: start today clean, keep prefs + counts
    return fresh();
  }
  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify(s));
      return true;
    } catch (e) {
      return false;
    }
  }
  function forget() {
    try {
      localStorage.removeItem(KEY);
      localStorage.removeItem(OLD);
    } catch (e) {}
    return fresh();
  }
  function counts(log) {
    const c = {};
    (log || []).forEach(e => {
      c[e.id] = c[e.id] || {
        yes: 0,
        no: 0
      };
      c[e.id][e.c === 'yes' ? 'yes' : 'no']++;
    });
    return c;
  }
  function exportText(s) {
    const c = counts(s.log);
    const on = Object.keys(s.prefs || {}).filter(k => s.prefs[k]).join(', ');
    const lines = ['Be \u2014 what stays with you', 'Exported ' + day.key() + ' (your local date)', '', 'Counts only. Be keeps no words, notes, names, or times \u2014 so there are none to export.', ''];
    Object.keys(c).forEach(k => lines.push(k + ': ' + (k === 'settle' ? 'moved ' + c[k].yes + ' \u00b7 still here ' + c[k].no : 'tried ' + c[k].yes + ' \u00b7 rested ' + c[k].no)));
    if (!Object.keys(c).length) lines.push('(nothing noted yet)');
    lines.push('', 'Switches on: ' + (on || 'none'));
    return lines.join('\n');
  }
  function download(name, text) {
    try {
      const b = new Blob([text], {
        type: 'text/plain;charset=utf-8'
      });
      const u = URL.createObjectURL(b);
      const a = document.createElement('a');
      a.href = u;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(u), 1500);
      return true;
    } catch (e) {
      return false;
    }
  }
  window.BE_STORE = {
    KEY,
    LOG_MAX,
    day,
    fresh,
    load,
    save,
    forget,
    counts,
    exportText,
    download
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app-store.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function Home({
  go
}) {
  const {
    Button,
    Badge,
    Card,
    Dialog
  } = window.BeDesignSystem_748b5f;
  const [dlg, setDlg] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home hero",
    style: {
      background: "var(--surface-page) url('" + window.BE_ASSETS.pattern + "')",
      padding: '96px 24px 88px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.BE_ASSETS.logo,
    width: "88",
    alt: "",
    style: {
      animation: 'be-float 3.4s var(--ease-inout) infinite'
    }
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "honey"
  }, "Now pollinating \u2014 spring cohort"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-4xl)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "Be here. The rest ", /*#__PURE__*/React.createElement("em", null, "follows"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, "Be turns biology research into small daily acts \u2014 reminders that you are an organism first: light, breath, movement, and each other."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('join')
  }, "Start being"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => setDlg(true)
  }, "What is Be?")))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Pillars",
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, "One finding, daily"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "A single piece of biology research each morning, translated into a five-minute act. Morning light moves your clock. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, "(Current Biology, 2013)"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, "A hive, not a feed"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "Togetherness is biology too \u2014 shared meals and synced walks, because strong social ties are among the best-studied predictors of a long life. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, "(PLoS Medicine, 2010)"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: 'var(--text-lg)',
      fontWeight: 600
    }
  }, "Remember you're an organism"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-base)',
      color: 'var(--text-muted)'
    }
  }, "Not optimization \u2014 remembering. About two hours a week in nature is where reported health and wellbeing rise. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12
    }
  }, "(Scientific Reports, 2019)"))))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Manifesto band",
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      padding: '80px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.BE_ASSETS.logoInverse,
    width: "56",
    alt: ""
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      lineHeight: 1.25
    }
  }, "A colony survives by ten thousand small acts of care, ", /*#__PURE__*/React.createElement("em", null, "none of them heroic.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('story')
  }, "Read the story"))), /*#__PURE__*/React.createElement(Dialog, {
    open: dlg,
    onClose: () => setDlg(false),
    title: "What is Be?",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDlg(false)
    }, "Not yet"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDlg(false);
        go('join');
      }
    }, "Join the hive"))
  }, "Be is named twice: for the bee, the small keeper of whole ecosystems, and for being \u2014 a body, an organism, part of the whole. Each morning we hand you one piece of biology research and the small act it suggests, to do alone or together. Wellness by remembering what you are."));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Join.jsx
try { (() => {
function Join() {
  const {
    Button,
    Card,
    Input,
    Select,
    Checkbox,
    Toast
  } = window.BeDesignSystem_748b5f;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [why, setWhy] = React.useState('A daily practice');
  const [digest, setDigest] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const [toast, setToast] = React.useState(false);
  const submit = () => {
    if (!email.includes('@')) {
      setErr("That didn't take. Check the address.");
      return;
    }
    setErr(null);
    setToast(true);
    setTimeout(() => setToast(false), 3200);
  };
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Join",
    style: {
      maxWidth: 560,
      margin: '0 auto',
      padding: '72px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Join the hive"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)'
    }
  }, "One finding a morning, and the small act it suggests. We'll write when your circle opens.")), /*#__PURE__*/React.createElement(Card, {
    padding: 32
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "How should we greet you?",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    error: err,
    hint: err ? undefined : "We write rarely."
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What draws you?",
    value: why,
    onChange: e => setWhy(e.target.value)
  }, /*#__PURE__*/React.createElement("option", null, "The research, plainly told"), /*#__PURE__*/React.createElement("option", null, "The daily acts"), /*#__PURE__*/React.createElement("option", null, "Doing it together"), /*#__PURE__*/React.createElement("option", null, "All of it")), /*#__PURE__*/React.createElement(Checkbox, {
    checked: digest,
    onChange: setDigest,
    label: "Send the morning digest \u2014 opt out anytime"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: submit,
    style: {
      marginTop: 6
    }
  }, "Ask to join"))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-faint)',
      marginTop: 16
    }
  }, "Plain language. Cited sources. Nothing to buy but mornings."), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 28,
      transform: 'translateX(-50%)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Asked. Carry on.",
    onDismiss: () => setToast(false)
  }, "We'll write when a circle opens near you.")));
}
Object.assign(window, {
  Join
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Join.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Story.jsx
try { (() => {
function Story({
  go
}) {
  const {
    Button,
    Badge
  } = window.BeDesignSystem_748b5f;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Story",
    style: {
      maxWidth: 'var(--container-narrow)',
      margin: '0 auto',
      padding: '80px 24px 96px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "meadow"
  }, "The story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '18px 0 24px',
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--text-3xl)',
      lineHeight: 'var(--leading-tight)'
    }
  }, "Named twice, on purpose"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '0 0 20px'
    }
  }, "A bee visits two thousand flowers a day and never sees the orchard it makes possible. The work is small, repetitive, almost invisible \u2014 and entire ecosystems stand on it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '0 0 20px'
    }
  }, "We think feeling well works the same way. Not the highlight reel \u2014 the biology. Morning light before screens. A walk after eating. A meal at one table. Touch, breath, sleep. None of it is new; all of it is researched, and most of it is forgotten."), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: '36px 0',
      padding: '0 0 0 24px',
      borderLeft: '3px solid var(--accent)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.3,
      fontStyle: 'italic',
      color: 'var(--ink-700)'
    }
  }, "Wellness isn't an upgrade. It's a reminder \u2014 you are biology, together."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '0 0 20px'
    }
  }, "So Be reads the research \u2014 chronobiology, social physiology, ecology \u2014 and hands you one finding a morning with the small act it suggests. Plain language, cited sources, no supplements to sell. Done alone it steadies you; done together it binds you, because co-regulation is biology too."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      margin: '0 0 36px'
    }
  }, "In harmony, quietly, together."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('join')
  }, "Join the hive"));
}
Object.assign(window, {
  Story
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Story.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/assets-inline.js
try { (() => {
window.BE_ASSETS = {
  logo: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22bb%22%3E%3Cellipse%20cx%3D%220%22%20cy%3D%220%22%20rx%3D%225.8%22%20ry%3D%223.6%22%3E%3C%2Fellipse%3E%3C%2FclipPath%3E%3Cg%20id%3D%22bee%22%3E%3Cellipse%20cx%3D%22-2.7%22%20cy%3D%22-5.4%22%20rx%3D%223.3%22%20ry%3D%221.9%22%20transform%3D%22rotate(-36%20-2.7%20-5.4)%22%20fill%3D%22none%22%20stroke%3D%22%23201B10%22%20stroke-width%3D%221.3%22%3E%3C%2Fellipse%3E%3Cellipse%20cx%3D%221.5%22%20cy%3D%22-5.9%22%20rx%3D%222.7%22%20ry%3D%221.6%22%20transform%3D%22rotate(-16%201.5%20-5.9)%22%20fill%3D%22none%22%20stroke%3D%22%23201B10%22%20stroke-width%3D%221.3%22%3E%3C%2Fellipse%3E%3Cpath%20d%3D%22M-5.2%20-1.1%20-7.8%200%20-5.2%201.1Z%22%20fill%3D%22%23201B10%22%3E%3C%2Fpath%3E%3Cellipse%20cx%3D%220%22%20cy%3D%220%22%20rx%3D%225.8%22%20ry%3D%223.6%22%20fill%3D%22%23EEB02F%22%20stroke%3D%22%23201B10%22%20stroke-width%3D%221.3%22%3E%3C%2Fellipse%3E%3Cg%20clip-path%3D%22url(%23bb)%22%3E%3Cpath%20d%3D%22M-2.6%20-4V4M0%20-4V4M2.6%20-4V4%22%20stroke%3D%22%23201B10%22%20stroke-width%3D%221.7%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Ccircle%20cx%3D%226.5%22%20cy%3D%220%22%20r%3D%222.4%22%20fill%3D%22%23201B10%22%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M33.2%2029.8A46%2046%200%200%200%2064%20110%22%20stroke%3D%22%23201B10%22%20stroke-opacity%3D%22.28%22%20stroke-width%3D%222.6%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%220.1%209.6%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M94.8%2029.8A46%2046%200%200%201%2064%20110%22%20stroke%3D%22%23201B10%22%20stroke-opacity%3D%22.28%22%20stroke-width%3D%222.6%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%220.1%209.6%22%3E%3C%2Fpath%3E%3Crect%20x%3D%2248%22%20y%3D%2240%22%20width%3D%228.5%22%20height%3D%2247%22%20rx%3D%224.25%22%20fill%3D%22%23201B10%22%3E%3C%2Frect%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23201B10%22%20d%3D%22M64%2040a12%2012%200%201%201%200%2024%2012%2012%200%201%201%200-24Zm0%205.4a6.6%206.6%200%201%200%200%2013.2%206.6%206.6%200%201%200%200-13.2Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23201B10%22%20d%3D%22M65%2057a15%2015%200%201%201%200%2030%2015%2015%200%201%201%200-30Zm0%206.2a8.8%208.8%200%201%200%200%2017.6%208.8%208.8%200%201%200%200-17.6Z%22%3E%3C%2Fpath%3E%3Cuse%20href%3D%22%23bee%22%20transform%3D%22translate(36.4%2027.4)%20rotate(-35)%20scale(1.35)%22%3E%3C%2Fuse%3E%3Cuse%20href%3D%22%23bee%22%20transform%3D%22translate(91.6%2027.4)%20scale(-1%201)%20rotate(-35)%20scale(1.35)%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E",
  logoInverse: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22bb%22%3E%3Cellipse%20cx%3D%220%22%20cy%3D%220%22%20rx%3D%225.8%22%20ry%3D%223.6%22%3E%3C%2Fellipse%3E%3C%2FclipPath%3E%3Cg%20id%3D%22bee%22%3E%3Cellipse%20cx%3D%22-2.7%22%20cy%3D%22-5.4%22%20rx%3D%223.3%22%20ry%3D%221.9%22%20transform%3D%22rotate(-36%20-2.7%20-5.4)%22%20fill%3D%22none%22%20stroke%3D%22%23FBF6EA%22%20stroke-width%3D%221.3%22%3E%3C%2Fellipse%3E%3Cellipse%20cx%3D%221.5%22%20cy%3D%22-5.9%22%20rx%3D%222.7%22%20ry%3D%221.6%22%20transform%3D%22rotate(-16%201.5%20-5.9)%22%20fill%3D%22none%22%20stroke%3D%22%23FBF6EA%22%20stroke-width%3D%221.3%22%3E%3C%2Fellipse%3E%3Cpath%20d%3D%22M-5.2%20-1.1%20-7.8%200%20-5.2%201.1Z%22%20fill%3D%22%23FBF6EA%22%3E%3C%2Fpath%3E%3Cellipse%20cx%3D%220%22%20cy%3D%220%22%20rx%3D%225.8%22%20ry%3D%223.6%22%20fill%3D%22none%22%20stroke%3D%22%23FBF6EA%22%20stroke-width%3D%221.4%22%3E%3C%2Fellipse%3E%3Cg%20clip-path%3D%22url(%23bb)%22%3E%3Cpath%20d%3D%22M-2.6%20-4V4M0%20-4V4M2.6%20-4V4%22%20stroke%3D%22%23EEB02F%22%20stroke-width%3D%221.7%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Ccircle%20cx%3D%226.5%22%20cy%3D%220%22%20r%3D%222.4%22%20fill%3D%22%23FBF6EA%22%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fdefs%3E%3Cpath%20d%3D%22M33.2%2029.8A46%2046%200%200%200%2064%20110%22%20stroke%3D%22%23FBF6EA%22%20stroke-opacity%3D%22.35%22%20stroke-width%3D%222.6%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%220.1%209.6%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M94.8%2029.8A46%2046%200%200%201%2064%20110%22%20stroke%3D%22%23FBF6EA%22%20stroke-opacity%3D%22.35%22%20stroke-width%3D%222.6%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%20stroke-dasharray%3D%220.1%209.6%22%3E%3C%2Fpath%3E%3Crect%20x%3D%2248%22%20y%3D%2240%22%20width%3D%228.5%22%20height%3D%2247%22%20rx%3D%224.25%22%20fill%3D%22%23FBF6EA%22%3E%3C%2Frect%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23FBF6EA%22%20d%3D%22M64%2040a12%2012%200%201%201%200%2024%2012%2012%200%201%201%200-24Zm0%205.4a6.6%206.6%200%201%200%200%2013.2%206.6%206.6%200%201%200%200-13.2Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20fill%3D%22%23FBF6EA%22%20d%3D%22M65%2057a15%2015%200%201%201%200%2030%2015%2015%200%201%201%200-30Zm0%206.2a8.8%208.8%200%201%200%200%2017.6%208.8%208.8%200%201%200%200-17.6Z%22%3E%3C%2Fpath%3E%3Cuse%20href%3D%22%23bee%22%20transform%3D%22translate(36.4%2027.4)%20rotate(-35)%20scale(1.35)%22%3E%3C%2Fuse%3E%3Cuse%20href%3D%22%23bee%22%20transform%3D%22translate(91.6%2027.4)%20scale(-1%201)%20rotate(-35)%20scale(1.35)%22%3E%3C%2Fuse%3E%3C%2Fsvg%3E",
  pattern: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20560%20400%22%20fill%3D%22none%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22hex%22%20width%3D%2256%22%20height%3D%2297%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M28%202%2054%2017v30L28%2062%202%2047V17Z%20M28%2062v2M28%2064%2054%2079v30M28%2064%202%2079v30M54%20111%2028%20126M2%20111l26%2015%22%20fill%3D%22none%22%20stroke%3D%22%23201B10%22%20stroke-opacity%3D%22.07%22%20stroke-width%3D%221.5%22%3E%3C%2Fpath%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22560%22%20height%3D%22400%22%20fill%3D%22url(%23hex)%22%3E%3C%2Frect%3E%3C%2Fsvg%3E"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/assets-inline.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
