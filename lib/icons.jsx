// Inline SVG icons (Lucide style, 1.75 stroke)
const _ic = (children, sz=18) => (props) => {
  const {size=sz, color="currentColor", ...rest} = props || {};
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
};

const Icons = {
  ArrowRight: _ic(<><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></>),
  ArrowUpRight: _ic(<><path d="M7 7h10v10"/><path d="m7 17 10-10"/></>),
  Cart: _ic(<><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.4 11.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 7H6"/></>),
  Search: _ic(<><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></>),
  X: _ic(<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>),
  Menu: _ic(<><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>),
  User: _ic(<><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>),
  Beaker: _ic(<><path d="M5 3h14"/><path d="M7 3v8L4 18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3l-3-7V3"/><path d="M7 13h10"/></>),
  Box: _ic(<><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8 12 13l9-5"/><path d="M12 13v8"/></>),
  Cpu: _ic(<><rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></>),
  Flask: _ic(<><path d="M9 3h6"/><path d="M10 3v7l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/></>),
  Snow: _ic(<><path d="M12 2v20"/><path d="M2 12h20"/><path d="m4 4 16 16"/><path d="m20 4-16 16"/></>),
  Tag: _ic(<><path d="M12 2H2v10l9.3 9.3a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8z"/><circle cx="7" cy="7" r="1.5" fill="currentColor"/></>),
  Truck: _ic(<><path d="M3 17V5h12v12"/><path d="M15 8h4l3 4v5h-3"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>),
  Shield: _ic(<><path d="M12 2 3 5v7c0 5 3.6 8.7 9 10 5.4-1.3 9-5 9-10V5z"/></>),
  Check: _ic(<><path d="M5 12.5 9.5 17 19 7"/></>),
  Plus: _ic(<><path d="M12 5v14"/><path d="M5 12h14"/></>),
  Minus: _ic(<><path d="M5 12h14"/></>),
  Star: _ic(<><path d="m12 2 3 7 7 .6-5.3 4.7L18.3 22 12 18l-6.3 4 1.6-7.7L2 9.6 9 9z"/></>),
  Mail: _ic(<><rect x="2" y="5" width="20" height="14" rx="1"/><path d="m2 7 10 7 10-7"/></>),
  Phone: _ic(<><path d="M5 4a1 1 0 0 1 1-1h3l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 5 4z"/></>),
  Pin: _ic(<><path d="M12 21s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></>),
  Instagram: _ic(<><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></>),
  Lock: _ic(<><rect x="4" y="11" width="16" height="10" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>),
  Bolt: _ic(<><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></>),
  Filter: _ic(<><path d="M3 5h18l-7 9v6l-4-2v-4z"/></>),
  ChevronDown: _ic(<><path d="m6 9 6 6 6-6"/></>),
  ChevronRight: _ic(<><path d="m9 6 6 6-6 6"/></>),
};

window.Icons = Icons;
