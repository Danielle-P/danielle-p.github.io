/* @ds-bundle: {"format":3,"namespace":"AsteriskDesignSystem_ce2850","components":[],"sourceHashes":{"app/auth-step.jsx":"45f98bbfdd49","app/builder-shell.jsx":"d02d6af8145e","app/building-step.jsx":"ee81ab2d4f82","app/customize-step.jsx":"2b3d89855fca","app/invite-step.jsx":"8f5dafed8620","app/main.jsx":"31e5ff1e4f40","app/onboarding-icons.jsx":"131378173e8e","app/personalization-step.jsx":"228f41f6eba9","app/plan-step.jsx":"3cc63b3b3b13","app/ready-step.jsx":"ce2fd4483738","app/start-step.jsx":"bfcf1d5ef685","app/theme-step.jsx":"949162a1e613","kit/icons.jsx":"44e392e684ff","kit/live-atoms.jsx":"107430ad34c7","kit/primitives-extended.jsx":"c4aaa873e33d","kit/primitives.jsx":"b9f681729760","ui_kits/builder/builder.jsx":"d02c1b3e7fad","ui_kits/builder/icons.jsx":"44e392e684ff","ui_kits/builder/primitives-extended.jsx":"c4aaa873e33d","ui_kits/builder/primitives.jsx":"b9f681729760","ui_kits/icon.jsx":"7dc863f00f45","ui_kits/live-app/atoms-and-modules.jsx":"107430ad34c7","ui_kits/live-app/field-atoms.jsx":"c11e41df9c53","ui_kits/live-app/map-module.jsx":"2c3eeb2d38ea","ui_kits/live-app/more-modules.jsx":"7ee449238cf0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AsteriskDesignSystem_ce2850 = window.AsteriskDesignSystem_ce2850 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// app/auth-step.jsx
try { (() => {
/* Step 1 — Sign up (Builder UI Kit) */

function AuthStep({
  onNext
}) {
  const [email, setEmail] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [agree, setAgree] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "auth-shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "auth-head"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand",
    href: "#"
  }, /*#__PURE__*/React.createElement(KnackBrand, {
    height: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "small"
  }, "Already have an account?", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Sign in"))), /*#__PURE__*/React.createElement("div", {
    className: "auth-card"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ast-asterisk-mark"
  }, /*#__PURE__*/React.createElement(IconAsterisk, {
    size: 22
  })), /*#__PURE__*/React.createElement("h1", null, "Build your first app in 5 minutes"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Knack turns your idea into a working database + UI \u2014 no code. We'll set up your workspace, learn what you need, and have something usable on screen before you finish your coffee."), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Work email"), /*#__PURE__*/React.createElement("input", {
    id: "email",
    type: "email",
    placeholder: "you@company.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    autoFocus: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "auth-field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "pw"
  }, "Create a password"), /*#__PURE__*/React.createElement("input", {
    id: "pw",
    type: "password",
    placeholder: "At least 8 characters",
    value: pw,
    onChange: e => setPw(e.target.value)
  }), /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, "Use 8+ characters with a mix of letters and numbers.")), /*#__PURE__*/React.createElement("label", {
    className: "auth-checkbox"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: agree,
    onChange: e => setAgree(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "terms"), " and ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "privacy policy"), ". Knack will email me occasional product updates. (You can unsubscribe any time.)")), /*#__PURE__*/React.createElement("button", {
    className: "auth-cta",
    disabled: !email || !pw || !agree,
    onClick: onNext
  }, "Create my workspace", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 16,
    style: {
      marginLeft: 6,
      verticalAlign: "-2px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "auth-divider"
  }, "or continue with"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "auth-sso-btn",
    onClick: onNext
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.79-.07-1.54-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.83C6.71 7.3 9.14 5.38 12 5.38Z"
  })), "Google"), /*#__PURE__*/React.createElement("button", {
    className: "auth-sso-btn",
    onClick: onNext
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16.37 1.43c.06.07.1.21.1.21s.05.62-.13 1.51c-.18.92-.62 1.84-1.32 2.62-.79.86-1.78 1.36-2.62 1.36 0 0-.07-.65.12-1.5.2-.94.65-1.82 1.34-2.59.78-.86 1.86-1.46 2.51-1.61ZM20.83 17.5c-.39.88-.84 1.7-1.36 2.46-.71 1.04-1.29 1.76-1.74 2.16-.71.62-1.47.95-2.27.97-.58 0-1.28-.16-2.09-.5-.81-.34-1.55-.5-2.23-.5-.71 0-1.47.17-2.29.5-.82.34-1.48.51-1.98.53-.78.04-1.55-.3-2.34-1.01-.49-.42-1.1-1.16-1.81-2.22-.77-1.13-1.4-2.45-1.9-3.95-.54-1.63-.81-3.21-.81-4.74 0-1.75.39-3.27 1.18-4.55a6.43 6.43 0 0 1 5.4-3.13c.62 0 1.43.18 2.44.55.99.36 1.62.55 1.89.55.21 0 .91-.22 2.11-.65.99-.34 1.86-.49 2.6-.42 2.01.17 3.52.95 4.52 2.34-1.8 1.13-2.7 2.71-2.68 4.74.02 1.58.6 2.89 1.74 3.93.51.5 1.09.88 1.74 1.15-.14.4-.29.79-.45 1.18Z"
  })), "Apple"))));
}
window.AuthStep = AuthStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/auth-step.jsx", error: String((e && e.message) || e) }); }

// app/builder-shell.jsx
try { (() => {
/* Shared shell: topbar + left rail + chat panel + canvas area.
   Used by Steps 4–9 (the in-Builder portion). */

function BuilderShell({
  stepName,
  stepNumber,
  totalSteps,
  activeRailKey = "ai",
  children
}) {
  const railItems = [{
    k: "ai",
    title: "AI Builder",
    icon: /*#__PURE__*/React.createElement(OISparkles, {
      size: 16
    })
  }, {
    k: "tables",
    title: "Tables",
    icon: /*#__PURE__*/React.createElement(IconTable, {
      size: 16
    })
  }, {
    k: "users",
    title: "User roles",
    icon: /*#__PURE__*/React.createElement(IconUsers, {
      size: 16
    })
  }, {
    k: "pages",
    title: "Pages",
    icon: /*#__PURE__*/React.createElement(IconPages, {
      size: 16
    })
  }, {
    k: "design",
    title: "Design",
    icon: /*#__PURE__*/React.createElement(IconBrush, {
      size: 16
    })
  }, {
    k: "settings",
    title: "Settings",
    icon: /*#__PURE__*/React.createElement(IconCog, {
      size: 16
    })
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "bo-shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "bo-topbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ws"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, /*#__PURE__*/React.createElement(IconAsterisk, {
    size: 12
  })), "Acme Workspace", /*#__PURE__*/React.createElement(IconChevDown, {
    size: 11
  })), /*#__PURE__*/React.createElement("span", {
    className: "stepname"
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 12,
    style: {
      verticalAlign: "-2px",
      marginRight: 6
    }
  }), "Onboarding \xB7 ", stepName), /*#__PURE__*/React.createElement("span", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("span", {
    className: "saved"
  }, "Auto-saving"), /*#__PURE__*/React.createElement("button", {
    className: "help",
    title: "Help"
  }, /*#__PURE__*/React.createElement(IconQuestion, {
    size: 14
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "bo-rail"
  }, railItems.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.k,
    className: it.k === activeRailKey ? "active" : "",
    title: it.title
  }, it.icon)), /*#__PURE__*/React.createElement("span", {
    className: "gap"
  }), /*#__PURE__*/React.createElement("span", {
    className: "avatar"
  }, "AC")), /*#__PURE__*/React.createElement("div", {
    className: "bo-body"
  }, children));
}

/* Chat panel shell + helpers reused across steps */
function ChatPanel({
  messages,
  inputDisabled,
  placeholder = "Reply or ask a question…",
  onSend
}) {
  const scrollerRef = React.useRef(null);
  const [input, setInput] = React.useState("");
  React.useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);
  return /*#__PURE__*/React.createElement("aside", {
    className: "chat-panel"
  }, /*#__PURE__*/React.createElement("header", {
    className: "chat-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ai-avatar"
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, "Astra \xB7 AI Builder"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, "Helping you ship your first app")), /*#__PURE__*/React.createElement("span", {
    className: "status"
  }, "Online")), /*#__PURE__*/React.createElement("div", {
    className: "chat-scroll",
    ref: scrollerRef
  }, messages.map((m, i) => {
    if (m.kind === "user") {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "msg-user"
      }, m.body);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "msg-ai"
    }, /*#__PURE__*/React.createElement("span", {
      className: "av"
    }, /*#__PURE__*/React.createElement(OISparkles, {
      size: 11
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, typeof m.body === "string" ? /*#__PURE__*/React.createElement("div", {
      className: "bubble",
      dangerouslySetInnerHTML: {
        __html: m.body
      }
    }) : /*#__PURE__*/React.createElement("div", {
      className: "bubble"
    }, m.body), m.children));
  })), /*#__PURE__*/React.createElement("div", {
    className: "chat-input-row"
  }, /*#__PURE__*/React.createElement("input", {
    className: "input",
    placeholder: placeholder,
    value: input,
    disabled: inputDisabled,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && input.trim()) {
        onSend && onSend(input);
        setInput("");
      }
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "send",
    disabled: inputDisabled || !input.trim(),
    onClick: () => {
      onSend && onSend(input);
      setInput("");
    }
  }, /*#__PURE__*/React.createElement(OISend, {
    size: 15
  }))));
}
window.BuilderShell = BuilderShell;
window.ChatPanel = ChatPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/builder-shell.jsx", error: String((e && e.message) || e) }); }

// app/building-step.jsx
try { (() => {
/* Step 5 — Building animation.
   Astra builds the app live: nodes pop in across a graph, status pills
   in chat tick through (Tables → Pages → Logic → Permissions). The
   chat shows what's happening; the canvas shows the structure forming. */

function BuildingStep({
  data,
  onDone
}) {
  const plan = data.plan;
  const [phase, setPhase] = React.useState(0); // 0..4 (0=intro, 4=done)
  const phases = [{
    key: "tables",
    title: "Designing your tables",
    desc: "Defining records, fields, and how they relate.",
    icon: /*#__PURE__*/React.createElement(IconTable, {
      size: 13
    })
  }, {
    key: "pages",
    title: "Generating pages",
    desc: "Lists, forms, and detail pages for every role.",
    icon: /*#__PURE__*/React.createElement(IconPages, {
      size: 13
    })
  }, {
    key: "logic",
    title: "Wiring logic & automations",
    desc: "Validations, conditional rules, notifications.",
    icon: /*#__PURE__*/React.createElement(OIWorkflow, {
      size: 13
    })
  }, {
    key: "perms",
    title: "Setting permissions",
    desc: "Each user role sees only what they should.",
    icon: /*#__PURE__*/React.createElement(OIShield, {
      size: 13
    })
  }];
  React.useEffect(() => {
    if (phase >= phases.length) {
      const t = setTimeout(onDone, 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setPhase(p => p + 1), phase === 0 ? 600 : 1700);
    return () => clearTimeout(t);
  }, [phase]);
  const isDone = i => phase > i;
  const isActive = i => phase === i;

  /* Build graph nodes from the plan */
  const tableNodes = plan.tables.slice(0, 5).map((t, i) => ({
    kind: "table",
    label: t.name,
    fields: t.fields.slice(0, 4),
    x: 40 + i % 3 * 230,
    y: 40 + Math.floor(i / 3) * 150,
    delay: i * 200
  }));
  const pageNodes = plan.pages.slice(0, 3).map((p, i) => ({
    kind: "page",
    label: p.name,
    meta: p.desc.slice(0, 28) + (p.desc.length > 28 ? "…" : ""),
    x: 40 + i * 230,
    y: 340,
    delay: 1000 + i * 200
  }));
  const logicNodes = [{
    kind: "logic",
    label: "Validation rules",
    meta: "Required + format checks",
    x: 720,
    y: 60,
    delay: 2400
  }, {
    kind: "logic",
    label: "Notifications",
    meta: "Email on new + assigned",
    x: 720,
    y: 180,
    delay: 2600
  }];
  const permNodes = plan.roles.slice(0, 2).map((r, i) => ({
    kind: "perm",
    label: r.name,
    meta: r.permissions[0] || "",
    x: 720,
    y: 320 + i * 110,
    delay: 3500 + i * 200
  }));
  const allNodes = [...(phase >= 1 ? tableNodes : []), ...(phase >= 2 ? pageNodes : []), ...(phase >= 3 ? logicNodes : []), ...(phase >= 4 ? permNodes : [])];

  /* Lines connecting tables → pages, pages → logic, perm → tables */
  const lines = [];
  if (phase >= 2) {
    tableNodes.slice(0, 3).forEach((t, i) => {
      const p = pageNodes[i % pageNodes.length];
      if (p) lines.push({
        x1: t.x + 80,
        y1: t.y + 60,
        x2: p.x + 80,
        y2: p.y,
        delay: 1200 + i * 200
      });
    });
  }
  if (phase >= 3) {
    pageNodes.slice(0, 2).forEach((p, i) => {
      const lg = logicNodes[i];
      if (lg) lines.push({
        x1: p.x + 160,
        y1: p.y + 30,
        x2: lg.x,
        y2: lg.y + 30,
        delay: 2600
      });
    });
  }
  if (phase >= 4) {
    permNodes.forEach((pn, i) => {
      const t = tableNodes[i] || tableNodes[0];
      lines.push({
        x1: t.x + 160,
        y1: t.y + 40,
        x2: pn.x,
        y2: pn.y + 30,
        delay: 3600 + i * 200
      });
    });
  }
  const messages = [{
    kind: "ai",
    body: `Building <strong>${plan.appName}</strong>. This usually takes 20–40 seconds.`
  }, {
    kind: "ai",
    body: "I'm laying out the foundation, page by page. You can keep this tab open and grab coffee — when it's done, you'll see your real app.",
    children: /*#__PURE__*/React.createElement("div", {
      className: "layer-list",
      style: {
        marginTop: 12
      }
    }, phases.map((p, i) => {
      const done = isDone(i);
      const active = isActive(i);
      return /*#__PURE__*/React.createElement("div", {
        key: p.key,
        className: "layer-row " + p.key + (done ? " done" : ""),
        style: {
          animationDelay: `${i * 80}ms`
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "ic"
      }, p.icon), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "t"
      }, p.title), /*#__PURE__*/React.createElement("div", {
        className: "d"
      }, p.desc), active && /*#__PURE__*/React.createElement("div", {
        className: "progress"
      }), done && /*#__PURE__*/React.createElement("div", {
        className: "progress",
        style: {}
      })), done && /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--success-emphasis)",
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement(OICheckCircle, {
        size: 16
      })), active && /*#__PURE__*/React.createElement("span", {
        className: "spin",
        style: {
          margin: 0,
          marginTop: 8
        }
      }));
    }))
  }];
  if (phase >= phases.length) {
    messages.push({
      kind: "ai",
      body: `<strong>Done — your app is ready.</strong> Loading the live preview now.`
    });
  }
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Building your app",
    stepNumber: 5,
    totalSteps: 9,
    activeRailKey: "ai"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    inputDisabled: true,
    placeholder: "Astra is building\u2026"
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "App preview"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, "Construction")), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 12px/1 var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, phase >= phases.length ? "Complete" : `${Math.min(phase, phases.length)} of ${phases.length} layers built`))), /*#__PURE__*/React.createElement("div", {
    className: "ba-stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ba-status" + (phase >= phases.length ? " done" : "")
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(OIWrench, {
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lbl"
  }, phase >= phases.length ? "App built successfully" : phases[Math.min(phase, phases.length - 1)]?.title || "Starting…"), /*#__PURE__*/React.createElement("div", {
    className: "sub"
  }, phase >= phases.length ? "Loading preview…" : phases[Math.min(phase, phases.length - 1)]?.desc || "")), phase >= phases.length ? /*#__PURE__*/React.createElement("span", {
    className: "spin"
  }, /*#__PURE__*/React.createElement(OICheckCircle, {
    size: 11
  })) : /*#__PURE__*/React.createElement("span", {
    className: "spin"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ba-canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid-bg"
  }), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none"
    }
  }, lines.map((l, i) => {
    const d = `M${l.x1} ${l.y1} C ${l.x1 + 50} ${l.y1}, ${l.x2 - 50} ${l.y2}, ${l.x2} ${l.y2}`;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d,
      className: "bline",
      style: {
        animationDelay: `${l.delay}ms`
      }
    });
  })), allNodes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "bnode t-" + n.kind,
    style: {
      left: n.x,
      top: n.y,
      animationDelay: `${n.delay}ms`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nh"
  }, /*#__PURE__*/React.createElement("span", {
    className: "glyph"
  }, n.kind === "table" && /*#__PURE__*/React.createElement(IconTable, {
    size: 11
  }), n.kind === "page" && /*#__PURE__*/React.createElement(IconPages, {
    size: 11
  }), n.kind === "logic" && /*#__PURE__*/React.createElement(OIWorkflow, {
    size: 11
  }), n.kind === "perm" && /*#__PURE__*/React.createElement(OIShield, {
    size: 11
  })), n.label), n.fields && /*#__PURE__*/React.createElement("div", {
    className: "pill-row"
  }, n.fields.map((f, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    className: "pill"
  }, f))), n.meta && /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, n.meta))), phase >= phases.length && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(255,255,255,.85)",
      backdropFilter: "blur(2px)",
      animation: "pzIn .3s ease both"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 64,
      height: 64,
      borderRadius: 18,
      background: "var(--gradient-brand)",
      color: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(OICheckCircle, {
    size: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 22px/1.2 var(--font-subhead)",
      letterSpacing: "-.01em"
    }
  }, plan.appName, " is ready"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/22px var(--font-sans)",
      color: "var(--content-muted)",
      marginTop: 6
    }
  }, "Loading the live app preview\u2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, [{
    c: "#2563EB",
    bg: "#E3EFFC",
    label: `${plan.tables.length} tables`
  }, {
    c: "#1A7037",
    bg: "#DAFAEC",
    label: `${plan.pages.length} pages`
  }, {
    c: "#744816",
    bg: "#FEF4D7",
    label: "Validation + automations"
  }, {
    c: "var(--brand-emphasis)",
    bg: "var(--brand-50)",
    label: `${plan.roles.length} user roles`
  }].map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 10px",
      borderRadius: 9999,
      background: it.bg,
      color: it.c,
      font: "500 12px/1 var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 9999,
      background: it.c
    }
  }), it.label))))));
}
window.BuildingStep = BuildingStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/building-step.jsx", error: String((e && e.message) || e) }); }

// app/customize-step.jsx
try { (() => {
/* Step 8 — Iterative customize.
   User can chat with Astra to ask for changes; each change shows
   as an applied diff in the canvas. Pre-canned interactions to
   demonstrate the conversational customization. */

function CustomizeStep({
  data,
  onNext
}) {
  const plan = data.plan;
  const firstTable = plan.tables[0];
  const SCRIPT = [
  // 0
  {
    kind: "ai",
    body: `Now the fun part — <strong>shape it like you actually want.</strong> Just type changes in plain English, and I'll wire them up.`
  }, {
    kind: "ai",
    body: `Try one of these, or write your own:`,
    children: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      "data-act": "priority",
      style: {
        justifyContent: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(OISparkles, {
      size: 12
    }), " Add a \"Priority\" field with High/Medium/Low"), /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      "data-act": "email",
      style: {
        justifyContent: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(OISparkles, {
      size: 12
    }), " Email me when status becomes \"Blocked\""), /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      "data-act": "kanban",
      style: {
        justifyContent: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(OISparkles, {
      size: 12
    }), " Show records as a Kanban board by status"))
  }];

  /* State of which mods are applied — drives canvas */
  const [mods, setMods] = React.useState({});
  const [messages, setMessages] = React.useState(SCRIPT);
  const [typing, setTyping] = React.useState(false);
  const applyAction = act => {
    if (act === "priority") {
      setMessages(m => [...m, {
        kind: "user",
        body: "Add a 'Priority' field with High / Medium / Low."
      }, {
        kind: "ai",
        body: "Thinking…"
      }]);
      setTyping(true);
      setTimeout(() => {
        setMods(s => ({
          ...s,
          priority: true
        }));
        setMessages(m => {
          const out = m.slice(0, -1);
          return [...out, {
            kind: "ai",
            body: `<strong>Done.</strong> I added a single-select <strong>Priority</strong> field to ${firstTable.name} with three options (High, Medium, Low) and a color tag. The list view now shows it as a column.`,
            children: /*#__PURE__*/React.createElement("div", {
              className: "bubble-card",
              style: {
                marginTop: 10
              }
            }, /*#__PURE__*/React.createElement("div", {
              className: "bc-body"
            }, /*#__PURE__*/React.createElement("div", {
              style: {
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "4px 0"
              }
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "var(--success-surface)",
                color: "var(--success-emphasis)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }
            }, /*#__PURE__*/React.createElement(OICheckCircle, {
              size: 14
            })), /*#__PURE__*/React.createElement("div", {
              style: {
                flex: 1
              }
            }, /*#__PURE__*/React.createElement("div", {
              style: {
                font: "600 13px/1.3 var(--font-sans)"
              }
            }, "+ Priority field"), /*#__PURE__*/React.createElement("div", {
              style: {
                font: "400 12px/16px var(--font-sans)",
                color: "var(--content-muted)",
                marginTop: 2
              }
            }, "Single-select \xB7 3 options \xB7 color-coded")))), /*#__PURE__*/React.createElement("div", {
              className: "bc-foot"
            }, /*#__PURE__*/React.createElement("span", {
              style: {
                font: "400 12px/1 var(--font-sans)",
                color: "var(--content-muted)"
              }
            }, "Applied 2s ago"), /*#__PURE__*/React.createElement("button", {
              className: "cta-secondary"
            }, "Undo")))
          }];
        });
        setTyping(false);
      }, 1100);
    }
    if (act === "email") {
      setMessages(m => [...m, {
        kind: "user",
        body: "Email me when a record's status becomes Blocked."
      }, {
        kind: "ai",
        body: "Setting up the automation…"
      }]);
      setTyping(true);
      setTimeout(() => {
        setMods(s => ({
          ...s,
          email: true
        }));
        setMessages(m => [...m.slice(0, -1), {
          kind: "ai",
          body: `Done. I created a <strong>workflow rule</strong>: when <code>status</code> changes to <code>Blocked</code>, email you at <strong>${data.email || "you@acme.co"}</strong> with the record link and owner. You'll find it under Logic → Rules.`,
          children: /*#__PURE__*/React.createElement("div", {
            className: "bubble-card",
            style: {
              marginTop: 10
            }
          }, /*#__PURE__*/React.createElement("div", {
            className: "bc-body"
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "4px 0"
            }
          }, /*#__PURE__*/React.createElement("span", {
            style: {
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "var(--success-surface)",
              color: "var(--success-emphasis)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center"
            }
          }, /*#__PURE__*/React.createElement(OICheckCircle, {
            size: 14
          })), /*#__PURE__*/React.createElement("div", {
            style: {
              flex: 1
            }
          }, /*#__PURE__*/React.createElement("div", {
            style: {
              font: "600 13px/1.3 var(--font-sans)"
            }
          }, "+ Workflow rule"), /*#__PURE__*/React.createElement("div", {
            style: {
              font: "400 12px/16px var(--font-sans)",
              color: "var(--content-muted)",
              marginTop: 2
            }
          }, "When status \u2192 Blocked, send email")))), /*#__PURE__*/React.createElement("div", {
            className: "bc-foot"
          }, /*#__PURE__*/React.createElement("button", {
            className: "cta-secondary"
          }, /*#__PURE__*/React.createElement(IconEye, {
            size: 12
          }), "View rule"), /*#__PURE__*/React.createElement("button", {
            className: "cta-secondary"
          }, "Test it")))
        }]);
        setTyping(false);
      }, 1100);
    }
    if (act === "kanban") {
      setMessages(m => [...m, {
        kind: "user",
        body: "Show records as a Kanban board grouped by status."
      }, {
        kind: "ai",
        body: "Adding a board view…"
      }]);
      setTyping(true);
      setTimeout(() => {
        setMods(s => ({
          ...s,
          kanban: true
        }));
        setMessages(m => [...m.slice(0, -1), {
          kind: "ai",
          body: "Done. I added a <strong>Board view</strong> grouped by <code>status</code> to the main page. Drag a card between columns to update the status."
        }]);
        setTyping(false);
      }, 1100);
    }
  };

  /* Bind click handlers on the suggestion chips inside chat */
  React.useEffect(() => {
    const handler = e => {
      const btn = e.target.closest("[data-act]");
      if (btn) applyAction(btn.getAttribute("data-act"));
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
  const onSend = text => {
    const low = text.toLowerCase();
    if (low.includes("priority") || low.includes("field")) applyAction("priority");else if (low.includes("email") || low.includes("notify")) applyAction("email");else if (low.includes("kanban") || low.includes("board")) applyAction("kanban");else {
      setMessages(m => [...m, {
        kind: "user",
        body: text
      }, {
        kind: "ai",
        body: "Got it — I'll need a second to think this through. In a real session I'd ask a clarifying question or draft a plan first."
      }]);
    }
  };

  /* Sample records — Kanban + list */
  const rows = [{
    name: "Acme Logistics",
    owner: "Avery Singh",
    status: "Active",
    priority: "High",
    created: "Aug 12, 2026"
  }, {
    name: "Harbor Freight",
    owner: "Maya Lopez",
    status: "Pending",
    priority: "Medium",
    created: "Aug 14, 2026"
  }, {
    name: "Northwind Group",
    owner: "Daniel Park",
    status: "Active",
    priority: "Low",
    created: "Sep 02, 2026"
  }, {
    name: "Oakridge Studios",
    owner: "Avery Singh",
    status: "Blocked",
    priority: "High",
    created: "Sep 12, 2026"
  }, {
    name: "Cascade Software",
    owner: "Maya Lopez",
    status: "Active",
    priority: "Medium",
    created: "Sep 22, 2026"
  }, {
    name: "Meridian Partners",
    owner: "Daniel Park",
    status: "Pending",
    priority: "Low",
    created: "Oct 05, 2026"
  }];
  const priTone = {
    High: "destructive",
    Medium: "warning",
    Low: "neutral"
  };
  const stTone = {
    Active: "success",
    Pending: "warning",
    Blocked: "destructive"
  };
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Customize anything",
    stepNumber: 8,
    totalSteps: 9,
    activeRailKey: "ai"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    inputDisabled: typing,
    placeholder: "Try: \"make the title bigger and bold\"",
    onSend: onSend
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, firstTable.name), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, mods.kanban ? "Board view" : "List view"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      display: "inline-flex",
      gap: 6
    }
  }, Object.keys(mods).map(k => /*#__PURE__*/React.createElement(Badge, {
    key: k,
    variant: "success",
    size: "sm"
  }, "\u2713 ", k === "priority" ? "Priority field" : k === "email" ? "Email rule" : "Board view")))), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary"
  }, /*#__PURE__*/React.createElement(IconEye, {
    size: 13
  }), "Preview"), /*#__PURE__*/React.createElement("button", {
    className: "cta-gradient",
    onClick: onNext
  }, "I'm done customizing ", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 13
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lapp-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lapp-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "url"
  }, "acme.knack.app/", plan.appName.toLowerCase().replace(/\s+/g, "-"), "/", firstTable.name.toLowerCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-surface": "live-app",
    style: {
      background: "var(--bg-default)"
    }
  }, /*#__PURE__*/React.createElement(LANav, {
    appName: plan.appName,
    user: (data.firstName || "Avery") + " Singh",
    tabs: plan.pages.slice(0, 4).map(p => p.name),
    activeTab: plan.pages[0]?.name,
    onTab: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 22px/1.2 var(--font-subhead)",
      letterSpacing: "-.005em"
    }
  }, firstTable.name), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "sm"
  }, "Filter"), /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "sm"
  }, "+ New")), !mods.kanban && /*#__PURE__*/React.createElement(LATable, {
    columns: [{
      key: "name",
      label: firstTable.fields[1] || "Name",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(LAAvatar, {
        name: r.name,
        size: 26
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "500 13px/18px var(--font-sans)"
        }
      }, r.name))
    }, {
      key: "owner",
      label: "Owner",
      width: 160,
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(LAAvatar, {
        name: r.owner,
        size: 22
      }), " ", r.owner)
    }, {
      key: "status",
      label: "Status",
      width: 120,
      render: r => /*#__PURE__*/React.createElement(LATag, {
        tone: stTone[r.status]
      }, r.status)
    }, mods.priority && {
      key: "priority",
      label: "Priority",
      width: 110,
      render: r => /*#__PURE__*/React.createElement(LATag, {
        tone: priTone[r.priority]
      }, r.priority)
    }, {
      key: "created",
      label: "Created",
      width: 130
    }].filter(Boolean),
    rows: rows
  }), mods.kanban && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14
    }
  }, ["Active", "Pending", "Blocked"].map(col => {
    const cards = rows.filter(r => r.status === col);
    return /*#__PURE__*/React.createElement("div", {
      key: col,
      style: {
        background: "var(--bg-muted)",
        borderRadius: 12,
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(LATag, {
      tone: stTone[col]
    }, col), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 12px/1 var(--font-sans)",
        color: "var(--content-muted)"
      }
    }, cards.length)), cards.map(r => /*#__PURE__*/React.createElement("div", {
      key: r.name,
      style: {
        background: "#fff",
        borderRadius: 10,
        padding: 12,
        border: "1px solid var(--border-default)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement(LAAvatar, {
      name: r.name,
      size: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 13px/1 var(--font-sans)",
        flex: 1,
        color: "var(--content-default)"
      }
    }, r.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 11px/16px var(--font-sans)",
        color: "var(--content-muted)"
      }
    }, r.owner), mods.priority && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(LATag, {
      tone: priTone[r.priority]
    }, r.priority)))));
  })), mods.email && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: "12px 14px",
      borderRadius: 10,
      background: "var(--bg-brand-muted)",
      border: "1px solid var(--border-brand-subtle)",
      color: "var(--content-default)",
      font: "400 13px/20px var(--font-sans)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(OIMail, {
    size: 16,
    style: {
      color: "var(--content-brand)"
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Active rule:"), " Email ", /*#__PURE__*/React.createElement("strong", null, data.email || "you@acme.co"), " when status changes to ", /*#__PURE__*/React.createElement("strong", null, "Blocked"), "."), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(LAButton, {
    variant: "minimal",
    size: "sm"
  }, "Edit")))))));
}
window.CustomizeStep = CustomizeStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/customize-step.jsx", error: String((e && e.message) || e) }); }

// app/invite-step.jsx
try { (() => {
/* Step 9 — Invite teammates and finish. */

function InviteStep({
  data,
  onFinish,
  onSkip
}) {
  const plan = data.plan;
  const [invites, setInvites] = React.useState([{
    email: "",
    role: plan.roles[0]?.name || "Member"
  }, {
    email: "",
    role: plan.roles[0]?.name || "Member"
  }, {
    email: "",
    role: plan.roles[plan.roles.length - 1]?.name || "Viewer"
  }]);
  const [sent, setSent] = React.useState(false);
  const update = (i, patch) => setInvites(arr => arr.map((it, idx) => idx === i ? {
    ...it,
    ...patch
  } : it));
  const addRow = () => setInvites(arr => [...arr, {
    email: "",
    role: plan.roles[0]?.name || "Member"
  }]);
  const count = invites.filter(i => i.email.trim()).length;
  const messages = [{
    kind: "ai",
    body: `Last step: <strong>bring your team in</strong>. I created ${plan.roles.length} roles based on your plan — drop people in and I'll send a welcome email with their login.`
  }, {
    kind: "ai",
    body: "Your roles:",
    children: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 10
      }
    }, plan.roles.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r.name,
      className: "invite-pill"
    }, /*#__PURE__*/React.createElement("span", {
      className: "role"
    }, r.name), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: "var(--content-muted)"
      }
    }, r.desc))))
  }, {
    kind: "ai",
    body: `You can also invite people later from <strong>Settings → Users</strong>. Or skip and bring them in once you've polished a bit more.`
  }, sent && {
    kind: "ai",
    body: `<strong>Invitations sent.</strong> Your teammates will get an email with a magic link. While you wait, want me to walk you through the builder?`
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Invite your team",
    stepNumber: 9,
    totalSteps: 9,
    activeRailKey: "users"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    placeholder: "Or paste a list of emails\u2026"
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "Settings"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, "Users & invites")), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary",
    onClick: onSkip
  }, "Skip for now"), /*#__PURE__*/React.createElement("button", {
    className: "cta-gradient",
    disabled: count === 0 && !sent,
    onClick: () => {
      if (!sent) setSent(true);else onFinish();
    }
  }, sent ? /*#__PURE__*/React.createElement(React.Fragment, null, "Open my app ", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 13
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, "Send ", count, " invite", count !== 1 ? "s" : "", " ", /*#__PURE__*/React.createElement(OISend, {
    size: 13
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 28px 60px",
      maxWidth: 880,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg, var(--brand-50), #fff)",
      border: "1px solid var(--brand-100)",
      borderRadius: 14,
      padding: 22,
      display: "flex",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "var(--gradient-brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(OIRocket, {
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 18px/1.2 var(--font-subhead)",
      letterSpacing: "-.005em"
    }
  }, "Almost there, ", data.firstName || "friend", " \u2014 last step"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/20px var(--font-sans)",
      color: "var(--content-secondary)",
      marginTop: 6
    }
  }, "Add your teammates so they can sign in to ", plan.appName, ". We'll send them a magic link \u2014 no passwords to share."))), /*#__PURE__*/React.createElement("div", {
    className: "invite-card",
    style: {
      padding: 18,
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px/1 var(--font-sans)",
      flex: 1
    }
  }, "Invite by email"), /*#__PURE__*/React.createElement("button", {
    className: "chip-action",
    onClick: addRow
  }, /*#__PURE__*/React.createElement(IconPlus, {
    size: 11
  }), " Add another")), invites.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "invite-row"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      flex: "none",
      background: "var(--gray-100)",
      color: "var(--content-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 11px/1 var(--font-sans)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("input", {
    placeholder: "name@company.com",
    value: row.email,
    onChange: e => update(i, {
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement("select", {
    value: row.role,
    onChange: e => update(i, {
      role: e.target.value
    })
  }, plan.roles.map(r => /*#__PURE__*/React.createElement("option", {
    key: r.name,
    value: r.name
  }, r.name))), row.email.trim() && /*#__PURE__*/React.createElement("button", {
    className: "chip-action",
    onClick: () => setInvites(arr => arr.filter((_, j) => j !== i)),
    style: {
      padding: "0 10px"
    }
  }, /*#__PURE__*/React.createElement(IconTrash, {
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      padding: "4px 0 0"
    }
  }, /*#__PURE__*/React.createElement(OILightning, {
    size: 13,
    style: {
      color: "var(--content-muted)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/18px var(--font-sans)",
      color: "var(--content-muted)",
      flex: 1
    }
  }, "Invitees get an email with a sign-in link. They'll only see what their role allows."))), sent && /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      padding: "16px 18px",
      borderRadius: 12,
      background: "var(--success-surface)",
      border: "1px solid #C9EAD1",
      color: "var(--success-content)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(OICheckCircle, {
    size: 18,
    style: {
      color: "var(--success-emphasis)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px/1 var(--font-sans)"
    }
  }, "Sent ", count, " invitation", count !== 1 ? "s" : "", "."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      marginTop: 3
    }
  }, "You can track who's accepted in Settings \u2192 Users."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 14
    }
  }, [{
    ic: /*#__PURE__*/React.createElement(OIDb, {
      size: 16
    }),
    t: "Import data",
    d: "CSV, Airtable, Google Sheets — bring real records in."
  }, {
    ic: /*#__PURE__*/React.createElement(OIPalette, {
      size: 16
    }),
    t: "Polish design",
    d: "Brand colors, logo, custom domain."
  }, {
    ic: /*#__PURE__*/React.createElement(OIWorkflow, {
      size: 16
    }),
    t: "Add integrations",
    d: "Slack, Zapier, webhooks, API."
  }].map(c => /*#__PURE__*/React.createElement("div", {
    key: c.t,
    style: {
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 6,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      marginBottom: 4,
      background: "var(--brand-50)",
      color: "var(--brand-emphasis)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, c.ic), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 14px/1.3 var(--font-sans)"
    }
  }, c.t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/17px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, c.d), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      color: "var(--brand-emphasis)",
      font: "500 12px/1 var(--font-sans)",
      marginTop: 4
    }
  }, "Set up ", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 11
  })))))))));
}
window.InviteStep = InviteStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/invite-step.jsx", error: String((e && e.message) || e) }); }

// app/main.jsx
try { (() => {
/* Main router for the 9-step onboarding prototype. */

const {
  useState
} = React;

/* Sample AI-generated plan — derived from the user's prompt + persona. */
function makePlanFromAnswers(answers) {
  const usecase = answers.usecase || "crm";
  const persona = answers.role || "founder";
  const plansByUseCase = {
    crm: {
      appName: "Customer Hub",
      summary: "A CRM-style workspace to track customers, deals, and conversations across your team.",
      tables: [{
        name: "Customers",
        desc: "Companies and contacts you do business with",
        fields: ["Name", "Industry", "Owner", "Status", "Created"]
      }, {
        name: "Deals",
        desc: "Opportunities tied to a customer",
        fields: ["Name", "Customer", "Stage", "Value", "Close date"]
      }, {
        name: "Activities",
        desc: "Calls, emails, and meetings logged against deals",
        fields: ["Type", "Customer", "Owner", "Notes", "Date"]
      }, {
        name: "Tasks",
        desc: "Follow-ups assigned to teammates",
        fields: ["Title", "Owner", "Due", "Status"]
      }],
      pages: [{
        name: "Dashboard",
        desc: "KPIs, recent activity, your queue."
      }, {
        name: "Customers",
        desc: "List + detail pages."
      }, {
        name: "Pipeline",
        desc: "Deals grouped by stage."
      }, {
        name: "Reports",
        desc: "Conversion, owner performance."
      }],
      roles: [{
        name: "Admin",
        desc: "Full access — manages users and rules.",
        permissions: ["All tables", "All pages", "Manage users"]
      }, {
        name: "Manager",
        desc: "Sees everything; edits anything assigned.",
        permissions: ["All tables", "Reports", "Bulk actions"]
      }, {
        name: "Rep",
        desc: "Sees their own customers and deals only.",
        permissions: ["Owned records", "Activities", "Tasks"]
      }]
    },
    inventory: {
      appName: "Inventory Tracker",
      summary: "Track items, locations, counts, and movements across your team.",
      tables: [{
        name: "Items",
        desc: "Everything you stock and track",
        fields: ["SKU", "Name", "Category", "Quantity", "Location"]
      }, {
        name: "Locations",
        desc: "Warehouses, vans, sites",
        fields: ["Name", "Type", "Address", "Manager"]
      }, {
        name: "Movements",
        desc: "Check-in / check-out log",
        fields: ["Item", "From", "To", "Date", "User"]
      }, {
        name: "Suppliers",
        desc: "Where stock comes from",
        fields: ["Name", "Contact", "Lead time", "Reliability"]
      }],
      pages: [{
        name: "Dashboard",
        desc: "Low-stock alerts, recent movements."
      }, {
        name: "Items",
        desc: "Search, filter, scan."
      }, {
        name: "Locations",
        desc: "Per-location overview."
      }, {
        name: "Movements",
        desc: "Full audit log."
      }],
      roles: [{
        name: "Admin",
        desc: "All access plus settings.",
        permissions: ["All tables", "Settings", "Users"]
      }, {
        name: "Manager",
        desc: "Adjust stock, approve orders.",
        permissions: ["Edit items", "Approve movements"]
      }, {
        name: "Operator",
        desc: "Check items in/out on mobile.",
        permissions: ["Scan movements", "Read items"]
      }]
    },
    projects: {
      appName: "Project Tracker",
      summary: "Tasks, owners, milestones, and status — visible to everyone who needs it.",
      tables: [{
        name: "Projects",
        desc: "Top-level efforts",
        fields: ["Name", "Owner", "Status", "Due"]
      }, {
        name: "Tasks",
        desc: "Work items inside projects",
        fields: ["Title", "Project", "Owner", "Due", "Status"]
      }, {
        name: "Members",
        desc: "People who do the work",
        fields: ["Name", "Role", "Email", "Capacity"]
      }, {
        name: "Updates",
        desc: "Status notes per project",
        fields: ["Project", "Author", "Body", "Date"]
      }],
      pages: [{
        name: "Dashboard",
        desc: "Cross-project status."
      }, {
        name: "Projects",
        desc: "List + detail per project."
      }, {
        name: "My tasks",
        desc: "Per-user task queue."
      }, {
        name: "Reports",
        desc: "Throughput and lateness."
      }],
      roles: [{
        name: "Admin",
        desc: "All projects, all rules.",
        permissions: ["All projects", "Settings"]
      }, {
        name: "Lead",
        desc: "Owns one or more projects.",
        permissions: ["Edit owned projects", "Assign tasks"]
      }, {
        name: "Member",
        desc: "Sees and updates their own tasks.",
        permissions: ["Own tasks", "Read projects"]
      }]
    }
  };
  return plansByUseCase[usecase] || plansByUseCase.crm;
}
function OnboardingApp() {
  // step ids: 1 signup, 2 personalize, 3 start, 4 plan, 5 building, 6 ready, 7 theme, 8 customize, 9 invite, 10 done
  const [step, setStep] = useState(1);
  const [data, setData_] = useState({
    firstName: "Avery",
    company: "Acme Co.",
    role: "founder",
    size: "11-50",
    usecase: "crm",
    discover: "",
    prompt: "We need a workspace to track customer accounts, deals, and the activities tied to them. Reps should see only their own customers; managers see everything; admins can configure roles.",
    plan: makePlanFromAnswers({
      usecase: "crm"
    }),
    theme: "knack",
    email: "avery@acme.co"
  });
  const setData = patch => setData_(d => ({
    ...d,
    ...patch
  }));

  /* Step 1 → 2 */
  const onSignedUp = () => setStep(2);

  /* Step 2 → 3 */
  const onPersonalized = () => {
    setStep(3);
  };

  /* Step 3 → 4 */
  const onPrompt = prompt => {
    const plan = makePlanFromAnswers({
      ...data,
      prompt
    });
    setData({
      prompt,
      plan
    });
    setStep(4);
  };
  const onTemplate = t => {
    const plan = makePlanFromAnswers({
      ...data,
      usecase: t.id
    });
    setData({
      prompt: `Using ${t.name} template`,
      plan
    });
    setStep(4);
  };

  /* Step 4 → 5 → 6 */
  const onPlanApprove = () => setStep(5);
  const onBuildDone = () => setStep(6);

  /* Step 6 routes to 7, 8, or 9 */
  const goTheme = () => setStep(7);
  const goCustom = () => setStep(8);
  const goInvite = () => setStep(9);

  /* Step 7 → 8 */
  const onThemeDone = () => setStep(8);

  /* Step 8 → 9 */
  const onCustomDone = () => setStep(9);

  /* Step 9 → done */
  const onFinish = () => setStep(10);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StepNavigator, {
    step: step,
    setStep: setStep
  }), step === 1 && /*#__PURE__*/React.createElement(AuthStep, {
    onNext: onSignedUp
  }), step === 2 && /*#__PURE__*/React.createElement(PersonalizationStep, {
    data: data,
    setData: setData,
    onNext: onPersonalized,
    onBack: () => setStep(1)
  }), step === 3 && /*#__PURE__*/React.createElement(StartStep, {
    data: data,
    setData: setData,
    onPrompt: onPrompt,
    onTemplate: onTemplate
  }), step === 4 && /*#__PURE__*/React.createElement(PlanStep, {
    data: data,
    setData: setData,
    onApprove: onPlanApprove,
    onBack: () => setStep(3)
  }), step === 5 && /*#__PURE__*/React.createElement(BuildingStep, {
    data: data,
    onDone: onBuildDone
  }), step === 6 && /*#__PURE__*/React.createElement(ReadyStep, {
    data: data,
    onCustomize: goCustom,
    onTheme: goTheme,
    onInvite: goInvite
  }), step === 7 && /*#__PURE__*/React.createElement(ThemeStep, {
    data: data,
    setData: setData,
    onNext: onThemeDone
  }), step === 8 && /*#__PURE__*/React.createElement(CustomizeStep, {
    data: data,
    onNext: onCustomDone
  }), step === 9 && /*#__PURE__*/React.createElement(InviteStep, {
    data: data,
    onFinish: onFinish,
    onSkip: onFinish
  }), step === 10 && /*#__PURE__*/React.createElement(FinalScreen, {
    data: data
  }));
}
function StepNavigator({
  step,
  setStep
}) {
  const [open, setOpen] = useState(true);
  const steps = [{
    n: 1,
    label: "Sign up"
  }, {
    n: 2,
    label: "Personalize"
  }, {
    n: 3,
    label: "Start"
  }, {
    n: 4,
    label: "AI plan"
  }, {
    n: 5,
    label: "Building"
  }, {
    n: 6,
    label: "Ready"
  }, {
    n: 7,
    label: "Theme"
  }, {
    n: 8,
    label: "Customize"
  }, {
    n: 9,
    label: "Invite"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 18,
      left: 18,
      zIndex: 80,
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(15,11,15,.10)",
      padding: open ? 10 : 8,
      font: "500 12px/1 var(--font-sans)",
      maxWidth: open ? 320 : "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: open ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 5,
      background: "var(--gradient-brand)",
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 10
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-secondary)"
    }
  }, "Prototype navigator"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      marginLeft: "auto",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      color: "var(--content-muted)",
      padding: 2
    }
  }, open ? /*#__PURE__*/React.createElement(IconChevDown, {
    size: 12
  }) : /*#__PURE__*/React.createElement(IconChevRight, {
    size: 12
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 4
    }
  }, steps.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.n,
    onClick: () => setStep(s.n),
    style: {
      height: 24,
      padding: "0 8px",
      borderRadius: 6,
      border: "1px solid var(--border-default)",
      background: step === s.n ? "var(--brand-emphasis)" : "#fff",
      color: step === s.n ? "#fff" : "var(--content-default)",
      font: "500 11px/1 var(--font-sans)",
      cursor: "pointer"
    }
  }, s.n, ". ", s.label))));
}
function FinalScreen({
  data
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "linear-gradient(135deg, var(--brand-50), #fff 70%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      maxWidth: 540
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      width: 64,
      height: 64,
      borderRadius: 18,
      background: "var(--gradient-brand)",
      color: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(OIRocket, {
    size: 28
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "600 32px/1.2 var(--font-subhead)",
      letterSpacing: "-.018em",
      margin: "0 0 10px"
    }
  }, "You're shipped, ", data.firstName || "friend", "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 16px/24px var(--font-sans)",
      color: "var(--content-secondary)",
      margin: "0 0 22px"
    }
  }, data.plan?.appName || "Your app", " is live at ", /*#__PURE__*/React.createElement("strong", null, "acme.knack.app"), ". Your team has been invited. You can keep building from inside the app \u2014 Astra is always one click away."), /*#__PURE__*/React.createElement("button", {
    className: "auth-cta",
    style: {
      height: 48,
      padding: "0 26px"
    },
    onClick: () => location.reload()
  }, "Restart the demo")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(OnboardingApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/main.jsx", error: String((e && e.message) || e) }); }

// app/onboarding-icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* onboarding-icons.jsx — supplementary icons for the onboarding prototype */

const OI = ({
  d,
  size = 18,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: style
}, typeof d === "string" ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : d);

/* Use-case tile icons */
const OIPatient = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0c-4 0-7 2-7 6m7-6c1 0 2 .1 3 .4M19 17v4m-2-2h4"
}));
const OIInspect = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M9 4h7l4 4v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm6 0v4h4M11 13l2 2 4-4"
}));
const OIProject = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M3 6h7a2 2 0 0 1 2 2v12H5a2 2 0 0 1-2-2V6Zm9 2a2 2 0 0 1 2-2h7v12a2 2 0 0 1-2 2h-7V8Z"
}));
const OIVolunteer = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 8a5 5 0 0 1 10 0M8 4l4-2 4 2M19 14l3 1-1 3-3-1"
}));
const OIInventory = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M3 7h18v4H3zm2 4v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9M9 14h6"
}));
const OICRM = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M3 5h18v3H3zm0 6h11v3H3zm0 6h7v3H3zm14-3h2v6h-2zm-3-2h2v8h-2z"
}));
const OIPortal = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M4 4h16v6H4zm0 10h7v6H4zm10 0h6v6h-6zM8 7h.01"
}));
const OIOther = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M5 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM6 16h12"
}));

/* Roles */
const OIBuilder = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M14 3 4 13l3 3 10-10-3-3ZM3 21l4-1-3-3-1 4Zm12-12 6 6"
}));
const OIOps = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0-4v2m0 12v2M4 12h2m12 0h2M6 6l1.5 1.5M16.5 16.5 18 18M6 18l1.5-1.5M16.5 7.5 18 6"
}));
const OIPM = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M4 6h16M4 12h10M4 18h7m6-2 3 3-3 3m3-3h-6"
}));
const OIFounder = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M4 21h16M5 21V10l7-5 7 5v11M9 12h2v9H9zm4 0h2v9h-2z"
}));
const OIEng = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16"
}));

/* Org size */
const OIPerson = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm4 14a8 8 0 0 0-16 0"
}));

/* Generic UI */
const OISend = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7Z"
}));
const OISparkles = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Zm7 9 .8 2.2 2.2.8-2.2.8L19 18l-.8-2.2L16 15l2.2-.8L19 12Z"
}));
const OILightning = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M13 3 4 14h6l-1 7 9-11h-6l1-7Z"
}));
const OICheckCircle = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M22 11.5V12a10 10 0 1 1-5.93-9.14M22 4 12 14.01l-3-3"
}));
const OIRocket = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M5 19c-1 0-2 1-2 3 2 0 3-1 3-2m6-13c4-4 8-4 8-4s0 4-4 8c-2 2-7 5-7 5l-3-3s3-5 6-6Zm-5 9 3 3M14 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
}));
const OIArrowRight = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M5 12h14m0 0-6-6m6 6-6 6"
}));
const OIArrowLeft = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M19 12H5m0 0 6 6m-6-6 6-6"
}));
const OIWrench = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "m14.7 6.3 3 3-9 9-3-3 9-9ZM12 4a4 4 0 0 1 5 5l3 3-2 2-3-3a4 4 0 0 1-5-5l2-2Z"
}));
const OIPalette = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M12 3a9 9 0 1 0 0 18c1 0 2-1 2-2 0-2-2-2-2-4 0-1 1-2 2-2h3a4 4 0 0 0 4-4 9 9 0 0 0-9-6Zm-4 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
}));
const OIMail = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M3 6h18v12H3zm0 0 9 7 9-7"
}));
const OIDb = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
}));
const OIWorkflow = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M3 6h6v6H3zm12 6h6v6h-6zM9 9h6v6H9z"
}));
const OIShield = p => /*#__PURE__*/React.createElement(OI, _extends({}, p, {
  d: "M12 3 4 6v6c0 5 4 8 8 9 4-1 8-4 8-9V6l-8-3Zm-3 9 2 2 4-4"
}));

/* Knack brand mark — inline so it always renders regardless of server MIME. */
const KnackBrand = ({
  height = 22
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    color: "var(--content-default)"
  }
}, /*#__PURE__*/React.createElement("svg", {
  width: height,
  height: height,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "kb-g",
  x1: "0",
  y1: "0",
  x2: "1",
  y2: "1"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#86307B"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#E61875"
}))), /*#__PURE__*/React.createElement("g", {
  stroke: "url(#kb-g)",
  strokeWidth: "2.6",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4v16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7l14 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 17 19 7"
}))), /*#__PURE__*/React.createElement("span", {
  style: {
    font: `700 ${Math.round(height * 0.82)}px/1 var(--font-subhead)`,
    letterSpacing: "-0.025em",
    color: "var(--content-default)"
  }
}, "knack"));
Object.assign(window, {
  OI,
  OIPatient,
  OIInspect,
  OIProject,
  OIVolunteer,
  OIInventory,
  OICRM,
  OIPortal,
  OIOther,
  OIBuilder,
  OIOps,
  OIPM,
  OIFounder,
  OIEng,
  OIPerson,
  OISend,
  OISparkles,
  OILightning,
  OICheckCircle,
  OIRocket,
  OIArrowRight,
  OIArrowLeft,
  OIWrench,
  OIPalette,
  OIMail,
  OIDb,
  OIWorkflow,
  OIShield,
  KnackBrand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/onboarding-icons.jsx", error: String((e && e.message) || e) }); }

// app/personalization-step.jsx
try { (() => {
/* Step 2 — Personalization (Typeform-style, multi-question) */

const PZ_QUESTIONS = [{
  id: "name",
  title: "What should we call you?",
  sub: "We'll use this to personalize your workspace.",
  kind: "text-row",
  fields: [{
    key: "firstName",
    placeholder: "First name",
    autoFocus: true
  }, {
    key: "company",
    placeholder: "Company or team (optional)"
  }]
}, {
  id: "role",
  title: "What best describes your role?",
  sub: "We tailor the builder to the way you work.",
  kind: "tiles",
  options: [{
    v: "founder",
    t: "Founder or owner",
    d: "You're shipping software for your business.",
    icon: OIFounder
  }, {
    v: "ops",
    t: "Operations",
    d: "You run programs and need the data behind them.",
    icon: OIOps
  }, {
    v: "pm",
    t: "Project / program manager",
    d: "You coordinate work across teams.",
    icon: OIPM
  }, {
    v: "builder",
    t: "Internal tool builder",
    d: "You build tools for colleagues.",
    icon: OIBuilder
  }, {
    v: "eng",
    t: "Developer or technical",
    d: "You write code but want to ship faster.",
    icon: OIEng
  }, {
    v: "other",
    t: "Something else",
    d: "Tell us a bit more on the next screen.",
    icon: OIOther
  }]
}, {
  id: "size",
  title: "How many people will use this app?",
  sub: "It helps us recommend the right plan and roles.",
  kind: "tiles-3col",
  options: [{
    v: "1",
    t: "Just me",
    d: "Solo project"
  }, {
    v: "2-10",
    t: "2 – 10",
    d: "Small team"
  }, {
    v: "11-50",
    t: "11 – 50",
    d: "Growing team"
  }, {
    v: "51-200",
    t: "51 – 200",
    d: "Department"
  }, {
    v: "201+",
    t: "200+",
    d: "Company-wide"
  }, {
    v: "ext",
    t: "External users",
    d: "Customers or partners outside my team"
  }]
}, {
  id: "usecase",
  title: "What are you building?",
  sub: "Pick the closest fit — you'll be able to adjust everything later.",
  kind: "tiles",
  options: [{
    v: "crm",
    t: "Customer / CRM",
    d: "Track customers, deals, communications.",
    icon: OICRM
  }, {
    v: "inventory",
    t: "Inventory & assets",
    d: "Manage stock, equipment, or check-outs.",
    icon: OIInventory
  }, {
    v: "projects",
    t: "Project tracker",
    d: "Tasks, milestones, status across teams.",
    icon: OIProject
  }, {
    v: "patient",
    t: "Patient / member",
    d: "Healthcare, clinics, member directories.",
    icon: OIPatient
  }, {
    v: "inspect",
    t: "Inspections & forms",
    d: "Field forms, audits, compliance.",
    icon: OIInspect
  }, {
    v: "volunteer",
    t: "Volunteers & events",
    d: "Sign-ups, scheduling, attendance.",
    icon: OIVolunteer
  }, {
    v: "portal",
    t: "Customer portal",
    d: "Branded login for your customers.",
    icon: OIPortal
  }, {
    v: "other",
    t: "Something else",
    d: "Describe it and we'll figure it out.",
    icon: OIOther
  }]
}, {
  id: "discover",
  title: "How did you hear about Knack?",
  sub: "(Optional. It helps us know where to invest.)",
  kind: "tiles-3col",
  options: [{
    v: "search",
    t: "Search engine",
    d: "Google, Bing, etc."
  }, {
    v: "social",
    t: "Social media",
    d: "LinkedIn, X, YouTube"
  }, {
    v: "friend",
    t: "Word of mouth",
    d: "A colleague or friend"
  }, {
    v: "review",
    t: "Review site",
    d: "G2, Capterra, Reddit"
  }, {
    v: "podcast",
    t: "Podcast or blog",
    d: "Something we wrote / sponsored"
  }, {
    v: "other",
    t: "Other",
    d: "Tell us later"
  }]
}];
function PersonalizationStep({
  data,
  setData,
  onNext,
  onBack
}) {
  const [idx, setIdx] = React.useState(0);
  const q = PZ_QUESTIONS[idx];
  const canAdvance = () => {
    if (q.kind === "text-row") return !!(data[q.fields[0].key] || "").trim();
    return !!data[q.id];
  };
  const next = () => {
    if (idx < PZ_QUESTIONS.length - 1) setIdx(idx + 1);else onNext();
  };
  const back = () => {
    if (idx > 0) setIdx(idx - 1);else onBack();
  };
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Enter" && canAdvance()) next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "pz-shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "pz-head"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand"
  }, /*#__PURE__*/React.createElement(KnackBrand, {
    height: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "pz-progress"
  }, PZ_QUESTIONS.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "dot " + (i < idx ? "done" : i === idx ? "current" : "")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 13px/1 var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, idx + 1, " of ", PZ_QUESTIONS.length)), /*#__PURE__*/React.createElement("main", {
    className: "pz-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pz-q",
    key: q.id
  }, /*#__PURE__*/React.createElement("span", {
    className: "step-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "num"
  }, idx + 1), " A few quick questions"), /*#__PURE__*/React.createElement("h2", null, q.title), q.sub && /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, q.sub), q.kind === "text-row" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, q.fields.map((f, fi) => /*#__PURE__*/React.createElement("input", {
    key: f.key,
    className: "pz-input",
    placeholder: f.placeholder,
    autoFocus: f.autoFocus,
    value: data[f.key] || "",
    onChange: e => setData({
      [f.key]: e.target.value
    })
  }))), (q.kind === "tiles" || q.kind === "tiles-3col") && /*#__PURE__*/React.createElement("div", {
    className: "pz-tiles",
    style: q.kind === "tiles-3col" ? {
      gridTemplateColumns: "repeat(3, 1fr)"
    } : null
  }, q.options.map(opt => {
    const Icon = opt.icon;
    const on = data[q.id] === opt.v;
    return /*#__PURE__*/React.createElement("button", {
      key: opt.v,
      className: "pz-tile" + (on ? " on" : ""),
      onClick: () => {
        setData({
          [q.id]: opt.v
        });
        setTimeout(next, 220);
      }
    }, Icon && /*#__PURE__*/React.createElement("span", {
      className: "ico"
    }, /*#__PURE__*/React.createElement(Icon, {
      size: 18
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, opt.t), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, opt.d)), /*#__PURE__*/React.createElement("span", {
      className: "check"
    }, /*#__PURE__*/React.createElement(OICheckCircle, {
      size: 11
    })));
  })))), /*#__PURE__*/React.createElement("footer", {
    className: "pz-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: back
  }, /*#__PURE__*/React.createElement(OIArrowLeft, {
    size: 14
  }), " Back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hint"
  }, "Press ", /*#__PURE__*/React.createElement("span", {
    className: "kbd"
  }, "Enter"), " to continue"), /*#__PURE__*/React.createElement("button", {
    className: "next",
    disabled: !canAdvance(),
    onClick: next
  }, idx === PZ_QUESTIONS.length - 1 ? "Continue" : "Next", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 14
  })))));
}
window.PersonalizationStep = PersonalizationStep;
window.PZ_QUESTIONS = PZ_QUESTIONS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/personalization-step.jsx", error: String((e && e.message) || e) }); }

// app/plan-step.jsx
try { (() => {
/* Step 4 — AI plan review.
   Astra reads the prompt and proposes a plan as an interactive card:
   expandable sections for Tables, Pages, Roles, with the canvas
   showing a wireframe sketch that mirrors the plan. */

function PlanStep({
  data,
  setData,
  onApprove,
  onBack
}) {
  const [openSection, setOpenSection] = React.useState("tables");
  const [highlight, setHighlight] = React.useState(null);
  const plan = data.plan;
  const sections = [{
    key: "tables",
    title: `Tables (${plan.tables.length})`,
    icon: /*#__PURE__*/React.createElement(IconTable, {
      size: 14
    }),
    items: plan.tables.map(t => ({
      ic: /*#__PURE__*/React.createElement(IconTable, {
        size: 14
      }),
      name: t.name,
      blurb: t.desc,
      meta: `${t.fields.length} fields`
    }))
  }, {
    key: "pages",
    title: `Pages (${plan.pages.length})`,
    icon: /*#__PURE__*/React.createElement(IconPages, {
      size: 14
    }),
    items: plan.pages.map(p => ({
      ic: /*#__PURE__*/React.createElement(IconPages, {
        size: 14
      }),
      name: p.name,
      blurb: p.desc
    }))
  }, {
    key: "roles",
    title: `User roles (${plan.roles.length})`,
    icon: /*#__PURE__*/React.createElement(IconUsers, {
      size: 14
    }),
    items: plan.roles.map(r => ({
      ic: /*#__PURE__*/React.createElement(IconUsers, {
        size: 14
      }),
      name: r.name,
      blurb: r.desc
    }))
  }];
  const messages = [{
    kind: "user",
    body: `"${(data.prompt || "").slice(0, 200) || "I want to build a customer CRM."}"${(data.prompt || "").length > 200 ? "…" : ""}`
  }, {
    kind: "ai",
    body: `Got it. Here's the first draft I'd like to scaffold for <strong>${data.company || "your workspace"}</strong>. Click anything to expand. Edit the plan in chat, or hit <strong>Build it</strong> when it looks right.`,
    children: /*#__PURE__*/React.createElement("div", {
      className: "bubble-card",
      style: {
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bc-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bc-icn"
    }, /*#__PURE__*/React.createElement(OIWrench, {
      size: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bc-t"
    }, "Proposed app structure"), /*#__PURE__*/React.createElement("div", {
      className: "bc-d"
    }, plan.summary))), /*#__PURE__*/React.createElement("div", {
      className: "bc-body"
    }, sections.map(s => /*#__PURE__*/React.createElement("div", {
      key: s.key,
      className: "bc-section" + (openSection === s.key ? " open" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "bc-section-head",
      onClick: () => setOpenSection(openSection === s.key ? null : s.key)
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brand-emphasis)"
      }
    }, s.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, s.title), /*#__PURE__*/React.createElement("span", {
      className: "chev"
    }, /*#__PURE__*/React.createElement(IconChevRight, {
      size: 12
    }))), openSection === s.key && /*#__PURE__*/React.createElement("div", {
      className: "bc-section-body"
    }, s.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "row",
      onMouseEnter: () => setHighlight(`${s.key}:${i}`),
      onMouseLeave: () => setHighlight(null)
    }, /*#__PURE__*/React.createElement("span", {
      className: "ic"
    }, it.ic), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, it.name), /*#__PURE__*/React.createElement("div", {
      className: "blurb"
    }, it.blurb)), it.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 11px/1 var(--font-sans)",
        color: "var(--content-muted)"
      }
    }, it.meta))))))), /*#__PURE__*/React.createElement("div", {
      className: "bc-foot"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 12px/1 var(--font-sans)",
        color: "var(--content-muted)"
      }
    }, /*#__PURE__*/React.createElement(OILightning, {
      size: 11,
      style: {
        verticalAlign: "-1px",
        marginRight: 3
      }
    }), "Plan generated in 4.2s"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "cta-secondary"
    }, /*#__PURE__*/React.createElement(OIWrench, {
      size: 12
    }), "Edit plan"), /*#__PURE__*/React.createElement("button", {
      className: "cta-gradient",
      onClick: onApprove
    }, "Build it ", /*#__PURE__*/React.createElement(OIArrowRight, {
      size: 13
    })))))
  }, {
    kind: "ai",
    body: `<strong>You can change anything later.</strong> Add a table, remove pages, tweak roles. Right now I just want a directional yes — does this match what you're trying to do?`
  }];
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Reviewing AI plan",
    stepNumber: 4,
    totalSteps: 9,
    activeRailKey: "ai"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    placeholder: "Refine the plan \u2014 e.g. add a 'Photos' table\u2026",
    onSend: () => {}
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "App preview"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, "Wireframe sketch")), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary"
  }, /*#__PURE__*/React.createElement(IconEye, {
    size: 14
  }), "Preview"), /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary"
  }, /*#__PURE__*/React.createElement(IconUndo, {
    size: 13
  }), "Refine"))), /*#__PURE__*/React.createElement("div", {
    className: "skel-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 900,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "skel-board"
  }, /*#__PURE__*/React.createElement("div", {
    className: "skel-head",
    style: {
      padding: "14px 18px",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  }, plan.appName), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      width: 80
    }
  }), plan.pages.slice(0, 4).map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: `500 12px/1 var(--font-sans)`,
      color: highlight === `pages:${i}` ? "var(--brand-emphasis)" : "var(--content-muted)",
      padding: "4px 10px",
      borderRadius: 9999,
      background: highlight === `pages:${i}` ? "var(--brand-50)" : "transparent",
      transition: "all .2s"
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      width: 90,
      height: 24,
      borderRadius: 9999,
      background: "var(--brand-emphasis)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "skel-board"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 18px 0",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 18px/1.2 var(--font-subhead)",
      letterSpacing: "-.005em"
    }
  }, plan.tables[0]?.name || "Records"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      width: 70,
      height: 28,
      borderRadius: 8
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "pill",
    style: {
      width: 120,
      height: 28,
      borderRadius: 8,
      background: "var(--brand-emphasis)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "skel-body"
  }, plan.tables.slice(0, 1).map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(t.fields.length, 5)}, 1fr)`,
      gap: 12,
      marginBottom: 10
    }
  }, t.fields.slice(0, 5).map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      font: "500 11px/1 var(--font-sans)",
      color: highlight === `tables:0` ? "var(--brand-emphasis)" : "var(--content-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      transition: "color .2s"
    }
  }, f))), [0, 1, 2, 3].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${Math.min(t.fields.length, 5)}, 1fr)`,
      gap: 12,
      padding: "10px 0",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, t.fields.slice(0, 5).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "pill",
    style: {
      width: 60 + (i * 7 + r * 11) % 60,
      height: 12
    }
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "skel-grid"
  }, plan.roles.slice(0, 3).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "skel-board",
    style: {
      padding: "16px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 8,
      color: highlight === `roles:${i}` ? "var(--brand-emphasis)" : "var(--content-default)",
      transition: "color .2s"
    }
  }, /*#__PURE__*/React.createElement(IconUsers, {
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 13px/1 var(--font-sans)"
    }
  }, r.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, r.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, r.permissions.slice(0, 3).map((p, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      font: "500 11px/1 var(--font-sans)",
      color: "var(--content-secondary)",
      background: "var(--gray-100)",
      padding: "4px 7px",
      borderRadius: 9999
    }
  }, p))))))))));
}
window.PlanStep = PlanStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/plan-step.jsx", error: String((e && e.message) || e) }); }

// app/ready-step.jsx
try { (() => {
/* Step 6 — App ready! Shows the Live App preview using Live App UI Kit.
   Confetti + "what to do next" prompts in the chat panel. */

function ReadyStep({
  data,
  onCustomize,
  onTheme,
  onInvite
}) {
  const plan = data.plan;

  /* Generate sample rows from the plan's first table */
  const firstTable = plan.tables[0];
  const rows = [{
    name: "Acme Logistics",
    owner: "Avery Singh",
    status: "Active",
    created: "Aug 12, 2026"
  }, {
    name: "Harbor Freight Co",
    owner: "Maya Lopez",
    status: "Pending",
    created: "Aug 14, 2026"
  }, {
    name: "Northwind Group",
    owner: "Daniel Park",
    status: "Active",
    created: "Sep 02, 2026"
  }, {
    name: "Oakridge Studios",
    owner: "Avery Singh",
    status: "Active",
    created: "Sep 12, 2026"
  }, {
    name: "Cascade Software",
    owner: "Maya Lopez",
    status: "Inactive",
    created: "Sep 22, 2026"
  }, {
    name: "Meridian Partners",
    owner: "Daniel Park",
    status: "Active",
    created: "Oct 05, 2026"
  }];
  const statusTone = {
    Active: "success",
    Pending: "warning",
    Inactive: "neutral"
  };

  /* Confetti dots */
  const confettiSpots = React.useMemo(() => {
    const pal = ["#E61875", "#86307B", "#FF5DAE", "#FA816E", "#D9A63B"];
    return Array.from({
      length: 22
    }).map((_, i) => ({
      x: 8 + Math.random() * 84,
      y: 10 + Math.random() * 70,
      dx: (Math.random() - 0.5) * 220 + "px",
      dy: 50 + Math.random() * 220 + "px",
      color: pal[i % pal.length],
      delay: Math.random() * 600
    }));
  }, []);
  const messages = [{
    kind: "ai",
    body: `🎉 <strong>Your app is live.</strong> It already has working tables, pages for every role, and login pages for your team. Take a look — it's a real, functional app.`
  }, {
    kind: "ai",
    body: `<strong>Three good next steps:</strong>`,
    children: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      style: {
        justifyContent: "flex-start",
        width: "100%",
        height: "auto",
        padding: "10px 12px"
      },
      onClick: onTheme
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 7,
        background: "var(--brand-50)",
        color: "var(--brand-emphasis)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(OIPalette, {
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "left",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 13px/1.3 var(--font-sans)"
      }
    }, "Pick a theme"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 11px/15px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2
      }
    }, "Match your brand colors and typography.")), /*#__PURE__*/React.createElement(OIArrowRight, {
      size: 13
    })), /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      style: {
        justifyContent: "flex-start",
        width: "100%",
        height: "auto",
        padding: "10px 12px"
      },
      onClick: onCustomize
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 7,
        background: "var(--brand-50)",
        color: "var(--brand-emphasis)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(OIWrench, {
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "left",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 13px/1.3 var(--font-sans)"
      }
    }, "Customize a screen"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 11px/15px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2
      }
    }, "Add fields, change layouts, write rules.")), /*#__PURE__*/React.createElement(OIArrowRight, {
      size: 13
    })), /*#__PURE__*/React.createElement("button", {
      className: "chip-action",
      style: {
        justifyContent: "flex-start",
        width: "100%",
        height: "auto",
        padding: "10px 12px"
      },
      onClick: onInvite
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 7,
        background: "var(--brand-50)",
        color: "var(--brand-emphasis)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(OIMail, {
      size: 13
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "left",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 13px/1.3 var(--font-sans)"
      }
    }, "Invite your team"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 11px/15px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2
      }
    }, "Roles already set. Add real people now or later.")), /*#__PURE__*/React.createElement(OIArrowRight, {
      size: 13
    })))
  }, {
    kind: "ai",
    body: `Or just type below — "<em>add a 'priority' field to ${firstTable.name}</em>", "<em>send an email when status changes</em>". I'll do it.`
  }];
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Your app is ready",
    stepNumber: 6,
    totalSteps: 9,
    activeRailKey: "ai"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    placeholder: "Tell Astra what to change\u2026"
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "App preview"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, plan.appName), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    size: "sm"
  }, "Live"))), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary"
  }, /*#__PURE__*/React.createElement(IconExternal, {
    size: 13
  }), "Open in new tab"), /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary"
  }, /*#__PURE__*/React.createElement(IconShare, {
    size: 13
  }), "Share preview"))), /*#__PURE__*/React.createElement("div", {
    className: "confetti"
  }, confettiSpots.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      left: s.x + "%",
      top: s.y + "%",
      background: s.color,
      "--dx": s.dx,
      "--dy": s.dy,
      animationDelay: s.delay + "ms"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lapp-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lapp-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "url"
  }, "acme.knack.app/", plan.appName.toLowerCase().replace(/\s+/g, "-")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-surface": "live-app",
    style: {
      background: "var(--bg-default)"
    }
  }, /*#__PURE__*/React.createElement(LANav, {
    appName: plan.appName,
    user: (data.firstName || "Avery") + " " + (data.firstName ? "" : "Singh"),
    tabs: plan.pages.slice(0, 4).map(p => p.name),
    activeTab: plan.pages[0]?.name || "",
    onTab: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(LAChart, {
    label: firstTable.name + " total",
    value: "184",
    delta: 12,
    kind: "bar",
    data: [8, 12, 11, 15, 17, 16, 21, 24, 22, 28, 30, 34]
  }), /*#__PURE__*/React.createElement(LAChart, {
    label: "New this month",
    value: "38",
    delta: 6.4,
    kind: "line",
    data: [3, 4, 5, 4, 7, 6, 8, 7, 9, 11, 12, 14]
  }), /*#__PURE__*/React.createElement(LAChart, {
    label: "Pending review",
    value: "6",
    delta: -3,
    kind: "line",
    data: [12, 11, 10, 11, 9, 8, 9, 7, 8, 6, 7, 6]
  })), /*#__PURE__*/React.createElement(LATable, {
    bare: false,
    columns: [{
      key: "name",
      label: firstTable.fields[1] || "Name",
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(LAAvatar, {
        name: r.name,
        size: 28
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 13px/18px var(--font-sans)"
        }
      }, r.name), /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px/16px var(--font-sans)",
          color: "var(--content-muted)"
        }
      }, r.name.toLowerCase().replace(/\s+/g, "-"), ".com")))
    }, {
      key: "owner",
      label: firstTable.fields[2] || "Owner",
      width: 160,
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(LAAvatar, {
        name: r.owner,
        size: 22
      }), " ", r.owner)
    }, {
      key: "status",
      label: "Status",
      width: 130,
      render: r => /*#__PURE__*/React.createElement(LATag, {
        tone: statusTone[r.status]
      }, r.status)
    }, {
      key: "created",
      label: firstTable.fields[firstTable.fields.length - 1] || "Created",
      width: 140
    }],
    rows: rows
  }))))));
}
window.ReadyStep = ReadyStep;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/ready-step.jsx", error: String((e && e.message) || e) }); }

// app/start-step.jsx
try { (() => {
/* Step 3 — Starting point: describe OR pick template */

const TEMPLATES = [{
  id: "crm",
  name: "Customer CRM",
  desc: "Companies, contacts, deals, activity",
  hueA: "var(--brand-100)",
  hueB: "var(--brand-50)"
}, {
  id: "inventory",
  name: "Inventory tracker",
  desc: "Items, locations, counts, alerts",
  hueA: "var(--illustration-blue-50)",
  hueB: "#C8DCF7"
}, {
  id: "projects",
  name: "Project tracker",
  desc: "Tasks, owners, milestones, status",
  hueA: "var(--illustration-green-50)",
  hueB: "#B6E9C8"
}, {
  id: "portal",
  name: "Customer portal",
  desc: "Branded login + records for end-users",
  hueA: "var(--illustration-yellow-50)",
  hueB: "#FDE6AA"
}, {
  id: "volunteer",
  name: "Volunteer manager",
  desc: "Signups, shifts, attendance",
  hueA: "var(--illustration-pink-50)",
  hueB: "#F8C0CF"
}];
function StartStep({
  data,
  setData,
  onPrompt,
  onTemplate
}) {
  const [prompt, setPrompt] = React.useState(data.prompt || "");
  const suggestions = ["Track inspections at our 14 retail stores with photos and pass/fail items", "Manage members and renewals for a regional non-profit", "Help our service team triage support tickets from email"];
  return /*#__PURE__*/React.createElement("div", {
    className: "sp-shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "auth-head"
  }, /*#__PURE__*/React.createElement("a", {
    className: "brand"
  }, /*#__PURE__*/React.createElement(KnackBrand, {
    height: 24
  })), /*#__PURE__*/React.createElement("div", {
    className: "small",
    style: {
      color: "var(--content-muted)"
    }
  }, "Workspace ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-default)"
    }
  }, data.company || "Personal"))), /*#__PURE__*/React.createElement("main", {
    className: "sp-main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-greet"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 12
  }), " Step 3 of 9 \xB7 Build your first app"), /*#__PURE__*/React.createElement("h1", null, "Hi ", data.firstName || "there", " \u2014 what are we building today?"), /*#__PURE__*/React.createElement("p", {
    className: "sub"
  }, "Describe what you need in your own words, and our AI will scaffold the tables, pages, and permissions for you. Or start from a template if you'd rather get there faster.")), /*#__PURE__*/React.createElement("div", {
    className: "sp-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-card ai"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "icn"
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, "AI App Builder \xB7 recommended"), /*#__PURE__*/React.createElement(Badge, {
    variant: "gradient",
    size: "sm"
  }, "Faster")), /*#__PURE__*/React.createElement("h2", null, "Describe what you want to build"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Tell us what your team needs \u2014 the people, the records, and what they should be able to do. Be as specific as you can. The more you say, the better the first draft."), /*#__PURE__*/React.createElement("div", {
    className: "sp-prompt"
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "promptbox",
    placeholder: "e.g. \"We're a fleet maintenance company. I need to track our trucks, their service history, and assign repairs to mechanics. Mechanics should see only their assigned jobs; managers see everything.\"",
    value: prompt,
    onChange: e => setPrompt(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "chip-action",
    onClick: () => setPrompt(s)
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 11
  }), " Try this"))), /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, /*#__PURE__*/React.createElement(OILightning, {
    size: 12
  }), " Knack scaffolds tables, pages, roles, and basic logic. Nothing is final \u2014 every detail can be tweaked.")), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    disabled: prompt.trim().length < 20,
    onClick: () => {
      setData({
        prompt
      });
      onPrompt(prompt);
    }
  }, /*#__PURE__*/React.createElement(OISparkles, {
    size: 16
  }), " Generate my app")), /*#__PURE__*/React.createElement("div", {
    className: "sp-or"
  }, "OR"), /*#__PURE__*/React.createElement("div", {
    className: "sp-card tmpl"
  }, /*#__PURE__*/React.createElement("div", {
    className: "badge-row",
    style: {
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "icn",
    style: {
      background: "var(--gray-100)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(OIDb, {
    size: 18
  })), /*#__PURE__*/React.createElement("span", null, "Start from a template")), /*#__PURE__*/React.createElement("h2", null, "Pick a pre-built starting point"), /*#__PURE__*/React.createElement("p", {
    className: "lede"
  }, "Templates are full apps you can customize. They come pre-loaded with sample data so you can see how things connect."), /*#__PURE__*/React.createElement("div", {
    className: "sp-tmpl-list"
  }, TEMPLATES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: "sp-tmpl",
    onClick: () => onTemplate(t)
  }, /*#__PURE__*/React.createElement("span", {
    className: "preview",
    style: {
      background: `linear-gradient(135deg, ${t.hueA}, ${t.hueB})`
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 56 56"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "10",
    width: "40",
    height: "6",
    rx: "2",
    fill: "rgba(255,255,255,.7)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "20",
    width: "28",
    height: "4",
    rx: "2",
    fill: "rgba(255,255,255,.55)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "28",
    width: "40",
    height: "3",
    rx: "1.5",
    fill: "rgba(255,255,255,.5)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "34",
    width: "36",
    height: "3",
    rx: "1.5",
    fill: "rgba(255,255,255,.45)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "40",
    width: "40",
    height: "3",
    rx: "1.5",
    fill: "rgba(255,255,255,.4)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tx"
  }, /*#__PURE__*/React.createElement("div", {
    className: "name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, t.desc)), /*#__PURE__*/React.createElement("span", {
    className: "go"
  }, /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 14
  }))))), /*#__PURE__*/React.createElement("button", {
    className: "cta",
    onClick: () => onTemplate(TEMPLATES[0])
  }, "Browse all templates"))))));
}
window.StartStep = StartStep;
window.TEMPLATES = TEMPLATES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/start-step.jsx", error: String((e && e.message) || e) }); }

// app/theme-step.jsx
try { (() => {
/* Step 7 — Choose a theme. Live preview updates as user picks. */

const THEMES = [{
  id: "knack",
  name: "Knack default",
  primary: "#982a86",
  accent: "#E61875",
  surface: "#FAFAFA",
  text: "#1B181B"
}, {
  id: "blue",
  name: "Tailwind Blue",
  primary: "#2563EB",
  accent: "#1D4ED8",
  surface: "#F8FAFC",
  text: "#0F172A"
}, {
  id: "emerald",
  name: "Emerald",
  primary: "#059669",
  accent: "#047857",
  surface: "#F0FDF4",
  text: "#064E3B"
}, {
  id: "graphite",
  name: "Graphite",
  primary: "#0F172A",
  accent: "#334155",
  surface: "#F1F5F9",
  text: "#0F172A"
}, {
  id: "sunset",
  name: "Sunset",
  primary: "#C2410C",
  accent: "#EA580C",
  surface: "#FFF7ED",
  text: "#431407"
}, {
  id: "violet",
  name: "Violet",
  primary: "#7C3AED",
  accent: "#5B21B6",
  surface: "#FAF5FF",
  text: "#2E1065"
}];
function ThemeStep({
  data,
  setData,
  onNext
}) {
  const [picked, setPicked] = React.useState(data.theme || "knack");
  const [logo, setLogo] = React.useState(data.company || "Acme Co.");
  const theme = THEMES.find(t => t.id === picked) || THEMES[0];
  const plan = data.plan;
  const messages = [{
    kind: "ai",
    body: `Let's make it feel like <strong>${data.company || "your"}</strong>. Pick a theme — your whole app re-themes instantly. You can always change it later, or upload your real brand kit when you're ready.`
  }, {
    kind: "ai",
    body: "I matched the live preview so you can see your records inside each option.",
    children: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: 10,
        marginTop: 10
      }
    }, THEMES.map(t => /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => setPicked(t.id),
      className: "pz-tile" + (picked === t.id ? " on" : ""),
      style: {
        padding: 14,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "swatches",
      style: {
        display: "flex",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 36,
        borderRadius: 6,
        background: t.primary
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 36,
        borderRadius: 6,
        background: t.accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 36,
        borderRadius: 6,
        background: t.surface,
        border: "1px solid var(--border-default)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t"
    }, t.name), /*#__PURE__*/React.createElement("div", {
      className: "d"
    }, t.id === "knack" ? "Bold magenta — our default" : t.id === "blue" ? "Trustworthy, dense, calm" : t.id === "emerald" ? "Fresh, money-adjacent" : t.id === "graphite" ? "Black & white, no-fuss" : t.id === "sunset" ? "Warm, energetic" : "Premium, distinctive")), /*#__PURE__*/React.createElement("span", {
      className: "check"
    }, /*#__PURE__*/React.createElement(OICheckCircle, {
      size: 11
    })))))
  }, {
    kind: "ai",
    body: "Want to upload a logo? You can drop a file or paste a brand URL and I'll extract the palette."
  }];
  return /*#__PURE__*/React.createElement(BuilderShell, {
    stepName: "Choose your theme",
    stepNumber: 7,
    totalSteps: 9,
    activeRailKey: "design"
  }, /*#__PURE__*/React.createElement(ChatPanel, {
    messages: messages,
    placeholder: "Paste a brand URL \u2014 e.g. acme.com"
  }), /*#__PURE__*/React.createElement("main", {
    className: "canvas-pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "canvas-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crumb"
  }, /*#__PURE__*/React.createElement("span", null, "App preview"), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("b", null, theme.name)), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "cta-secondary",
    onClick: () => setData({
      theme: picked
    })
  }, "Save theme"), /*#__PURE__*/React.createElement("button", {
    className: "cta-gradient",
    onClick: () => {
      setData({
        theme: picked
      });
      onNext();
    }
  }, "Continue ", /*#__PURE__*/React.createElement(OIArrowRight, {
    size: 13
  })))), /*#__PURE__*/React.createElement("div", {
    className: "lapp-frame"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lapp-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dot"
  })), /*#__PURE__*/React.createElement("span", {
    className: "url"
  }, "acme.knack.app/", plan.appName.toLowerCase().replace(/\s+/g, "-")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-surface": "live-app",
    style: {
      background: theme.surface,
      "--tw-blue-600": theme.primary,
      "--tw-blue-700": theme.accent,
      "--tw-blue-100": theme.surface,
      "--tw-blue-50": "#fff",
      "--bg-brand-accent": theme.primary,
      "--border-brand-default": theme.primary,
      "--content-brand": theme.primary,
      "--brand-emphasis": theme.primary,
      "--content-default": theme.text
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "16px 22px",
      background: "#fff",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
      borderRadius: 8,
      background: theme.primary,
      color: "#fff",
      font: "700 13px/1 var(--font-sans)"
    }
  }, (logo[0] || "A").toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 16px/1 var(--font-sans)",
      color: theme.text
    }
  }, plan.appName), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), plan.pages.slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: "500 13px/1 var(--font-sans)",
      color: i === 0 ? theme.primary : "var(--content-muted)",
      padding: "6px 10px",
      borderRadius: 8,
      background: i === 0 ? `${theme.primary}15` : "transparent"
    }
  }, p.name)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 9999,
      background: `${theme.primary}22`,
      color: theme.primary,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 12px/1 var(--font-sans)"
    }
  }, (data.firstName || "AC").slice(0, 2).toUpperCase()))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 22px/1.2 var(--font-subhead)",
      letterSpacing: "-.005em",
      color: theme.text
    }
  }, "Welcome back, ", data.firstName || "Avery"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/20px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Here's what's happening across your ", plan.tables[0]?.name.toLowerCase() || "records", " today.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 12
    }
  }, ["Active", "Pending", "This week"].map((lbl, i) => /*#__PURE__*/React.createElement("div", {
    key: lbl,
    style: {
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/1 var(--font-sans)",
      color: "var(--content-muted)",
      marginBottom: 6
    }
  }, lbl), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 28px/1 var(--font-subhead)",
      letterSpacing: "-.01em",
      color: theme.text
    }
  }, [184, 12, 38][i]), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 36,
      marginTop: 10,
      display: "flex",
      alignItems: "flex-end",
      gap: 3
    }
  }, Array.from({
    length: 12
  }).map((_, j) => /*#__PURE__*/React.createElement("span", {
    key: j,
    style: {
      flex: 1,
      height: 12 + j * (7 + i * 3) % 24,
      background: j % 2 ? theme.primary : `${theme.primary}55`,
      borderRadius: 3
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px/1 var(--font-sans)",
      color: theme.text
    }
  }, plan.tables[0]?.name || "Records"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 30,
      padding: "0 12px",
      borderRadius: 8,
      background: theme.primary,
      color: "#fff",
      font: "500 13px/1 var(--font-sans)"
    }
  }, "+ New")), ["Acme Logistics", "Harbor Freight", "Northwind Group", "Oakridge Studios"].map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 130px 100px 130px",
      gap: 14,
      padding: "12px 16px",
      borderTop: i ? "1px solid var(--border-subtle)" : "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 8,
      background: `${theme.primary}25`,
      color: theme.primary,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 11px/1 var(--font-sans)"
    }
  }, n.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 13px/1 var(--font-sans)",
      color: theme.text
    }
  }, n)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Avery Singh"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "3px 8px",
      borderRadius: 9999,
      background: i === 1 ? "#FEF4D7" : `${theme.primary}1A`,
      color: i === 1 ? "#744816" : theme.primary,
      font: "600 11px/1 var(--font-sans)"
    }
  }, i === 1 ? "Pending" : "Active"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Aug ", 12 + i * 3, ", 2026")))))))));
}
window.ThemeStep = ThemeStep;
window.THEMES = THEMES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "app/theme-step.jsx", error: String((e && e.message) || e) }); }

// kit/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// icons.jsx — Heroicons-2-style glyphs used by the Builder UI kit.
// Kept inline so the kit runs offline. Size via the `size` prop.

const Icon = ({
  d,
  size = 16,
  stroke,
  className,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: stroke ? "none" : "currentColor",
  stroke: stroke ? "currentColor" : undefined,
  strokeWidth: stroke ? 1.6 : undefined,
  strokeLinecap: stroke ? "round" : undefined,
  strokeLinejoin: stroke ? "round" : undefined,
  className: className,
  style: style
}, typeof d === "string" ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : d);

/* Asterisk mark — tile uses currentColor so the gradient comes from the parent */
const IconAsterisk = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4v16M5 7l14 10M5 17 19 7"
}));
const IconAsteriskGradient = ({
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "ast-g",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#86307B"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#E61875"
}))), /*#__PURE__*/React.createElement("g", {
  stroke: "url(#ast-g)",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4v16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7l14 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 17 19 7"
})));
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M21 21l-4.3-4.3M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
}));
const IconPlus = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 5v14M5 12h14"
}));
const IconChevDown = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m6 9 6 6 6-6"
}));
const IconChevRight = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m9 6 6 6-6 6"
}));
const IconTable = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Zm0 3.75h16.5m-16.5 3.75h16.5M9.75 10.5v9"
}));
const IconForm = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 12h6m-6 3.5h4M7.5 4.5h9A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5h-9A2.25 2.25 0 0 1 5.25 17.25V6.75A2.25 2.25 0 0 1 7.5 4.5Zm1.5 3.75h6"
}));
const IconPage = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 17.25v-5.5M12 17.25V9M15 17.25v-3.75M5.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V5.25Z"
}));
const IconPages = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5.25 4.5h9a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Zm12 3v12a1.5 1.5 0 0 0 1.5 1.5"
}));
const IconCog = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5-3a7.5 7.5 0 0 0-.13-1.41l1.82-1.42-1.9-3.3-2.17.8a7.5 7.5 0 0 0-2.44-1.42l-.32-2.3h-3.8l-.32 2.3a7.5 7.5 0 0 0-2.44 1.42l-2.17-.8-1.9 3.3 1.82 1.42A7.5 7.5 0 0 0 4.5 12c0 .48.05.95.13 1.41l-1.82 1.42 1.9 3.3 2.17-.8a7.5 7.5 0 0 0 2.44 1.42l.32 2.3h3.8l.32-2.3a7.5 7.5 0 0 0 2.44-1.42l2.17.8 1.9-3.3-1.82-1.42c.08-.46.13-.93.13-1.41Z"
}));
const IconFilter = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 4.5h16.5l-6 8.25v6l-4.5 2.25v-8.25L3.75 4.5Z"
}));
const IconSort = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M7 4v16M7 20l-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3"
}));
const IconMore = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
}));
const IconLightning = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M13.5 3 4 14h6l-1.5 7L19 10h-6l.5-7Z"
}));
const IconBolt = IconLightning;
const IconPlay = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M8 5v14l11-7L8 5Z"
}));
const IconUndo = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-4"
}));
const IconRedo = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m15 14 5-5-5-5M20 9H10a6 6 0 0 0 0 12h4"
}));
const IconEye = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M2.5 12S6 5.25 12 5.25 21.5 12 21.5 12 18 18.75 12 18.75 2.5 12 2.5 12Zm9.5 2.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
}));
const IconLink = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"
}));
const IconCheck = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m5 12 5 5L20 7"
}));
const IconX = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 6l12 12M18 6 6 18"
}));
const IconDb = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
}));
const IconText = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6.5 6h11M12 6v12M9.5 18h5"
}));
const IconHash = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"
}));
const IconCal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 9.75h16.5M6 4.5v3m12-3v3M5.25 6h13.5A1.5 1.5 0 0 1 20.25 7.5v11.25A1.5 1.5 0 0 1 18.75 20.25H5.25A1.5 1.5 0 0 1 3.75 18.75V7.5A1.5 1.5 0 0 1 5.25 6Z"
}));
const IconUser = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20a7.5 7.5 0 0 1 15 0"
}));
const IconUsers = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Zm7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 8a5 5 0 0 1 6 4.5h-4"
}));
const IconBell = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M14.25 18a2.25 2.25 0 0 1-4.5 0M5.75 9a6.25 6.25 0 1 1 12.5 0c0 3.5 1.5 5 2.25 6H3.5C4.25 14 5.75 12.5 5.75 9Z"
}));

/* Topbar / general */
const IconQuestion = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
}));
const IconExternal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M14 4h6v6M20 4 10 14M5 7v12a1 1 0 0 0 1 1h12"
}));
const IconMonitor = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 5h18v12H3zM8 21h8M12 17v4"
}));
const IconCollapse = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 4v16M14 9l-3 3 3 3M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
}));

/* Left rail */
const IconSparkle = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 3l1.7 4.4L18 9l-4.4 1.7L12 15l-1.7-4.4L6 9l4.4-1.6L12 3Zm6 9 .9 2.2 2.1.7-2.1.7L18 18l-.9-2.4-2.1-.7 2.1-.7L18 12Z"
}));
const IconBrush = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9.5 14.5 4 20l3 .5L8 18M19 4l1 1-9 9-2-2 9-9 1 1Zm-9.5 10.5L8 18l-2 2-2-1 5.5-5.5Z"
}));
const IconCode = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m8 6-5 6 5 6m8-12 5 6-5 6m-2-13-4 14"
}));
const IconBag = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5.5 7h13l-1 13a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5.5 7Zm3 0a3.5 3.5 0 1 1 7 0"
}));

/* Right rail */
const IconPlug = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 4v4m6-4v4M5 8h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V8Zm7 8v6"
}));
const IconList = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
}));
const IconShare = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M16 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 10.6 13.4 4M8.6 13.4l4.8 6.6"
}));
const IconHistory = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 2"
}));
const IconConnect = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.5 16.5l9-9M7.5 17 16 17"
}));

/* Toolbar / page-head */
const IconUpload = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 16V4m0 0L7 9m5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
}));
const IconDownload = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 4v12m0 0L7 11m5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
}));

/* Field menu */
const IconSwap = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M7 7h13l-3-3M17 17H4l3 3"
}));
const IconStar = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m12 4 2.5 5 5.5.8-4 3.9 1 5.5L12 16.7 7 19.2l1-5.5-4-3.9 5.5-.8L12 4Z"
}));
const IconCopy = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M8 8h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm-3 8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1"
}));
const IconArrowLeft = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M19 12H5m0 0 6 6m-6-6 6-6"
}));
const IconArrowRight = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 12h14m0 0-6-6m6 6-6 6"
}));
const IconAZ = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 4h6L5 14h6M14 14V4l3 6 3-6v10"
}));
const IconZA = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 4h6L5 14h6M14 4v10l3-6 3 6V4"
}));
const IconValidation = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 7h13M3 12h9M3 17h6m6.5 0c.83-.83 2.17-2 3-3m0 0c.83-1 1-2 1-3"
}));
const IconBranch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 4v16m12-13a3 3 0 1 1-3 3v3a4 4 0 0 1-4 4H6m12-3v6m-3 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
}));
const IconTrash = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-7 0v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7"
}));
const IconHelp = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 17h.01M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
}));

/* Field row */
const IconGrip = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
}));
Object.assign(window, {
  Icon,
  IconAsterisk,
  IconAsteriskGradient,
  IconSearch,
  IconPlus,
  IconChevDown,
  IconChevRight,
  IconTable,
  IconForm,
  IconPage,
  IconPages,
  IconCog,
  IconFilter,
  IconSort,
  IconMore,
  IconLightning,
  IconBolt,
  IconPlay,
  IconUndo,
  IconRedo,
  IconEye,
  IconLink,
  IconCheck,
  IconX,
  IconDb,
  IconText,
  IconHash,
  IconCal,
  IconUser,
  IconUsers,
  IconBell,
  IconQuestion,
  IconExternal,
  IconCollapse,
  IconMonitor,
  IconSparkle,
  IconBrush,
  IconCode,
  IconBag,
  IconPlug,
  IconList,
  IconShare,
  IconHistory,
  IconConnect,
  IconUpload,
  IconDownload,
  IconSwap,
  IconStar,
  IconCopy,
  IconArrowLeft,
  IconArrowRight,
  IconAZ,
  IconZA,
  IconValidation,
  IconBranch,
  IconTrash,
  IconHelp,
  IconGrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit/icons.jsx", error: String((e && e.message) || e) }); }

// kit/live-atoms.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ==========================================================================
   Live App UI Kit — Atoms + Modules
   --------------------------------------------------------------------------
   Live App is the runtime end-user surface. It re-themes Asterisk via the
   [data-surface="live-app"] scope in colors_and_type.css — so atoms here
   read the SAME semantic tokens (--bg-brand-accent, --content-default, …)
   the builder kit uses, but render in Tailwind Blue + Slate at runtime.

   File layout follows ui_kits/builder/:
     atoms.jsx       → Button, Input, Select, Search, Tag, Avatar, IconButton
     modules.jsx     → Table, List, Navigation, Chart, FilterBar, Pagination
     index.html      → interactive showcase

   Authoring rules:
     • Every visible color must come from a semantic token. No hex, no
       primitive ramps (--blue-600, --slate-500). If you reach for a
       primitive, the live-app surface override won't reach you.
     • Modules COMPOSE atoms. A LATable is Search + FilterBar + rows of
       Tag/Avatar/IconButton — never new primitives.
     • Borders are 1px var(--border-default). Radii are var(--radius-xl) for
       interactive controls, var(--radius-2xl) for cards.
   ========================================================================== */

/* ──────────────────────────────────────────────────────────────────────── */
/*  ATOMS                                                                   */
/* ──────────────────────────────────────────────────────────────────────── */

/* LAButton — primary / secondary / minimal / destructive variants.
   Live App buttons are flatter than Builder (no gradient option). The brand
   token resolves to slate or blue depending on surface. */
function LAButton({
  variant = "primary",
  size = "md",
  leading,
  trailing,
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 32,
      px: 10,
      fs: 12
    },
    md: {
      h: 36,
      px: 14,
      fs: 13
    },
    lg: {
      h: 44,
      px: 18,
      fs: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    height: s.h,
    padding: `0 ${s.px}px`,
    borderRadius: 8,
    font: `500 ${s.fs}px/1 var(--font-sans)`,
    cursor: "pointer",
    border: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background-color 120ms ease"
  };
  const variants = {
    primary: {
      background: "var(--bg-brand-accent)",
      color: "var(--content-inverse)"
    },
    secondary: {
      background: "var(--bg-action-secondary)",
      color: "var(--content-default)",
      border: "1px solid var(--border-default)"
    },
    minimal: {
      background: "transparent",
      color: "var(--content-default)"
    },
    destructive: {
      background: "var(--bg-action-destructive-primary)",
      color: "var(--content-inverse)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      ...base,
      ...variants[variant],
      ...rest.style
    }
  }), leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, leading), children, trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, trailing));
}

/* LAInput — text input atom. */
function LAInput({
  leading,
  trailing,
  size = "md",
  ...rest
}) {
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: `0 12px`,
      borderRadius: 8,
      border: "1px solid var(--border-default)",
      background: "var(--bg-input)",
      width: "100%",
      boxSizing: "border-box"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      flex: 1,
      height: "100%",
      border: 0,
      outline: 0,
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      minWidth: 0,
      ...rest.style
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      display: "inline-flex"
    }
  }, trailing));
}

/* LASelect — dropdown atom (visual only — uses native select for behavior). */
function LASelect({
  options = [],
  size = "md",
  ...rest
}) {
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 36;
  return /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      height: h,
      padding: "0 32px 0 12px",
      borderRadius: 8,
      border: "1px solid var(--border-default)",
      background: "var(--bg-input)",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      outline: 0,
      appearance: "none",
      WebkitAppearance: "none",
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 10px center",
      ...rest.style
    }
  }), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}

/* LASearch — convenience wrapper around LAInput with a search glyph. */
function LASearch({
  placeholder = "Search…",
  ...rest
}) {
  const Glyph = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }));
  return /*#__PURE__*/React.createElement(LAInput, _extends({
    leading: Glyph,
    placeholder: placeholder
  }, rest));
}

/* LATag — pill atom for status / category. Tone is read from a small
   palette of semantic tokens; never raw hex. */
function LATag({
  tone = "neutral",
  children
}) {
  const tones = {
    neutral: {
      bg: "var(--bg-subtle)",
      fg: "var(--content-secondary)"
    },
    brand: {
      bg: "var(--bg-brand-subtle)",
      fg: "var(--brand-content)"
    },
    success: {
      bg: "var(--bg-success)",
      fg: "var(--content-success-emphasis)"
    },
    warning: {
      bg: "var(--bg-warning)",
      fg: "var(--content-warning-emphasis)"
    },
    destructive: {
      bg: "var(--bg-destructive)",
      fg: "var(--content-destructive-emphasis)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 24,
      padding: "0 8px",
      borderRadius: 9999,
      background: t.bg,
      color: t.fg,
      font: "500 13px/16px var(--font-sans)"
    }
  }, children);
}

/* LAAvatar — initials on a slate fill, sized 24/32/40. */
function LAAvatar({
  name = "?",
  size = 32
}) {
  const initials = name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      background: "var(--bg-emphasis)",
      color: "var(--content-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `500 ${Math.round(size * 0.4)}px/1 var(--font-sans)`,
      flex: "0 0 auto"
    }
  }, initials);
}

/* LAIconButton — square ghost button for table rows / toolbars. */
function LAIconButton({
  children,
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label
  }, rest, {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...rest.style
    }
  }), children);
}

/* LACard — base raised surface.
   Pass `bare` when an outer container already owns the border/padding (e.g.
   the showcase's [data-module] wrapper) — drops chrome but keeps layout. */
function LACard({
  children,
  padding = 16,
  bare = false,
  style
}) {
  const chrome = bare ? {
    background: "transparent",
    borderRadius: 0,
    border: 0,
    padding: 0
  } : {
    background: "var(--bg-card)",
    borderRadius: 12,
    border: "1px solid var(--border-default)",
    padding
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : undefined,
    style: {
      ...chrome,
      ...style
    }
  }, children);
}

/* LACheckbox — sized 16, used in table row select. */
function LACheckbox({
  checked,
  indeterminate,
  onChange
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      width: 16,
      height: 16,
      accentColor: "var(--bg-brand-accent)",
      cursor: "pointer",
      margin: 0
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  MODULES                                                                 */
/* ──────────────────────────────────────────────────────────────────────── */

/* LAFilterBar — search + chips + add-filter. Sits above tables/lists. */
function LAFilterBar({
  search,
  setSearch,
  filters = [],
  onAddFilter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 280px",
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    value: search,
    onChange: e => setSearch && setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 28,
      padding: "0 4px 0 10px",
      borderRadius: 8,
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      font: "500 12px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      fontWeight: 400
    }
  }, f.field), f.op, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, f.value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove filter",
    style: {
      width: 20,
      height: 20,
      borderRadius: 4,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none"
  }))))), /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "sm",
    onClick: onAddFilter,
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px/1 var(--font-sans)"
      }
    }, "+")
  }, "Filter")));
}

/* LAPagination — compact prev/page/next bar. */
function LAPagination({
  page = 1,
  pageCount = 1,
  onChange
}) {
  const Arrow = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "400 13px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(LAIconButton, {
    label: "Previous",
    onClick: () => onChange && onChange(Math.max(1, page - 1))
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "m15 18-6-6 6-6"
  })), /*#__PURE__*/React.createElement("span", null, "Page ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-default)",
      fontWeight: 500
    }
  }, page), " of ", pageCount), /*#__PURE__*/React.createElement(LAIconButton, {
    label: "Next",
    onClick: () => onChange && onChange(Math.min(pageCount, page + 1))
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "m9 6 6 6-6 6"
  })));
}

/* LATable — composes Search + FilterBar + table rows + Pagination.
   columns: [{ key, label, width?, render?, align? }]
   rows:    [{ id, ... }] */
function LATable({
  title,
  columns,
  rows,
  getRowKey = (r, i) => r.id ?? i,
  selectable = true,
  footer = true,
  bare = false,
  /* New variant controls — every chrome item is independently toggleable so
     a host page can opt into search/filter/export and place "Add record"
     to the left or right of the toolbar. */
  showSearch = true,
  showFilter = true,
  showExport = false,
  addPosition = "right",
  // "right" (default) | "left" | "none"
  addLabel = "Add record"
}) {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(() => new Set());
  const [page, setPage] = React.useState(1);
  const pageSize = 8;
  const filtered = React.useMemo(() => {
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q)));
  }, [rows, search]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const toggle = k => {
    const next = new Set(selected);
    next.has(k) ? next.delete(k) : next.add(k);
    setSelected(next);
  };
  const toggleAll = () => {
    const all = pageRows.map((r, i) => getRowKey(r, i));
    const allSelected = all.every(k => selected.has(k));
    const next = new Set(selected);
    all.forEach(k => allSelected ? next.delete(k) : next.add(k));
    setSelected(next);
  };
  const ExportIcon = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3"
  }));
  const FilterIcon = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h18l-7 9v6l-4 2v-8L3 4z"
  }));
  const PlusBtn = /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "md",
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px/1 var(--font-sans)"
      }
    }, "+")
  }, addLabel);
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: bare ? "0 0 16px" : 16,
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, addPosition === "left" && PlusBtn, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 20px/24px var(--font-sans)",
      color: "var(--content-default)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, filtered.length, " ", filtered.length === 1 ? "record" : "records", selected.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-brand)",
      fontWeight: 500
    }
  }, selected.size, " selected")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }), showSearch && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 1 240px",
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    value: search,
    onChange: e => {
      setSearch(e.target.value);
      setPage(1);
    }
  })), showFilter && /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    leading: FilterIcon
  }, "Filter"), showExport && /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    leading: ExportIcon
  }, "Export"), addPosition === "right" && PlusBtn), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "400 13px/18px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--bg-muted)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40,
      padding: "10px 12px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(LACheckbox, {
    checked: pageRows.length > 0 && pageRows.every((r, i) => selected.has(getRowKey(r, i))),
    indeterminate: pageRows.some((r, i) => selected.has(getRowKey(r, i))) && !pageRows.every((r, i) => selected.has(getRowKey(r, i))),
    onChange: toggleAll
  })), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: "10px 12px",
      textAlign: c.align || "left",
      font: "500 11px/16px var(--font-sans)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--content-muted)",
      width: c.width
    }
  }, c.label)), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, pageRows.map((r, i) => {
    const k = getRowKey(r, i);
    const isSel = selected.has(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      style: {
        borderBottom: "1px solid var(--border-subtle)",
        background: isSel ? "var(--bg-selection-muted)" : "transparent"
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px"
      }
    }, /*#__PURE__*/React.createElement(LACheckbox, {
      checked: isSel,
      onChange: () => toggle(k)
    })), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: "12px",
        textAlign: c.align || "left",
        color: "var(--content-default)",
        verticalAlign: "middle"
      }
    }, c.render ? c.render(r) : r[c.key])), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "8px 8px 8px 0",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(LAIconButton, {
      label: "More"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.6"
    })))));
  }), pageRows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + 2,
    style: {
      padding: "32px 16px",
      textAlign: "center",
      color: "var(--content-muted)"
    }
  }, "No records found."))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Showing ", pageRows.length, " of ", filtered.length), /*#__PURE__*/React.createElement(LAPagination, {
    page: page,
    pageCount: pageCount,
    onChange: setPage
  })));
}

/* LAList — vertical record list with several layout variants.
   items: [{ id, title, subtitle, leading, trailing, tags, image, summary, fields }]
   variant:
     • "default"  — single line of meta + trailing action (the original)
     • "stacked"  — bigger row, summary paragraph + meta line under title
     • "media"    — leading thumbnail / cover image, title + summary
     • "grid"     — 2- or 3-up tile cards (controlled by `columns`)
   columns is only used when variant === "grid". */
function LAList({
  items = [],
  divided = true,
  bare = false,
  variant = "default",
  columns = 2
}) {
  /* ── Tile (grid variant) ───────────────────────────────────────── */
  const Tile = it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, it.image !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 9",
      background: it.image || "var(--bg-muted)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, it.tags)), it.subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, it.subtitle), it.summary && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/18px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, it.summary), it.fields && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      columnGap: 12,
      rowGap: 4,
      marginTop: 4
    }
  }, it.fields.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/18px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, f.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/18px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, f.value)))), it.trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 8
    }
  }, it.trailing)));
  if (variant === "grid") {
    const cols = Math.max(1, Math.min(4, columns));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 16
      }
    }, items.map((it, i) => Tile({
      ...it,
      id: it.id ?? i
    })));
  }
  /* ── Row variants (default / stacked / media) ──────────────────── */
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const border = divided && !last ? "1px solid var(--border-subtle)" : "none";
    if (variant === "media") {
      return /*#__PURE__*/React.createElement("div", {
        key: it.id ?? i,
        style: {
          display: "grid",
          gridTemplateColumns: "120px 1fr auto",
          gap: 16,
          padding: "16px",
          borderBottom: border,
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 120,
          height: 80,
          borderRadius: 8,
          background: it.image || "var(--bg-muted)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid var(--border-subtle)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 15px/20px var(--font-sans)",
          color: "var(--content-default)"
        }
      }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6
        }
      }, it.tags)), it.subtitle && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px/16px var(--font-sans)",
          color: "var(--content-muted)",
          marginTop: 2
        }
      }, it.subtitle), it.summary && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 13px/18px var(--font-sans)",
          color: "var(--content-secondary)",
          marginTop: 6
        }
      }, it.summary)), it.trailing && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto"
        }
      }, it.trailing));
    }
    if (variant === "stacked") {
      return /*#__PURE__*/React.createElement("div", {
        key: it.id ?? i,
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: "16px",
          borderBottom: border
        }
      }, it.leading && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto",
          paddingTop: 2
        }
      }, it.leading), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 15px/20px var(--font-sans)",
          color: "var(--content-default)"
        }
      }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6
        }
      }, it.tags)), it.summary && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 13px/18px var(--font-sans)",
          color: "var(--content-secondary)",
          marginTop: 6
        }
      }, it.summary), it.subtitle && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px/16px var(--font-sans)",
          color: "var(--content-muted)",
          marginTop: 6
        }
      }, it.subtitle)), it.trailing && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto"
        }
      }, it.trailing));
    }
    /* default */
    return /*#__PURE__*/React.createElement("div", {
      key: it.id ?? i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        borderBottom: border
      }
    }, it.leading && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto"
      }
    }, it.leading), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 14px/20px var(--font-sans)",
        color: "var(--content-default)"
      }
    }, it.title), it.subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px/16px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2
      }
    }, it.subtitle)), it.tags && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, it.tags), it.trailing && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto"
      }
    }, it.trailing));
  }));
}

/* LANav — top app bar + tabs. Used as the live-app frame's chrome. */
function LANav({
  appName = "Customer Hub",
  user = "Avery Singh",
  tabs = [],
  activeTab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "12px 24px",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--bg-brand-accent)",
      color: "var(--content-inverse)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "700 14px/1 var(--font-subhead)"
    }
  }, appName[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px/20px var(--font-subhead)",
      color: "var(--content-default)"
    }
  }, appName), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    placeholder: "Search records\u2026"
  })), /*#__PURE__*/React.createElement(LAAvatar, {
    name: user,
    size: 32
  })), tabs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "0 16px"
    }
  }, tabs.map(t => {
    const active = t === activeTab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onTab && onTab(t),
      style: {
        padding: "10px 14px",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        font: "500 13px/1 var(--font-sans)",
        color: active ? "var(--content-brand)" : "var(--content-secondary)",
        borderBottom: `2px solid ${active ? "var(--content-brand)" : "transparent"}`,
        marginBottom: -1
      }
    }, t);
  })));
}

/* LAChart — stat card with sparkline / bar series. Pure SVG, no deps.
   data: number[] · kind: "line" | "bar" */
function LAChart({
  label,
  value,
  delta,
  data = [],
  kind = "line",
  height = 80,
  bare = false
}) {
  const w = 280;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const stepX = data.length > 1 ? w / (data.length - 1) : w;
  const points = data.map((v, i) => [i * stepX, height - (v - min) / range * height]);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${(data.length - 1) * stepX} ${height} L0 ${height} Z`;
  const positive = (delta ?? 0) >= 0;
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 20,
    bare: bare
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 24px/28px var(--font-subhead)",
      color: "var(--content-default)"
    }
  }, value), delta !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: positive ? "var(--content-success-emphasis)" : "var(--content-destructive-emphasis)"
    }
  }, positive ? "▲" : "▼", " ", Math.abs(delta), "%")), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${height}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: height,
    style: {
      marginTop: 12,
      display: "block"
    }
  }, kind === "line" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "var(--bg-brand-muted)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--bg-brand-accent)",
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })) : data.map((v, i) => {
    const bw = stepX * 0.6;
    const bh = (v - min) / range * height;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: i * stepX + (stepX - bw) / 2,
      y: height - bh,
      width: bw,
      height: bh,
      fill: "var(--bg-brand-accent)",
      rx: "2"
    });
  })));
}

/* Export to window so the showcase script can use them. */
Object.assign(window, {
  // atoms
  LAButton,
  LAInput,
  LASelect,
  LASearch,
  LATag,
  LAAvatar,
  LAIconButton,
  LACard,
  LACheckbox,
  // modules
  LAFilterBar,
  LAPagination,
  LATable,
  LAList,
  LANav,
  LAChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit/live-atoms.jsx", error: String((e && e.message) || e) }); }

// kit/primitives-extended.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// primitives-extended.jsx — additional Asterisk components that were missing
// from primitives.jsx but defined in the Asterisk Figma library.
//
// Adds: DestructiveButton variants (primary/secondary/minimal), NeutralFilledBadge,
// Avatar, Skeleton, SectionDivider, Tooltip, ColumnHeader, Tag (with status accent),
// Header, Switch (figma-accurate). All consume tokens from colors_and_type.css.
//
// Existing primitives.jsx is untouched. This file augments window.* with the new ones.

/* ================================================================ DestructiveButton
   Mirrors Type=Destructive Primary / Secondary / Minimal from the Figma file.
   Asterisk's danger styling is a separate axis (color) crossed with the same
   three fill levels as the standard Button, so we expose them as their own
   variant family rather than a single 'danger' shortcut. */
const destructivePalette = {
  primary: {
    bg: "var(--bg-action-destructive-primary)",
    color: "#fff",
    border: "var(--bg-action-destructive-primary)",
    hoverBg: "var(--bg-action-destructive-emphasis)",
    hoverBorder: "var(--bg-action-destructive-emphasis)"
  },
  secondary: {
    bg: "#fff",
    color: "var(--content-destructive-default)",
    border: "var(--border-destructive-default)",
    hoverBg: "var(--bg-destructive)",
    hoverBorder: "var(--border-destructive-emphasis)"
  },
  minimal: {
    bg: "transparent",
    color: "var(--content-destructive-default)",
    border: "transparent",
    hoverBg: "var(--bg-destructive)",
    hoverBorder: "transparent"
  }
};
const DestructiveButton = ({
  variant = "primary",
  size,
  leading,
  trailing,
  children,
  style,
  disabled,
  titleCase = true,
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const p = destructivePalette[variant];
  const label = titleCase && typeof window.titleCaseChildren === "function" ? window.titleCaseChildren(children) : children;
  const sizeStyle = size === "sm" ? {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  } : size === "lg" ? {
    height: 40,
    padding: "0 18px",
    fontSize: 15
  } : {
    height: 36,
    padding: "0 14px",
    fontSize: 14
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      cursor: disabled ? "not-allowed" : "pointer",
      whiteSpace: "nowrap",
      outline: "none",
      transition: "background .12s, border-color .12s, box-shadow .12s",
      background: hover && !disabled ? p.hoverBg : p.bg,
      color: p.color,
      border: `1px solid ${hover && !disabled ? p.hoverBorder : p.border}`,
      boxShadow: focus ? "var(--focus-ring-destructive)" : "none",
      opacity: disabled ? 0.4 : 1,
      ...sizeStyle,
      ...style
    }
  }), leading, label, trailing);
};

/* ================================================================ NeutralFilledBadge
   Type=Neutral-Filled from Figma. Pill-shape, gray-200 fill, gray-700 text,
   500 weight, letter-spacing .02em. Distinct from primitives.jsx Badge: no
   color-axis variants, includes optional left/right icon slots, taller. */
const NeutralFilledBadge = ({
  leading,
  trailing,
  children,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    height: 24,
    padding: "4px 8px",
    borderRadius: 9999,
    background: "var(--gray-200)",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: ".02em",
    color: "var(--gray-700)",
    whiteSpace: "nowrap",
    ...style
  }
}, leading, children, trailing);

/* ================================================================ Avatar
   StyleInitalsSize32pxDark from Figma. Initials chip, square-rounded.
   Sizes: sm 24, md 32, lg 40. Tone: dark (gray-800 fill / white text)
   or light (gray-200 fill / gray-800 text). */
const Avatar = ({
  initials,
  size = 32,
  tone = "dark",
  style
}) => {
  const fontSize = size <= 24 ? 11 : size <= 32 ? 13 : 15;
  const tones = {
    dark: {
      bg: "var(--gray-800)",
      fg: "#fff"
    },
    light: {
      bg: "var(--gray-200)",
      fg: "var(--gray-800)"
    },
    brand: {
      bg: "var(--brand-500)",
      fg: "#fff"
    }
  };
  const t = tones[tone] || tones.dark;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize,
      letterSpacing: ".02em",
      flex: "none",
      ...style
    }
  }, initials);
};

/* ================================================================ Skeleton
   SkeletonNo from Figma. Subtle loading placeholder. Animates a soft
   shimmer in gray-200/gray-100 — color-only, no transforms. */
const Skeleton = ({
  width = "100%",
  height = 14,
  radius = 4,
  style
}) => /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    display: "inline-block",
    width,
    height,
    borderRadius: radius,
    background: "linear-gradient(90deg, var(--gray-200) 0%, var(--gray-100) 50%, var(--gray-200) 100%)",
    backgroundSize: "200% 100%",
    animation: "ast-skeleton 1.4s ease-in-out infinite",
    ...style
  }
});

/* ================================================================ SectionDivider
   TypeSectionDividerStateDefault — a labeled rule between menu/inspector
   sections. Hairline above + small caps label. */
const SectionDivider = ({
  label,
  trailing,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 8px 4px",
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)",
    flex: trailing ? 1 : "none"
  }
}, label), trailing);

/* ================================================================ Tooltip
   Dark-on-light. Appears on hover with a small delay. Default-resting tooltip
   sits above its trigger. Uses bg-intense (gray-700) fill / white text per Asterisk. */
const Tooltip = ({
  label,
  kbd,
  placement = "top",
  children
}) => {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      [placement === "top" ? "bottom" : "top"]: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--bg-intense)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: "16px",
      padding: "4px 8px",
      borderRadius: 4,
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      zIndex: 50
    }
  }, label, kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1 var(--font-mono)",
      color: "var(--gray-300)",
      paddingLeft: 4,
      borderLeft: "1px solid var(--gray-600)",
      marginLeft: 2
    }
  }, kbd)));
};

/* ================================================================ ColumnHeader
   StateRestingLeftNumberNo from Figma — sortable table-column header.
   gray-100 fill, label + sort affordance + ellipsis menu. */
const ColumnHeader = ({
  icon,
  label,
  sorted,
  onSortClick,
  onMenuClick,
  count,
  style
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 32,
      padding: "4px 4px 4px 8px",
      background: "var(--gray-100)",
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      display: "inline-flex",
      color: "var(--content-secondary)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/16px var(--font-sans)",
      letterSpacing: ".02em",
      color: "var(--content-secondary)"
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, typeof count === "number" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: 4,
      background: "var(--gray-200)",
      color: "var(--content-secondary)",
      font: "500 12px/1 var(--font-sans)"
    }
  }, count), sorted && /*#__PURE__*/React.createElement("span", {
    onClick: onSortClick,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      background: "var(--bg-selection-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: onSortClick ? "pointer" : "default",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: sorted === "desc" ? "M6 9l6 6 6-6" : "M6 15l6-6 6 6"
  }))), (hover || sorted) && onMenuClick && /*#__PURE__*/React.createElement("button", {
    onClick: onMenuClick,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      border: "none",
      background: "transparent",
      color: "var(--content-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  })))));
};

/* ================================================================ Tag (Cell summary row)
   StateResting from Figma — the labelled cell with optional left status accent
   and trailing required-asterisk. Used in form/cell-summary contexts. */
const Tag = ({
  label,
  status,
  required,
  style
}) => {
  const statusBg = {
    success: "var(--green-400)",
    warning: "var(--yellow-400)",
    error: "var(--red-500)",
    info: "var(--blue-100)"
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      height: 36,
      padding: "8px 12px",
      background: "#fff",
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-secondary)",
      ...style
    }
  }, statusBg && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: "100%",
      background: statusBg
    }
  }), label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-destructive-default)",
      marginLeft: 4
    }
  }, "*"));
};

/* ================================================================ Header
   HeaderDefault from /external-shared. Page or panel header: title row with
   trailing actions, no sub-rule. */
const Header = ({
  title,
  eyebrow,
  description,
  leading,
  actions,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    padding: "16px 20px",
    borderBottom: "1px solid var(--border-default)",
    background: "#fff",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    flex: 1,
    minWidth: 0
  }
}, leading, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0
  }
}, eyebrow && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 12px/16px var(--font-sans)",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)"
  }
}, eyebrow), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 20px/24px var(--font-subhead)",
    color: "var(--content-default)"
  }
}, title), description && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "400 14px/20px var(--font-sans)",
    color: "var(--content-secondary)"
  }
}, description))), actions && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: "none"
  }
}, actions));

/* ================================================================ Switch (figma-accurate)
   SelectedNoStateDefault from Figma. 40×24, larger track than primitives.jsx Toggle (32×18).
   Uses gray-300 off / gray-900 on, doubled-ring focus. Coexists with Toggle —
   pick Switch for canvas-density UI, Toggle for inspector rows. */
const Switch = ({
  on,
  onChange,
  disabled,
  label,
  style
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-default)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => !disabled && onChange && onChange(!on),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    disabled: disabled,
    style: {
      width: 40,
      height: 24,
      borderRadius: 9999,
      border: "none",
      background: on ? "var(--gray-900)" : "var(--gray-300)",
      position: "relative",
      padding: 0,
      cursor: "inherit",
      transition: "background .15s",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      background: "#fff",
      borderRadius: 9999,
      boxShadow: "var(--shadow-sm)",
      transition: "left .15s"
    }
  })), label);
};

/* ================================================================ Card
   Source: Card from Figma. White surface, 8px radius, sm dual-shadow, 24px padding.
   Header row (title 20/24 + optional trailing badge), optional description, body slot. */
const Card = ({
  title,
  description,
  badge,
  children,
  width,
  style,
  variant = "shadow"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--surface-default, #fff)",
    borderRadius: 8,
    boxShadow: variant === "outline" ? "none" : "0px 1px 2px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.05)",
    border: variant === "outline" ? "1px solid var(--border-default)" : "none",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width,
    ...style
  }
}, (title || description || badge) && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, (title || badge) && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24
  }
}, title && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 20px/24px var(--font-sans)",
    color: "var(--content-default)"
  }
}, title), badge && /*#__PURE__*/React.createElement("span", null, badge)), description && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "400 16px/24px var(--font-sans)",
    color: "var(--content-secondary)"
  }
}, description)), children);

/* ================================================================ Snackbar
   Source: Type=Default / Type=Destructive (323×36, 8px radius).
   Dark gray surface w/ white text by default, light error surface w/ error-content
   on destructive. Centered text, optional left emoji/icon, trailing × button. */
const snackbarPalette = {
  default: {
    bg: "var(--gray-700, #564D54)",
    fg: "#fff",
    icon: "rgba(255,255,255,0.7)"
  },
  success: {
    bg: "var(--bg-success)",
    fg: "var(--content-success-default)",
    icon: "var(--content-success-default)"
  },
  destructive: {
    bg: "var(--error-surface)",
    fg: "var(--error-content)",
    icon: "var(--error-content)"
  }
};
const Snackbar = ({
  variant = "default",
  icon,
  children,
  onDismiss,
  style
}) => {
  const p = snackbarPalette[variant] || snackbarPalette.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      minWidth: 240,
      maxWidth: 480,
      padding: "8px 12px",
      borderRadius: 8,
      background: p.bg,
      color: p.fg,
      font: "400 14px/20px var(--font-sans)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, children), onDismiss !== undefined && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      padding: 0,
      background: "transparent",
      border: 0,
      cursor: "pointer",
      color: p.icon
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
};

/* ================================================================ SelectionCard
   Source: With Button?=True/False, Selected?=Yes/No (274×52). Bordered row with
   radio + label, optional description, optional right-side actions (badge / icon /
   chip). Selected = bg gray-50, border gray-900.

   Two selection modes:
   - select="radio"     (default) — radio dot, supports description
   - select="checkbox"           — checkbox tick, optional leading `icon`, text-only
                                   (no description, by design — keep it terse)
*/
const SelectionCard = ({
  label,
  description,
  selected = false,
  disabled = false,
  onChange,
  badge,
  actions,
  select = "radio",
  icon,
  width,
  style
}) => {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const isCheckbox = select === "checkbox";
  const border = selected ? "var(--gray-900, #1B181B)" : hover && !disabled ? "var(--border-strong)" : "var(--border-default)";
  const bg = selected ? "var(--gray-50, #FAFAFA)" : "#fff";
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width,
      padding: 8,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, isCheckbox ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: 4,
      background: selected ? "var(--gray-900, #1B181B)" : "#fff",
      boxShadow: `inset 0 0 0 1.5px ${selected ? "var(--gray-900, #1B181B)" : "var(--border-strong)"}`,
      transition: "background .12s, box-shadow .12s"
    }
  }, selected && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 4.8 8.5 9.5 3.7",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      pointerEvents: "none"
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: `1.5px solid ${selected ? "var(--gray-900, #1B181B)" : "var(--border-strong)"}`,
      background: "#fff",
      transition: "border-color .12s"
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--gray-900, #1B181B)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: selected,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      pointerEvents: "none"
    }
  })), isCheckbox && icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      color: "var(--content-secondary)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "500 14px/16px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label), (badge || actions) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, badge, actions)), !isCheckbox && description && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 24,
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, description));
};

/* ================================================================ Slider
   Source: State=Default thumb (16×16, brand-200 ring, sm shadow) + Progress.
   Tracks the typical h=16 hit area, 4px filled track, 16px thumb. */
const Slider = ({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  width = 240,
  style
}) => {
  const [drag, setDrag] = React.useState(false);
  const trackRef = React.useRef(null);
  const pct = (value - min) / (max - min) * 100;
  const update = clientX => {
    if (!trackRef.current || disabled) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    const stepped = Math.round(raw / step) * step;
    onChange && onChange(Math.min(max, Math.max(min, stepped)));
  };
  const onPointerDown = e => {
    if (disabled) return;
    setDrag(true);
    update(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (drag) update(e.clientX);
  };
  const onPointerUp = () => setDrag(false);
  return /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    style: {
      position: "relative",
      width,
      height: 16,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      touchAction: "none",
      ...style
    },
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 6,
      height: 4,
      background: "var(--gray-200, #E7E4E6)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      height: 4,
      width: `${pct}%`,
      background: "var(--gray-900, #1B181B)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 8px)`,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#fff",
      border: "2px solid var(--brand-200, #D3A0CB)",
      boxShadow: drag ? "0 4px 12px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.08)",
      transition: drag ? "none" : "border-color .12s, box-shadow .12s"
    }
  }));
};

/* ================================================================ Stylesheet — keyframes */
if (typeof document !== "undefined" && !document.getElementById("ast-extended-keyframes")) {
  const s = document.createElement("style");
  s.id = "ast-extended-keyframes";
  s.textContent = `@keyframes ast-skeleton { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`;
  document.head.appendChild(s);
}

/* ================================================================ ProgressStepper
   Source: /Modal/components/ActiveStep{1,2,3}StepName from Figma.
   8px high pill segments separated by 8px gaps, brand-gradient fill on
   completed/active segments, gray-200 on remaining. Eyebrow "Step N of M"
   above. Used inside large stepped modals. */
const ProgressStepper = ({
  step = 1,
  total = 3,
  label,
  width,
  style
}) => {
  const segments = Array.from({
    length: total
  }).map((_, i) => i < step);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, label ?? `Step ${step} of ${total}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, segments.map((on, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 8,
      borderRadius: 9999,
      background: on ? "var(--gradient-brand)" : "var(--neutral-200, #E2DCE0)"
    }
  }))));
};

/* ================================================================ Modal
   Source: /Modal/components/Size{Small,Large}Steps{No,Yes} + /Modal/Modal/Frame10123046
   from Figma. Compose: header (title 20/24, optional desc 12/16, optional X,
   optional ProgressStepper, optional leading icon avatar) → body → footer
   (left link slot + right action cluster, separated from body by a hairline
   rule). The footer rule is part of the chrome, present even with no actions.

   Sizes: sm=384, md=480, lg=640, xl=864 (matches Figma tokens).
   Padding: 24px all sides. Radius: var(--radius-2xl) (12). Shadow: --shadow-xl.

   This wraps content in a scrim by default; pass scrim={false} to render the
   surface alone (e.g. inside a docs page where you're showing multiple
   examples on a single backdrop). */
const modalSizes = {
  sm: 384,
  md: 480,
  lg: 640,
  xl: 864
};
const Modal = ({
  size = "md",
  title,
  description,
  icon,
  // ReactNode rendered in a 24px slot to the left of the title
  step,
  // { current, total, label? } → renders ProgressStepper
  onClose,
  footerLeft,
  // typically a "Learn More" link
  footerRight,
  // typically <Button>Cancel</Button><Button variant="gradient">Save</Button>
  scrim = true,
  maxBodyHeight,
  // px — when set, the body scrolls
  children,
  style
}) => {
  const width = modalSizes[size] ?? size;
  const surface = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      background: "#fff",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-xl)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      paddingRight: 32
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--content-default)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "500 20px/24px var(--font-subhead, var(--font-sans))",
      color: "var(--content-default)",
      letterSpacing: "-0.01em"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, description), step && /*#__PURE__*/React.createElement(ProgressStepper, {
    step: step.current,
    total: step.total,
    label: step.label,
    width: step.width,
    style: {
      marginTop: 12
    }
  }))), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 24,
      right: 24,
      width: 24,
      height: 24,
      padding: 0,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-base)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...(maxBodyHeight ? {
        maxHeight: maxBodyHeight,
        overflowY: "auto"
      } : {})
    }
  }, children), (footerLeft || footerRight) && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle, #EFECEE)",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, footerLeft), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, footerRight)));
  if (!scrim) return surface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay, rgba(13,12,12,0.6))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      zIndex: 1000
    }
  }, surface);
};
Object.assign(window, {
  DestructiveButton,
  NeutralFilledBadge,
  Avatar,
  Skeleton,
  SectionDivider,
  Tooltip,
  ColumnHeader,
  Tag,
  Header,
  Switch,
  Card,
  Snackbar,
  SelectionCard,
  Slider,
  Modal,
  ProgressStepper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit/primitives-extended.jsx", error: String((e && e.message) || e) }); }

// kit/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// primitives.jsx — reusable Asterisk components: Button, Badge, Input, Select,
// Toggle, Checkbox, RadioGroup, Menu, Banner, Tabs, Chip, IconButton, Tooltip.
// All match the Asterisk token system defined in colors_and_type.css.

const cx = (...args) => args.filter(Boolean).join(" ");

/* ============================================================ titleCase
   Asterisk button labels are always Title Case. The component does this for
   you so callers can write natural-cased copy ("delete table", "save and
   continue") and not have to remember the rule.
   - Lowercases small connecting words (a/an/the/and/or/but/for/to/of/in/on/at/by/with/vs/per/via)
     EXCEPT when they're the first or last token.
   - Leaves any token that already contains an uppercase letter alone — so
     acronyms (API, URL), product names (iOS, GitHub) and intentional casing survive.
   - Recurses into React fragments / nested children, only rewriting plain strings.
*/
const TC_SMALL = new Set(["a", "an", "the", "and", "or", "but", "nor", "for", "to", "of", "in", "on", "at", "by", "with", "vs", "per", "via", "as", "up", "off"]);
const titleCaseString = s => {
  const tokens = s.split(/(\s+)/); // keep whitespace runs as separators
  const wordIdxs = tokens.map((t, i) => /\S/.test(t) ? i : -1).filter(i => i >= 0);
  const firstWord = wordIdxs[0];
  const lastWord = wordIdxs[wordIdxs.length - 1];
  return tokens.map((tok, i) => {
    if (!/\S/.test(tok)) return tok;
    if (/[A-Z]/.test(tok)) return tok; // already-cased / acronym → leave
    const lower = tok.toLowerCase();
    const bare = lower.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
    if (TC_SMALL.has(bare) && i !== firstWord && i !== lastWord) return lower;
    return tok.replace(/(\p{L})(\p{L}*)/u, (_, a, b) => a.toUpperCase() + b);
  }).join("");
};
const titleCaseChildren = node => {
  if (typeof node === "string") return titleCaseString(node);
  if (Array.isArray(node)) return node.map(titleCaseChildren);
  return node; // React elements, numbers, null — leave intact
};

/* ============================================================ Button */
const buttonStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 36,
    padding: "0 14px",
    borderRadius: 8,
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 500,
    border: "1px solid transparent",
    background: "#fff",
    color: "var(--content-default)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    outline: "none",
    transition: "background .12s, border-color .12s, box-shadow .12s"
  },
  sm: {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  },
  lg: {
    height: 40,
    padding: "0 18px",
    fontSize: 15
  },
  variants: {
    primary: {
      background: "var(--neutral-900)",
      color: "#fff",
      borderColor: "var(--neutral-900)"
    },
    gradient: {
      background: "var(--gradient-brand)",
      color: "#fff",
      border: "none",
      fontWeight: 600
    },
    secondary: {
      background: "#fff",
      borderColor: "var(--border-default)",
      color: "var(--content-default)"
    },
    minimal: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--content-default)"
    },
    danger: {
      background: "var(--error-emphasis)",
      color: "#fff",
      borderColor: "var(--error-emphasis)"
    },
    "brand-outline": {
      background: "#fff",
      color: "var(--brand-emphasis)",
      borderColor: "var(--brand-emphasis)"
    }
  }
};
const Button = ({
  variant = "secondary",
  size,
  leading,
  trailing,
  children,
  style,
  disabled,
  titleCase = true,
  ...rest
}) => {
  const label = titleCase ? titleCaseChildren(children) : children;
  const [hover, setHover] = React.useState(false);
  const base = {
    ...buttonStyles.base,
    ...(size === "sm" ? buttonStyles.sm : size === "lg" ? buttonStyles.lg : {}),
    ...buttonStyles.variants[variant]
  };
  if (hover && !disabled) {
    if (variant === "secondary") {
      base.background = "var(--brand-surface)";
      base.borderColor = "var(--border-strong)";
    } else if (variant === "minimal") {
      base.background = "var(--neutral-100)";
    } else if (variant === "primary") {
      base.background = "var(--neutral-800)";
      base.borderColor = "var(--neutral-800)";
    } else if (variant === "gradient") {
      base.filter = "brightness(1.06)";
    } else if (variant === "danger") {
      base.filter = "brightness(1.05)";
    } else if (variant === "brand-outline") {
      base.background = "var(--brand-surface)";
    }
  }
  if (disabled) {
    base.opacity = .4;
    base.cursor = "not-allowed";
  }
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...style
    }
  }), leading, label, trailing);
};

/* ============================================================ IconButton */
const IconButton = ({
  children,
  size = 28,
  title,
  style,
  active,
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--neutral-900)" : hover ? "var(--surface-muted)" : "transparent";
  const color = active ? "#fff" : "var(--content-secondary)";
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 6,
      border: "none",
      background: bg,
      color,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .12s",
      ...style
    }
  }), children);
};

/* ============================================================ Badge */
const badgePalette = {
  gradient: {
    background: "var(--gradient-brand)",
    color: "#fff"
  },
  neutral: {
    background: "var(--neutral-100)",
    color: "var(--neutral-700)"
  },
  outline: {
    background: "transparent",
    color: "var(--neutral-700)",
    boxShadow: "inset 0 0 0 1px var(--neutral-400)"
  },
  success: {
    background: "var(--success-50)",
    color: "var(--success-700)"
  },
  warning: {
    background: "var(--warning-50)",
    color: "var(--warning-700)"
  },
  error: {
    background: "var(--error-surface)",
    color: "var(--error-content)"
  },
  brand: {
    background: "var(--brand-surface)",
    color: "var(--brand-content)"
  }
};
const Badge = ({
  variant = "neutral",
  size = "md",
  children,
  style
}) => {
  const sizeStyle = size === "sm" ? {
    height: 20,
    padding: "0 6px",
    fontSize: 11
  } : size === "lg" ? {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  } : {
    height: 24,
    padding: "0 8px",
    fontSize: 12
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      borderRadius: 9999,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      letterSpacing: ".01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...sizeStyle,
      ...badgePalette[variant],
      ...style
    }
  }, children);
};

/* ============================================================ Input */
const Input = ({
  value,
  onChange,
  placeholder,
  error,
  leading,
  trailing,
  label,
  hint,
  ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--error-emphasis)" : focus ? "var(--border-strong)" : "var(--border-default)";
  const boxShadow = focus ? error ? "var(--focus-ring-destructive)" : "var(--focus-ring)" : "none";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "500 13px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 32,
      background: "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      padding: "0 10px",
      boxShadow,
      transition: "box-shadow .12s, border-color .12s"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginRight: 6,
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      minWidth: 0
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginLeft: 6
    }
  }, trailing)), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.4 var(--font-sans)`,
      color: error ? "var(--error-content)" : "var(--content-muted)"
    }
  }, hint));
};

/* ============================================================ Select */
const Select = ({
  value,
  options,
  onChange,
  leading
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 32,
      padding: "0 10px",
      background: "#fff",
      border: `1px solid ${focus ? "var(--border-strong)" : "var(--border-default)"}`,
      borderRadius: 8,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "box-shadow .12s"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginRight: 6,
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      flex: 1,
      paddingRight: 20
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      color: "var(--content-muted)",
      position: "absolute",
      right: 8,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
};

/* ============================================================ Toggle */
const Toggle = ({
  on,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    font: "400 13px/1 var(--font-sans)",
    color: "var(--content-default)"
  }
}, /*#__PURE__*/React.createElement("span", {
  onClick: () => onChange && onChange(!on),
  style: {
    width: 32,
    height: 18,
    borderRadius: 9999,
    background: on ? "var(--neutral-900)" : "var(--neutral-200)",
    position: "relative",
    transition: "background .15s",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 2,
    left: on ? 16 : 2,
    width: 14,
    height: 14,
    background: "#fff",
    borderRadius: 9999,
    boxShadow: "var(--shadow-sm)",
    transition: "left .15s"
  }
})), label);

/* ============================================================ Checkbox */
const Checkbox = ({
  checked,
  indeterminate,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    font: "400 13px/1 var(--font-sans)",
    color: "var(--content-default)"
  }
}, /*#__PURE__*/React.createElement("span", {
  onClick: () => onChange && onChange(!checked),
  style: {
    width: 16,
    height: 16,
    borderRadius: 4,
    border: `1.5px solid ${checked || indeterminate ? "var(--neutral-900)" : "var(--border-default)"}`,
    background: checked || indeterminate ? "var(--neutral-900)" : "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none"
  }
}, checked && !indeterminate && /*#__PURE__*/React.createElement("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m5 12 5 5L20 7"
})), indeterminate && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 2,
    background: "#fff",
    borderRadius: 1
  }
})), label);

/* ============================================================ Banner */
const bannerPalette = {
  info: {
    bg: "var(--surface-muted)",
    bd: "var(--border-default)",
    fg: "var(--content-default)",
    ic: "var(--neutral-900)"
  },
  success: {
    bg: "var(--success-surface)",
    bd: "#C9EAD1",
    fg: "var(--success-content)",
    ic: "var(--success-emphasis)"
  },
  warning: {
    bg: "var(--warning-surface)",
    bd: "#FDE6AA",
    fg: "var(--warning-content)",
    ic: "var(--warning-emphasis)"
  },
  error: {
    bg: "var(--error-surface)",
    bd: "#FBD0D3",
    fg: "var(--error-content)",
    ic: "var(--error-emphasis)"
  }
};
const Banner = ({
  variant = "info",
  title,
  children
}) => {
  const p = bannerPalette[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      padding: "10px 12px",
      borderRadius: 8,
      background: p.bg,
      border: `1px solid ${p.bd}`,
      color: p.fg,
      font: "400 13px/20px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: p.ic,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "700 11px/1 var(--font-sans)",
      flex: "none",
      marginTop: 2
    }
  }, variant === "success" ? "✓" : variant === "error" ? "×" : variant === "warning" ? "!" : "i"), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 1
    }
  }, title), children));
};

/* ============================================================ Menu (popover) */
const Menu = ({
  items,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 220,
    background: "#fff",
    border: "1px solid var(--border-default)",
    borderRadius: 8,
    boxShadow: "var(--shadow-lg)",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    ...style
  }
}, items.map((it, i) => it.type === "sep" ? /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    height: 1,
    background: "var(--border-subtle)",
    margin: "4px 0"
  }
}) : it.type === "head" ? /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    font: "700 11px/1 var(--font-sans)",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)",
    padding: "8px 10px 4px"
  }
}, it.label) : /*#__PURE__*/React.createElement(MenuItem, {
  key: i,
  item: it
})));
const MenuItem = ({
  item
}) => {
  const [hover, setHover] = React.useState(false);
  const danger = item.danger;
  const base = hover ? danger ? "var(--error-surface)" : "var(--surface-muted)" : "transparent";
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: item.onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 30,
      padding: "0 8px",
      borderRadius: 4,
      background: base,
      cursor: "pointer",
      font: "400 13px/1 var(--font-sans)",
      color: danger ? "var(--error-content)" : "var(--content-default)"
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      display: "inline-flex",
      color: danger ? "var(--error-emphasis)" : "var(--content-muted)"
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1 var(--font-mono)",
      color: "var(--content-muted)"
    }
  }, item.kbd));
};

/* ============================================================ Tabs */
const Tabs = ({
  value,
  onChange,
  items,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 18,
    borderBottom: "1px solid var(--border-default)",
    ...style
  }
}, items.map(it => /*#__PURE__*/React.createElement("div", {
  key: it.value,
  onClick: () => onChange && onChange(it.value),
  style: {
    padding: "9px 2px",
    font: "500 13px/1 var(--font-sans)",
    cursor: "pointer",
    color: value === it.value ? "var(--content-default)" : "var(--content-muted)",
    borderBottom: `2px solid ${value === it.value ? "var(--neutral-900)" : "transparent"}`,
    marginBottom: -1
  }
}, it.label)));

/* ============================================================ Chip */
const Chip = ({
  active,
  onClick,
  leading,
  trailing,
  children
}) => /*#__PURE__*/React.createElement("span", {
  onClick: onClick,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    height: 28,
    padding: "0 10px",
    borderRadius: 9999,
    border: "1px solid " + (active ? "var(--neutral-900)" : "var(--border-default)"),
    background: active ? "var(--neutral-900)" : "#fff",
    color: active ? "#fff" : "var(--content-default)",
    font: "500 12px/1 var(--font-sans)",
    cursor: "pointer",
    transition: "background .12s, color .12s, border-color .12s"
  }
}, leading, children, trailing);
Object.assign(window, {
  Button,
  IconButton,
  Badge,
  Input,
  Select,
  Toggle,
  Checkbox,
  Banner,
  Menu,
  Tabs,
  Chip,
  cx,
  titleCaseString,
  titleCaseChildren
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "kit/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/builder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// builder.jsx — Asterisk Builder UI kit. Layout matches Knack Builder:
// [outside-nav-rail] [tables-panel] [canvas] [right-rail], wrapped by the
// canonical Outside Nav navbar (56px). The navbar + left rail + avatar
// markup comes from /ui_kits/outside-nav (.on-navbar / .on-left-rail /
// .on-avatar-slot / .on-nav-btn) so this kit always reflects the live
// outside-nav spec.
// Two views: Records (table) and Fields (list with mock context menu).

const {
  useState
} = React;

// Icons folder copied from ui_kits/outside-nav/icons → ./on-icons so the
// builder kit resolves them relative to its own folder.
const ON_ICON = "./on-icons";

/* Sample data --------------------------------------------------------------- */
const TABLES = [{
  key: "t1",
  label: "Table 1",
  active: true
}, {
  key: "t2",
  label: "Table 2"
}, {
  key: "t3",
  label: "Table 3"
}, {
  key: "t4",
  label: "Table 4"
}, {
  key: "t5",
  label: "Table 5"
}];
const FIELDS = [{
  k: "id",
  label: "Record ID",
  type: "id",
  icon: /*#__PURE__*/React.createElement(IconSort, {
    size: 14
  })
}, {
  k: "description",
  label: "Description",
  type: "text",
  icon: /*#__PURE__*/React.createElement(IconText, {
    size: 14
  })
}, {
  k: "createdBy",
  label: "Created By",
  type: "user",
  icon: /*#__PURE__*/React.createElement(IconUser, {
    size: 14
  }),
  validation: 2,
  conditional: 4
}, {
  k: "createdOn",
  label: "Created On",
  type: "date",
  icon: /*#__PURE__*/React.createElement(IconCal, {
    size: 14
  }),
  validation: 2
}, {
  k: "updatedOn",
  label: "Updated On",
  type: "date",
  icon: /*#__PURE__*/React.createElement(IconCal, {
    size: 14
  })
}, {
  k: "updatedBy",
  label: "Updated By",
  type: "user",
  icon: /*#__PURE__*/React.createElement(IconUser, {
    size: 14
  })
}];
const ROWS = [{
  id: "0001",
  createdBy: "Allison Lubin",
  desc: "Structural Engineer",
  createdOn: "20/09/2025",
  updatedOn: "20/09/2025",
  updatedBy: "Allison Lubin"
}, {
  id: "0002",
  createdBy: "Aspen Mango",
  desc: "Editor",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Aspen Mango"
}, {
  id: "0003",
  createdBy: "Marie Dias",
  desc: "Administrator",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Marie Dias"
}, {
  id: "0004",
  createdBy: "Martin Bergson",
  desc: "Co-founder",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Martin Bergson"
}, {
  id: "0005",
  createdBy: "Angel Torff",
  desc: "Engineer",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Angel Torff"
}, {
  id: "0006",
  createdBy: "Gretchen Calzoni",
  desc: "Co-founder",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Gretchen Calzoni"
}, {
  id: "0007",
  createdBy: "Cristofer Vaccaro",
  desc: "Project Manager",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Cristofer Vaccaro"
}, {
  id: "0008",
  createdBy: "Carter Arcand",
  desc: "Structural Engineer",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Carter Arcand"
}, {
  id: "0009",
  createdBy: "Carter Arcand",
  desc: "Structural Engineer",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Carter Arcand"
}, {
  id: "0010",
  createdBy: "Carter Arcand",
  desc: "Structural Engineer",
  createdOn: "24/09/2025",
  updatedOn: "24/09/2025",
  updatedBy: "Carter Arcand"
}];

/* ============================================================ Outside Nav — Navbar
   Renders /ui_kits/outside-nav's navbar (.on-navbar). Same markup, same
   classes, same icons — so the chrome here stays in lockstep with the
   canonical Outside Nav spec. */
const OutsideNavbar = () => /*#__PURE__*/React.createElement("div", {
  className: "on-navbar"
}, /*#__PURE__*/React.createElement("div", {
  className: "on-nav-logo"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/logo-asterisk-mark.svg`,
  alt: "Asterisk"
})), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-title",
  title: "Switch workspace"
}, /*#__PURE__*/React.createElement("span", null, "Acme"), /*#__PURE__*/React.createElement("span", {
  className: "chev"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/chevron-down.svg`,
  alt: ""
}))), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-kebab",
  "aria-label": "More"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/ellipsis-horizontal.svg`,
  alt: ""
})), /*#__PURE__*/React.createElement("span", {
  className: "on-nav-saving"
}, "Saving\u2026"), /*#__PURE__*/React.createElement("div", {
  className: "on-nav-spacer"
}), /*#__PURE__*/React.createElement("div", {
  className: "on-nav-trial"
}, /*#__PURE__*/React.createElement("span", {
  className: "label"
}, "14 trial days left"), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-link"
}, "Upgrade")), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-icon-btn",
  "aria-label": "Help"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/question-mark-circle.svg`,
  alt: ""
})), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-secondary icon-only",
  "aria-label": "Edit page"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/cursor-arrow-ripple.svg`,
  alt: ""
})), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-secondary icon-only",
  "aria-label": "Settings"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/cog-6-tooth.svg`,
  alt: ""
})), /*#__PURE__*/React.createElement("button", {
  className: "on-nav-secondary"
}, /*#__PURE__*/React.createElement("img", {
  src: `${ON_ICON}/computer-desktop.svg`,
  alt: ""
}), /*#__PURE__*/React.createElement("span", null, "Publish")));

/* ============================================================ Outside Nav — Left rail
   Renders /ui_kits/outside-nav's left rail (.on-left-rail) + avatar slot.
   Pages is the default active section, matching the Outside Nav spec. */
const OutsideLeftRail = () => {
  const [active, setActive] = useState("pages");
  const items = [{
    k: "tables",
    title: "Tables",
    icon: "table-cells.svg"
  }, {
    k: "users",
    title: "User roles",
    icon: "user-group.svg"
  }, {
    k: "pages",
    title: "Pages",
    icon: "document.svg"
  }, {
    k: "design",
    title: "Design",
    icon: "paint-brush.svg"
  }, {
    k: "flows",
    title: "Flows",
    icon: "flows.svg"
  }, {
    k: "calendar",
    title: "Calendar",
    icon: "calendar-days.svg"
  }, {
    k: "plans",
    title: "Plans",
    icon: "credit-card.svg"
  }, {
    k: "settings",
    title: "Settings",
    icon: "cog-6-tooth.svg"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "rail-col"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "on-left-rail",
    "aria-label": "Builder sections"
  }, items.map(it => {
    const selected = it.k === active;
    return /*#__PURE__*/React.createElement("button", _extends({
      key: it.k,
      className: "on-nav-btn",
      title: it.title,
      "aria-label": it.title,
      "aria-current": selected ? "page" : undefined
    }, selected ? {
      "data-selected": true
    } : {}, {
      onClick: () => setActive(it.k)
    }), /*#__PURE__*/React.createElement("span", {
      className: "on-nav-btn-inner"
    }, /*#__PURE__*/React.createElement("img", {
      src: `${ON_ICON}/${it.icon}`,
      alt: ""
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "on-avatar-slot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "on-avatar",
    title: "Account"
  }, "AF")));
};

/* ============================================================ Right utility rail
   Builder-specific rail (API / Tasks / Share / etc) — distinct from the
   outside-nav left rail. */
const RightRail = () => /*#__PURE__*/React.createElement("nav", {
  className: "right-rail"
}, /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "API"
}, /*#__PURE__*/React.createElement(IconPlug, {
  size: 16
})), /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "Tasks"
}, /*#__PURE__*/React.createElement(IconList, {
  size: 16
}), /*#__PURE__*/React.createElement("span", {
  className: "rail-badge"
}, "2")), /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "Share"
}, /*#__PURE__*/React.createElement(IconShare, {
  size: 16
})), /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "Activity"
}, /*#__PURE__*/React.createElement(IconBolt, {
  size: 16
})), /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "History"
}, /*#__PURE__*/React.createElement(IconHistory, {
  size: 16
})), /*#__PURE__*/React.createElement("button", {
  className: "rail-btn",
  title: "Connections"
}, /*#__PURE__*/React.createElement(IconConnect, {
  size: 16
})));

/* ============================================================ Tables panel */
const TablesPanel = ({
  active,
  onSelect
}) => /*#__PURE__*/React.createElement("aside", {
  className: "tables-panel"
}, /*#__PURE__*/React.createElement("div", {
  className: "tp-head"
}, /*#__PURE__*/React.createElement("h3", null, "Tables"), /*#__PURE__*/React.createElement("button", {
  className: "collapse",
  title: "Collapse"
}, /*#__PURE__*/React.createElement(IconCollapse, {
  size: 16
}))), /*#__PURE__*/React.createElement("div", {
  className: "tp-search"
}, /*#__PURE__*/React.createElement("span", {
  className: "search-wrap"
}, /*#__PURE__*/React.createElement(IconSearch, {
  size: 14
}), /*#__PURE__*/React.createElement("input", {
  placeholder: "Search"
})), /*#__PURE__*/React.createElement("button", {
  className: "add-table"
}, /*#__PURE__*/React.createElement(IconPlus, {
  size: 14
}), "Table")), /*#__PURE__*/React.createElement("div", {
  className: "tp-list"
}, TABLES.map(t => /*#__PURE__*/React.createElement("div", {
  key: t.key,
  className: "tp-item" + (t.key === active ? " active" : ""),
  onClick: () => onSelect(t.key)
}, /*#__PURE__*/React.createElement("span", {
  className: "glyph"
}, /*#__PURE__*/React.createElement(IconTable, {
  size: 14
})), /*#__PURE__*/React.createElement("span", null, t.label), /*#__PURE__*/React.createElement("span", {
  className: "more"
}, /*#__PURE__*/React.createElement(IconMore, {
  size: 14
}))))));

/* ============================================================ Canvas — Records */
const RecordsView = ({
  onMenuOpen,
  openMenu
}) => {
  const [checked, setChecked] = useState({});
  const allChecked = ROWS.every(r => checked[r.id]);
  const anyChecked = ROWS.some(r => checked[r.id]);
  const toggle = id => setChecked(s => ({
    ...s,
    [id]: !s[id]
  }));
  const toggleAll = () => setChecked(allChecked ? {} : Object.fromEntries(ROWS.map(r => [r.id, true])));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "rtable"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("colgroup", null, /*#__PURE__*/React.createElement("col", {
    style: {
      width: 36
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 36
    }
  }), /*#__PURE__*/React.createElement("col", {
    style: {
      width: 80
    }
  }), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", null), /*#__PURE__*/React.createElement("col", null)), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: allChecked,
    indeterminate: anyChecked && !allChecked,
    onChange: toggleAll
  })), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconSort, {
    size: 12
  }), "ID", /*#__PURE__*/React.createElement(IconSort, {
    size: 11
  }))), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconUser, {
    size: 12
  }), "Created By")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconText, {
    size: 12
  }), "Description")), /*#__PURE__*/React.createElement("th", {
    onClick: e => onMenuOpen("createdOn", e.currentTarget.getBoundingClientRect()),
    style: {
      cursor: "pointer",
      background: openMenu === "createdOn" ? "var(--brand-50)" : undefined
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconCal, {
    size: 12
  }), "Created On", /*#__PURE__*/React.createElement(IconMore, {
    size: 12,
    style: {
      marginLeft: 6,
      color: openMenu === "createdOn" ? "var(--pink-500)" : "var(--content-muted)"
    }
  }))), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconCal, {
    size: 12
  }), "Updated On")), /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement("span", {
    className: "h"
  }, /*#__PURE__*/React.createElement(IconUser, {
    size: 12
  }), "Updated By")))), /*#__PURE__*/React.createElement("tbody", null, ROWS.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.id
  }, /*#__PURE__*/React.createElement("td", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: !!checked[r.id],
    onChange: () => toggle(r.id)
  })), /*#__PURE__*/React.createElement("td", {
    className: "row-more"
  }, /*#__PURE__*/React.createElement(IconMore, {
    size: 14
  })), /*#__PURE__*/React.createElement("td", null, r.id), /*#__PURE__*/React.createElement("td", null, r.createdBy), /*#__PURE__*/React.createElement("td", null, r.desc), /*#__PURE__*/React.createElement("td", null, r.createdOn), /*#__PURE__*/React.createElement("td", null, r.updatedOn), /*#__PURE__*/React.createElement("td", null, r.updatedBy)))))), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gradient-cta"
  }, /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  }), "New Record")));
};

/* ============================================================ Canvas — Fields */
const FieldsView = ({
  onMenuOpen,
  openMenu
}) => {
  const [selected, setSelected] = useState("createdOn");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "flist"
  }, FIELDS.map((f, i) => {
    const isSelected = openMenu === f.k || selected === f.k;
    return /*#__PURE__*/React.createElement("div", {
      key: f.k,
      className: "frow" + (isSelected ? " selected" : ""),
      onClick: e => {
        setSelected(f.k);
        onMenuOpen(f.k, e.currentTarget.getBoundingClientRect());
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "grip"
    }, /*#__PURE__*/React.createElement(IconGrip, {
      size: 12
    })), /*#__PURE__*/React.createElement("span", {
      className: "num"
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      className: "glyph"
    }, f.icon), /*#__PURE__*/React.createElement("span", {
      className: "label"
    }, f.label), /*#__PURE__*/React.createElement("span", {
      className: "meta"
    }, f.validation && /*#__PURE__*/React.createElement("span", {
      className: "chip"
    }, f.validation, /*#__PURE__*/React.createElement(IconValidation, {
      size: 12
    })), f.conditional && /*#__PURE__*/React.createElement("span", {
      className: "chip"
    }, f.conditional, /*#__PURE__*/React.createElement(IconBranch, {
      size: 12
    }))), /*#__PURE__*/React.createElement("span", {
      className: "row-more"
    }, /*#__PURE__*/React.createElement(IconMore, {
      size: 14
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "cta-row"
  }, /*#__PURE__*/React.createElement("button", {
    className: "gradient-cta"
  }, /*#__PURE__*/React.createElement(IconPlus, {
    size: 14
  }), "New Field")));
};

/* Field context menu — mirrors the Figma reference */
const FieldMenu = ({
  pos,
  view,
  onClose
}) => {
  if (!pos) return null;
  const isField = view === "fields";
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "field-menu",
    style: {
      top: pos.top,
      left: pos.left
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconCog, {
    size: 14
  })), "Open Field Settings"), isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconSwap, {
    size: 14
  })), "Change Field Type"), isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconStar, {
    size: 14
  })), "Make this the Display Field ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: "var(--content-muted)"
    }
  }, /*#__PURE__*/React.createElement(IconHelp, {
    size: 12
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconCopy, {
    size: 14
  })), "Duplicate Field"), !isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconArrowLeft, {
    size: 14
  })), "Insert Field Left"), !isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconArrowRight, {
    size: 14
  })), "Insert Field Right"), !isField && /*#__PURE__*/React.createElement("div", {
    className: "sep"
  }), !isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconAZ, {
    size: 14
  })), "Sort A \u2192 Z"), !isField && /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconZA, {
    size: 14
  })), "Sort Z \u2192 A"), /*#__PURE__*/React.createElement("div", {
    className: "sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mi highlight"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconValidation, {
    size: 14
  })), "Validation Rules ", /*#__PURE__*/React.createElement("span", {
    className: "pill"
  }, "2")), /*#__PURE__*/React.createElement("div", {
    className: "mi"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconBranch, {
    size: 14
  })), "Conditional Rules ", /*#__PURE__*/React.createElement("span", {
    className: "pill zero"
  }, "0")), /*#__PURE__*/React.createElement("div", {
    className: "sep"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mi danger"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(IconTrash, {
    size: 14
  })), "Delete Field")));
};

/* ============================================================ Canvas */
const Canvas = ({
  tableLabel
}) => {
  const [view, setView] = useState("records");
  const [menu, setMenu] = useState(null);
  const openMenu = (key, rect) => {
    // Anchor menu to right edge of trigger
    setMenu({
      key,
      top: rect.top + window.scrollY + rect.height + 4,
      left: Math.min(rect.right - 248, window.innerWidth - 260)
    });
  };
  return /*#__PURE__*/React.createElement("main", {
    className: "canvas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t"
  }, tableLabel), /*#__PURE__*/React.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/React.createElement(IconButton, {
    title: "Import"
  }, /*#__PURE__*/React.createElement(IconUpload, {
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    title: "Export"
  }, /*#__PURE__*/React.createElement(IconDownload, {
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    title: "More"
  }, /*#__PURE__*/React.createElement(IconMore, {
    size: 16
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rf-tabs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tab" + (view === "records" ? " on" : ""),
    onClick: () => setView("records")
  }, "Records", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, "25")), /*#__PURE__*/React.createElement("div", {
    className: "tab" + (view === "fields" ? " on" : ""),
    onClick: () => setView("fields")
  }, "Fields", /*#__PURE__*/React.createElement("span", {
    className: "count"
  }, "6")), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tools"
  }, /*#__PURE__*/React.createElement("button", {
    className: "pill-btn split on"
  }, /*#__PURE__*/React.createElement(IconSort, {
    size: 12
  }), /*#__PURE__*/React.createElement("span", {
    className: "divider"
  }), /*#__PURE__*/React.createElement(IconText, {
    size: 12
  }), "Name"), /*#__PURE__*/React.createElement("button", {
    className: "pill-btn"
  }, /*#__PURE__*/React.createElement(IconFilter, {
    size: 12
  }), "Filter"), /*#__PURE__*/React.createElement("span", {
    className: "tool-search"
  }, /*#__PURE__*/React.createElement(IconSearch, {
    size: 14
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search"
  })))), view === "records" ? /*#__PURE__*/React.createElement(RecordsView, {
    onMenuOpen: openMenu,
    openMenu: menu?.key
  }) : /*#__PURE__*/React.createElement(FieldsView, {
    onMenuOpen: openMenu,
    openMenu: menu?.key
  }), menu && /*#__PURE__*/React.createElement(FieldMenu, {
    pos: menu,
    view: view,
    onClose: () => setMenu(null)
  }));
};

/* ============================================================ App */
const App = () => {
  const [active, setActive] = useState("t1");
  const tableLabel = (TABLES.find(t => t.key === active) || TABLES[0]).label;
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(OutsideNavbar, null), /*#__PURE__*/React.createElement(OutsideLeftRail, null), /*#__PURE__*/React.createElement(TablesPanel, {
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement(Canvas, {
    tableLabel: tableLabel
  }), /*#__PURE__*/React.createElement(RightRail, null));
};
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/builder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// icons.jsx — Heroicons-2-style glyphs used by the Builder UI kit.
// Kept inline so the kit runs offline. Size via the `size` prop.

const Icon = ({
  d,
  size = 16,
  stroke,
  className,
  style
}) => /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: stroke ? "none" : "currentColor",
  stroke: stroke ? "currentColor" : undefined,
  strokeWidth: stroke ? 1.6 : undefined,
  strokeLinecap: stroke ? "round" : undefined,
  strokeLinejoin: stroke ? "round" : undefined,
  className: className,
  style: style
}, typeof d === "string" ? /*#__PURE__*/React.createElement("path", {
  d: d
}) : d);

/* Asterisk mark — tile uses currentColor so the gradient comes from the parent */
const IconAsterisk = ({
  size = 18
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4v16M5 7l14 10M5 17 19 7"
}));
const IconAsteriskGradient = ({
  size = 20
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none"
}, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
  id: "ast-g",
  x1: "0%",
  y1: "0%",
  x2: "100%",
  y2: "100%"
}, /*#__PURE__*/React.createElement("stop", {
  offset: "0%",
  stopColor: "#86307B"
}), /*#__PURE__*/React.createElement("stop", {
  offset: "100%",
  stopColor: "#E61875"
}))), /*#__PURE__*/React.createElement("g", {
  stroke: "url(#ast-g)",
  strokeWidth: "2.4",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4v16"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 7l14 10"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 17 19 7"
})));
const IconSearch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M21 21l-4.3-4.3M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
}));
const IconPlus = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 5v14M5 12h14"
}));
const IconChevDown = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m6 9 6 6 6-6"
}));
const IconChevRight = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m9 6 6 6-6 6"
}));
const IconTable = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Zm0 3.75h16.5m-16.5 3.75h16.5M9.75 10.5v9"
}));
const IconForm = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 12h6m-6 3.5h4M7.5 4.5h9A2.25 2.25 0 0 1 18.75 6.75v10.5A2.25 2.25 0 0 1 16.5 19.5h-9A2.25 2.25 0 0 1 5.25 17.25V6.75A2.25 2.25 0 0 1 7.5 4.5Zm1.5 3.75h6"
}));
const IconPage = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 17.25v-5.5M12 17.25V9M15 17.25v-3.75M5.25 5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H6.75a1.5 1.5 0 0 1-1.5-1.5V5.25Z"
}));
const IconPages = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5.25 4.5h9a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5Zm12 3v12a1.5 1.5 0 0 0 1.5 1.5"
}));
const IconCog = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.5-3a7.5 7.5 0 0 0-.13-1.41l1.82-1.42-1.9-3.3-2.17.8a7.5 7.5 0 0 0-2.44-1.42l-.32-2.3h-3.8l-.32 2.3a7.5 7.5 0 0 0-2.44 1.42l-2.17-.8-1.9 3.3 1.82 1.42A7.5 7.5 0 0 0 4.5 12c0 .48.05.95.13 1.41l-1.82 1.42 1.9 3.3 2.17-.8a7.5 7.5 0 0 0 2.44 1.42l.32 2.3h3.8l.32-2.3a7.5 7.5 0 0 0 2.44-1.42l2.17.8 1.9-3.3-1.82-1.42c.08-.46.13-.93.13-1.41Z"
}));
const IconFilter = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 4.5h16.5l-6 8.25v6l-4.5 2.25v-8.25L3.75 4.5Z"
}));
const IconSort = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M7 4v16M7 20l-3-3m3 3 3-3M17 20V4m0 0-3 3m3-3 3 3"
}));
const IconMore = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
}));
const IconLightning = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M13.5 3 4 14h6l-1.5 7L19 10h-6l.5-7Z"
}));
const IconBolt = IconLightning;
const IconPlay = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M8 5v14l11-7L8 5Z"
}));
const IconUndo = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 14 4 9l5-5M4 9h10a6 6 0 0 1 0 12h-4"
}));
const IconRedo = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m15 14 5-5-5-5M20 9H10a6 6 0 0 0 0 12h4"
}));
const IconEye = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M2.5 12S6 5.25 12 5.25 21.5 12 21.5 12 18 18.75 12 18.75 2.5 12 2.5 12Zm9.5 2.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
}));
const IconLink = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"
}));
const IconCheck = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m5 12 5 5L20 7"
}));
const IconX = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 6l12 12M18 6 6 18"
}));
const IconDb = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Zm0 0v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"
}));
const IconText = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6.5 6h11M12 6v12M9.5 18h5"
}));
const IconHash = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 9h14M5 15h14M10 4 8 20M16 4l-2 16"
}));
const IconCal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3.75 9.75h16.5M6 4.5v3m12-3v3M5.25 6h13.5A1.5 1.5 0 0 1 20.25 7.5v11.25A1.5 1.5 0 0 1 18.75 20.25H5.25A1.5 1.5 0 0 1 3.75 18.75V7.5A1.5 1.5 0 0 1 5.25 6Z"
}));
const IconUser = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M15.75 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20a7.5 7.5 0 0 1 15 0"
}));
const IconUsers = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 2a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Zm7-6a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm-1 8a5 5 0 0 1 6 4.5h-4"
}));
const IconBell = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M14.25 18a2.25 2.25 0 0 1-4.5 0M5.75 9a6.25 6.25 0 1 1 12.5 0c0 3.5 1.5 5 2.25 6H3.5C4.25 14 5.75 12.5 5.75 9Z"
}));

/* Topbar / general */
const IconQuestion = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
}));
const IconExternal = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M14 4h6v6M20 4 10 14M5 7v12a1 1 0 0 0 1 1h12"
}));
const IconMonitor = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 5h18v12H3zM8 21h8M12 17v4"
}));
const IconCollapse = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 4v16M14 9l-3 3 3 3M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
}));

/* Left rail */
const IconSparkle = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 3l1.7 4.4L18 9l-4.4 1.7L12 15l-1.7-4.4L6 9l4.4-1.6L12 3Zm6 9 .9 2.2 2.1.7-2.1.7L18 18l-.9-2.4-2.1-.7 2.1-.7L18 12Z"
}));
const IconBrush = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9.5 14.5 4 20l3 .5L8 18M19 4l1 1-9 9-2-2 9-9 1 1Zm-9.5 10.5L8 18l-2 2-2-1 5.5-5.5Z"
}));
const IconCode = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m8 6-5 6 5 6m8-12 5 6-5 6m-2-13-4 14"
}));
const IconBag = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5.5 7h13l-1 13a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5.5 7Zm3 0a3.5 3.5 0 1 1 7 0"
}));

/* Right rail */
const IconPlug = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M9 4v4m6-4v4M5 8h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V8Zm7 8v6"
}));
const IconList = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"
}));
const IconShare = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M16 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.6 10.6 13.4 4M8.6 13.4l4.8 6.6"
}));
const IconHistory = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5M12 7v5l3 2"
}));
const IconConnect = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.5 16.5l9-9M7.5 17 16 17"
}));

/* Toolbar / page-head */
const IconUpload = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 16V4m0 0L7 9m5-5 5 5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
}));
const IconDownload = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 4v12m0 0L7 11m5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
}));

/* Field menu */
const IconSwap = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M7 7h13l-3-3M17 17H4l3 3"
}));
const IconStar = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "m12 4 2.5 5 5.5.8-4 3.9 1 5.5L12 16.7 7 19.2l1-5.5-4-3.9 5.5-.8L12 4Z"
}));
const IconCopy = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M8 8h11a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm-3 8H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1"
}));
const IconArrowLeft = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M19 12H5m0 0 6 6m-6-6 6-6"
}));
const IconArrowRight = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 12h14m0 0-6-6m6 6-6 6"
}));
const IconAZ = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 4h6L5 14h6M14 14V4l3 6 3-6v10"
}));
const IconZA = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 4h6L5 14h6M14 4v10l3-6 3 6V4"
}));
const IconValidation = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M3 7h13M3 12h9M3 17h6m6.5 0c.83-.83 2.17-2 3-3m0 0c.83-1 1-2 1-3"
}));
const IconBranch = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M6 4v16m12-13a3 3 0 1 1-3 3v3a4 4 0 0 1-4 4H6m12-3v6m-3 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
}));
const IconTrash = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-7 0v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7"
}));
const IconHelp = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  stroke: true,
  d: "M12 17h.01M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
}));

/* Field row */
const IconGrip = p => /*#__PURE__*/React.createElement(Icon, _extends({}, p, {
  d: "M9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
}));
Object.assign(window, {
  Icon,
  IconAsterisk,
  IconAsteriskGradient,
  IconSearch,
  IconPlus,
  IconChevDown,
  IconChevRight,
  IconTable,
  IconForm,
  IconPage,
  IconPages,
  IconCog,
  IconFilter,
  IconSort,
  IconMore,
  IconLightning,
  IconBolt,
  IconPlay,
  IconUndo,
  IconRedo,
  IconEye,
  IconLink,
  IconCheck,
  IconX,
  IconDb,
  IconText,
  IconHash,
  IconCal,
  IconUser,
  IconUsers,
  IconBell,
  IconQuestion,
  IconExternal,
  IconCollapse,
  IconMonitor,
  IconSparkle,
  IconBrush,
  IconCode,
  IconBag,
  IconPlug,
  IconList,
  IconShare,
  IconHistory,
  IconConnect,
  IconUpload,
  IconDownload,
  IconSwap,
  IconStar,
  IconCopy,
  IconArrowLeft,
  IconArrowRight,
  IconAZ,
  IconZA,
  IconValidation,
  IconBranch,
  IconTrash,
  IconHelp,
  IconGrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/primitives-extended.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// primitives-extended.jsx — additional Asterisk components that were missing
// from primitives.jsx but defined in the Asterisk Figma library.
//
// Adds: DestructiveButton variants (primary/secondary/minimal), NeutralFilledBadge,
// Avatar, Skeleton, SectionDivider, Tooltip, ColumnHeader, Tag (with status accent),
// Header, Switch (figma-accurate). All consume tokens from colors_and_type.css.
//
// Existing primitives.jsx is untouched. This file augments window.* with the new ones.

/* ================================================================ DestructiveButton
   Mirrors Type=Destructive Primary / Secondary / Minimal from the Figma file.
   Asterisk's danger styling is a separate axis (color) crossed with the same
   three fill levels as the standard Button, so we expose them as their own
   variant family rather than a single 'danger' shortcut. */
const destructivePalette = {
  primary: {
    bg: "var(--bg-action-destructive-primary)",
    color: "#fff",
    border: "var(--bg-action-destructive-primary)",
    hoverBg: "var(--bg-action-destructive-emphasis)",
    hoverBorder: "var(--bg-action-destructive-emphasis)"
  },
  secondary: {
    bg: "#fff",
    color: "var(--content-destructive-default)",
    border: "var(--border-destructive-default)",
    hoverBg: "var(--bg-destructive)",
    hoverBorder: "var(--border-destructive-emphasis)"
  },
  minimal: {
    bg: "transparent",
    color: "var(--content-destructive-default)",
    border: "transparent",
    hoverBg: "var(--bg-destructive)",
    hoverBorder: "transparent"
  }
};
const DestructiveButton = ({
  variant = "primary",
  size,
  leading,
  trailing,
  children,
  style,
  disabled,
  titleCase = true,
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const p = destructivePalette[variant];
  const label = titleCase && typeof window.titleCaseChildren === "function" ? window.titleCaseChildren(children) : children;
  const sizeStyle = size === "sm" ? {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  } : size === "lg" ? {
    height: 40,
    padding: "0 18px",
    fontSize: 15
  } : {
    height: 36,
    padding: "0 14px",
    fontSize: 14
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 6,
      borderRadius: 8,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      cursor: disabled ? "not-allowed" : "pointer",
      whiteSpace: "nowrap",
      outline: "none",
      transition: "background .12s, border-color .12s, box-shadow .12s",
      background: hover && !disabled ? p.hoverBg : p.bg,
      color: p.color,
      border: `1px solid ${hover && !disabled ? p.hoverBorder : p.border}`,
      boxShadow: focus ? "var(--focus-ring-destructive)" : "none",
      opacity: disabled ? 0.4 : 1,
      ...sizeStyle,
      ...style
    }
  }), leading, label, trailing);
};

/* ================================================================ NeutralFilledBadge
   Type=Neutral-Filled from Figma. Pill-shape, gray-200 fill, gray-700 text,
   500 weight, letter-spacing .02em. Distinct from primitives.jsx Badge: no
   color-axis variants, includes optional left/right icon slots, taller. */
const NeutralFilledBadge = ({
  leading,
  trailing,
  children,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    height: 24,
    padding: "4px 8px",
    borderRadius: 9999,
    background: "var(--gray-200)",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: ".02em",
    color: "var(--gray-700)",
    whiteSpace: "nowrap",
    ...style
  }
}, leading, children, trailing);

/* ================================================================ Avatar
   StyleInitalsSize32pxDark from Figma. Initials chip, square-rounded.
   Sizes: sm 24, md 32, lg 40. Tone: dark (gray-800 fill / white text)
   or light (gray-200 fill / gray-800 text). */
const Avatar = ({
  initials,
  size = 32,
  tone = "dark",
  style
}) => {
  const fontSize = size <= 24 ? 11 : size <= 32 ? 13 : 15;
  const tones = {
    dark: {
      bg: "var(--gray-800)",
      fg: "#fff"
    },
    light: {
      bg: "var(--gray-200)",
      fg: "var(--gray-800)"
    },
    brand: {
      bg: "var(--brand-500)",
      fg: "#fff"
    }
  };
  const t = tones[tone] || tones.dark;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize,
      letterSpacing: ".02em",
      flex: "none",
      ...style
    }
  }, initials);
};

/* ================================================================ Skeleton
   SkeletonNo from Figma. Subtle loading placeholder. Animates a soft
   shimmer in gray-200/gray-100 — color-only, no transforms. */
const Skeleton = ({
  width = "100%",
  height = 14,
  radius = 4,
  style
}) => /*#__PURE__*/React.createElement("span", {
  "aria-hidden": "true",
  style: {
    display: "inline-block",
    width,
    height,
    borderRadius: radius,
    background: "linear-gradient(90deg, var(--gray-200) 0%, var(--gray-100) 50%, var(--gray-200) 100%)",
    backgroundSize: "200% 100%",
    animation: "ast-skeleton 1.4s ease-in-out infinite",
    ...style
  }
});

/* ================================================================ SectionDivider
   TypeSectionDividerStateDefault — a labeled rule between menu/inspector
   sections. Hairline above + small caps label. */
const SectionDivider = ({
  label,
  trailing,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 8px 4px",
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)",
    flex: trailing ? 1 : "none"
  }
}, label), trailing);

/* ================================================================ Tooltip
   Dark-on-light. Appears on hover with a small delay. Default-resting tooltip
   sits above its trigger. Uses bg-intense (gray-700) fill / white text per Asterisk. */
const Tooltip = ({
  label,
  kbd,
  placement = "top",
  children
}) => {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      [placement === "top" ? "bottom" : "top"]: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--bg-intense)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: "16px",
      padding: "4px 8px",
      borderRadius: 4,
      whiteSpace: "nowrap",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      zIndex: 50
    }
  }, label, kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1 var(--font-mono)",
      color: "var(--gray-300)",
      paddingLeft: 4,
      borderLeft: "1px solid var(--gray-600)",
      marginLeft: 2
    }
  }, kbd)));
};

/* ================================================================ ColumnHeader
   StateRestingLeftNumberNo from Figma — sortable table-column header.
   gray-100 fill, label + sort affordance + ellipsis menu. */
const ColumnHeader = ({
  icon,
  label,
  sorted,
  onSortClick,
  onMenuClick,
  count,
  style
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 32,
      padding: "4px 4px 4px 8px",
      background: "var(--gray-100)",
      borderBottom: "1px solid var(--border-default)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      display: "inline-flex",
      color: "var(--content-secondary)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/16px var(--font-sans)",
      letterSpacing: ".02em",
      color: "var(--content-secondary)"
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, typeof count === "number" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: 4,
      background: "var(--gray-200)",
      color: "var(--content-secondary)",
      font: "500 12px/1 var(--font-sans)"
    }
  }, count), sorted && /*#__PURE__*/React.createElement("span", {
    onClick: onSortClick,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      background: "var(--bg-selection-muted)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: onSortClick ? "pointer" : "default",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: sorted === "desc" ? "M6 9l6 6 6-6" : "M6 15l6-6 6 6"
  }))), (hover || sorted) && onMenuClick && /*#__PURE__*/React.createElement("button", {
    onClick: onMenuClick,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      border: "none",
      background: "transparent",
      color: "var(--content-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.6"
  })))));
};

/* ================================================================ Tag (Cell summary row)
   StateResting from Figma — the labelled cell with optional left status accent
   and trailing required-asterisk. Used in form/cell-summary contexts. */
const Tag = ({
  label,
  status,
  required,
  style
}) => {
  const statusBg = {
    success: "var(--green-400)",
    warning: "var(--yellow-400)",
    error: "var(--red-500)",
    info: "var(--blue-100)"
  }[status];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      height: 36,
      padding: "8px 12px",
      background: "#fff",
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-secondary)",
      ...style
    }
  }, statusBg && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4,
      height: "100%",
      background: statusBg
    }
  }), label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-destructive-default)",
      marginLeft: 4
    }
  }, "*"));
};

/* ================================================================ Header
   HeaderDefault from /external-shared. Page or panel header: title row with
   trailing actions, no sub-rule. */
const Header = ({
  title,
  eyebrow,
  description,
  leading,
  actions,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    padding: "16px 20px",
    borderBottom: "1px solid var(--border-default)",
    background: "#fff",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    flex: 1,
    minWidth: 0
  }
}, leading, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 0
  }
}, eyebrow && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 12px/16px var(--font-sans)",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)"
  }
}, eyebrow), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "600 20px/24px var(--font-subhead)",
    color: "var(--content-default)"
  }
}, title), description && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "400 14px/20px var(--font-sans)",
    color: "var(--content-secondary)"
  }
}, description))), actions && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flex: "none"
  }
}, actions));

/* ================================================================ Switch (figma-accurate)
   SelectedNoStateDefault from Figma. 40×24, larger track than primitives.jsx Toggle (32×18).
   Uses gray-300 off / gray-900 on, doubled-ring focus. Coexists with Toggle —
   pick Switch for canvas-density UI, Toggle for inspector rows. */
const Switch = ({
  on,
  onChange,
  disabled,
  label,
  style
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-default)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => !disabled && onChange && onChange(!on),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    disabled: disabled,
    style: {
      width: 40,
      height: 24,
      borderRadius: 9999,
      border: "none",
      background: on ? "var(--gray-900)" : "var(--gray-300)",
      position: "relative",
      padding: 0,
      cursor: "inherit",
      transition: "background .15s",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 19 : 3,
      width: 18,
      height: 18,
      background: "#fff",
      borderRadius: 9999,
      boxShadow: "var(--shadow-sm)",
      transition: "left .15s"
    }
  })), label);
};

/* ================================================================ Card
   Source: Card from Figma. White surface, 8px radius, sm dual-shadow, 24px padding.
   Header row (title 20/24 + optional trailing badge), optional description, body slot. */
const Card = ({
  title,
  description,
  badge,
  children,
  width,
  style,
  variant = "shadow"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--surface-default, #fff)",
    borderRadius: 8,
    boxShadow: variant === "outline" ? "none" : "0px 1px 2px 0px rgba(0,0,0,0.03), 0px 1px 3px 0px rgba(0,0,0,0.05)",
    border: variant === "outline" ? "1px solid var(--border-default)" : "none",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    gap: 24,
    width,
    ...style
  }
}, (title || description || badge) && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, (title || badge) && /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24
  }
}, title && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 20px/24px var(--font-sans)",
    color: "var(--content-default)"
  }
}, title), badge && /*#__PURE__*/React.createElement("span", null, badge)), description && /*#__PURE__*/React.createElement("span", {
  style: {
    font: "400 16px/24px var(--font-sans)",
    color: "var(--content-secondary)"
  }
}, description)), children);

/* ================================================================ Snackbar
   Source: Type=Default / Type=Destructive (323×36, 8px radius).
   Dark gray surface w/ white text by default, light error surface w/ error-content
   on destructive. Centered text, optional left emoji/icon, trailing × button. */
const snackbarPalette = {
  default: {
    bg: "var(--gray-700, #564D54)",
    fg: "#fff",
    icon: "rgba(255,255,255,0.7)"
  },
  success: {
    bg: "var(--bg-success)",
    fg: "var(--content-success-default)",
    icon: "var(--content-success-default)"
  },
  destructive: {
    bg: "var(--error-surface)",
    fg: "var(--error-content)",
    icon: "var(--error-content)"
  }
};
const Snackbar = ({
  variant = "default",
  icon,
  children,
  onDismiss,
  style
}) => {
  const p = snackbarPalette[variant] || snackbarPalette.default;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      minWidth: 240,
      maxWidth: 480,
      padding: "8px 12px",
      borderRadius: 8,
      background: p.bg,
      color: p.fg,
      font: "400 14px/20px var(--font-sans)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flex: "none"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, children), onDismiss !== undefined && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      padding: 0,
      background: "transparent",
      border: 0,
      cursor: "pointer",
      color: p.icon
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
};

/* ================================================================ SelectionCard
   Source: With Button?=True/False, Selected?=Yes/No (274×52). Bordered row with
   radio + label, optional description, optional right-side actions (badge / icon /
   chip). Selected = bg gray-50, border gray-900.

   Two selection modes:
   - select="radio"     (default) — radio dot, supports description
   - select="checkbox"           — checkbox tick, optional leading `icon`, text-only
                                   (no description, by design — keep it terse)
*/
const SelectionCard = ({
  label,
  description,
  selected = false,
  disabled = false,
  onChange,
  badge,
  actions,
  select = "radio",
  icon,
  width,
  style
}) => {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const isCheckbox = select === "checkbox";
  const border = selected ? "var(--gray-900, #1B181B)" : hover && !disabled ? "var(--border-strong)" : "var(--border-default)";
  const bg = selected ? "var(--gray-50, #FAFAFA)" : "#fff";
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      width,
      padding: 8,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, isCheckbox ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: 4,
      background: selected ? "var(--gray-900, #1B181B)" : "#fff",
      boxShadow: `inset 0 0 0 1.5px ${selected ? "var(--gray-900, #1B181B)" : "var(--border-strong)"}`,
      transition: "background .12s, box-shadow .12s"
    }
  }, selected && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2 4.8 8.5 9.5 3.7",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: selected,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      pointerEvents: "none"
    }
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: "50%",
      border: `1.5px solid ${selected ? "var(--gray-900, #1B181B)" : "var(--border-strong)"}`,
      background: "#fff",
      transition: "border-color .12s"
    }
  }, selected && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--gray-900, #1B181B)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: selected,
    disabled: disabled,
    onChange: () => onChange && onChange(true),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0,
      margin: 0,
      pointerEvents: "none"
    }
  })), isCheckbox && icon && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      color: "var(--content-secondary)"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: "500 14px/16px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label), (badge || actions) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, badge, actions)), !isCheckbox && description && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 24,
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, description));
};

/* ================================================================ Slider
   Source: State=Default thumb (16×16, brand-200 ring, sm shadow) + Progress.
   Tracks the typical h=16 hit area, 4px filled track, 16px thumb. */
const Slider = ({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled,
  width = 240,
  style
}) => {
  const [drag, setDrag] = React.useState(false);
  const trackRef = React.useRef(null);
  const pct = (value - min) / (max - min) * 100;
  const update = clientX => {
    if (!trackRef.current || disabled) return;
    const rect = trackRef.current.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    const stepped = Math.round(raw / step) * step;
    onChange && onChange(Math.min(max, Math.max(min, stepped)));
  };
  const onPointerDown = e => {
    if (disabled) return;
    setDrag(true);
    update(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = e => {
    if (drag) update(e.clientX);
  };
  const onPointerUp = () => setDrag(false);
  return /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: onPointerUp,
    style: {
      position: "relative",
      width,
      height: 16,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      touchAction: "none",
      ...style
    },
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    "aria-disabled": disabled
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 6,
      height: 4,
      background: "var(--gray-200, #E7E4E6)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      height: 4,
      width: `${pct}%`,
      background: "var(--gray-900, #1B181B)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 8px)`,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "#fff",
      border: "2px solid var(--brand-200, #D3A0CB)",
      boxShadow: drag ? "0 4px 12px rgba(0,0,0,0.12)" : "0 4px 12px rgba(0,0,0,0.08)",
      transition: drag ? "none" : "border-color .12s, box-shadow .12s"
    }
  }));
};

/* ================================================================ Stylesheet — keyframes */
if (typeof document !== "undefined" && !document.getElementById("ast-extended-keyframes")) {
  const s = document.createElement("style");
  s.id = "ast-extended-keyframes";
  s.textContent = `@keyframes ast-skeleton { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`;
  document.head.appendChild(s);
}

/* ================================================================ ProgressStepper
   Source: /Modal/components/ActiveStep{1,2,3}StepName from Figma.
   8px high pill segments separated by 8px gaps, brand-gradient fill on
   completed/active segments, gray-200 on remaining. Eyebrow "Step N of M"
   above. Used inside large stepped modals. */
const ProgressStepper = ({
  step = 1,
  total = 3,
  label,
  width,
  style
}) => {
  const segments = Array.from({
    length: total
  }).map((_, i) => i < step);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, label ?? `Step ${step} of ${total}`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, segments.map((on, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      height: 8,
      borderRadius: 9999,
      background: on ? "var(--gradient-brand)" : "var(--neutral-200, #E2DCE0)"
    }
  }))));
};

/* ================================================================ Modal
   Source: /Modal/components/Size{Small,Large}Steps{No,Yes} + /Modal/Modal/Frame10123046
   from Figma. Compose: header (title 20/24, optional desc 12/16, optional X,
   optional ProgressStepper, optional leading icon avatar) → body → footer
   (left link slot + right action cluster, separated from body by a hairline
   rule). The footer rule is part of the chrome, present even with no actions.

   Sizes: sm=384, md=480, lg=640, xl=864 (matches Figma tokens).
   Padding: 24px all sides. Radius: var(--radius-2xl) (12). Shadow: --shadow-xl.

   This wraps content in a scrim by default; pass scrim={false} to render the
   surface alone (e.g. inside a docs page where you're showing multiple
   examples on a single backdrop). */
const modalSizes = {
  sm: 384,
  md: 480,
  lg: 640,
  xl: 864
};
const Modal = ({
  size = "md",
  title,
  description,
  icon,
  // ReactNode rendered in a 24px slot to the left of the title
  step,
  // { current, total, label? } → renders ProgressStepper
  onClose,
  footerLeft,
  // typically a "Learn More" link
  footerRight,
  // typically <Button>Cancel</Button><Button variant="gradient">Save</Button>
  scrim = true,
  maxBodyHeight,
  // px — when set, the body scrolls
  children,
  style
}) => {
  const width = modalSizes[size] ?? size;
  const surface = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      background: "#fff",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-xl)",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 24px 16px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      paddingRight: 32
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--content-default)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: "500 20px/24px var(--font-subhead, var(--font-sans))",
      color: "var(--content-default)",
      letterSpacing: "-0.01em"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, description), step && /*#__PURE__*/React.createElement(ProgressStepper, {
    step: step.current,
    total: step.total,
    label: step.label,
    width: step.width,
    style: {
      marginTop: 12
    }
  }))), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      position: "absolute",
      top: 24,
      right: 24,
      width: 24,
      height: 24,
      padding: 0,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-base)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 24px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...(maxBodyHeight ? {
        maxHeight: maxBodyHeight,
        overflowY: "auto"
      } : {})
    }
  }, children), (footerLeft || footerRight) && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle, #EFECEE)",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, footerLeft), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, footerRight)));
  if (!scrim) return surface;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay, rgba(13,12,12,0.6))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 32,
      zIndex: 1000
    }
  }, surface);
};
Object.assign(window, {
  DestructiveButton,
  NeutralFilledBadge,
  Avatar,
  Skeleton,
  SectionDivider,
  Tooltip,
  ColumnHeader,
  Tag,
  Header,
  Switch,
  Card,
  Snackbar,
  SelectionCard,
  Slider,
  Modal,
  ProgressStepper
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/primitives-extended.jsx", error: String((e && e.message) || e) }); }

// ui_kits/builder/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// primitives.jsx — reusable Asterisk components: Button, Badge, Input, Select,
// Toggle, Checkbox, RadioGroup, Menu, Banner, Tabs, Chip, IconButton, Tooltip.
// All match the Asterisk token system defined in colors_and_type.css.

const cx = (...args) => args.filter(Boolean).join(" ");

/* ============================================================ titleCase
   Asterisk button labels are always Title Case. The component does this for
   you so callers can write natural-cased copy ("delete table", "save and
   continue") and not have to remember the rule.
   - Lowercases small connecting words (a/an/the/and/or/but/for/to/of/in/on/at/by/with/vs/per/via)
     EXCEPT when they're the first or last token.
   - Leaves any token that already contains an uppercase letter alone — so
     acronyms (API, URL), product names (iOS, GitHub) and intentional casing survive.
   - Recurses into React fragments / nested children, only rewriting plain strings.
*/
const TC_SMALL = new Set(["a", "an", "the", "and", "or", "but", "nor", "for", "to", "of", "in", "on", "at", "by", "with", "vs", "per", "via", "as", "up", "off"]);
const titleCaseString = s => {
  const tokens = s.split(/(\s+)/); // keep whitespace runs as separators
  const wordIdxs = tokens.map((t, i) => /\S/.test(t) ? i : -1).filter(i => i >= 0);
  const firstWord = wordIdxs[0];
  const lastWord = wordIdxs[wordIdxs.length - 1];
  return tokens.map((tok, i) => {
    if (!/\S/.test(tok)) return tok;
    if (/[A-Z]/.test(tok)) return tok; // already-cased / acronym → leave
    const lower = tok.toLowerCase();
    const bare = lower.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
    if (TC_SMALL.has(bare) && i !== firstWord && i !== lastWord) return lower;
    return tok.replace(/(\p{L})(\p{L}*)/u, (_, a, b) => a.toUpperCase() + b);
  }).join("");
};
const titleCaseChildren = node => {
  if (typeof node === "string") return titleCaseString(node);
  if (Array.isArray(node)) return node.map(titleCaseChildren);
  return node; // React elements, numbers, null — leave intact
};

/* ============================================================ Button */
const buttonStyles = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: 36,
    padding: "0 14px",
    borderRadius: 8,
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    fontWeight: 500,
    border: "1px solid transparent",
    background: "#fff",
    color: "var(--content-default)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    outline: "none",
    transition: "background .12s, border-color .12s, box-shadow .12s"
  },
  sm: {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  },
  lg: {
    height: 40,
    padding: "0 18px",
    fontSize: 15
  },
  variants: {
    primary: {
      background: "var(--neutral-900)",
      color: "#fff",
      borderColor: "var(--neutral-900)"
    },
    gradient: {
      background: "var(--gradient-brand)",
      color: "#fff",
      border: "none",
      fontWeight: 600
    },
    secondary: {
      background: "#fff",
      borderColor: "var(--border-default)",
      color: "var(--content-default)"
    },
    minimal: {
      background: "transparent",
      borderColor: "transparent",
      color: "var(--content-default)"
    },
    danger: {
      background: "var(--error-emphasis)",
      color: "#fff",
      borderColor: "var(--error-emphasis)"
    },
    "brand-outline": {
      background: "#fff",
      color: "var(--brand-emphasis)",
      borderColor: "var(--brand-emphasis)"
    }
  }
};
const Button = ({
  variant = "secondary",
  size,
  leading,
  trailing,
  children,
  style,
  disabled,
  titleCase = true,
  ...rest
}) => {
  const label = titleCase ? titleCaseChildren(children) : children;
  const [hover, setHover] = React.useState(false);
  const base = {
    ...buttonStyles.base,
    ...(size === "sm" ? buttonStyles.sm : size === "lg" ? buttonStyles.lg : {}),
    ...buttonStyles.variants[variant]
  };
  if (hover && !disabled) {
    if (variant === "secondary") {
      base.background = "var(--brand-surface)";
      base.borderColor = "var(--border-strong)";
    } else if (variant === "minimal") {
      base.background = "var(--neutral-100)";
    } else if (variant === "primary") {
      base.background = "var(--neutral-800)";
      base.borderColor = "var(--neutral-800)";
    } else if (variant === "gradient") {
      base.filter = "brightness(1.06)";
    } else if (variant === "danger") {
      base.filter = "brightness(1.05)";
    } else if (variant === "brand-outline") {
      base.background = "var(--brand-surface)";
    }
  }
  if (disabled) {
    base.opacity = .4;
    base.cursor = "not-allowed";
  }
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...style
    }
  }), leading, label, trailing);
};

/* ============================================================ IconButton */
const IconButton = ({
  children,
  size = 28,
  title,
  style,
  active,
  ...rest
}) => {
  const [hover, setHover] = React.useState(false);
  const bg = active ? "var(--neutral-900)" : hover ? "var(--surface-muted)" : "transparent";
  const color = active ? "#fff" : "var(--content-secondary)";
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: 6,
      border: "none",
      background: bg,
      color,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background .12s",
      ...style
    }
  }), children);
};

/* ============================================================ Badge */
const badgePalette = {
  gradient: {
    background: "var(--gradient-brand)",
    color: "#fff"
  },
  neutral: {
    background: "var(--neutral-100)",
    color: "var(--neutral-700)"
  },
  outline: {
    background: "transparent",
    color: "var(--neutral-700)",
    boxShadow: "inset 0 0 0 1px var(--neutral-400)"
  },
  success: {
    background: "var(--success-50)",
    color: "var(--success-700)"
  },
  warning: {
    background: "var(--warning-50)",
    color: "var(--warning-700)"
  },
  error: {
    background: "var(--error-surface)",
    color: "var(--error-content)"
  },
  brand: {
    background: "var(--brand-surface)",
    color: "var(--brand-content)"
  }
};
const Badge = ({
  variant = "neutral",
  size = "md",
  children,
  style
}) => {
  const sizeStyle = size === "sm" ? {
    height: 20,
    padding: "0 6px",
    fontSize: 11
  } : size === "lg" ? {
    height: 28,
    padding: "0 10px",
    fontSize: 13
  } : {
    height: 24,
    padding: "0 8px",
    fontSize: 12
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      borderRadius: 9999,
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      letterSpacing: ".01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...sizeStyle,
      ...badgePalette[variant],
      ...style
    }
  }, children);
};

/* ============================================================ Input */
const Input = ({
  value,
  onChange,
  placeholder,
  error,
  leading,
  trailing,
  label,
  hint,
  ...rest
}) => {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--error-emphasis)" : focus ? "var(--border-strong)" : "var(--border-default)";
  const boxShadow = focus ? error ? "var(--focus-ring-destructive)" : "var(--focus-ring)" : "none";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      font: "500 13px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 32,
      background: "#fff",
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      padding: "0 10px",
      boxShadow,
      transition: "box-shadow .12s, border-color .12s"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginRight: 6,
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      minWidth: 0
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginLeft: 6
    }
  }, trailing)), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      font: `400 12px/1.4 var(--font-sans)`,
      color: error ? "var(--error-content)" : "var(--content-muted)"
    }
  }, hint));
};

/* ============================================================ Select */
const Select = ({
  value,
  options,
  onChange,
  leading
}) => {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: 32,
      padding: "0 10px",
      background: "#fff",
      border: `1px solid ${focus ? "var(--border-strong)" : "var(--border-default)"}`,
      borderRadius: 8,
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "box-shadow .12s"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      marginRight: 6,
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      flex: 1,
      paddingRight: 20
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      color: "var(--content-muted)",
      position: "absolute",
      right: 8,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })));
};

/* ============================================================ Toggle */
const Toggle = ({
  on,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    font: "400 13px/1 var(--font-sans)",
    color: "var(--content-default)"
  }
}, /*#__PURE__*/React.createElement("span", {
  onClick: () => onChange && onChange(!on),
  style: {
    width: 32,
    height: 18,
    borderRadius: 9999,
    background: on ? "var(--neutral-900)" : "var(--neutral-200)",
    position: "relative",
    transition: "background .15s",
    flex: "none"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    position: "absolute",
    top: 2,
    left: on ? 16 : 2,
    width: 14,
    height: 14,
    background: "#fff",
    borderRadius: 9999,
    boxShadow: "var(--shadow-sm)",
    transition: "left .15s"
  }
})), label);

/* ============================================================ Checkbox */
const Checkbox = ({
  checked,
  indeterminate,
  onChange,
  label
}) => /*#__PURE__*/React.createElement("label", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    font: "400 13px/1 var(--font-sans)",
    color: "var(--content-default)"
  }
}, /*#__PURE__*/React.createElement("span", {
  onClick: () => onChange && onChange(!checked),
  style: {
    width: 16,
    height: 16,
    borderRadius: 4,
    border: `1.5px solid ${checked || indeterminate ? "var(--neutral-900)" : "var(--border-default)"}`,
    background: checked || indeterminate ? "var(--neutral-900)" : "#fff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "none"
  }
}, checked && !indeterminate && /*#__PURE__*/React.createElement("svg", {
  width: "10",
  height: "10",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#fff",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "m5 12 5 5L20 7"
})), indeterminate && /*#__PURE__*/React.createElement("span", {
  style: {
    width: 8,
    height: 2,
    background: "#fff",
    borderRadius: 1
  }
})), label);

/* ============================================================ Banner */
const bannerPalette = {
  info: {
    bg: "var(--surface-muted)",
    bd: "var(--border-default)",
    fg: "var(--content-default)",
    ic: "var(--neutral-900)"
  },
  success: {
    bg: "var(--success-surface)",
    bd: "#C9EAD1",
    fg: "var(--success-content)",
    ic: "var(--success-emphasis)"
  },
  warning: {
    bg: "var(--warning-surface)",
    bd: "#FDE6AA",
    fg: "var(--warning-content)",
    ic: "var(--warning-emphasis)"
  },
  error: {
    bg: "var(--error-surface)",
    bd: "#FBD0D3",
    fg: "var(--error-content)",
    ic: "var(--error-emphasis)"
  }
};
const Banner = ({
  variant = "info",
  title,
  children
}) => {
  const p = bannerPalette[variant];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      padding: "10px 12px",
      borderRadius: 8,
      background: p.bg,
      border: `1px solid ${p.bd}`,
      color: p.fg,
      font: "400 13px/20px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 9999,
      background: p.ic,
      color: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "700 11px/1 var(--font-sans)",
      flex: "none",
      marginTop: 2
    }
  }, variant === "success" ? "✓" : variant === "error" ? "×" : variant === "warning" ? "!" : "i"), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 1
    }
  }, title), children));
};

/* ============================================================ Menu (popover) */
const Menu = ({
  items,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: 220,
    background: "#fff",
    border: "1px solid var(--border-default)",
    borderRadius: 8,
    boxShadow: "var(--shadow-lg)",
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 1,
    ...style
  }
}, items.map((it, i) => it.type === "sep" ? /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    height: 1,
    background: "var(--border-subtle)",
    margin: "4px 0"
  }
}) : it.type === "head" ? /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    font: "700 11px/1 var(--font-sans)",
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "var(--content-muted)",
    padding: "8px 10px 4px"
  }
}, it.label) : /*#__PURE__*/React.createElement(MenuItem, {
  key: i,
  item: it
})));
const MenuItem = ({
  item
}) => {
  const [hover, setHover] = React.useState(false);
  const danger = item.danger;
  const base = hover ? danger ? "var(--error-surface)" : "var(--surface-muted)" : "transparent";
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: item.onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 30,
      padding: "0 8px",
      borderRadius: 4,
      background: base,
      cursor: "pointer",
      font: "400 13px/1 var(--font-sans)",
      color: danger ? "var(--error-content)" : "var(--content-default)"
    }
  }, item.icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      display: "inline-flex",
      color: danger ? "var(--error-emphasis)" : "var(--content-muted)"
    }
  }, item.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 11px/1 var(--font-mono)",
      color: "var(--content-muted)"
    }
  }, item.kbd));
};

/* ============================================================ Tabs */
const Tabs = ({
  value,
  onChange,
  items,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 18,
    borderBottom: "1px solid var(--border-default)",
    ...style
  }
}, items.map(it => /*#__PURE__*/React.createElement("div", {
  key: it.value,
  onClick: () => onChange && onChange(it.value),
  style: {
    padding: "9px 2px",
    font: "500 13px/1 var(--font-sans)",
    cursor: "pointer",
    color: value === it.value ? "var(--content-default)" : "var(--content-muted)",
    borderBottom: `2px solid ${value === it.value ? "var(--neutral-900)" : "transparent"}`,
    marginBottom: -1
  }
}, it.label)));

/* ============================================================ Chip */
const Chip = ({
  active,
  onClick,
  leading,
  trailing,
  children
}) => /*#__PURE__*/React.createElement("span", {
  onClick: onClick,
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    height: 28,
    padding: "0 10px",
    borderRadius: 9999,
    border: "1px solid " + (active ? "var(--neutral-900)" : "var(--border-default)"),
    background: active ? "var(--neutral-900)" : "#fff",
    color: active ? "#fff" : "var(--content-default)",
    font: "500 12px/1 var(--font-sans)",
    cursor: "pointer",
    transition: "background .12s, color .12s, border-color .12s"
  }
}, leading, children, trailing);
Object.assign(window, {
  Button,
  IconButton,
  Badge,
  Input,
  Select,
  Toggle,
  Checkbox,
  Banner,
  Menu,
  Tabs,
  Chip,
  cx,
  titleCaseString,
  titleCaseChildren
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/builder/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/icon.jsx
try { (() => {
/* Shared <Icon name size> helper.
   Loads SVGs from ../icons/{name}.svg, normalises hard-coded fills/strokes to
   currentColor, and caches the markup so repeated renders don't re-fetch.
   Usage: <Icon name="check" size={16} /> */
const __iconCache = {};
const __iconPending = {};
function normaliseSvg(svg, size) {
  return svg.replace(/<\?xml[^>]+\?>/g, '').replace(/\swidth="[^"]*"/i, ` width="${size}"`).replace(/\sheight="[^"]*"/i, ` height="${size}"`).replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"').replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"');
}
function AssetIcon({
  name,
  size = 16,
  style,
  className
}) {
  const [svg, setSvg] = React.useState(__iconCache[name] || null);
  React.useEffect(() => {
    if (__iconCache[name]) {
      setSvg(__iconCache[name]);
      return;
    }
    if (!__iconPending[name]) {
      __iconPending[name] = fetch(`../icons/${encodeURIComponent(name)}.svg`).then(r => r.ok ? r.text() : null).then(t => {
        if (t) __iconCache[name] = t;
        return t;
      }).catch(() => null);
    }
    let cancelled = false;
    __iconPending[name].then(t => {
      if (!cancelled && t) setSvg(t);
    });
    return () => {
      cancelled = true;
    };
  }, [name]);
  const html = svg ? normaliseSvg(svg, size) : null;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      flex: "none",
      color: "currentColor",
      ...style
    },
    "aria-hidden": "true",
    dangerouslySetInnerHTML: html ? {
      __html: html
    } : undefined
  });
}
window.AssetIcon = AssetIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/live-app/atoms-and-modules.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ==========================================================================
   Live App UI Kit — Atoms + Modules
   --------------------------------------------------------------------------
   Live App is the runtime end-user surface. It re-themes Asterisk via the
   [data-surface="live-app"] scope in colors_and_type.css — so atoms here
   read the SAME semantic tokens (--bg-brand-accent, --content-default, …)
   the builder kit uses, but render in Tailwind Blue + Slate at runtime.

   File layout follows ui_kits/builder/:
     atoms.jsx       → Button, Input, Select, Search, Tag, Avatar, IconButton
     modules.jsx     → Table, List, Navigation, Chart, FilterBar, Pagination
     index.html      → interactive showcase

   Authoring rules:
     • Every visible color must come from a semantic token. No hex, no
       primitive ramps (--blue-600, --slate-500). If you reach for a
       primitive, the live-app surface override won't reach you.
     • Modules COMPOSE atoms. A LATable is Search + FilterBar + rows of
       Tag/Avatar/IconButton — never new primitives.
     • Borders are 1px var(--border-default). Radii are var(--radius-xl) for
       interactive controls, var(--radius-2xl) for cards.
   ========================================================================== */

/* ──────────────────────────────────────────────────────────────────────── */
/*  ATOMS                                                                   */
/* ──────────────────────────────────────────────────────────────────────── */

/* LAButton — primary / secondary / minimal / destructive variants.
   Live App buttons are flatter than Builder (no gradient option). The brand
   token resolves to slate or blue depending on surface. */
function LAButton({
  variant = "primary",
  size = "md",
  leading,
  trailing,
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 32,
      px: 10,
      fs: 12
    },
    md: {
      h: 36,
      px: 14,
      fs: 13
    },
    lg: {
      h: 44,
      px: 18,
      fs: 14
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    height: s.h,
    padding: `0 ${s.px}px`,
    borderRadius: 8,
    font: `500 ${s.fs}px/1 var(--font-sans)`,
    cursor: "pointer",
    border: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background-color 120ms ease"
  };
  const variants = {
    primary: {
      background: "var(--bg-brand-accent)",
      color: "var(--content-inverse)"
    },
    secondary: {
      background: "var(--bg-action-secondary)",
      color: "var(--content-default)",
      border: "1px solid var(--border-default)"
    },
    minimal: {
      background: "transparent",
      color: "var(--content-default)"
    },
    destructive: {
      background: "var(--bg-action-destructive-primary)",
      color: "var(--content-inverse)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      ...base,
      ...variants[variant],
      ...rest.style
    }
  }), leading && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, leading), children, trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, trailing));
}

/* LAInput — text input atom. */
function LAInput({
  leading,
  trailing,
  size = "md",
  ...rest
}) {
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 36;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: `0 12px`,
      borderRadius: 8,
      border: "1px solid var(--border-default)",
      background: "var(--bg-input)",
      width: "100%",
      boxSizing: "border-box"
    }
  }, leading && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      display: "inline-flex"
    }
  }, leading), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      flex: 1,
      height: "100%",
      border: 0,
      outline: 0,
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      minWidth: 0,
      ...rest.style
    }
  })), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      display: "inline-flex"
    }
  }, trailing));
}

/* LASelect — dropdown atom (visual only — uses native select for behavior). */
function LASelect({
  options = [],
  size = "md",
  ...rest
}) {
  const h = size === "sm" ? 32 : size === "lg" ? 44 : 36;
  return /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    style: {
      height: h,
      padding: "0 32px 0 12px",
      borderRadius: 8,
      border: "1px solid var(--border-default)",
      background: "var(--bg-input)",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)",
      outline: 0,
      appearance: "none",
      WebkitAppearance: "none",
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'><path d='m6 9 6 6 6-6'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 10px center",
      ...rest.style
    }
  }), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}

/* LASearch — convenience wrapper around LAInput with a search glyph. */
function LASearch({
  placeholder = "Search…",
  ...rest
}) {
  const Glyph = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }));
  return /*#__PURE__*/React.createElement(LAInput, _extends({
    leading: Glyph,
    placeholder: placeholder
  }, rest));
}

/* LATag — pill atom for status / category. Tone is read from a small
   palette of semantic tokens; never raw hex. */
function LATag({
  tone = "neutral",
  children
}) {
  const tones = {
    neutral: {
      bg: "var(--bg-subtle)",
      fg: "var(--content-secondary)"
    },
    brand: {
      bg: "var(--bg-brand-subtle)",
      fg: "var(--brand-content)"
    },
    success: {
      bg: "var(--bg-success)",
      fg: "var(--content-success-emphasis)"
    },
    warning: {
      bg: "var(--bg-warning)",
      fg: "var(--content-warning-emphasis)"
    },
    destructive: {
      bg: "var(--bg-destructive)",
      fg: "var(--content-destructive-emphasis)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 24,
      padding: "0 8px",
      borderRadius: 9999,
      background: t.bg,
      color: t.fg,
      font: "500 13px/16px var(--font-sans)"
    }
  }, children);
}

/* LAAvatar — initials on a slate fill, sized 24/32/40. */
function LAAvatar({
  name = "?",
  size = 32
}) {
  const initials = name.split(" ").map(s => s[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 9999,
      background: "var(--bg-emphasis)",
      color: "var(--content-secondary)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `500 ${Math.round(size * 0.4)}px/1 var(--font-sans)`,
      flex: "0 0 auto"
    }
  }, initials);
}

/* LAIconButton — square ghost button for table rows / toolbars. */
function LAIconButton({
  children,
  label,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label
  }, rest, {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...rest.style
    }
  }), children);
}

/* LACard — base raised surface.
   Pass `bare` when an outer container already owns the border/padding (e.g.
   the showcase's [data-module] wrapper) — drops chrome but keeps layout. */
function LACard({
  children,
  padding = 16,
  bare = false,
  style
}) {
  const chrome = bare ? {
    background: "transparent",
    borderRadius: 0,
    border: 0,
    padding: 0
  } : {
    background: "var(--bg-card)",
    borderRadius: 12,
    border: "1px solid var(--border-default)",
    padding
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : undefined,
    style: {
      ...chrome,
      ...style
    }
  }, children);
}

/* LACheckbox — sized 16, used in table row select. */
function LACheckbox({
  checked,
  indeterminate,
  onChange
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = !!indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      width: 16,
      height: 16,
      accentColor: "var(--bg-brand-accent)",
      cursor: "pointer",
      margin: 0
    }
  });
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  MODULES                                                                 */
/* ──────────────────────────────────────────────────────────────────────── */

/* LAFilterBar — search + chips + add-filter. Sits above tables/lists. */
function LAFilterBar({
  search,
  setSearch,
  filters = [],
  onAddFilter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 280px",
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    value: search,
    onChange: e => setSearch && setSearch(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 28,
      padding: "0 4px 0 10px",
      borderRadius: 8,
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      font: "500 12px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)",
      fontWeight: 400
    }
  }, f.field), f.op, /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 500
    }
  }, f.value), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Remove filter",
    style: {
      width: 20,
      height: 20,
      borderRadius: 4,
      border: 0,
      background: "transparent",
      color: "var(--content-muted)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none"
  }))))), /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "sm",
    onClick: onAddFilter,
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px/1 var(--font-sans)"
      }
    }, "+")
  }, "Filter")));
}

/* LAPagination — compact prev/page/next bar. */
function LAPagination({
  page = 1,
  pageCount = 1,
  onChange
}) {
  const Arrow = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      font: "400 13px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement(LAIconButton, {
    label: "Previous",
    onClick: () => onChange && onChange(Math.max(1, page - 1))
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "m15 18-6-6 6-6"
  })), /*#__PURE__*/React.createElement("span", null, "Page ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-default)",
      fontWeight: 500
    }
  }, page), " of ", pageCount), /*#__PURE__*/React.createElement(LAIconButton, {
    label: "Next",
    onClick: () => onChange && onChange(Math.min(pageCount, page + 1))
  }, /*#__PURE__*/React.createElement(Arrow, {
    d: "m9 6 6 6-6 6"
  })));
}

/* LATable — composes Search + FilterBar + table rows + Pagination.
   columns: [{ key, label, width?, render?, align? }]
   rows:    [{ id, ... }] */
function LATable({
  title,
  columns,
  rows,
  getRowKey = (r, i) => r.id ?? i,
  selectable = true,
  footer = true,
  bare = false,
  /* New variant controls — every chrome item is independently toggleable so
     a host page can opt into search/filter/export and place "Add record"
     to the left or right of the toolbar. */
  showSearch = true,
  showFilter = true,
  showExport = false,
  addPosition = "right",
  // "right" (default) | "left" | "none"
  addLabel = "Add record"
}) {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(() => new Set());
  const [page, setPage] = React.useState(1);
  const pageSize = 8;
  const filtered = React.useMemo(() => {
    if (!search.trim()) return rows;
    const q = search.toLowerCase();
    return rows.filter(r => Object.values(r).some(v => String(v).toLowerCase().includes(q)));
  }, [rows, search]);
  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize);
  const toggle = k => {
    const next = new Set(selected);
    next.has(k) ? next.delete(k) : next.add(k);
    setSelected(next);
  };
  const toggleAll = () => {
    const all = pageRows.map((r, i) => getRowKey(r, i));
    const allSelected = all.every(k => selected.has(k));
    const next = new Set(selected);
    all.forEach(k => allSelected ? next.delete(k) : next.add(k));
    setSelected(next);
  };
  const ExportIcon = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3"
  }));
  const FilterIcon = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 4h18l-7 9v6l-4 2v-8L3 4z"
  }));
  const PlusBtn = /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "md",
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px/1 var(--font-sans)"
      }
    }, "+")
  }, addLabel);
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: bare ? "0 0 16px" : 16,
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, addPosition === "left" && PlusBtn, /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 20px/24px var(--font-sans)",
      color: "var(--content-default)",
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, filtered.length, " ", filtered.length === 1 ? "record" : "records", selected.size > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-brand)",
      fontWeight: 500
    }
  }, selected.size, " selected")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }), showSearch && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 1 240px",
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    value: search,
    onChange: e => {
      setSearch(e.target.value);
      setPage(1);
    }
  })), showFilter && /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    leading: FilterIcon
  }, "Filter"), showExport && /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    leading: ExportIcon
  }, "Export"), addPosition === "right" && PlusBtn), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto",
      borderTop: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      font: "400 13px/18px var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--bg-muted)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40,
      padding: "10px 12px",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(LACheckbox, {
    checked: pageRows.length > 0 && pageRows.every((r, i) => selected.has(getRowKey(r, i))),
    indeterminate: pageRows.some((r, i) => selected.has(getRowKey(r, i))) && !pageRows.every((r, i) => selected.has(getRowKey(r, i))),
    onChange: toggleAll
  })), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      padding: "10px 12px",
      textAlign: c.align || "left",
      font: "500 11px/16px var(--font-sans)",
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--content-muted)",
      width: c.width
    }
  }, c.label)), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 40
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, pageRows.map((r, i) => {
    const k = getRowKey(r, i);
    const isSel = selected.has(k);
    return /*#__PURE__*/React.createElement("tr", {
      key: k,
      style: {
        borderBottom: "1px solid var(--border-subtle)",
        background: isSel ? "var(--bg-selection-muted)" : "transparent"
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "12px"
      }
    }, /*#__PURE__*/React.createElement(LACheckbox, {
      checked: isSel,
      onChange: () => toggle(k)
    })), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        padding: "12px",
        textAlign: c.align || "left",
        color: "var(--content-default)",
        verticalAlign: "middle"
      }
    }, c.render ? c.render(r) : r[c.key])), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "8px 8px 8px 0",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement(LAIconButton, {
      label: "More"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "5",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1.6"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "19",
      cy: "12",
      r: "1.6"
    })))));
  }), pageRows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length + 2,
    style: {
      padding: "32px 16px",
      textAlign: "center",
      color: "var(--content-muted)"
    }
  }, "No records found."))))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Showing ", pageRows.length, " of ", filtered.length), /*#__PURE__*/React.createElement(LAPagination, {
    page: page,
    pageCount: pageCount,
    onChange: setPage
  })));
}

/* LAList — vertical record list with several layout variants.
   items: [{ id, title, subtitle, leading, trailing, tags, image, summary, fields }]
   variant:
     • "default"  — single line of meta + trailing action (the original)
     • "stacked"  — bigger row, summary paragraph + meta line under title
     • "media"    — leading thumbnail / cover image, title + summary
     • "grid"     — 2- or 3-up tile cards (controlled by `columns`)
   columns is only used when variant === "grid". */
function LAList({
  items = [],
  divided = true,
  bare = false,
  variant = "default",
  columns = 2
}) {
  /* ── Tile (grid variant) ───────────────────────────────────────── */
  const Tile = it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, it.image !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16 / 9",
      background: it.image || "var(--bg-muted)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 15px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, it.tags)), it.subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, it.subtitle), it.summary && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 13px/18px var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, it.summary), it.fields && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      columnGap: 12,
      rowGap: 4,
      marginTop: 4
    }
  }, it.fields.map((f, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/18px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, f.label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/18px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, f.value)))), it.trailing && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 8
    }
  }, it.trailing)));
  if (variant === "grid") {
    const cols = Math.max(1, Math.min(4, columns));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 16
      }
    }, items.map((it, i) => Tile({
      ...it,
      id: it.id ?? i
    })));
  }
  /* ── Row variants (default / stacked / media) ──────────────────── */
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const border = divided && !last ? "1px solid var(--border-subtle)" : "none";
    if (variant === "media") {
      return /*#__PURE__*/React.createElement("div", {
        key: it.id ?? i,
        style: {
          display: "grid",
          gridTemplateColumns: "120px 1fr auto",
          gap: 16,
          padding: "16px",
          borderBottom: border,
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 120,
          height: 80,
          borderRadius: 8,
          background: it.image || "var(--bg-muted)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid var(--border-subtle)"
        }
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 15px/20px var(--font-sans)",
          color: "var(--content-default)"
        }
      }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6
        }
      }, it.tags)), it.subtitle && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px/16px var(--font-sans)",
          color: "var(--content-muted)",
          marginTop: 2
        }
      }, it.subtitle), it.summary && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 13px/18px var(--font-sans)",
          color: "var(--content-secondary)",
          marginTop: 6
        }
      }, it.summary)), it.trailing && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto"
        }
      }, it.trailing));
    }
    if (variant === "stacked") {
      return /*#__PURE__*/React.createElement("div", {
        key: it.id ?? i,
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: "16px",
          borderBottom: border
        }
      }, it.leading && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto",
          paddingTop: 2
        }
      }, it.leading), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "500 15px/20px var(--font-sans)",
          color: "var(--content-default)"
        }
      }, it.title), it.tags && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6
        }
      }, it.tags)), it.summary && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 13px/18px var(--font-sans)",
          color: "var(--content-secondary)",
          marginTop: 6
        }
      }, it.summary), it.subtitle && /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px/16px var(--font-sans)",
          color: "var(--content-muted)",
          marginTop: 6
        }
      }, it.subtitle)), it.trailing && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: "0 0 auto"
        }
      }, it.trailing));
    }
    /* default */
    return /*#__PURE__*/React.createElement("div", {
      key: it.id ?? i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        borderBottom: border
      }
    }, it.leading && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto"
      }
    }, it.leading), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 14px/20px var(--font-sans)",
        color: "var(--content-default)"
      }
    }, it.title), it.subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px/16px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2
      }
    }, it.subtitle)), it.tags && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, it.tags), it.trailing && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto"
      }
    }, it.trailing));
  }));
}

/* LANav — top app bar + tabs. Used as the live-app frame's chrome. */
function LANav({
  appName = "Customer Hub",
  user = "Avery Singh",
  tabs = [],
  activeTab,
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "12px 24px",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--bg-brand-accent)",
      color: "var(--content-inverse)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "700 14px/1 var(--font-subhead)"
    }
  }, appName[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 15px/20px var(--font-subhead)",
      color: "var(--content-default)"
    }
  }, appName), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 240
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    placeholder: "Search records\u2026"
  })), /*#__PURE__*/React.createElement(LAAvatar, {
    name: user,
    size: 32
  })), tabs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "0 16px"
    }
  }, tabs.map(t => {
    const active = t === activeTab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onTab && onTab(t),
      style: {
        padding: "10px 14px",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        font: "500 13px/1 var(--font-sans)",
        color: active ? "var(--content-brand)" : "var(--content-secondary)",
        borderBottom: `2px solid ${active ? "var(--content-brand)" : "transparent"}`,
        marginBottom: -1
      }
    }, t);
  })));
}

/* LAChart — stat card with sparkline / bar series. Pure SVG, no deps.
   data: number[] · kind: "line" | "bar" */
function LAChart({
  label,
  value,
  delta,
  data = [],
  kind = "line",
  height = 80,
  bare = false
}) {
  const w = 280;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const stepX = data.length > 1 ? w / (data.length - 1) : w;
  const points = data.map((v, i) => [i * stepX, height - (v - min) / range * height]);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L${(data.length - 1) * stepX} ${height} L0 ${height} Z`;
  const positive = (delta ?? 0) >= 0;
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 20,
    bare: bare
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 24px/28px var(--font-subhead)",
      color: "var(--content-default)"
    }
  }, value), delta !== undefined && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12px/16px var(--font-sans)",
      color: positive ? "var(--content-success-emphasis)" : "var(--content-destructive-emphasis)"
    }
  }, positive ? "▲" : "▼", " ", Math.abs(delta), "%")), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${w} ${height}`,
    preserveAspectRatio: "none",
    width: "100%",
    height: height,
    style: {
      marginTop: 12,
      display: "block"
    }
  }, kind === "line" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "var(--bg-brand-muted)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "var(--bg-brand-accent)",
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })) : data.map((v, i) => {
    const bw = stepX * 0.6;
    const bh = (v - min) / range * height;
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: i * stepX + (stepX - bw) / 2,
      y: height - bh,
      width: bw,
      height: bh,
      fill: "var(--bg-brand-accent)",
      rx: "2"
    });
  })));
}

/* Export to window so the showcase script can use them. */
Object.assign(window, {
  // atoms
  LAButton,
  LAInput,
  LASelect,
  LASearch,
  LATag,
  LAAvatar,
  LAIconButton,
  LACard,
  LACheckbox,
  // modules
  LAFilterBar,
  LAPagination,
  LATable,
  LAList,
  LANav,
  LAChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/live-app/atoms-and-modules.jsx", error: String((e && e.message) || e) }); }

// ui_kits/live-app/field-atoms.jsx
try { (() => {
/* ==========================================================================
   Live App UI Kit — Field Atoms (form-grade primitives)
   --------------------------------------------------------------------------
   These are the LARGER atoms shown in the Figma "Form components" page:
   each one is a labeled field with its own footprint (label + input + helper
   text), unlike the bare <LAInput> primitive in atoms-and-modules.jsx which
   is the un-labeled control.

   AUTHORING RULE: this file does NOT redefine field controls. It thinly
   wraps the existing Asterisk primitives (Input, Select, Checkbox, Toggle,
   Switch, Card, Button) defined in ui_kits/builder/primitives*.jsx. Those
   components already read semantic tokens (--bg-input, --border-default,
   --bg-brand-accent, …) so when the page is wrapped in
   data-surface="live-app" they automatically re-theme to Tailwind Blue +
   Slate without any code change.

   What this file ADDS:
     • LAField           — shared label + helper/error scaffold
     • LATextField       — wraps <Input>, adds required asterisk + sublabel
     • LATextArea        — multi-line (no Asterisk equivalent)
     • LACurrencyField   — wraps <Input> with leading affix
     • LASingleSelectField — wraps <Select>
     • LACheckboxField   — wraps <Checkbox>, adds helper text
     • LARadioField      — single radio (Asterisk has no radio primitive)
     • LADateField       — wraps <Input> with calendar trailing glyph
     • LADateRangeField  — pair of LADateField
     • LAMultiSelectField — chips inside the field; novel pattern
     • LARatingInput     — 5-star input; novel pattern
     • LAFileUpload      — drop zone; novel pattern
     • LAAddressField    — composite multi-row; novel pattern
     • LARichTextField   — toolbar + editable area; novel pattern
     • LAFormCard        — composes <Card> with submit/clear footer
     • LADetailsCard     — Knack-style label/value table
   ========================================================================== */

/* Shared shell — every labeled atom uses this scaffold so spacing stays
   uniform across the form. Helper text and errors share one slot.
   The required asterisk uses the destructive content token. */
function LAField({
  label,
  required,
  helper,
  error,
  htmlFor,
  children,
  sublabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-destructive-default)",
      marginLeft: 2
    }
  }, "*"), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 13px/20px var(--font-sans)",
      color: "var(--content-muted)",
      marginLeft: 6
    }
  }, sublabel)), children, (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: error ? "var(--content-destructive-default)" : "var(--content-muted)"
    }
  }, error || helper));
}

/* ── LATextField — Asterisk <Input> + LAField label/required/helper.
   We don't pass label/hint to Input (it has its own) because LAField gives
   us the required asterisk + sublabel that Input doesn't. */
function LATextField({
  label,
  required,
  helper,
  error,
  placeholder,
  value,
  onChange,
  leading,
  trailing,
  id,
  sublabel
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    required: required,
    helper: helper,
    error: error,
    htmlFor: fieldId,
    sublabel: sublabel
  }, /*#__PURE__*/React.createElement(Input, {
    id: fieldId,
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    error: error || undefined,
    leading: leading,
    trailing: trailing
  }));
}

/* ── LATextArea — multi-line. No Asterisk primitive; we mirror Input's
   visual contract (border-default, bg-input, focus = border-strong). */
function LATextArea({
  label,
  required,
  helper,
  error,
  rows = 4,
  value,
  onChange,
  placeholder,
  id
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--error-emphasis)" : focus ? "var(--border-strong)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    required: required,
    helper: helper,
    error: error,
    htmlFor: fieldId
  }, /*#__PURE__*/React.createElement("textarea", {
    id: fieldId,
    rows: rows,
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: 8,
      border: `1px solid ${borderColor}`,
      background: "var(--bg-input, #fff)",
      outline: 0,
      resize: "vertical",
      font: "400 13px/1.5 var(--font-sans)",
      color: "var(--content-default)",
      boxShadow: focus ? error ? "var(--focus-ring-destructive)" : "var(--focus-ring)" : "none",
      transition: "box-shadow .12s, border-color .12s",
      boxSizing: "border-box"
    }
  }));
}

/* ── LACurrencyField — Asterisk <Input> with a leading affix slot. */
function LACurrencyField({
  label,
  helper,
  error,
  symbol = "$",
  value,
  onChange,
  placeholder = "0.00",
  required
}) {
  const affix = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      paddingRight: 8,
      marginRight: 2,
      borderRight: "1px solid var(--border-subtle)",
      font: "500 13px/1 var(--font-sans)",
      color: "var(--content-secondary)",
      height: 18
    }
  }, symbol);
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    helper: helper,
    error: error,
    required: required
  }, /*#__PURE__*/React.createElement(Input, {
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    error: error || undefined,
    leading: affix
  }));
}

/* ── LASingleSelectField — wraps Asterisk <Select>. */
function LASingleSelectField({
  label,
  required,
  helper,
  error,
  options = [],
  value,
  onChange,
  placeholder = "Select an option"
}) {
  const opts = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  // Asterisk Select doesn't render a placeholder — we prepend a disabled option.
  const withPlaceholder = [{
    value: "",
    label: placeholder
  }, ...opts];
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    required: required,
    helper: helper,
    error: error
  }, /*#__PURE__*/React.createElement(Select, {
    value: value ?? "",
    options: withPlaceholder,
    onChange: e => onChange && onChange(e.target.value)
  }));
}

/* ── LACheckboxField — wraps Asterisk <Checkbox>, adds helper. */
function LACheckboxField({
  label,
  checked,
  onChange,
  helper
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    checked: !!checked,
    onChange: onChange
  })), /*#__PURE__*/React.createElement("div", {
    onClick: () => onChange && onChange(!checked),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, label), helper && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, helper)));
}

/* ── LARadioField — Asterisk has no radio primitive. We mirror the
   Checkbox visual contract (16px, neutral-900 fill when active). */
function LARadioField({
  label,
  name,
  value,
  checked,
  onChange
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      position: "absolute",
      opacity: 0,
      pointerEvents: "none",
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: 9999,
      flex: "0 0 auto",
      border: `1.5px solid ${checked ? "var(--neutral-900)" : "var(--border-default)"}`,
      background: "#fff",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 9999,
      background: "var(--neutral-900)"
    }
  })), label);
}

/* ── LADateField — Asterisk <Input> with calendar trailing glyph. */
function LADateField({
  label,
  required,
  helper,
  error,
  value,
  onChange,
  placeholder = "MM/DD/YYYY"
}) {
  const calendar = /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  }));
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    required: required,
    helper: helper,
    error: error
  }, /*#__PURE__*/React.createElement(Input, {
    value: value ?? "",
    placeholder: placeholder,
    onChange: e => onChange && onChange(e.target.value),
    error: error || undefined,
    trailing: calendar
  }));
}

/* ── LADateRangeField — From → To pair, matches Figma form pattern. */
function LADateRangeField({
  label,
  helper,
  from,
  to,
  onChange
}) {
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    helper: helper
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(LADateField, {
    value: from,
    onChange: v => onChange && onChange({
      from: v,
      to
    })
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--content-muted)",
      font: "400 14px/1 var(--font-sans)",
      alignSelf: "end",
      paddingBottom: 8
    }
  }, "\u2192"), /*#__PURE__*/React.createElement(LADateField, {
    value: to,
    onChange: v => onChange && onChange({
      from,
      to: v
    })
  })));
}

/* ── LAMultiSelectField — chips inside the field, type to filter, x to remove.
   No Asterisk equivalent (Select is single-value). The shell mirrors
   Input's contract: 8px radius, border-default, bg-input, focus ring. */
function LAMultiSelectField({
  label,
  required,
  helper,
  error,
  options = [],
  value = [],
  onChange,
  placeholder = "Select options"
}) {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const remove = v => onChange && onChange(value.filter(x => x !== v));
  const add = v => {
    if (!value.includes(v)) onChange && onChange([...value, v]);
    setFilter("");
  };
  const remaining = options.filter(o => !value.includes(o) && o.toLowerCase().includes(filter.toLowerCase()));
  const borderColor = error ? "var(--error-emphasis)" : open ? "var(--border-strong)" : "var(--border-default)";

  // Cycle through LATag tones so chips read as colored tags, matching the
  // Live App "tags" visual language. Stable per-option via simple hash.
  const TONES = ["brand", "success", "warning", "destructive", "neutral"];
  const toneFor = v => {
    let h = 0;
    for (let i = 0; i < v.length; i++) h = h * 31 + v.charCodeAt(i) >>> 0;
    return TONES[h % TONES.length];
  };
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    required: required,
    helper: helper,
    error: error
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(true),
    style: {
      minHeight: 32,
      padding: "3px 10px",
      borderRadius: 8,
      border: `1px solid ${borderColor}`,
      background: "var(--bg-input, #fff)",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 6,
      cursor: "text",
      boxShadow: open ? "var(--focus-ring)" : "none",
      transition: "box-shadow .12s, border-color .12s"
    }
  }, value.map(v => /*#__PURE__*/React.createElement("span", {
    key: v,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(LATag, {
    tone: toneFor(v)
  }, v, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      remove(v);
    },
    "aria-label": `Remove ${v}`,
    style: {
      marginLeft: 4,
      width: 14,
      height: 14,
      borderRadius: 3,
      border: 0,
      background: "transparent",
      color: "currentColor",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "9",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    fill: "none"
  })))))), /*#__PURE__*/React.createElement("input", {
    value: filter,
    onChange: e => setFilter(e.target.value),
    placeholder: value.length === 0 ? placeholder : "",
    style: {
      flex: 1,
      minWidth: 60,
      height: 24,
      border: 0,
      outline: 0,
      background: "transparent",
      font: "400 13px/1 var(--font-sans)",
      color: "var(--content-default)"
    }
  })), open && remaining.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 5,
      background: "var(--bg-menu, #fff)",
      border: "1px solid var(--border-default)",
      borderRadius: 8,
      boxShadow: "var(--shadow-lg)",
      maxHeight: 220,
      overflowY: "auto",
      padding: 4
    }
  }, remaining.map(o => /*#__PURE__*/React.createElement("div", {
    key: o,
    onClick: () => add(o),
    style: {
      padding: "8px 10px",
      borderRadius: 6,
      cursor: "pointer",
      font: "400 13px/1.4 var(--font-sans)",
      color: "var(--content-default)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-muted)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, o)))));
}

/* ── LARatingInput — 5-star rating. No Asterisk equivalent. Active uses
   the warning emphasis token (yellow-600 in both surfaces). */
function LARatingInput({
  label,
  value = 0,
  onChange,
  max = 5
}) {
  return /*#__PURE__*/React.createElement(LAField, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 4
    }
  }, Array.from({
    length: max
  }).map((_, i) => {
    const active = i < value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onChange && onChange(i + 1),
      "aria-label": `${i + 1} stars`,
      style: {
        border: 0,
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        color: active ? "var(--content-warning-emphasis)" : "var(--bg-emphasis)",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z"
    })));
  })));
}

/* ── LAFileUpload — labeled drop zone. No Asterisk equivalent. */
function LAFileUpload({
  label,
  helper,
  accept,
  onFile,
  fileName
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    helper: helper
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: 88,
      padding: 16,
      borderRadius: 8,
      border: "1px dashed var(--border-default)",
      background: "var(--surface-subtle)",
      cursor: "pointer",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 16V4M5.5 10.5L12 4l6.5 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 16v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 14px/20px var(--font-sans)"
    }
  }, fileName ? fileName : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-brand)"
    }
  }, "Choose a file"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--content-muted)"
    }
  }, " or drag and drop"))), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "file",
    accept: accept,
    onChange: e => onFile && onFile(e.target.files?.[0]),
    style: {
      display: "none"
    }
  })));
}

/* ── LAAddressField — multi-row composite. Uses Asterisk <Input> for each row. */
function LAAddressField({
  label,
  value = {},
  onChange
}) {
  const update = (k, v) => onChange && onChange({
    ...value,
    [k]: v
  });
  return /*#__PURE__*/React.createElement(LAField, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: value.street1 ?? "",
    onChange: e => update("street1", e.target.value),
    placeholder: "Street address"
  }), /*#__PURE__*/React.createElement(Input, {
    value: value.street2 ?? "",
    onChange: e => update("street2", e.target.value),
    placeholder: "Apt, suite, unit (optional)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: value.city ?? "",
    onChange: e => update("city", e.target.value),
    placeholder: "City"
  }), /*#__PURE__*/React.createElement(Input, {
    value: value.state ?? "",
    onChange: e => update("state", e.target.value),
    placeholder: "State"
  }), /*#__PURE__*/React.createElement(Input, {
    value: value.zip ?? "",
    onChange: e => update("zip", e.target.value),
    placeholder: "ZIP"
  }))));
}

/* ── LARichTextField — toolbar + editable area. Visual only. */
function LARichTextField({
  label,
  helper,
  html = "",
  onChange
}) {
  const ref = React.useRef(null);
  const Toolbar = ({
    children
  }) => /*#__PURE__*/React.createElement("button", {
    onMouseDown: e => e.preventDefault(),
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      border: 0,
      background: "transparent",
      color: "var(--content-secondary)",
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: "500 13px/1 var(--font-sans)"
    }
  }, children);
  return /*#__PURE__*/React.createElement(LAField, {
    label: label,
    helper: helper
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border-default)",
      borderRadius: 8,
      background: "var(--bg-input, #fff)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 2,
      padding: 4,
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("b", null, "B")), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("i", null, "I")), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: "underline"
    }
  }, "U")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "var(--border-subtle)",
      margin: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"
  }))), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 6h11M10 12h11M10 18h11M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: "var(--border-subtle)",
      margin: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Toolbar, null, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1-1"
  })))), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    contentEditable: true,
    suppressContentEditableWarning: true,
    onInput: e => onChange && onChange(e.currentTarget.innerHTML),
    dangerouslySetInnerHTML: {
      __html: html
    },
    style: {
      minHeight: 110,
      padding: 12,
      outline: 0,
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  })));
}

/* ──────────────────────────────────────────────────────────────────────── */
/*  COMPOSITE MODULES                                                       */
/* ──────────────────────────────────────────────────────────────────────── */

/* LAFormCard — Asterisk <Card> body + submit/clear footer using <Button>.
   Pass `bare` when an outer container already owns the border + padding —
   we drop the <Card> wrapper and render a flat form body. */
function LAFormCard({
  title,
  description,
  children,
  onSubmit,
  onClear,
  submitLabel = "Submit",
  clearLabel = "Clear",
  footerNote,
  bare = false,
  columns = 1
}) {
  /* `columns` (1|2|3) lays fields out in an N-column grid. Children that
     should span the full row can pass style={{ gridColumn: "1 / -1" }} —
     useful for textareas and rich text. */
  const cols = Math.max(1, Math.min(3, columns));
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      rowGap: 16,
      columnGap: 24
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    onClick: onSubmit
  }, submitLabel), /*#__PURE__*/React.createElement(LAButton, {
    variant: "minimal",
    onClick: onClear
  }, clearLabel), footerNote && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, footerNote)));
  if (bare) {
    return /*#__PURE__*/React.createElement("div", {
      "data-bare-card": ""
    }, title && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 20px/24px var(--font-sans)",
        color: "var(--content-default)",
        marginBottom: description ? 8 : 16
      }
    }, title), description && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 16px/24px var(--font-sans)",
        color: "var(--content-secondary)",
        marginBottom: 16
      }
    }, description), body);
  }
  return /*#__PURE__*/React.createElement(Card, {
    title: title,
    description: description
  }, body);
}

/* LADetailsRow — one row of the Details element. Knack-style label/value
   table, label cell on muted background, value cell on white. */
function LADetailsRow({
  label,
  children,
  labelWidth = 160
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `${labelWidth}px 1fr`,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      color: "var(--content-secondary)",
      font: "400 14px/20px var(--font-sans)",
      padding: "10px 12px",
      borderBottom: "1px solid var(--bg-card, #fff)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px",
      color: "var(--content-default)",
      font: "400 14px/20px var(--font-sans)",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--bg-card, #fff)"
    }
  }, children));
}

/* LADetailsCard — uses LACard (which is just a styled div) so we can have
   header/body/footer regions; Asterisk <Card> bakes in 24px padding which
   doesn't suit a flush row table. */
function LADetailsCard({
  title,
  children,
  actions,
  bare = false,
  columns = 1
}) {
  /* `columns` (1|2|3) splits the rows into N stacked grid columns so dense
     records can be scanned wider. Each row is still its own label/value
     pair — we just place pairs side-by-side. */
  const cols = Math.max(1, Math.min(3, columns));
  const rows = React.Children.toArray(children);
  const body = cols === 1 ? /*#__PURE__*/React.createElement("div", null, rows) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderRight: (i + 1) % cols !== 0 ? "1px solid var(--border-subtle)" : "none"
    }
  }, row)));
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 20px/24px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, title)), body, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderTop: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, actions));
}

/* Export */
Object.assign(window, {
  // shared
  LAField,
  // field atoms (wrap Asterisk where possible)
  LATextField,
  LATextArea,
  LACurrencyField,
  LASingleSelectField,
  LAMultiSelectField,
  LADateField,
  LADateRangeField,
  LACheckboxField,
  LARadioField,
  LARatingInput,
  LAFileUpload,
  LAAddressField,
  LARichTextField,
  // modules
  LAFormCard,
  LADetailsRow,
  LADetailsCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/live-app/field-atoms.jsx", error: String((e && e.message) || e) }); }

// ui_kits/live-app/map-module.jsx
try { (() => {
/* ==========================================================================
   Live App UI Kit — Map module
   --------------------------------------------------------------------------
   A geographic record viewer. Composes the existing LA atoms (Search,
   Select, Button, Tag, Avatar, IconButton) on top of an SVG-rendered map
   canvas. All colour reads from semantic tokens — drop the
   data-surface="live-app" wrapper and the same module re-themes to
   builder fuchsia.

   Anatomy:
     ┌──────────────────────────── toolbar ──────────────────────────┐
     │ [LASearch address]  [LASelect radius]  [LAButton "Near me"]  │
     │  result-count · sort                                          │
     └───────────────────────────────────────────────────────────────┘
     ┌──────────── map canvas ────────────┬──── records sidebar ────┐
     │ procedural SVG (slate water/blue   │ scrollable LAList of    │
     │ grid + park + roads) with pins     │ records, click-syncs    │
     │ floating zoom / locate / layer     │ with selected pin       │
     │ controls + scale indicator         │                         │
     └────────────────────────────────────┴─────────────────────────┘

   Authoring rules (same as siblings):
     • No hex literals — every visible color is a semantic token.
     • `bare` drops the outer border so the [data-module] frame can own it.
   ========================================================================== */

/* ── Pin glyph ──────────────────────────────────────────────────────── */
function LAMapPin({
  label,
  tone = "brand",
  selected = false,
  size = 32
}) {
  const w = selected ? size + 8 : size;
  const h = w * (40 / 28);
  const tones = {
    brand: "var(--bg-brand-accent)",
    emphasis: "var(--tw-slate-700)",
    success: "var(--content-success-emphasis)",
    warning: "var(--content-warning-emphasis)",
    destructive: "var(--content-destructive-emphasis)"
  };
  const fill = selected ? "var(--tw-slate-700)" : tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 28 40",
    style: {
      filter: "drop-shadow(0 2px 4px rgba(15,23,42,.18))",
      transition: "transform 120ms ease",
      transform: selected ? "translateY(-2px)" : "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 0C6.27 0 0 6.27 0 14c0 9.5 11.5 23.5 13.1 25.4a1.2 1.2 0 0 0 1.8 0C16.5 37.5 28 23.5 28 14 28 6.27 21.73 0 14 0Z",
    fill: fill
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "14",
    r: "6",
    fill: "#ffffff"
  }), label !== undefined && /*#__PURE__*/React.createElement("text", {
    x: "14",
    y: "17.5",
    textAnchor: "middle",
    style: {
      font: "700 9px/1 var(--font-sans)",
      fill: fill
    }
  }, label));
}

/* ── Cluster glyph (groups of pins) ─────────────────────────────────── */
function LAMapCluster({
  count,
  selected = false
}) {
  const r = count >= 100 ? 22 : count >= 10 ? 19 : 16;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: r * 2,
      height: r * 2,
      borderRadius: 9999,
      background: selected ? "var(--tw-slate-700)" : "var(--bg-brand-accent)",
      color: "var(--content-inverse)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      font: `700 ${r > 18 ? 14 : 12}px/1 var(--font-sans)`,
      border: "3px solid var(--bg-card)",
      boxShadow: "0 2px 6px rgba(15,23,42,.20)",
      transition: "transform 120ms ease",
      transform: selected ? "scale(1.08)" : "none"
    }
  }, count);
}

/* ── Procedural SVG map canvas ──────────────────────────────────────── */
/* A stylised, schematic city map. Not real geography — it's a placeholder
   styled to match the Live App slate/blue palette so the module reads as
   "map" without pulling in tiles. Districts/water/park come from tokens. */
function LAMapCanvas({
  children
}) {
  // Draw a procedural grid of streets + a river + a park.
  // viewBox stays 1000×600; wrapper scales to the available area.
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1000 600",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "la-map-grid",
    width: "60",
    height: "60",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M60 0H0V60",
    fill: "none",
    stroke: "var(--tw-slate-200)",
    strokeWidth: "1"
  })), /*#__PURE__*/React.createElement("pattern", {
    id: "la-map-grid-fine",
    width: "20",
    height: "20",
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 0H0V20",
    fill: "none",
    stroke: "var(--tw-slate-100)",
    strokeWidth: "1"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "1000",
    height: "600",
    fill: "var(--tw-slate-50)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "1000",
    height: "600",
    fill: "url(#la-map-grid-fine)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "80",
    width: "280",
    height: "180",
    fill: "var(--tw-slate-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "380",
    y: "60",
    width: "240",
    height: "220",
    fill: "var(--bg-brand-muted)",
    opacity: ".55"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "660",
    y: "100",
    width: "280",
    height: "160",
    fill: "var(--tw-slate-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "60",
    y: "320",
    width: "220",
    height: "220",
    fill: "var(--tw-slate-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "720",
    y: "320",
    width: "220",
    height: "220",
    fill: "var(--tw-slate-100)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "320",
    y: "320",
    width: "240",
    height: "200",
    rx: "6",
    fill: "var(--bg-success)",
    opacity: ".75"
  }), /*#__PURE__*/React.createElement("text", {
    x: "440",
    y: "430",
    textAnchor: "middle",
    style: {
      font: "500 13px/1 var(--font-sans)",
      fill: "var(--content-success-emphasis)",
      letterSpacing: ".06em"
    }
  }, "PROSPECT PARK"), /*#__PURE__*/React.createElement("path", {
    d: "M-20 220 C 180 260, 360 180, 520 240 S 820 360, 1020 320 L 1020 380 C 820 420, 600 320, 460 360 S 200 320, -20 280 Z",
    fill: "var(--tw-blue-200)",
    opacity: ".55"
  }), /*#__PURE__*/React.createElement("text", {
    x: "780",
    y: "305",
    textAnchor: "middle",
    style: {
      font: "500 13px/1 var(--font-sans)",
      fill: "var(--tw-blue-700)",
      letterSpacing: ".10em"
    }
  }, "EAST RIVER"), /*#__PURE__*/React.createElement("g", {
    stroke: "#ffffff",
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 80 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 280 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 540 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 0 V600",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M620 0 V600",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 600 L 980 60",
    strokeWidth: "5"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--tw-slate-200)",
    fill: "none",
    strokeLinecap: "round",
    opacity: ".9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 80 H1000",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 280 H1000",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 540 H1000",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 0 V600",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M620 0 V600",
    strokeWidth: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 600 L 980 60",
    strokeWidth: "7"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#ffffff",
    fill: "none",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 80 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 280 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 540 H1000",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 0 V600",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M620 0 V600",
    strokeWidth: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 600 L 980 60",
    strokeWidth: "5"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--tw-slate-300)",
    strokeWidth: "1",
    opacity: ".7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 160 H340"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 220 H340"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 360 H280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 460 H280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M380 160 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M380 220 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M660 160 H1000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M660 220 H1000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M720 360 H1000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M720 460 H1000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 0 V80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 0 V80"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 80 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 80 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M460 80 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M540 80 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M740 100 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M840 100 V280"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M120 320 V540"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220 320 V540"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M780 320 V540"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M880 320 V540"
  })), /*#__PURE__*/React.createElement("g", {
    style: {
      font: "500 11px/1 var(--font-sans)",
      letterSpacing: ".04em"
    }
  }, /*#__PURE__*/React.createElement("text", {
    x: "200",
    y: "50",
    textAnchor: "middle",
    fill: "var(--content-muted)"
  }, "RIVERSIDE"), /*#__PURE__*/React.createElement("text", {
    x: "500",
    y: "50",
    textAnchor: "middle",
    fill: "var(--content-muted)"
  }, "MIDTOWN"), /*#__PURE__*/React.createElement("text", {
    x: "800",
    y: "50",
    textAnchor: "middle",
    fill: "var(--content-muted)"
  }, "EAST GATE"), /*#__PURE__*/React.createElement("text", {
    x: "170",
    y: "580",
    textAnchor: "middle",
    fill: "var(--content-muted)"
  }, "BAY DISTRICT"), /*#__PURE__*/React.createElement("text", {
    x: "830",
    y: "580",
    textAnchor: "middle",
    fill: "var(--content-muted)"
  }, "WAREHOUSE QTR"))), children);
}

/* ── Scale + attribution badges ─────────────────────────────────────── */
function LAMapScale({
  value = "0.5 mi"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      bottom: 16,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 10px",
      borderRadius: 8,
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      boxShadow: "0 1px 3px rgba(15,23,42,.08)",
      font: "500 11px/1 var(--font-sans)",
      color: "var(--content-secondary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "6",
    viewBox: "0 0 40 6",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "3",
    x2: "39",
    y2: "3",
    stroke: "var(--content-default)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "0",
    x2: "1",
    y2: "6",
    stroke: "var(--content-default)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "39",
    y1: "0",
    x2: "39",
    y2: "6",
    stroke: "var(--content-default)",
    strokeWidth: "2"
  })), /*#__PURE__*/React.createElement("span", null, value));
}
function LAMapAttribution() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 12,
      bottom: 12,
      padding: "2px 8px",
      borderRadius: 4,
      background: "rgba(255,255,255,.85)",
      font: "400 10px/14px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, "Live App map \xB7 schematic");
}

/* ── Floating zoom + locate controls ────────────────────────────────── */
function LAMapControls({
  onZoomIn,
  onZoomOut,
  onLocate,
  onLayers,
  layersOn
}) {
  const ctrlBtn = {
    width: 36,
    height: 36,
    border: 0,
    padding: 0,
    background: "var(--bg-card)",
    color: "var(--content-default)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const stack = {
    display: "flex",
    flexDirection: "column",
    background: "var(--bg-card)",
    border: "1px solid var(--border-default)",
    borderRadius: 8,
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(15,23,42,.08)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: stack
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onZoomIn,
    "aria-label": "Zoom in",
    style: ctrlBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onZoomOut,
    "aria-label": "Zoom out",
    style: ctrlBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })))), /*#__PURE__*/React.createElement("div", {
    style: stack
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLocate,
    "aria-label": "Locate me",
    style: ctrlBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--border-subtle)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onLayers,
    "aria-label": "Map layers",
    style: {
      ...ctrlBtn,
      color: layersOn ? "var(--content-brand)" : "var(--content-default)",
      background: layersOn ? "var(--bg-selection-muted)" : "var(--bg-card)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 2 9 5-9 5-9-5 9-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 12 9 5 9-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 17 9 5 9-5"
  })))));
}

/* ── Selected pin popover (anchored to map percent coords) ──────────── */
function LAMapPopover({
  record,
  onClose
}) {
  if (!record) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    style: {
      position: "absolute",
      left: `${record.x}%`,
      top: `${record.y}%`,
      transform: "translate(-50%, calc(-100% - 44px))",
      width: 260,
      background: "var(--bg-card)",
      border: "1px solid var(--border-default)",
      borderRadius: 12,
      boxShadow: "0 8px 24px rgba(15,23,42,.16)",
      padding: 12,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 14px/18px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, record.name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)",
      marginTop: 2
    }
  }, record.address)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 24,
      height: 24,
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--content-muted)",
      borderRadius: 4,
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 3l8 8M11 3l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    fill: "none"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 10
    }
  }, record.tag && /*#__PURE__*/React.createElement(LATag, {
    tone: record.tone || "brand"
  }, record.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, record.distance, " away")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "sm"
  }, "View"), /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "sm"
  }, "Directions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: -7,
      transform: "translateX(-50%) rotate(45deg)",
      width: 12,
      height: 12,
      background: "var(--bg-card)",
      borderRight: "1px solid var(--border-default)",
      borderBottom: "1px solid var(--border-default)"
    }
  }));
}

/* ── LAMap module ───────────────────────────────────────────────────── */
function LAMap({
  records = [],
  radii = ["1 mi", "5 mi", "10 mi", "25 mi", "50 mi"],
  defaultRadius = "5 mi",
  bare = false,
  height = 520
}) {
  const [query, setQuery] = React.useState("");
  const [radius, setRadius] = React.useState(defaultRadius);
  const [layersOn, setLayersOn] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(records[0]?.id);
  const selected = records.find(r => r.id === selectedId);
  const filtered = React.useMemo(() => {
    if (!query.trim()) return records;
    const q = query.toLowerCase();
    return records.filter(r => [r.name, r.address, r.tag].filter(Boolean).some(v => String(v).toLowerCase().includes(q)));
  }, [records, query]);
  const visibleIds = new Set(filtered.map(r => r.id));
  return /*#__PURE__*/React.createElement(LACard, {
    padding: 0,
    bare: bare,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: bare ? "0 0 16px" : 16,
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      borderBottom: bare ? "1px solid var(--border-subtle)" : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 280px",
      minWidth: 220,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement(LASearch, {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Search address or place"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Within"), /*#__PURE__*/React.createElement(LASelect, {
    value: radius,
    onChange: e => setRadius(e.target.value),
    options: radii,
    size: "sm",
    style: {
      minWidth: 96
    }
  })), /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v3M12 19v3M2 12h3M19 12h3"
    }))
  }, "Near me"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--content-default)",
      fontWeight: 500
    }
  }, filtered.length), " ", filtered.length === 1 ? "result" : "results", " within ", radius)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      height,
      borderTop: bare ? 0 : "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--tw-slate-50)",
      borderRight: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(LAMapCanvas, null, records.map((r, i) => {
    if (!visibleIds.has(r.id)) return null;
    const isSel = r.id === selectedId;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      onClick: () => setSelectedId(r.id),
      "aria-label": r.name,
      style: {
        position: "absolute",
        left: `${r.x}%`,
        top: `${r.y}%`,
        transform: "translate(-50%, -100%)",
        background: "transparent",
        border: 0,
        padding: 0,
        cursor: "pointer",
        zIndex: isSel ? 4 : 2
      }
    }, r.cluster ? /*#__PURE__*/React.createElement(LAMapCluster, {
      count: r.cluster,
      selected: isSel
    }) : /*#__PURE__*/React.createElement(LAMapPin, {
      tone: r.tone || "brand",
      selected: isSel,
      label: r.label
    }));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "62%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 9999,
      background: "var(--bg-brand-accent)",
      border: "3px solid var(--bg-card)",
      boxShadow: "0 0 0 6px var(--bg-selection-muted)"
    }
  })), /*#__PURE__*/React.createElement(LAMapPopover, {
    record: selected,
    onClose: () => setSelectedId(null)
  })), /*#__PURE__*/React.createElement(LAMapControls, {
    onZoomIn: () => {},
    onZoomOut: () => {},
    onLocate: () => {},
    onLayers: () => setLayersOn(v => !v),
    layersOn: layersOn
  }), /*#__PURE__*/React.createElement(LAMapScale, {
    value: radius
  }), /*#__PURE__*/React.createElement(LAMapAttribution, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
      background: "var(--bg-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      font: "500 12px/16px var(--font-sans)",
      color: "var(--content-muted)",
      letterSpacing: ".06em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Records on map"), /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: "none",
      letterSpacing: 0,
      color: "var(--content-secondary)"
    }
  }, "Sorted by distance")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: "auto",
      flex: 1
    }
  }, filtered.map(r => {
    const isSel = r.id === selectedId;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      onClick: () => setSelectedId(r.id),
      style: {
        width: "100%",
        textAlign: "left",
        display: "flex",
        alignItems: "flex-start",
        gap: 10,
        padding: "12px 16px",
        border: 0,
        borderBottom: "1px solid var(--border-subtle)",
        cursor: "pointer",
        background: isSel ? "var(--bg-selection-muted)" : "transparent",
        boxShadow: isSel ? "inset 3px 0 0 var(--content-brand)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 0 auto",
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(LAMapPin, {
      tone: r.tone || "brand",
      selected: isSel,
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 13px/18px var(--font-sans)",
        color: "var(--content-default)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, r.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 12px/16px var(--font-mono)",
        color: "var(--content-muted)",
        flex: "0 0 auto"
      }
    }, r.distance)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px/16px var(--font-sans)",
        color: "var(--content-muted)",
        marginTop: 2,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, r.address), r.tag && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement(LATag, {
      tone: r.tone || "brand"
    }, r.tag))));
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      color: "var(--content-muted)",
      font: "400 13px/18px var(--font-sans)"
    }
  }, "No records match your search.")))));
}

/* Export to window so the showcase script can use them. */
Object.assign(window, {
  LAMap,
  LAMapPin,
  LAMapCluster,
  LAMapCanvas,
  LAMapControls,
  LAMapPopover,
  LAMapScale
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/live-app/map-module.jsx", error: String((e && e.message) || e) }); }

// ui_kits/live-app/more-modules.jsx
try { (() => {
/* ──────────────────────────────────────────────────────────────────────
   more-modules.jsx — Calendar, Link Group, Search, Login modules
   for the Live App UI kit. All read tokens from the existing
   data-surface="live-app" mapping, and reuse Asterisk primitives
   (Button → LAButton, Input → via field-atoms wrappers) wherever
   they exist so a re-theme stays free.
   ────────────────────────────────────────────────────────────────────── */

/* =====================================================================
   LACalendar — Day / Week / Month / List views with a TopBar control
   ===================================================================== */

const LA_WEEKDAYS_SHORT = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const LA_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/* helper — build a 6-week (42-cell) grid for a given month/year */
function laMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay()); // back to Sunday
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    cells.push(d);
  }
  return cells;
}

/* Top bar: < > Today | Title | view tabs | + Add */
function LACalendarTopBar({
  title,
  view,
  onView,
  onPrev,
  onNext,
  onToday,
  onAdd
}) {
  const tab = (k, label) => /*#__PURE__*/React.createElement("button", {
    onClick: () => onView && onView(k),
    style: {
      height: 32,
      padding: "0 12px",
      borderRadius: 6,
      border: "1px solid " + (view === k ? "var(--border-default)" : "transparent"),
      background: view === k ? "var(--bg-card)" : "transparent",
      color: view === k ? "var(--content-default)" : "var(--content-secondary)",
      font: "500 13px/1 var(--font-sans)",
      cursor: "pointer"
    }
  }, label);
  const arrow = (dir, on) => /*#__PURE__*/React.createElement("button", {
    onClick: on,
    "aria-label": dir === "<" ? "Previous" : "Next",
    style: {
      width: 32,
      height: 32,
      border: "1px solid var(--border-default)",
      borderRadius: 6,
      background: "var(--bg-card)",
      color: "var(--content-secondary)",
      font: "500 14px/1 var(--font-sans)",
      cursor: "pointer"
    }
  }, dir);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--bg-card)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, arrow("<", onPrev), arrow(">", onNext), /*#__PURE__*/React.createElement("button", {
    onClick: onToday,
    style: {
      height: 32,
      padding: "0 12px",
      border: "1px solid var(--border-default)",
      borderRadius: 6,
      background: "var(--bg-card)",
      color: "var(--content-default)",
      font: "500 13px/1 var(--font-sans)",
      cursor: "pointer"
    }
  }, "Today")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 16px/24px var(--font-subhead)",
      color: "var(--content-default)",
      marginLeft: 4,
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      padding: 2,
      gap: 2,
      background: "var(--bg-muted)",
      borderRadius: 8
    }
  }, tab("month", "Month"), tab("week", "Week"), tab("day", "Day"), tab("list", "List")), onAdd && /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "md",
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        font: "500 14px/1 var(--font-sans)"
      }
    }, "+"),
    onClick: onAdd
  }, "Event"));
}

/* Single event chip (compact, used inside grid cells) */
function LAEventChip({
  event,
  compact = false
}) {
  const tone = event.tone || "brand";
  const colors = {
    brand: {
      bg: "var(--tw-blue-100,var(--bg-brand-muted))",
      fg: "var(--tw-blue-800,var(--brand-content))"
    },
    success: {
      bg: "var(--bg-success,#DCFCE7)",
      fg: "var(--content-success-emphasis,#14532D)"
    },
    warning: {
      bg: "var(--bg-warning,#FEF3C7)",
      fg: "var(--content-warning-emphasis,#78350F)"
    },
    destructive: {
      bg: "var(--bg-destructive,#FEE2E2)",
      fg: "var(--content-destructive-emphasis,#991B1B)"
    },
    neutral: {
      bg: "var(--bg-muted)",
      fg: "var(--content-default)"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", {
    title: event.title,
    style: {
      background: colors.bg,
      color: colors.fg,
      padding: compact ? "1px 6px" : "4px 8px",
      borderRadius: 4,
      font: `500 ${compact ? "11px/14px" : "12px/16px"} var(--font-sans)`,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, event.time && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      marginRight: 4
    }
  }, event.time), event.title);
}

/* Month view — 7×6 grid */
function LACalendarMonth({
  year,
  month,
  events = [],
  onSelect
}) {
  const cells = laMonthGrid(year, month);
  const today = new Date();
  const eventsByDay = React.useMemo(() => {
    const map = {};
    events.forEach(ev => {
      const k = ev.date instanceof Date ? ev.date.toDateString() : ev.date;
      (map[k] = map[k] || []).push(ev);
    });
    return map;
  }, [events]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      background: "var(--bg-card)"
    }
  }, LA_WEEKDAYS_SHORT.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      padding: "8px 12px",
      font: "500 11px/16px var(--font-sans)",
      color: "var(--content-muted)",
      letterSpacing: ".06em",
      borderBottom: "1px solid var(--border-subtle)",
      background: "var(--bg-muted)"
    }
  }, d)), cells.map((d, i) => {
    const inMonth = d.getMonth() === month;
    const isToday = d.toDateString() === today.toDateString();
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const list = eventsByDay[d.toDateString()] || [];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => onSelect && onSelect(d),
      style: {
        minHeight: 96,
        padding: 6,
        borderRight: i % 7 < 6 ? "1px solid var(--border-subtle)" : "none",
        borderBottom: i < 35 ? "1px solid var(--border-subtle)" : "none",
        background: !inMonth ? "var(--bg-default)" : isWeekend ? "var(--bg-default)" : "var(--bg-card)",
        cursor: onSelect ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        alignSelf: "flex-start",
        minWidth: 22,
        height: 22,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 6px",
        borderRadius: 9999,
        font: "500 12px/1 var(--font-sans)",
        color: !inMonth ? "var(--content-muted)" : isToday ? "#fff" : "var(--content-default)",
        background: isToday ? "var(--bg-brand-accent)" : "transparent"
      }
    }, d.getDate()), list.slice(0, 3).map((ev, j) => /*#__PURE__*/React.createElement(LAEventChip, {
      key: j,
      event: ev,
      compact: true
    })), list.length > 3 && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 11px/14px var(--font-sans)",
        color: "var(--content-muted)",
        padding: "0 4px"
      }
    }, "+", list.length - 3, " more"));
  }));
}

/* Week / Day view — 24-hour grid (compact: 7am–9pm) */
function LACalendarWeek({
  days,
  events = [],
  hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
}) {
  const today = new Date();
  const eventsByDay = React.useMemo(() => {
    const map = {};
    events.forEach(ev => {
      const k = ev.date instanceof Date ? ev.date.toDateString() : ev.date;
      (map[k] = map[k] || []).push(ev);
    });
    return map;
  }, [events]);
  const colW = `repeat(${days.length}, 1fr)`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `60px ${colW}`,
      background: "var(--bg-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid var(--border-subtle)",
      borderRight: "1px solid var(--border-subtle)"
    }
  }), days.map((d, i) => {
    const isToday = d.toDateString() === today.toDateString();
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "8px 12px",
        background: isWeekend ? "var(--bg-default)" : "var(--bg-card)",
        borderBottom: "1px solid var(--border-subtle)",
        borderRight: i < days.length - 1 ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 11px/16px var(--font-sans)",
        color: "var(--content-muted)",
        letterSpacing: ".06em"
      }
    }, LA_WEEKDAYS_SHORT[d.getDay()]), /*#__PURE__*/React.createElement("div", {
      style: {
        font: `500 ${days.length === 1 ? "22px/28px" : "20px/24px"} var(--font-sans)`,
        color: isToday ? "var(--bg-brand-accent)" : "var(--content-default)"
      }
    }, d.getDate()));
  }), hours.map(h => /*#__PURE__*/React.createElement(React.Fragment, {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 8px",
      borderRight: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      font: "400 11px/14px var(--font-mono)",
      color: "var(--content-muted)",
      textAlign: "right"
    }
  }, h <= 12 ? h : h - 12, h < 12 ? "am" : "pm"), days.map((d, i) => {
    const list = (eventsByDay[d.toDateString()] || []).filter(ev => ev.hour === h);
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        minHeight: 44,
        background: isWeekend ? "var(--bg-default)" : "var(--bg-card)",
        borderRight: i < days.length - 1 ? "1px solid var(--border-subtle)" : "none",
        borderBottom: "1px solid var(--border-subtle)",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, list.map((ev, j) => /*#__PURE__*/React.createElement(LAEventChip, {
      key: j,
      event: ev
    })));
  }))));
}

/* List / Agenda view */
function LACalendarList({
  events = []
}) {
  const grouped = React.useMemo(() => {
    const map = {};
    events.forEach(ev => {
      const k = (ev.date instanceof Date ? ev.date : new Date(ev.date)).toDateString();
      (map[k] = map[k] || []).push(ev);
    });
    return Object.entries(map).sort(([a], [b]) => new Date(a) - new Date(b));
  }, [events]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-card)"
    }
  }, grouped.map(([day, list]) => {
    const d = new Date(day);
    return /*#__PURE__*/React.createElement("div", {
      key: day,
      style: {
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 12px",
        borderRight: "1px solid var(--border-subtle)",
        background: "var(--bg-default)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 22px/28px var(--font-subhead)",
        color: "var(--content-default)"
      }
    }, d.getDate()), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 12px/16px var(--font-sans)",
        color: "var(--content-secondary)",
        letterSpacing: ".04em",
        textTransform: "uppercase"
      }
    }, LA_WEEKDAYS_SHORT[d.getDay()], " \xB7 ", LA_MONTHS[d.getMonth()].slice(0, 3))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, list.map((ev, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "70px 1fr auto",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 12px/16px var(--font-mono)",
        color: "var(--content-muted)"
      }
    }, ev.time || "All day"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "500 14px/20px var(--font-sans)",
        color: "var(--content-default)"
      }
    }, ev.title), ev.location && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px/16px var(--font-sans)",
        color: "var(--content-muted)"
      }
    }, ev.location)), ev.tone && /*#__PURE__*/React.createElement(LATag, {
      tone: ev.tone
    }, ev.toneLabel || "Event")))));
  }));
}

/* Public LACalendar — variants: month / week / day / list */
function LACalendar({
  initialView = "month",
  events = [],
  date,
  bare = false
}) {
  const [view, setView] = React.useState(initialView);
  const [cursor, setCursor] = React.useState(date || new Date(2026, 7, 14)); // Aug 14 2026
  const move = delta => {
    const d = new Date(cursor);
    if (view === "month") d.setMonth(d.getMonth() + delta);else if (view === "week") d.setDate(d.getDate() + 7 * delta);else d.setDate(d.getDate() + delta);
    setCursor(d);
  };
  const title = view === "month" ? `${LA_MONTHS[cursor.getMonth()]} ${cursor.getFullYear()}` : view === "week" ? (() => {
    const start = new Date(cursor);
    start.setDate(cursor.getDate() - cursor.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${LA_MONTHS[start.getMonth()].slice(0, 3)} ${start.getDate()} – ${LA_MONTHS[end.getMonth()].slice(0, 3)} ${end.getDate()}, ${end.getFullYear()}`;
  })() : view === "day" ? `${LA_WEEKDAYS_SHORT[cursor.getDay()]} ${LA_MONTHS[cursor.getMonth()]} ${cursor.getDate()}, ${cursor.getFullYear()}` : "Upcoming";
  const weekDays = (() => {
    const start = new Date(cursor);
    start.setDate(cursor.getDate() - cursor.getDay());
    return Array.from({
      length: 7
    }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  })();
  const wrap = body => /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : null,
    style: {
      border: bare ? "none" : "1px solid var(--border-default)",
      borderRadius: bare ? 0 : 8,
      overflow: "hidden",
      background: "var(--bg-card)"
    }
  }, body);
  return wrap(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LACalendarTopBar, {
    title: title,
    view: view,
    onView: setView,
    onPrev: () => move(-1),
    onNext: () => move(1),
    onToday: () => setCursor(new Date(2026, 7, 14)),
    onAdd: () => {}
  }), view === "month" && /*#__PURE__*/React.createElement(LACalendarMonth, {
    year: cursor.getFullYear(),
    month: cursor.getMonth(),
    events: events
  }), view === "week" && /*#__PURE__*/React.createElement(LACalendarWeek, {
    days: weekDays,
    events: events
  }), view === "day" && /*#__PURE__*/React.createElement(LACalendarWeek, {
    days: [cursor],
    events: events
  }), view === "list" && /*#__PURE__*/React.createElement(LACalendarList, {
    events: events
  })));
}

/* =====================================================================
   LALinkGroup — button-group / link-group with several variants
   ===================================================================== */

/* variants (per Figma /Link-Group):
   • "buttons"      — row of LAButtons (primary/secondary/minimal)
   • "tabs"         — pill-style segmented selector
   • "menu"         — vertical menu list of links (sidebar pattern)
   • "section-tabs" — underline tabs (page-level navigation)
*/
function LALinkGroup({
  items = [],
  variant = "buttons",
  value,
  onChange,
  align = "left",
  bare = false
}) {
  const wrap = body => /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : null,
    style: {
      border: bare ? "none" : "1px solid var(--border-default)",
      borderRadius: bare ? 0 : 8,
      padding: bare ? 0 : 16,
      background: bare ? "transparent" : "var(--bg-card)"
    }
  }, body);
  if (variant === "tabs") {
    return wrap(/*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        padding: 2,
        gap: 2,
        background: "var(--bg-muted)",
        borderRadius: 9999
      }
    }, items.map((it, i) => {
      const active = (value ?? items[0].value) === it.value;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => onChange && onChange(it.value),
        style: {
          height: 32,
          padding: "0 14px",
          borderRadius: 9999,
          border: "none",
          background: active ? "var(--bg-card)" : "transparent",
          color: active ? "var(--content-default)" : "var(--content-secondary)",
          font: "500 13px/1 var(--font-sans)",
          cursor: "pointer",
          boxShadow: active ? "0 1px 2px rgba(0,0,0,.06)" : "none"
        }
      }, it.label);
    })));
  }
  if (variant === "section-tabs") {
    return wrap(/*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 24,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, items.map((it, i) => {
      const active = (value ?? items[0].value) === it.value;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => onChange && onChange(it.value),
        style: {
          padding: "10px 0",
          marginBottom: -1,
          border: "none",
          background: "none",
          borderBottom: `2px solid ${active ? "var(--bg-brand-accent)" : "transparent"}`,
          color: active ? "var(--content-default)" : "var(--content-secondary)",
          font: "500 14px/20px var(--font-sans)",
          cursor: "pointer"
        }
      }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: 8,
          padding: "1px 8px",
          borderRadius: 9999,
          background: "var(--bg-muted)",
          color: "var(--content-muted)",
          font: "500 11px/16px var(--font-sans)"
        }
      }, it.count));
    })));
  }
  if (variant === "menu") {
    return wrap(/*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, items.map((it, i) => {
      const active = (value ?? items[0].value) === it.value;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        onClick: () => onChange && onChange(it.value),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "8px 10px",
          borderRadius: 6,
          border: "none",
          textAlign: "left",
          cursor: "pointer",
          background: active ? "var(--bg-selection-subtle)" : "transparent",
          color: active ? "var(--content-selection)" : "var(--content-default)",
          font: `${active ? 500 : 400} 14px/20px var(--font-sans)`
        }
      }, it.icon && /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true"
      }, it.icon), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, it.label), it.badge != null && /*#__PURE__*/React.createElement(LATag, {
        tone: active ? "brand" : "neutral"
      }, it.badge));
    })));
  }

  // default — row of buttons
  return wrap(/*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      flexWrap: "wrap"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(LAButton, {
    key: i,
    variant: it.variant || (i === 0 ? "primary" : "secondary"),
    size: it.size || "md",
    onClick: it.onClick,
    leading: it.leading
  }, it.label))));
}

/* =====================================================================
   LASearchResults — search input with results panel + filter chips
   ===================================================================== */

function LASearchInput({
  value,
  onChange,
  placeholder = "Search records…",
  autoFocus,
  size = "md"
}) {
  const h = size === "sm" ? 32 : 40;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--content-muted)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("input", {
    value: value || "",
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    autoFocus: autoFocus,
    style: {
      width: "100%",
      height: h,
      padding: "0 12px 0 36px",
      border: "1px solid var(--border-default)",
      borderRadius: 8,
      background: "var(--bg-input)",
      color: "var(--content-default)",
      font: "400 14px/20px var(--font-sans)",
      outline: "none"
    }
  }));
}
function LASearchResults({
  query,
  onQuery,
  results = [],
  filters = [],
  activeFilter,
  onFilter,
  bare = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : null,
    style: {
      border: bare ? "none" : "1px solid var(--border-default)",
      borderRadius: bare ? 0 : 8,
      background: "var(--bg-card)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement(LASearchInput, {
    value: query,
    onChange: onQuery,
    placeholder: "Search across customers, orders, invoices\u2026"
  })), filters.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "10px 16px",
      borderBottom: "1px solid var(--border-subtle)",
      flexWrap: "wrap",
      background: "var(--bg-default)"
    }
  }, filters.map((f, i) => {
    const active = activeFilter === f.value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => onFilter && onFilter(f.value),
      style: {
        padding: "4px 10px",
        borderRadius: 9999,
        border: "1px solid var(--border-default)",
        background: active ? "var(--bg-brand-accent)" : "var(--bg-card)",
        color: active ? "#fff" : "var(--content-default)",
        font: "500 12px/16px var(--font-sans)",
        cursor: "pointer"
      }
    }, f.label, f.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        opacity: .7
      }
    }, f.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, results.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      textAlign: "center",
      color: "var(--content-muted)"
    }
  }, "No matching records."), results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id ?? i,
    style: {
      padding: 14,
      borderBottom: i < results.length - 1 ? "1px solid var(--border-subtle)" : "none",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 12,
      alignItems: "center"
    }
  }, r.icon || r.avatar && /*#__PURE__*/React.createElement(LAAvatar, {
    name: r.avatar,
    size: 32
  }) || /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, /*#__PURE__*/React.createElement(LAHighlight, {
    text: r.title,
    query: query
  })), r.subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/16px var(--font-sans)",
      color: "var(--content-muted)"
    }
  }, /*#__PURE__*/React.createElement(LAHighlight, {
    text: r.subtitle,
    query: query
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, r.tag && /*#__PURE__*/React.createElement(LATag, {
    tone: r.tag.tone
  }, r.tag.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "500 11px/16px var(--font-mono)",
      color: "var(--content-muted)",
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, r.kind))))));
}

/* Highlights matching substrings */
function LAHighlight({
  text = "",
  query = ""
}) {
  if (!query) return text;
  const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
  const parts = String(text).split(re);
  return parts.map((p, i) => re.test(p) ? /*#__PURE__*/React.createElement("mark", {
    key: i,
    style: {
      background: "var(--bg-selection-subtle)",
      color: "var(--content-selection)",
      padding: "0 2px",
      borderRadius: 2
    }
  }, p) : /*#__PURE__*/React.createElement("span", {
    key: i
  }, p));
}

/* =====================================================================
   LALoginCard — auth utility variants
   • "login" / "signup" / "reset" / "2fa" / "404" / "denied"
   ===================================================================== */

function LALoginCard({
  variant = "login",
  appName = "Customer Hub",
  onSubmit,
  onSwitch,
  bare = false
}) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [pass2, setPass2] = React.useState("");
  const [code, setCode] = React.useState("");
  const HEADER = {
    login: {
      title: "Sign in",
      lede: `Sign in to ${appName} to continue.`
    },
    signup: {
      title: "Create your account",
      lede: `It only takes a minute to set up access to ${appName}.`
    },
    reset: {
      title: "Reset your password",
      lede: "Enter your email and we'll send a reset link."
    },
    "2fa": {
      title: "Two-factor authentication",
      lede: "Enter the 6-digit code from your authenticator app."
    },
    "404": {
      title: "Page not found",
      lede: "We couldn't find the page you were looking for. Check the link or head back to your dashboard."
    },
    denied: {
      title: "You don't have access to this page",
      lede: "Sign in with a different account, or ask the workspace owner for access."
    }
  }[variant];
  const Body = (() => {
    if (variant === "404" || variant === "denied") return null;
    if (variant === "2fa") return /*#__PURE__*/React.createElement(LATextField, {
      label: "Authentication code",
      value: code,
      onChange: setCode,
      placeholder: "123 456"
    });
    if (variant === "reset") return /*#__PURE__*/React.createElement(LATextField, {
      label: "Email",
      required: true,
      value: email,
      onChange: setEmail,
      placeholder: "you@company.com"
    });
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LATextField, {
      label: "Email",
      required: true,
      value: email,
      onChange: setEmail,
      placeholder: "you@company.com"
    }), /*#__PURE__*/React.createElement(LATextField, {
      label: "Password",
      required: true,
      type: "password",
      value: pass,
      onChange: setPass,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }), variant === "signup" && /*#__PURE__*/React.createElement(LATextField, {
      label: "Confirm password",
      required: true,
      type: "password",
      value: pass2,
      onChange: setPass2,
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
    }));
  })();
  const ButtonLabel = {
    login: "Sign in",
    signup: "Create account",
    reset: "Send reset link",
    "2fa": "Verify",
    "404": "Back to dashboard",
    denied: "Switch account"
  }[variant];
  const Footer = (() => {
    if (variant === "login") return /*#__PURE__*/React.createElement(React.Fragment, null, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
      onClick: () => onSwitch && onSwitch("signup"),
      style: LA_AUTH_LINK
    }, "Sign up"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
      onClick: () => onSwitch && onSwitch("reset"),
      style: LA_AUTH_LINK
    }, "Forgot password?"));
    if (variant === "signup") return /*#__PURE__*/React.createElement(React.Fragment, null, "Already have an account? ", /*#__PURE__*/React.createElement("a", {
      onClick: () => onSwitch && onSwitch("login"),
      style: LA_AUTH_LINK
    }, "Sign in"));
    if (variant === "reset") return /*#__PURE__*/React.createElement(React.Fragment, null, "Remember your password? ", /*#__PURE__*/React.createElement("a", {
      onClick: () => onSwitch && onSwitch("login"),
      style: LA_AUTH_LINK
    }, "Sign in"));
    if (variant === "2fa") return /*#__PURE__*/React.createElement(React.Fragment, null, "Lost access to your authenticator? ", /*#__PURE__*/React.createElement("a", {
      style: LA_AUTH_LINK
    }, "Use a backup code"));
    if (variant === "denied") return /*#__PURE__*/React.createElement(React.Fragment, null, "Need help? ", /*#__PURE__*/React.createElement("a", {
      style: LA_AUTH_LINK
    }, "Contact the workspace owner"));
    return null;
  })();
  return /*#__PURE__*/React.createElement("div", {
    "data-bare-card": bare ? "" : null,
    style: {
      border: bare ? "none" : "1px solid var(--border-default)",
      borderRadius: bare ? 0 : 12,
      padding: 32,
      background: "var(--bg-card)",
      maxWidth: 440,
      width: "100%",
      boxShadow: bare ? "none" : "0 1px 2px rgba(15,23,42,.04), 0 8px 24px rgba(15,23,42,.04)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: "var(--bg-brand-accent)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 14px/1 var(--font-sans)"
    }
  }, appName[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 14px/20px var(--font-sans)",
      color: "var(--content-default)"
    }
  }, appName)), (variant === "404" || variant === "denied") && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 9999,
      marginBottom: 16,
      background: variant === "404" ? "var(--bg-muted)" : "var(--bg-destructive,#FEE2E2)",
      color: variant === "404" ? "var(--content-secondary)" : "var(--content-destructive-emphasis,#991B1B)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: "600 18px/1 var(--font-mono)"
    }
  }, variant === "404" ? "404" : "!"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "600 22px/28px var(--font-subhead)",
      color: "var(--content-default)",
      marginBottom: 4
    }
  }, HEADER.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/20px var(--font-sans)",
      color: "var(--content-secondary)",
      marginBottom: 24
    }
  }, HEADER.lede), Body && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginBottom: 16
    }
  }, Body, variant === "login" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(LACheckboxField, {
    label: "Keep me signed in",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => onSwitch && onSwitch("reset"),
    style: LA_AUTH_LINK
  }, "Forgot password?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(LAButton, {
    variant: "primary",
    size: "md",
    onClick: onSubmit,
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, ButtonLabel), (variant === "login" || variant === "signup") && /*#__PURE__*/React.createElement(LAButton, {
    variant: "secondary",
    size: "md",
    style: {
      width: "100%",
      justifyContent: "center"
    },
    leading: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 16,
        height: 16,
        borderRadius: 9999,
        background: "#fff",
        border: "1px solid var(--border-default)",
        display: "inline-block"
      }
    })
  }, "Continue with Google")), Footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: "1px solid var(--border-subtle)",
      font: "400 13px/20px var(--font-sans)",
      color: "var(--content-secondary)",
      textAlign: "center"
    }
  }, Footer));
}
const LA_AUTH_LINK = {
  color: "var(--content-link, var(--content-brand))",
  font: "500 13px/20px var(--font-sans)",
  cursor: "pointer",
  textDecoration: "none"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/live-app/more-modules.jsx", error: String((e && e.message) || e) }); }

})();
