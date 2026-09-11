import type { ReactNode } from "react";

const iconSystemCss = `
/* Rich icon system inspired by the uploaded reference site: distinct category tiles,
   varied silhouettes and stronger visual hierarchy without external icon fonts. */
:where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.detail-target-icon,.detail-guide-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.gg-mini,.support-check-icon,.estimate-icon,.estimate-flow-icon,.project-record-icon,.project-placeholder-badge,.partner-icon,.nav-icon,.official-icon){
  position:relative;
  isolation:isolate;
  overflow:hidden;
  background:linear-gradient(145deg,color-mix(in srgb,currentColor 12%,white),#fff 72%)!important;
  border-color:color-mix(in srgb,currentColor 18%,#e5e7eb)!important;
  box-shadow:0 8px 18px color-mix(in srgb,currentColor 10%,transparent),inset 0 1px 0 rgba(255,255,255,.9);
  transition:transform .2s ease,box-shadow .2s ease,background .2s ease,color .2s ease,border-radius .2s ease!important;
}
:where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.detail-target-icon,.detail-guide-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.gg-mini,.support-check-icon,.estimate-icon,.estimate-flow-icon,.project-record-icon,.project-placeholder-badge,.partner-icon,.nav-icon,.official-icon)::after{
  content:"";
  position:absolute;
  z-index:-1;
  width:22px;
  height:22px;
  right:-7px;
  bottom:-7px;
  border-radius:50%;
  background:currentColor;
  opacity:.09;
}
:where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.detail-target-icon,.detail-guide-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.gg-mini,.support-check-icon,.estimate-icon,.estimate-flow-icon,.project-record-icon,.project-placeholder-badge,.partner-icon,.nav-icon,.official-icon) svg{
  position:relative;
  z-index:1;
  filter:drop-shadow(0 2px 2px rgba(15,23,42,.06));
}

/* Alternate tile shapes so icon collections do not read like repeated blue squares. */
:where(.service-grid,.feature-grid,.home-grid,.process-grid) > :nth-child(4n+1) :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){border-radius:16px 16px 16px 6px!important;transform:rotate(-1.5deg)}
:where(.service-grid,.feature-grid,.home-grid,.process-grid) > :nth-child(4n+2) :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){border-radius:50%!important;transform:rotate(1deg)}
:where(.service-grid,.feature-grid,.home-grid,.process-grid) > :nth-child(4n+3) :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){border-radius:7px 18px 7px 18px!important;transform:rotate(-1deg)}
:where(.service-grid,.feature-grid,.home-grid,.process-grid) > :nth-child(4n) :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){border-radius:18px 7px 18px 7px!important;transform:rotate(1.5deg)}

/* Give different page families a recognizable visual language. */
.home-semantic-icon{box-shadow:0 9px 20px color-mix(in srgb,var(--i-color,currentColor) 14%,transparent),inset 0 1px #fff}
.service-directory-icon{background:radial-gradient(circle at 28% 24%,#fff 0 18%,transparent 19%),linear-gradient(145deg,var(--icon-bg,#eef4ff),#fff 76%)!important}
.region-card-icon,.region-detail-icon,.local-point-icon{background:linear-gradient(160deg,#fff 0%,var(--r-bg,#edf8ff) 100%)!important}
.region-card-icon::before,.region-detail-icon::before,.local-point-icon::before{content:"";position:absolute;left:8px;top:7px;width:6px;height:6px;border:2px solid currentColor;border-radius:50%;opacity:.22}
.guide-card-icon,.guide-feature-icon,.guide-icon,.gg-icon{background:linear-gradient(135deg,#fff 0%,var(--icon-bg,var(--i-bg,#f5f0ff)) 100%)!important}
.guide-card-icon::before,.guide-feature-icon::before,.guide-icon::before,.gg-icon::before{content:"";position:absolute;left:7px;bottom:7px;width:13px;height:3px;border-radius:99px;background:currentColor;opacity:.12}
.support-check-icon,.official-icon{background:linear-gradient(145deg,#fff 0%,var(--s-bg,#edf9f2) 100%)!important}
.estimate-icon,.estimate-flow-icon{background:linear-gradient(145deg,#fff 0%,var(--e-bg,#eef4ff) 100%)!important}

/* Small icons remain compact but more tactile. */
:where(.detail-target-icon,.detail-guide-icon,.gg-mini,.project-placeholder-badge,.nav-icon){box-shadow:0 5px 12px color-mix(in srgb,currentColor 10%,transparent),inset 0 1px #fff}
:where(.detail-target-icon,.gg-mini,.nav-icon)::after{width:14px;height:14px;right:-5px;bottom:-5px}

/* Cards reinforce the icon color instead of presenting a flat repeated grid. */
:where(.service-card,.feature-card,.home-link-card,.process-step):has(> .service-card-top),
:where(.service-card,.feature-card,.home-link-card,.process-step):has(.home-semantic-icon),
:where(.service-card,.feature-card,.home-link-card,.process-step):has(.service-directory-icon),
:where(.service-card,.feature-card,.home-link-card,.process-step):has(.region-card-icon),
:where(.service-card,.feature-card,.home-link-card,.process-step):has(.guide-card-icon){
  overflow:hidden;
}
:where(.service-card,.feature-card,.home-link-card,.process-step):hover :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){
  transform:translateY(-3px) rotate(0deg) scale(1.06)!important;
  border-radius:14px!important;
  box-shadow:0 12px 24px color-mix(in srgb,currentColor 18%,transparent)!important;
}

/* Footer icon navigation: individual service-like pictograms rather than identical buttons. */
.footer-quick-grid .footer-quick-link:nth-child(1) .nav-icon{border-radius:15px 15px 5px 15px!important}
.footer-quick-grid .footer-quick-link:nth-child(2) .nav-icon{border-radius:50%!important}
.footer-quick-grid .footer-quick-link:nth-child(3) .nav-icon{border-radius:6px 16px 6px 16px!important}
.footer-quick-grid .footer-quick-link:nth-child(4) .nav-icon{border-radius:16px 6px 16px 6px!important}
.footer-quick-grid .footer-quick-link:nth-child(5) .nav-icon{border-radius:14px!important;transform:rotate(-2deg)}
.partner-grid .partner-card:nth-child(even) .partner-icon{border-radius:50%!important}
.partner-grid .partner-card:nth-child(3n) .partner-icon{border-radius:7px 16px 7px 16px!important}

/* Mobile keeps distinction while reducing decorative motion. */
@media(max-width:760px){
  :where(.service-grid,.feature-grid,.home-grid,.process-grid) > * :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon,.estimate-flow-icon){transform:none}
  :where(.home-semantic-icon,.service-directory-icon,.region-card-icon,.guide-card-icon,.guide-feature-icon,.detail-point-icon,.region-detail-icon,.local-point-icon,.guide-icon,.gg-icon,.support-check-icon,.estimate-icon){box-shadow:0 6px 14px color-mix(in srgb,currentColor 9%,transparent),inset 0 1px #fff}
}
`;

export default function Template({ children }: { children: ReactNode }) {
  return <><style dangerouslySetInnerHTML={{ __html: iconSystemCss }} />{children}</>;
}
